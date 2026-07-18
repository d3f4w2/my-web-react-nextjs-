import { ProjectCard } from "@/components/projects/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import type { ProjectPreview } from "@/data/home";
import styles from "./home-sections.module.css";

type FeaturedProjectsSectionProps = {
  projects: readonly ProjectPreview[];
};

export function FeaturedProjectsSection({
  projects,
}: FeaturedProjectsSectionProps) {
  return (
    <section className={styles.section} aria-labelledby="featured-projects-title">
      <div className="site-container">
        <SectionHeading
          id="featured-projects-title"
          eyebrow="Selected Work / 精选项目"
          title="先讲问题与责任，再讲技术选择"
          description="项目详情会根据公开范围分别处理：公开项目完整展示，受限项目脱敏后只保留问题、职责、方案和结果。"
        />
        <div className={`${styles.grid} ${styles.threeColumnGrid}`}>
          {projects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
