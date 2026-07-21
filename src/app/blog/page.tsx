import type { Metadata } from "next";
import { ContentCard } from "@/components/blog/content-card";
import { latestContent } from "@/data/home";
import styles from "../collection-page.module.css";

export const metadata: Metadata = {
  title: "博客",
  description: "关于 Agent 工程、工具调用、可靠性与持续实践的技术观察。",
};

export default function BlogPage() {
  return (
    <main id="main-content" className={styles.page} data-page="blog">
      <div className="site-container">
        <header className={styles.intro}>
          <p className={styles.eyebrow}>观察与记录</p>
          <h1 className={styles.title}>把工程判断写下来，让它经得起下一次复查。</h1>
          <p className={styles.description}>
            长文解释完整过程，实验记录保留失败与修正，随笔区分事实、经验和推测。内容宁可少，也不发布没有完成校对的结论。
          </p>
        </header>

        <section className={styles.collection} aria-labelledby="content-list-title">
          <div className={styles.collectionHeader}>
            <h2 id="content-list-title">编辑台上的内容</h2>
            <p>正在写作与校对</p>
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
          <strong>发布原则：</strong>
          正文会在资料来源、实验过程和结论边界都完成复核后开放，不用空文章制造更新频率。
        </p>
      </div>
    </main>
  );
}
