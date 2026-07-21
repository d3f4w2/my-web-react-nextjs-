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
            <p>TIME LOG / 时间日志</p>
            <h2 id="experience-title">正在发生的学习与实践</h2>
            <span>只记录能够公开确认的内容。</span>
          </motion.header>

          <motion.div
            className={`site-container ${styles.reelMeta}`}
            style={reduceMotion ? undefined : { opacity: headerOpacity }}
            aria-hidden="true"
          >
            <span>ROLL B / EVIDENCE CHRONOLOGY</span>
            <span>PROJECT OUTPUT → TIME LOG</span>
            <span>24 FPS · LIVE FEED</span>
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
                    <span className={styles.frameIndex} aria-hidden="true">FRAME 0{index + 1}</span>
                    <p className={styles.period}>{experience.period}</p>
                    <div className={styles.identity}>
                      <span className={styles.recordState}>
                        {index === 0 ? "IN PROGRESS" : "CONTENT REVIEW"}
                      </span>
                      <h3>{experience.title}</h3>
                      <p>{experience.organization}</p>
                    </div>
                    <p className={styles.summary}>{experience.summary}</p>
                    <span className={styles.frameEdge} aria-hidden="true">0{index + 1} / PAL / RECORD</span>
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
                <span>EVIDENCE SCANNER</span>
                <strong>FRAME 0{activeIndex + 1}</strong>
              </div>
              <motion.i style={reduceMotion ? undefined : { scaleY: scanScale }} />
              <div className={styles.scannerFoot}>
                {activeIndex === 0 ? "LOCATE / SCAN / RECORD" : "REVIEW / HOLD / PROTECT"}
              </div>
            </motion.div>
          </motion.div>

          <div className={styles.progressTrack} aria-hidden="true">
            <motion.i style={{ scaleX: reduceMotion ? 1 : progress }} />
            <span>CONTINUOUS RECORD / {String(activeIndex + 1).padStart(2, "0")}</span>
          </div>
        </div>
      </motion.div>

      {!reduceMotion && (
        <div className={styles.transitionGate} aria-hidden="true">
          <motion.div className={styles.gateTop} style={{ y: gateTopY }}>
            <span>PROJECT OUTPUT / SEALED</span>
            <i>ROLL A · END FRAME</i>
          </motion.div>
          <motion.div className={styles.gateBottom} style={{ y: gateBottomY }}>
            <span>NEXT REEL / EVIDENCE RECORD</span>
            <i>GATE 02 · OPEN</i>
          </motion.div>
          <motion.div
            className={styles.evidencePacket}
            style={{ x: packetX, opacity: packetOpacity }}
          >
            <b>03</b>
            <span>EVIDENCE PACKET</span>
            <i />
          </motion.div>
        </div>
      )}
    </section>
  );
}
