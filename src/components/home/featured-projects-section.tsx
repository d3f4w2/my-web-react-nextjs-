"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import {
  motion,
  type MotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import type { ProjectPreview } from "@/data/home";
import styles from "./featured-projects-section.module.css";

const variants = ["assembly", "field", "poster"] as const;
type SceneVariant = (typeof variants)[number];

function AssemblyVisual({ progress }: { progress: MotionValue<number> }) {
  const reduceMotion = useReducedMotion();
  const packetX = useTransform(progress, [0, 0.045, 0.13, 0.23], ["62%", "62%", "0%", "0%"]);
  const packetY = useTransform(progress, [0, 0.045, 0.13, 0.23], ["-42%", "-42%", "0%", "0%"]);
  const packetScale = useTransform(progress, [0, 0.045, 0.13, 0.23], [0.68, 0.68, 1, 1]);
  const packetRotate = useTransform(progress, [0, 0.045, 0.13, 0.23], [7, 7, -1.4, 0]);
  const clampScale = useTransform(progress, [0.1, 0.17, 0.24], [1.18, 1.18, 1]);
  const clampOpacity = useTransform(progress, [0.1, 0.17, 0.24], [0, 0.35, 1]);
  const scanY = useTransform(progress, [0.16, 0.27], [-230, 250]);
  const scanOpacity = useTransform(progress, [0.14, 0.18, 0.27, 0.3], [0, 1, 1, 0]);
  const reviewOpacity = useTransform(progress, [0.22, 0.29], [0, 1]);
  const reviewY = useTransform(progress, [0.22, 0.29], [12, 0]);

  const movingPacketStyle = reduceMotion
    ? undefined
    : { x: packetX, y: packetY, scale: packetScale, rotate: packetRotate };
  const movingClampStyle = reduceMotion
    ? undefined
    : { scale: clampScale, opacity: clampOpacity };

  return (
    <div className={styles.assemblyVisual} aria-hidden="true">
      <div className={styles.reviewBayHeader}>
        <span>PROJECT MATERIALS</span>
        <i>UNDER REVIEW</i>
      </div>

      <div className={styles.reviewBay}>
        <span className={styles.assemblyRail} />
        <span className={styles.reviewPerforations} />
        <motion.span
          className={styles.reviewClamp}
          style={movingClampStyle}
        />

        <motion.div className={styles.evidencePacket} style={movingPacketStyle}>
          <span className={styles.packetSerial}>PUBLIC SCOPE PENDING</span>
          <div className={styles.packetWindow}>
            <i />
            <strong>AGENT</strong>
            <small>REDACTED</small>
          </div>
          <span className={styles.packetSeal}>REVIEWING</span>
        </motion.div>

        <motion.span
          className={styles.reviewScan}
          style={reduceMotion ? { opacity: 0 } : { y: scanY, opacity: scanOpacity }}
        />

        <motion.div
          className={styles.reviewVerdict}
          style={reduceMotion ? undefined : { opacity: reviewOpacity, y: reviewY }}
        >
          <span>SCOPE</span>
          <span>ROLE</span>
          <span>EVIDENCE</span>
        </motion.div>
      </div>

      <div className={styles.assemblyBoundary}>
        <span>COLLECT</span>
        <i />
        <span>REVIEW</span>
        <i />
        <span>PROTECT</span>
      </div>
    </div>
  );
}

function FieldVisual() {
  return (
    <div className={styles.fieldVisual} aria-hidden="true">
      <span className={styles.fieldOrbit} />
      <span className={styles.fieldOrbit} />
      <span className={styles.fieldOrbit} />
      <div className={styles.fieldCore}>
        <span>PERSONAL</span>
        <strong>AGENT</strong>
      </div>
      <p>IDEA → PROTOTYPE → ITERATION</p>
    </div>
  );
}

function PosterVisual() {
  return (
    <div className={styles.posterVisual} aria-hidden="true">
      <span className={styles.posterBar} />
      <p>OPEN</p>
      <p>SOURCE</p>
      <strong>BUILD IN PUBLIC</strong>
      <i>COLLABORATE / LEARN / CONTRIBUTE</i>
    </div>
  );
}

