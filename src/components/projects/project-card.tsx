import Link from "next/link";
import type { ProjectPreview } from "@/data/home";
import styles from "./project-card.module.css";

type ProjectCardProps = {
  project: ProjectPreview;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className={styles.card} data-project-tone={index}>
      <header className={styles.header}>
        <p>{project.type}</p>
        <span>{project.status}</span>
      </header>

      <div className={styles.body}>
        <div className={styles.copy}>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
        </div>

        <div className={styles.boundary}>
          <span>当前公开边界</span>
          <strong>{project.responsibility}</strong>
        </div>
      </div>

      <footer className={styles.footer}>
        <ul className={styles.tags} aria-label="项目关键词">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        {project.href ? (
          <Link href={project.href} transitionTypes={["nav-forward"]}>
            进入项目 <span aria-hidden="true">↗</span>
          </Link>
        ) : (
          <span className={styles.pending}>公开材料确认后开放详情</span>
        )}
      </footer>
    </article>
  );
}
