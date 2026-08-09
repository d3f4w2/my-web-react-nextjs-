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
      <div className={styles.copy}>
        <h3>{content.title}</h3>
        <p>{content.summary}</p>
      </div>

      <footer className={styles.footer}>
        <Link href={content.href} transitionTypes={["nav-forward"]}>
          阅读文章，约 {content.readingTimeMinutes} 分钟
        </Link>
      </footer>
    </article>
  );
}
