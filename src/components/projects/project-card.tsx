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
      <div>
        <h3>{project.title}</h3>
        <p className={styles.summary}>{project.summary}</p>
      </div>
      <p className={styles.responsibility}>{project.responsibility}</p>
      <footer className={styles.footer}>
        {project.href ? (
          <Link href={project.href} transitionTypes={["nav-forward"]}>
            {project.linkLabel ?? "进入项目详情"}
          </Link>
        ) : null}
        {project.officialHref ? (
          <a href={project.officialHref} target="_blank" rel="noreferrer">
            打开产品官网
          </a>
        ) : null}
      </footer>
    </article>
  );
}
