import type { Metadata } from "next";
import { ContentCard } from "@/components/blog/content-card";
import { getPublishedPostPreviews } from "@/lib/blog";
import styles from "../collection-page.module.css";

export const metadata: Metadata = {
  title: "博客",
  description: "关于 Agent 工程、工具调用、可靠性与持续实践的技术观察。",
};

export default async function BlogPage() {
  const posts = await getPublishedPostPreviews();

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
            <h2 id="content-list-title">已经留下证据的内容</h2>
            <p>{String(posts.length).padStart(2, "0")} 篇已发布</p>
          </div>
          <div className={styles.grid} data-layout="notes">
            {posts.map((content, index) => (
              <ContentCard
                content={content}
                variant={index === 0 ? "featured" : "default"}
                key={content.slug}
              />
            ))}
          </div>
        </section>

        <p className={styles.notice}>
          <strong>发布原则：</strong>
          区分论文事实、作者观点和个人工程判断；不使用空文章制造更新频率。
        </p>
      </div>
    </main>
  );
}
