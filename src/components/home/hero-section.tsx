"use client";

import { useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import styles from "./hero-section.module.css";

const directions = [
  { id: "systems", label: "Agent Systems", note: "系统组织" },
  { id: "memory", label: "Memory & Context", note: "上下文保持" },
  { id: "tools", label: "Tool Integration", note: "工具连接" },
  { id: "reliability", label: "Agent Reliability", note: "可靠执行" },
] as const;

type DirectionId = (typeof directions)[number]["id"];

function HarnessVisual({ activeDirection }: { activeDirection: DirectionId }) {
  return (
    <motion.div
      className={styles.harnessShell}
      initial={{ opacity: 0, scale: 0.92, y: 36 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.1, delay: 0.18 }}
      aria-hidden="true"
    >
      <div className={styles.harness} data-active={activeDirection}>
        <span className={styles.frameLabel}>AGENT HARNESS</span>
        <span className={styles.frameRule} />
        <span className={styles.cornerTopLeft} />
        <span className={styles.cornerTopRight} />
        <span className={styles.cornerBottomLeft} />
        <span className={styles.cornerBottomRight} />

        <div className={`${styles.module} ${styles.systemsModule}`}>
          <span>SYSTEM</span>
          <i />
        </div>
        <div className={`${styles.module} ${styles.memoryModule}`}>
          <span>MEMORY</span>
          <i />
        </div>
        <div className={`${styles.module} ${styles.toolsModule}`}>
          <span>TOOLS</span>
          <i />
        </div>
        <div className={`${styles.module} ${styles.reliabilityModule}`}>
          <span>RELIABILITY</span>
          <i />
        </div>

        <span className={styles.horizontalRail} />
        <span className={styles.verticalRail} />
        <span className={styles.lockRail} />

        <div className={styles.core}>
          <span>AGENT</span>
          <i />
        </div>

        <div className={styles.baseTrack}>
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </motion.div>
  );
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeDirection, setActiveDirection] =
    useState<DirectionId>("systems");
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 28,
    mass: 0.35,
  });
  const visualScale = useTransform(smoothProgress, [0, 0.68, 1], [1, 0.97, 0.72]);
  const visualY = useTransform(smoothProgress, [0, 1], [0, -92]);
  const visualOpacity = useTransform(
    smoothProgress,
    [0, 0.78, 1],
    [1, 0.96, 0.16],
  );
  const copyOpacity = useTransform(smoothProgress, [0, 0.7, 1], [1, 1, 0]);

  return (
    <section ref={sectionRef} className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.stickyFrame}>
        <div className={styles.ambientField} aria-hidden="true" />
        <div className={`site-container ${styles.inner}`}>
          <motion.div
            className={styles.copy}
            style={reduceMotion ? undefined : { opacity: copyOpacity }}
          >
            <motion.p
              className={styles.eyebrow}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              Personal Agent Lab
            </motion.p>
            <motion.h1
              id="hero-title"
              className={styles.title}
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.06 }}
            >
              <span>把 Agent</span>
              <span>做成真正能工作</span>
              <span>的系统。</span>
            </motion.h1>
            <motion.p
              className={styles.description}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.16 }}
            >
              我关心的不只是 Agent 能不能回答，而是它能不能理解上下文、使用工具，并把任务可靠地做完。
            </motion.p>

            <motion.ul
              className={styles.directionList}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } },
              }}
              aria-label="关注方向"
            >
              {directions.map((direction) => (
                <motion.li
                  key={direction.id}
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <button
                    className={styles.directionButton}
                    data-active={activeDirection === direction.id}
                    type="button"
                    onPointerEnter={() => setActiveDirection(direction.id)}
                    onFocus={() => setActiveDirection(direction.id)}
                  >
                    <span>{direction.label}</span>
                    <small>{direction.note}</small>
                  </button>
                </motion.li>
              ))}
            </motion.ul>

            <motion.a
              className={styles.projectLink}
              href="#featured-projects"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <span>查看项目</span>
              <i aria-hidden="true" />
              <b aria-hidden="true">→</b>
            </motion.a>
          </motion.div>

          <motion.div
            className={styles.visual}
            style={
              reduceMotion
                ? undefined
                : { opacity: visualOpacity, scale: visualScale, y: visualY }
            }
          >
            <HarnessVisual activeDirection={activeDirection} />
            <p className={styles.visualCaption} aria-hidden="true">
              Context connected to tools through a reliable system boundary.
            </p>
          </motion.div>
        </div>

        <div className={styles.scrollCue} aria-hidden="true">
          <span />
          SCROLL TO ENTER PROJECTS
        </div>
      </div>
    </section>
  );
}
