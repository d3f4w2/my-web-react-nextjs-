import Link from "next/link";
import type { ContentPreview } from "@/data/home";
import styles from "./content-card.module.css";

type ContentCardProps = {
  content: ContentPreview;
  variant?: "default" | "featured";
};

export function ContentCard({ content, variant = "default" }: ContentCardProps) {
  return (
    <article className={styles.card} data-variant={variant}>
      <div className={styles.meta}>
        <p>{content.type}</p>
        <span>{content.status}</span>
      </div>
      <div className={styles.copy}>
        <h3>{content.title}</h3>
        <p>{content.summary}</p>
      </div>
      <ul className={styles.tags} aria-label="内容关键词">
        {content.tags.map((tag) => (
          <li key={tag}>#{tag}</li>
        ))}
      </ul>
      {content.href ? (
        <Link className={styles.link} href={content.href}>
          阅读正文 →
        </Link>
      ) : (
        <p className={styles.pending}>正文待本人确认后发布</p>
      )}
    </article>
  );
}
