import Link from "next/link";
import type { BlogSection } from "@/types/blog";
import styles from "./article-toc.module.css";

type ArticleTocProps = {
  sections: readonly BlogSection[];
};

export function ArticleToc({ sections }: ArticleTocProps) {
  return (
    <aside className={styles.toc}>
      <div className={styles.header}>
        <span>ARTICLE MAP</span>
        <i>{String(sections.length).padStart(2, "0")} SECTIONS</i>
      </div>
      <nav aria-label="文章目录">
        <ol>
          {sections.map((section, index) => (
            <li key={section.id}>
              <a href={`#${section.id}`}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {section.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>
      <Link href="/blog" transitionTypes={["nav-back"]}>
        ← 返回博客
      </Link>
    </aside>
  );
}
