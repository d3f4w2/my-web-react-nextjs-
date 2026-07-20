"use client";

import Link from "next/link";
import { type PointerEvent as ReactPointerEvent, useRef } from "react";
import {
  motion,
  type MotionValue,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import styles from "./hero-section.module.css";

const workflowSteps = [
  { index: "01", title: "观察", detail: "输入 · 约束", start: 0.08 },
  { index: "02", title: "计划", detail: "目标 · 工具", start: 0.28 },
  { index: "03", title: "行动", detail: "调用 · 协作", start: 0.48 },
  { index: "04", title: "验证", detail: "证据 · 迭代", start: 0.68 },
] as const;

type WorkflowStepProps = {
  progress: MotionValue<number>;
  revealed?: boolean;
  step: (typeof workflowSteps)[number];
};

function WorkflowStep({ progress, revealed = false, step }: WorkflowStepProps) {
  const reduceMotion = useReducedMotion();
  const opacity = useTransform(
    progress,
    [Math.max(0, step.start - 0.12), step.start, Math.min(1, step.start + 0.22)],
    [0.28, 1, 0.58],
  );
  const scale = useTransform(
    progress,
    [Math.max(0, step.start - 0.12), step.start, Math.min(1, step.start + 0.22)],
    [0.94, 1.025, 1],
  );
  const signalScale = useTransform(
    progress,
    [Math.max(0, step.start - 0.08), step.start + 0.08],
    [0, 1],
  );

  return (
    <motion.li
      className={`${styles.workflowStep} ${revealed ? styles.workflowStepRevealed : ""}`}
      style={reduceMotion ? undefined : { opacity, scale }}
    >
      <div className={styles.stepTopline}>
        <span className={styles.stepIndex}>{step.index}</span>
        <span className={styles.stepState}>
          {revealed ? "记录可见" : "等待检视"}
        </span>
      </div>
      <div>
        <p>{step.title}</p>
        <span>{step.detail}</span>
      </div>
      <span className={styles.stepTrack} aria-hidden="true">
        <motion.span style={reduceMotion ? { scaleX: 1 } : { scaleX: signalScale }} />
      </span>
    </motion.li>
  );
}

type WorkflowPanelContentProps = {
  progress: MotionValue<number>;
  revealed?: boolean;
};

function WorkflowPanelContent({
  progress,
  revealed = false,
}: WorkflowPanelContentProps) {
  return (
    <>
      <div className={styles.panelGlow} aria-hidden="true" />
      <div className={styles.panelHeader}>
        <div className={styles.windowControls} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <p>{revealed ? "LAB NOTE / INNER TRACE" : "LAB NOTE / METHOD 01"}</p>
        <span className={styles.liveStatus}>
          {revealed ? "证据层" : "样本开放"}
        </span>
      </div>

      <div className={styles.panelTelemetry}>
        <p>
          <span>样本编号</span> LAB_A01_0007
        </p>
        <p>
          <span>环境</span> 本地开发
        </p>
        <p>
          <span>状态</span> {revealed ? "可以检视" : "观察中"}
        </p>
      </div>

      <ol className={styles.workflowList}>
        {workflowSteps.map((step) => (
          <WorkflowStep
            progress={progress}
            revealed={revealed}
            step={step}
            key={step.index}
          />
        ))}
      </ol>

      <div className={styles.panelFooter}>
        <div>
          <p>
            <span>状态</span> {revealed ? "过程已展开" : "滚动已连接"}
          </p>
          <p>
            <span>内容</span> {revealed ? "方法与证据" : "等待真实材料"}
          </p>
        </div>
        <p className={styles.progressLabel}>
          {revealed ? "实验内部记录" : "移动 / 触摸以检视"}
        </p>
      </div>
      <span className={styles.progressTrack} aria-hidden="true">
        <motion.span style={{ scaleX: progress }} />
      </span>
    </>
  );
}

type ScannableWorkflowPanelProps = {
  panelRotate: MotionValue<number>;
  panelScale: MotionValue<number>;
  panelY: MotionValue<number>;
  progress: MotionValue<number>;
  reduceMotion: boolean | null;
};

function ScannableWorkflowPanel({
  panelRotate,
  panelScale,
  panelY,
  progress,
  reduceMotion,
}: ScannableWorkflowPanelProps) {
  const touchHideTimeoutRef = useRef<number | null>(null);
  const scanXTarget = useMotionValue(0);
  const scanYTarget = useMotionValue(0);
  const scanRadiusTarget = useMotionValue(0);
  const scanOpacityTarget = useMotionValue(0);
  const scanX = useSpring(scanXTarget, { stiffness: 180, damping: 26, mass: 0.32 });
  const scanY = useSpring(scanYTarget, { stiffness: 180, damping: 26, mass: 0.32 });
  const scanRadius = useSpring(scanRadiusTarget, {
    stiffness: 190,
    damping: 28,
    mass: 0.3,
  });
  const scanOpacity = useSpring(scanOpacityTarget, {
    stiffness: 220,
    damping: 28,
  });
  const lensSize = useTransform(scanRadius, (value) => value * 2);
  const lensOffset = useTransform(scanRadius, (value) => -value);
  const revealClipPath = useMotionTemplate`circle(${scanRadius}px at ${scanX}px ${scanY}px)`;

  function clearTouchHideTimeout() {
    if (touchHideTimeoutRef.current !== null) {
      window.clearTimeout(touchHideTimeoutRef.current);
      touchHideTimeoutRef.current = null;
    }
  }

  function updateScanner(event: ReactPointerEvent<HTMLDivElement>) {
    if (reduceMotion) {
      return;
    }

    clearTouchHideTimeout();

    const panel = event.currentTarget;
    const rect = panel.getBoundingClientRect();
    const scaleX = rect.width / panel.clientWidth || 1;
    const scaleY = rect.height / panel.clientHeight || 1;
    const x = (event.clientX - rect.left) / scaleX;
    const y = (event.clientY - rect.top) / scaleY;
    const radius =
      event.pointerType === "touch"
        ? Math.min(124, panel.clientWidth * 0.28)
        : Math.min(190, panel.clientWidth * 0.34);

    scanXTarget.set(x);
    scanYTarget.set(y);
    scanRadiusTarget.set(radius);
    scanOpacityTarget.set(1);
  }

  function hideScanner() {
    scanRadiusTarget.set(0);
    scanOpacityTarget.set(0);
  }

  function handlePointerUp(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "touch") {
      return;
    }

    clearTouchHideTimeout();
    touchHideTimeoutRef.current = window.setTimeout(hideScanner, 720);
  }

  return (
    <motion.div
      className={styles.scanShell}
      style={reduceMotion ? undefined : { scale: panelScale, y: panelY, rotate: panelRotate }}
      aria-label="Agent 工作流扫描演示"
      onPointerCancel={hideScanner}
      onPointerDown={updateScanner}
      onPointerEnter={updateScanner}
      onPointerLeave={hideScanner}
      onPointerMove={updateScanner}
      onPointerUp={handlePointerUp}
    >
      <div className={styles.workflowPanel}>
        <WorkflowPanelContent progress={progress} />
      </div>

      <div
        className={`${styles.workflowPanel} ${styles.revealSurface} ${styles.idleRevealSurface}`}
        aria-hidden="true"
      >
        <WorkflowPanelContent progress={progress} revealed />
      </div>

      <motion.div
        className={`${styles.workflowPanel} ${styles.revealSurface}`}
        style={reduceMotion ? undefined : { clipPath: revealClipPath }}
        aria-hidden="true"
      >
        <WorkflowPanelContent progress={progress} revealed />
      </motion.div>

      <motion.span
        className={styles.scanLens}
        style={{
          height: lensSize,
          left: scanX,
          opacity: scanOpacity,
          top: scanY,
          width: lensSize,
          x: lensOffset,
          y: lensOffset,
        }}
        aria-hidden="true"
      />
    </motion.div>
  );
}

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.35,
  });

  const copyOpacity = useTransform(progress, [0, 0.38, 0.76, 1], [1, 1, 0.32, 0.08]);
  const copyY = useTransform(progress, [0, 0.55, 1], [0, -36, -92]);
  const copyScale = useTransform(progress, [0, 0.55, 1], [1, 0.96, 0.88]);
  const panelScale = useTransform(progress, [0, 0.25, 0.72, 1], [0.8, 0.9, 1.02, 1.08]);
  const panelY = useTransform(progress, [0, 0.4, 1], [18, 8, -14]);
  const panelRotate = useTransform(progress, [0, 0.55, 1], [-2.4, -0.8, 0]);
  const glowOpacity = useTransform(progress, [0, 0.5, 1], [0.35, 0.72, 1]);
  const glowScale = useTransform(progress, [0, 1], [0.8, 1.35]);

  return (
    <section ref={heroRef} className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.stickyFrame}>
        <motion.div
          className={styles.ambientGlow}
          style={reduceMotion ? undefined : { opacity: glowOpacity, scale: glowScale }}
          aria-hidden="true"
        />
        <div className={styles.backgroundType} aria-hidden="true">
          LAB
          <span>NOTEBOOK</span>
        </div>

        <div className={`site-container ${styles.inner}`}>
          <motion.div
            className={styles.copy}
            style={reduceMotion ? undefined : { opacity: copyOpacity, y: copyY, scale: copyScale }}
          >
            <motion.p
              className={styles.eyebrow}
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Personal Agent Lab <span>· OPEN NOTEBOOK / 01</span>
            </motion.p>
            <h1 id="hero-title" className={styles.title}>
              <span className={styles.titleLine}>
                <motion.span
                  initial={false}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.85, delay: 0.08 }}
                >
                  把未完成的过程，
                </motion.span>
              </span>
              <span className={`${styles.titleLine} ${styles.titleAccent}`}>
                <motion.span
                  initial={false}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.85, delay: 0.18 }}
                >
                  做成可检视的样本。
                </motion.span>
              </span>
            </h1>
            <motion.p
              className={styles.lead}
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.34 }}
            >
              这里不是成果陈列柜，而是一张持续更新的工作台。项目、学习与实习实践，
              都会留下问题、方法、失败和验证记录。
            </motion.p>
            <motion.div
              className={styles.actions}
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.44 }}
            >
              <Link className={styles.primaryAction} href="/projects">
                查看实验样本
                <span aria-hidden="true">↗</span>
              </Link>
              <a className={styles.secondaryAction} href="#latest-content">
                翻阅观察记录
              </a>
            </motion.div>
            <ul className={styles.signals} aria-label="当前网站状态">
              <li>
                <span>研究方向</span> AI Agent 开发 / 实习
              </li>
              <li>
                <span>当前模式</span> 本地实验 · 内容待填
              </li>
            </ul>
          </motion.div>

          <ScannableWorkflowPanel
            panelRotate={panelRotate}
            panelScale={panelScale}
            panelY={panelY}
            progress={progress}
            reduceMotion={reduceMotion}
          />
        </div>

        <div className={styles.scrollCue} aria-hidden="true">
          <span>SCROLL / INSPECT</span>
          <i />
        </div>
      </div>
    </section>
  );
}
