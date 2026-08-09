import type { Metadata } from "next";
import { ContentCard } from "@/components/blog/content-card";
import { JsonLd } from "@/components/metadata/json-ld";
import { getPublishedPostPreviews } from "@/lib/blog";
import { absoluteUrl } from "@/lib/site";
import styles from "../collection-page.module.css";

const description =
  "两篇文章分别解释 AI 任务怎样执行，以及系统怎样安全地更新记忆、工具和工作方法。";

export const metadata: Metadata = {
  title: "文章",
  description,
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    title: "文章",
    description,
    url: "/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "文章",
    description,
  },
};

export default async function BlogPage() {
  const posts = await getPublishedPostPreviews();
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "AI 工程技术文章",
    url: absoluteUrl("/blog"),
    description,
    inLanguage: "zh-CN",
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: absoluteUrl(post.href),
      datePublished: post.publishedAt,
      dateModified: post.updatedAt ?? post.publishedAt,
    })),
  };

  return (
    <>
      <JsonLd data={blogJsonLd} />
      <main id="main-content" className={styles.page} data-page="blog">
        <div className="site-container">
        <header className={styles.intro}>
          <h1 className={styles.title}>
            <span>把复杂系统，</span>
            <span>写到可以被理解。</span>
          </h1>
          <p className={styles.description}>
            不堆术语，也不回避细节。文章从真实工程问题出发，把 Agent 的执行、恢复和能力更新拆开讲清楚。
          </p>
        </header>

        <section className={styles.collection} aria-labelledby="content-list-title">
          <div className={styles.collectionHeader}>
            <h2 id="content-list-title">已发布文章</h2>
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
          外部资料均附链接；假设案例会明确标注，不会写成真实项目。
        </p>
        </div>
      </main>
    </>
  );
}
