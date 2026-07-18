import Link from "next/link";
import type { ProjectPreview } from "@/data/home";
import styles from "./project-card.module.css";

type ProjectCardProps = {
  project: ProjectPreview;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.meta}>
        <p>{project.type}</p>
        <span>{project.status}</span>
      </div>
      <div className={styles.copy}>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
      </div>
      <ul className={styles.tags} aria-label="项目关键词">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <div className={styles.footer}>
        {project.href ? (
          <Link href={project.href}>查看项目详情 →</Link>
        ) : (
          <span>详情内容待本人确认</span>
        )}
      </div>
    </article>
  );
}
