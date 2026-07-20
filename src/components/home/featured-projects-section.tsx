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
  y: number[];
  scale: number[];
}> = [
  {
    input: [0, 0.2, 0.34],
    opacity: [1, 1, 0],
    y: [0, 0, -60],
    scale: [1, 1, 0.94],
  },
  {
    input: [0.22, 0.38, 0.62, 0.78],
    opacity: [0, 1, 1, 0],
    y: [70, 0, 0, -70],
    scale: [0.94, 1, 1, 0.94],
  },
  {
    input: [0.66, 0.82, 1],
    opacity: [0, 1, 1],
    y: [70, 0, 0],
    scale: [0.94, 1, 1],
  },
];

type ProjectSceneProps = {
  active: boolean;
  index: number;
  progress: MotionValue<number>;
  project: ProjectPreview;
  reduceMotion: boolean | null;
  variant: SceneVariant;
};

function ProjectScene({
  active,
  index,
  progress,
  project,
  reduceMotion,
  variant,
}: ProjectSceneProps) {
  const ranges = sceneMotion[index] ?? sceneMotion[0];
  const opacity = useTransform(progress, ranges.input, ranges.opacity);
  const y = useTransform(progress, ranges.input, ranges.y);
  const scale = useTransform(progress, ranges.input, ranges.scale);

  return (
    <motion.article
      className={`${styles.scene} ${styles[variant]}`}
      data-active={active}
      data-variant={variant}
      style={reduceMotion ? undefined : { opacity, scale, y }}
    >
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
  const reduceMotion = useReducedMotion();
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
          <p>SELECTED PROJECTS</p>
          <div className={styles.stageProgress}>
            <span>{activeIndex + 1} / {projects.length}</span>
            <i>
              <motion.b
                style={reduceMotion ? { scaleX: 1 } : { scaleX: progress }}
              />
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
              reduceMotion={reduceMotion}
              variant={variants[index] ?? "assembly"}
              key={project.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
