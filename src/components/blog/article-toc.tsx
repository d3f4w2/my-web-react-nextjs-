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
        <span>文章目录</span>
      </div>
      <nav aria-label="文章目录">
        <ol>
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`}>
                {section.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>
      <Link href="/blog" transitionTypes={["nav-back"]}>
        ← 返回文章列表
      </Link>
    </aside>
  );
}
