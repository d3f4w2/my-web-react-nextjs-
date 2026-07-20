import type { Metadata } from "next";
import { ContentCard } from "@/components/blog/content-card";
import { latestContent } from "@/data/home";
import styles from "../collection-page.module.css";

export const metadata: Metadata = {
  title: "博客",
  description: "完整技术文章、短学习记录与随笔组成的统一内容中心。",
};

export default function BlogPage() {
  return (
    <main id="main-content" className={styles.page}>
      <div className="site-container">
        <header className={styles.intro}>
          <p className={styles.eyebrow}>Field Notes / 观察记录</p>
          <h1 className={styles.title}>把正在形成的认识，留在实验桌上。</h1>
          <p className={styles.description}>
            完整技术文章、短学习记录和随笔共用一个入口。它们共享基本元数据，但保留各自适合的正文结构。
          </p>
        </header>

        <section className={styles.collection} aria-labelledby="content-list-title">
          <div className={styles.collectionHeader}>
            <h2 id="content-list-title">观察条目</h2>
            <p>03 FIELD NOTES · DRAFTS PENDING</p>
          </div>
          <div className={styles.grid} data-layout="notes">
            {latestContent.map((content, index) => (
              <ContentCard
                content={content}
                variant={index === 0 ? "featured" : "default"}
                key={content.title}
              />
            ))}
          </div>
        </section>

        <p className={styles.notice}>
          <strong>当前状态：</strong>
          卡片仅用于验证内容类型、长度变化和页面层级。正文将在 MDX 内容流程建立后逐篇加入。
        </p>
      </div>
    </main>
  );
}
