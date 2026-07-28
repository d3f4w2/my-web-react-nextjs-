import Link from "next/link";
import type { BlogPostPreview } from "@/types/blog";
import styles from "./content-card.module.css";

type ContentCardProps = {
  content: BlogPostPreview;
  variant?: "default" | "featured";
};

export function ContentCard({ content, variant = "default" }: ContentCardProps) {
  return (
    <article className={styles.card} data-variant={variant}>
      <header className={styles.meta}>
        <p>{content.type}</p>
        <span>
          {content.status} / {content.readingTimeMinutes} 分钟
        </span>
      </header>

      <div className={styles.copy}>
        <h3>{content.title}</h3>
        <p>{content.summary}</p>
      </div>

      <footer className={styles.footer}>
        <ul className={styles.tags} aria-label="内容关键词">
          {content.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <Link href={content.href} transitionTypes={["nav-forward"]}>
          阅读正文 <span aria-hidden="true">↗</span>
        </Link>
      </footer>
    </article>
  );
}
