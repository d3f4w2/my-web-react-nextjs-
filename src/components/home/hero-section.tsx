"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import styles from "./hero-section.module.css";

const modules = [
  { id: "context", label: "CONTEXT", title: "上下文理解", detail: "识别目标、环境与约束" },
  { id: "memory", label: "MEMORY", title: "长期记忆", detail: "保留任务所需的连续信息" },
  { id: "tools", label: "TOOLS", title: "工具调用", detail: "把计划连接到真实执行" },
  { id: "evidence", label: "EVIDENCE", title: "证据留存", detail: "让结果可检查、可追溯" },
] as const;

type ModuleId = (typeof modules)[number]["id"];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeModule, setActiveModule] = useState<ModuleId>("context");
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 96, damping: 28, mass: 0.38 });
  const copyY = useTransform(progress, [0, 0.62, 1], [0, -20, -92]);
  const copyOpacity = useTransform(progress, [0, 0.7, 0.96], [1, 1, 0.12]);
  const assemblyScale = useTransform(progress, [0, 0.36, 0.82, 1], [0.86, 0.96, 1, 0.9]);
  const assemblyY = useTransform(progress, [0, 0.72, 1], [44, 0, -54]);
  const assemblyOpacity = useTransform(progress, [0, 0.12, 0.9, 1], [0.62, 1, 1, 0.3]);
  const signalScale = useTransform(progress, [0.2, 0.82], [0, 1]);
  const frameOpacity = useTransform(progress, [0, 0.18], [0.2, 1]);

  return (
    <section ref={sectionRef} className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.stickyFrame}>
        <motion.div className={styles.systemFrame} style={reduceMotion ? undefined : { opacity: frameOpacity }} aria-hidden="true">
          <span>SYS.COORD // 001—1440</span><span>MODE: ASSEMBLY</span><span>STATUS: RUNNING</span>
        </motion.div>

        <div className={`site-container ${styles.inner}`}>
          <motion.div className={styles.copy} style={reduceMotion ? undefined : { opacity: copyOpacity, y: copyY }}>
            <motion.p className={styles.eyebrow} initial={reduceMotion ? false : { opacity: 0, x: -22 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.62 }}>
              Agent Systems Lab <span>Build human + agent systems that work</span>
            </motion.p>
            <h1 id="hero-title" className={styles.title}>
              <span>把 Agent</span><span>做成真正</span><span>能工作的</span><span>系统。</span>
            </h1>
            <p className={styles.description}>我构建能理解上下文、使用工具、可靠执行，并用证据说明结果的 Agent 系统。</p>
            <p className={styles.purpose}><span>PURPOSE</span>让每一次执行都有边界、有记录、有下一步。</p>
            <a className={styles.projectLink} href="#featured-projects">进入项目装配线<span aria-hidden="true">01—03</span></a>
          </motion.div>

          <motion.div className={styles.assemblyStage} style={reduceMotion ? undefined : { opacity: assemblyOpacity, scale: assemblyScale, y: assemblyY }}>
            <div className={styles.assetFrame} data-active={activeModule}>
              <Image className={styles.assemblyImage} src="/assets/homepage/agent-assembly.png" alt="由上下文、记忆、工具与证据模块组成的 Agent 机械装配系统" fill preload loading="eager" sizes="(max-width: 767px) 94vw, (max-width: 1279px) 82vw, 58vw" />
              <div className={styles.moduleLabels} aria-label="Agent 系统核心模块">
                {modules.map((item) => (
                  <button className={styles.moduleLabel} data-module={item.id} data-active={activeModule === item.id} type="button" onFocus={() => setActiveModule(item.id)} onPointerEnter={() => setActiveModule(item.id)} key={item.id}>
                    <span>{item.label}</span><strong>{item.title}</strong><small>{item.detail}</small>
                  </button>
                ))}
              </div>
              <div className={styles.coreStatus} aria-hidden="true"><span>AGENT CORE</span><strong>RUNNING</strong></div>
            </div>
            <div className={styles.signalTrack} aria-hidden="true"><span>CONTEXT</span><i><motion.b style={reduceMotion ? { scaleX: 1 } : { scaleX: signalScale }} /></i><span>RELIABLE EXECUTION WITH PROOF</span></div>
          </motion.div>
        </div>
        <div className={styles.scrollCue} aria-hidden="true"><span>SCROLL / ASSEMBLE</span><i /></div>
      </div>
    </section>
  );
}
