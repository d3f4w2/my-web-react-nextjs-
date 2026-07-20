import Link from "next/link";
import type { ProjectPreview } from "@/data/home";
import styles from "./project-card.module.css";

type ProjectCardProps = {
  project: ProjectPreview;
  index: number;
  variant?: "compact" | "featured";
};

export function ProjectCard({ project, index, variant = "compact" }: ProjectCardProps) {
  const projectNumber = String(index).padStart(2, "0");

  return (
    <article className={styles.card} data-project-index={index} data-variant={variant}>
      {variant === "featured" ? <div className={styles.visual} aria-hidden="true">
        <div className={styles.visualHeader}>
          <span>LAB SAMPLE / {projectNumber}</span>
          <span>等待真实材料</span>
        </div>
        <p className={styles.visualNumber}>{projectNumber}</p>
        <div className={styles.flowMap}>
          <div>
            <span>问题</span>
            <i />
          </div>
          <div>
            <span>方法</span>
            <i />
          </div>
          <div>
            <span>验证</span>
            <i />
          </div>
        </div>
        <div className={styles.traceLog}>
          <p>01 / 问题已经记录</p>
          <p>02 / 方案等待复核</p>
          <p>03 / 证据仍需补齐</p>
        </div>
      </div> : null}

      <div className={styles.body}>
        <div className={styles.meta}>
          <p>{project.type}</p>
          <span>{project.status}</span>
        </div>
        <div className={styles.copy}>
          <p className={styles.kicker}>EXPERIMENT FILE / {projectNumber}</p>
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
          <span className={styles.footerIndex}>{projectNumber} / 03</span>
        </div>
      </div>
    </article>
  );
}
