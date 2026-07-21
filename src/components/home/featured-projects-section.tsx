"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import {
  motion,
  type MotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import type { ProjectPreview } from "@/data/home";
import styles from "./featured-projects-section.module.css";

const variants = ["assembly", "field", "poster"] as const;
type SceneVariant = (typeof variants)[number];

function AssemblyVisual() {
  return (
    <div className={styles.assemblyVisual} aria-hidden="true">
      <span className={styles.assemblyFrame} />
      <span className={styles.assemblyRail} />
      <div className={styles.assemblyNode} data-node="context">
        CONTEXT
      </div>
      <div className={styles.assemblyNode} data-node="agent">
        AGENT
      </div>
      <div className={styles.assemblyNode} data-node="tools">
        TOOLS
      </div>
      <div className={styles.assemblyBoundary}>BOUNDARY</div>
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

function ProjectVisual({ variant }: { variant: SceneVariant }) {
  if (variant === "assembly") {
    return <AssemblyVisual />;
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
    input: [0, 0.23, 0.34],
    opacity: [1, 1, 0],
    x: ["0%", "0%", "-14%"],
    clipPath: ["inset(0 0 0 0)", "inset(0 0 0 0)", "inset(0 100% 0 0)"],
  },
  {
    input: [0.22, 0.35, 0.64, 0.77],
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

  return (
    <motion.article
      className={`${styles.scene} ${styles[variant]}`}
      data-active={active}
      data-variant={variant}
      style={{ opacity, x, clipPath }}
    >
      <div className={styles.sceneFilmMeta} aria-hidden="true">
        <span>ROLL 0{index + 1}</span>
        <span>SCENE 0{index + 1} / TAKE 01</span>
        <span className={styles.sceneRec}><i /> REC</span>
      </div>
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
        <ProjectVisual variant={variant} />
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
    const nextIndex = latest < 0.3 ? 0 : latest < 0.7 ? 1 : 2;
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
          <p>SELECTED PROJECTS / FEATURE CUT</p>
          <span className={styles.formatLabel}>24 FPS · 16:9 · CAM A</span>
          <div className={styles.stageProgress}>
            <span>{activeIndex + 1} / {projects.length}</span>
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
