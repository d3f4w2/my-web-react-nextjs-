"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import type { ExperiencePreview } from "@/data/home";
import styles from "./experience-section.module.css";

type ExperienceSectionProps = { experiences: readonly ExperiencePreview[] };

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 92, damping: 28, mass: 0.38 });
  const paperY = useTransform(progress, [0, 0.5, 1], [18, 0, -18]);
  const scanX = useTransform(progress, [0.06, 0.94], ["4%", "96%"]);
  const integrityScale = useTransform(progress, [0.12, 0.9], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const itemCount = Math.max(experiences.length, 1);
    const nextIndex = Math.min(itemCount - 1, Math.floor(latest * itemCount));
    setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
  });

  return (
    <section ref={sectionRef} id="time-log" className={styles.section} aria-labelledby="experience-title">
      <div className={styles.stickyFrame}>
        <div className={`site-container ${styles.inner}`}>
          <header className={styles.header}>
            <div><p>LIVE TIME LOG / 活的时间轨迹</p><span>每一次执行都留下可检查的记录。</span></div>
            <h2 id="experience-title">学习与实践，正在被持续记录。</h2>
            <p className={styles.headerState}>EVIDENCE SCANNER <b>ON</b></p>
          </header>
          <div className={styles.machine}>
            <Image className={styles.machineImage} src="/assets/homepage/evidence-log-machine.png" alt="承载学习与实践记录的机械卷轴和证据扫描器" fill sizes="(max-width: 1023px) 96vw, 92vw" />
            <motion.div className={styles.paperWindow} style={reduceMotion ? undefined : { y: paperY }}>
              <motion.span className={styles.scanLine} style={reduceMotion ? { left: "50%" } : { left: scanX }} aria-hidden="true" />
              <ol className={styles.log}>
                {experiences.map((experience, index) => (
                  <li className={styles.entry} data-active={activeIndex === index} key={`${experience.period}-${experience.title}`}>
                    <div className={styles.sequence}><strong>{String(index + 1).padStart(3, "0")}</strong><span>{experience.period}</span></div>
                    <div className={styles.identity}><p>{activeIndex === index ? "CURRENT EVENT" : "LOGGED EVENT"}</p><h3>{experience.title}</h3></div>
                    <div className={styles.recordCopy}><p className={styles.organization}>{experience.organization}</p><p>{experience.summary}</p></div>
                    <div className={styles.recordState}><span>{activeIndex === index ? "进行中" : "已记录"}</span><small>{activeIndex === index ? "IN PROGRESS" : "RECORDED"}</small></div>
                  </li>
                ))}
              </ol>
            </motion.div>
          </div>
          <div className={styles.integrity}><span>LOG INTEGRITY: CONTENT IN REVIEW</span><i aria-hidden="true"><motion.b style={reduceMotion ? { scaleX: 1 } : { scaleX: integrityScale }} /></i><span>CHAIN: TRACEABLE</span></div>
        </div>
      </div>
    </section>
  );
}
