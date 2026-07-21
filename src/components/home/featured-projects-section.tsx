"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import type { ProjectPreview } from "@/data/home";
import styles from "./featured-projects-section.module.css";

const stationStates = ["PLAN", "BUILD", "RUN"] as const;

type FeaturedProjectsSectionProps = {
  projects: readonly ProjectPreview[];
};

export function FeaturedProjectsSection({ projects }: FeaturedProjectsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 86,
    damping: 27,
    mass: 0.42,
  });
  const carriageLeft = useTransform(progress, [0, 0.5, 1], ["18%", "50%", "82%"]);
  const railScale = useTransform(progress, [0.04, 0.94], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const nextIndex = latest < 0.34 ? 0 : latest < 0.67 ? 1 : 2;
    setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
  });

  return (
    <section
      ref={sectionRef}
      id="featured-projects"
      className={styles.section}
      aria-labelledby="featured-projects-title"
    >
      <div className={styles.stickyFrame}>
        <div className={`site-container ${styles.inner}`}>
          <header className={styles.header}>
            <div>
              <p>PROJECT STAGE / 机械编舞舞台</p>
              <span>INPUT → PLAN → BUILD → RUN → OUTPUT</span>
            </div>
            <h2 id="featured-projects-title">项目不是画廊，而是一条可核验的装配线。</h2>
            <p className={styles.counter}>POS: 0{activeIndex + 1} / 03</p>
          </header>

          <div className={styles.workbench}>
            <Image
              className={styles.workbenchImage}
              src="/assets/homepage/project-workstations.png"
              alt="由三座机械工位组成的项目装配线"
              fill
              sizes="(max-width: 1023px) 96vw, 92vw"
            />

            <div className={styles.stations}>
              {projects.map((project, index) => (
                <article
                  className={styles.station}
                  data-active={activeIndex === index}
                  key={project.title}
                >
                  <div className={styles.ticketTopline}>
                    <span>0{index + 1} / PROJECT MODULE</span>
                    <strong>STATE: {stationStates[index]}</strong>
                  </div>
                  <p className={styles.projectType}>{project.type}</p>
                  <h3>{project.title}</h3>
                  <p className={styles.summary}>{project.summary}</p>
                  <p className={styles.responsibility}>
                    <span>个人职责</span>
                    {project.responsibility}
                  </p>
                  <ul className={styles.tags} aria-label="项目关键词">
                    {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                  <div className={styles.ticketFooter}>
                    <span>{project.status}</span>
                    {project.href ? <Link href={project.href}>查看详情 →</Link> : <b>材料校验中</b>}
                  </div>
                </article>
              ))}
            </div>

            <div className={styles.transferRail} aria-hidden="true">
              <i><motion.b style={reduceMotion ? { scaleX: 1 } : { scaleX: railScale }} /></i>
              <motion.span style={reduceMotion ? { left: "82%" } : { left: carriageLeft }}>
                AGENT
              </motion.span>
            </div>
          </div>

          <div className={styles.stageStatus}>
            <span>RAIL-01 / TRACKING SYSTEM ACTIVE</span>
            <div aria-label={`当前工位：${stationStates[activeIndex]}`}>
              {stationStates.map((state, index) => (
                <i data-active={activeIndex === index} key={state}>{state}</i>
              ))}
            </div>
            <span>OUTPUT: EVIDENCE REQUIRED</span>
          </div>
        </div>
      </div>
    </section>
  );
}
