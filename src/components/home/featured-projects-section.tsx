"use client";

import { ProjectCard } from "@/components/projects/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import type { ProjectPreview } from "@/data/home";
import styles from "./home-sections.module.css";

type FeaturedProjectsSectionProps = {
  projects: readonly ProjectPreview[];
};

export function FeaturedProjectsSection({ projects }: FeaturedProjectsSectionProps) {
  return (
    <section
      id="featured-projects"
      className={`${styles.section} ${styles.projectSection}`}
      aria-labelledby="featured-projects-title"
    >
      <div className="site-container">
        <SectionHeading
          id="featured-projects-title"
          index="L/01"
          eyebrow="Experiment Samples / 实验样本"
          title="每个项目，都是一份可以复查的实验档案"
          description="先记录问题、责任和限制，再展示方法与结果。公开项目完整展开，受限项目脱敏后只保留可以验证的部分。"
        />
        <div className={styles.projectStack}>
          {projects.map((project, index) => (
            <div
              className={styles.projectStackItem}
              style={{
                top: "calc(var(--header-height) + 1.25rem)",
                zIndex: index + 1,
              }}
              key={project.title}
            >
              <ProjectCard index={index + 1} project={project} variant="featured" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
