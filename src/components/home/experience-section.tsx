"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import type { ExperiencePreview } from "@/data/home";
import styles from "./experience-section.module.css";

type ExperienceSectionProps = {
  experiences: readonly ExperiencePreview[];
};

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 28, mass: 0.42 });

  const gateTopY = useTransform(progress, [0, 0.1, 0.34], ["0%", "0%", "-105%"]);
  const gateBottomY = useTransform(progress, [0, 0.1, 0.34], ["0%", "0%", "105%"]);
  const packetX = useTransform(progress, [0.08, 0.21, 0.34], ["-118%", "0%", "118%"]);
  const packetOpacity = useTransform(progress, [0.06, 0.14, 0.28, 0.35], [0, 1, 1, 0]);
  const paperClip = useTransform(
    progress,
    [0.08, 0.2, 0.36],
    ["inset(49% 0 49% 0)", "inset(24% 0 24% 0)", "inset(0% 0 0% 0)"],
  );
  const headerOpacity = useTransform(progress, [0.26, 0.36, 0.48], [0, 0.35, 1]);
  const headerY = useTransform(progress, [0.26, 0.48], [34, 0]);
  const tapeX = useTransform(progress, [0.38, 0.52, 0.78, 0.94], ["0%", "0%", "-43%", "-43%"]);
  const scanScale = useTransform(progress, [0.4, 0.52, 0.67, 0.8, 0.92], [0, 1, 0.22, 1, 0]);
  const scannerOpacity = useTransform(progress, [0.32, 0.43, 0.94, 1], [0, 1, 1, 0]);
  const transportOpacity = useTransform(progress, [0.34, 0.44, 0.97, 1], [0, 1, 1, 0.4]);

  useMotionValueEvent(progress, "change", (latest) => {
    const nextIndex = latest < 0.72 ? 0 : Math.min(1, experiences.length - 1);
    setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
  });

  return (
    <section
      ref={sectionRef}
      id="time-log"
      className={styles.section}
      aria-labelledby="experience-title"
    >
      <motion.div
        className={styles.paperStage}
        style={reduceMotion ? undefined : { clipPath: paperClip }}
      >
        <div className={styles.filmRail} aria-hidden="true"><span /><span /></div>

        <div className={styles.stickyFrame}>
          <motion.header
            className={`site-container ${styles.header}`}
            style={reduceMotion ? undefined : { opacity: headerOpacity, y: headerY }}
          >
            <p>PRACTICE LOG / 学习记录</p>
            <h2 id="experience-title">持续发生的学习与实践</h2>
            <span>只记录可公开、可确认的内容。</span>
          </motion.header>

          <motion.div
            className={`site-container ${styles.reelMeta}`}
            style={reduceMotion ? undefined : { opacity: headerOpacity }}
            aria-hidden="true"
          >
            <span>持续学习 · 持续记录</span>
            <span>项目实践 → 学习归档</span>
          </motion.div>

          <motion.div
            className={styles.transport}
            style={reduceMotion ? undefined : { opacity: transportOpacity }}
          >
            <div className={`${styles.roller} ${styles.rollerLeft}`} aria-hidden="true">
              <i /><span>INPUT</span>
            </div>
            <div className={`${styles.roller} ${styles.rollerRight}`} aria-hidden="true">
              <i /><span>WRITE</span>
            </div>

            <div className={styles.tapeWindow}>
              <motion.div className={styles.tape} style={reduceMotion ? undefined : { x: tapeX }}>
                {experiences.map((experience, index) => (
                  <article
                    className={styles.entry}
                    data-active={activeIndex === index}
                    key={experience.title}
                  >
                    <p className={styles.period}>{experience.period}</p>
                    <div className={styles.identity}>
                      <span className={styles.recordState}>
                        {index === 0 ? "进行中" : "内容待核对"}
                      </span>
                      <h3>{experience.title}</h3>
                      <p>{experience.organization}</p>
                    </div>
                    <p className={styles.summary}>{experience.summary}</p>
                  </article>
                ))}
              </motion.div>
            </div>

            <motion.div
              className={styles.scanner}
              style={reduceMotion ? undefined : { opacity: scannerOpacity }}
              aria-hidden="true"
            >
              <div className={styles.scannerHead}>
                <span>内容核对</span>
              </div>
              <motion.i style={reduceMotion ? undefined : { scaleY: scanScale }} />
              <div className={styles.scannerFoot}>
                {activeIndex === 0 ? "定位 · 核对 · 记录" : "审阅 · 保护边界"}
              </div>
            </motion.div>
          </motion.div>

          <div className={styles.progressTrack} aria-hidden="true">
            <motion.i style={{ scaleX: reduceMotion ? 1 : progress }} />
            <span>学习记录持续更新</span>
          </div>
        </div>
      </motion.div>

      {!reduceMotion && (
        <div className={styles.transitionGate} aria-hidden="true">
          <motion.div className={styles.gateTop} style={{ y: gateTopY }}>
            <span>项目材料已归档</span>
            <i>转入学习记录</i>
          </motion.div>
          <motion.div className={styles.gateBottom} style={{ y: gateBottomY }}>
            <span>学习记录持续更新</span>
            <i>下一章节</i>
          </motion.div>
          <motion.div
            className={styles.evidencePacket}
            style={{ x: packetX, opacity: packetOpacity }}
          >
            <b>LOG</b>
            <span>LEARNING RECORD</span>
            <i />
          </motion.div>
        </div>
      )}
    </section>
  );
}