function ProjectVisual({
  progress,
  variant,
}: {
  progress: MotionValue<number>;
  variant: SceneVariant;
}) {
  if (variant === "assembly") {
    return <AssemblyVisual progress={progress} />;
  }

  if (variant === "field") {
    return <FieldVisual />;
  }

  return <PosterVisual />;
}

const sceneMotion: Array<{
  input: number[];
  opacity: number[];
  x: string[];
  clipPath: string[];
}> = [
  {
    input: [0, 0.27, 0.35],
    opacity: [1, 1, 0],
    x: ["0%", "0%", "-14%"],
    clipPath: ["inset(0 0 0 0)", "inset(0 0 0 0)", "inset(0 100% 0 0)"],
  },
  {
    input: [0.31, 0.37, 0.64, 0.77],
    opacity: [0, 1, 1, 0],
    x: ["14%", "0%", "0%", "-14%"],
    clipPath: ["inset(0 0 0 100%)", "inset(0 0 0 0)", "inset(0 0 0 0)", "inset(0 100% 0 0)"],
  },
  {
    input: [0.65, 0.79, 1],
    opacity: [0, 1, 1],
    x: ["14%", "0%", "0%"],
    clipPath: ["inset(0 0 0 100%)", "inset(0 0 0 0)", "inset(0 0 0 0)"],
  },
];

type ProjectSceneProps = {
  active: boolean;
  index: number;
  progress: MotionValue<number>;
  project: ProjectPreview;
  variant: SceneVariant;
};

function ProjectScene({
  active,
  index,
  progress,
  project,
  variant,
}: ProjectSceneProps) {
  const ranges = sceneMotion[index] ?? sceneMotion[0];
  const opacity = useTransform(progress, ranges.input, ranges.opacity);
  const x = useTransform(progress, ranges.input, ranges.x);
  const clipPath = useTransform(progress, ranges.input, ranges.clipPath);
  const entryGateClip = useTransform(
    progress,
    [0, 0.035, 0.135],
    ["inset(0% 0% 0% 0%)", "inset(0% 0% 0% 0%)", "inset(0% 0% 100% 0%)"],
  );

  return (
    <motion.article
      className={`${styles.scene} ${styles[variant]}`}
      data-active={active}
      data-variant={variant}
      style={{ opacity, x, clipPath }}
    >
      {variant === "assembly" ? (
        <motion.div className={styles.reviewEntryGate} style={{ clipPath: entryGateClip }} aria-hidden="true">
          <span>PROJECT MATERIALS</span>
          <i />
        </motion.div>
      ) : null}
      <div className={`site-container ${styles.sceneInner}`}>
        <div className={styles.projectCopy}>
          <div className={styles.projectMeta}>
            <p>{project.type}</p>
            <span>{project.status}</span>
          </div>
          <h3>{project.title}</h3>
          <p className={styles.projectSummary}>{project.summary}</p>
          <p className={styles.responsibility}>
            <span>个人职责</span>
            {project.responsibility}
          </p>
          <ul className={styles.tags} aria-label="项目关键词">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <div className={styles.projectAction}>
            {project.href ? (
              <Link href={project.href}>查看项目详情 →</Link>
            ) : (
              <span>详情内容整理中</span>
            )}
          </div>
        </div>
        <ProjectVisual progress={progress} variant={variant} />
      </div>
    </motion.article>
  );
}

type FeaturedProjectsSectionProps = {
  projects: readonly ProjectPreview[];
};

export function FeaturedProjectsSection({ projects }: FeaturedProjectsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 95,
    damping: 28,
    mass: 0.36,
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const nextIndex = latest < 0.35 ? 0 : latest < 0.7 ? 1 : 2;
    setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
  });

  return (
    <section
      ref={sectionRef}
      id="featured-projects"
      className={styles.section}
      aria-labelledby="featured-projects-title"
    >
      <h2 id="featured-projects-title" className={styles.sectionTitle}>
        精选项目
      </h2>
      <div className={styles.stageFrame}>
        <div className={styles.stageChrome} aria-hidden="true">
          <p>PROJECTS / 项目实践</p>
          <div className={styles.stageProgress}>
            <i>
              <motion.b style={{ scaleX: progress }} />
            </i>
          </div>
        </div>

        <div className={styles.scenes}>
          {projects.map((project, index) => (
            <ProjectScene
              active={activeIndex === index}
              index={index}
              progress={progress}
              project={project}
              variant={variants[index] ?? "assembly"}
              key={project.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
