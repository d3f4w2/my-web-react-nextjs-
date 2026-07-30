import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleToc } from "@/components/blog/article-toc";
import {
  getPublishedPostBySlug,
  getPublishedPostPreviewBySlug,
  getPublishedPostSlugs,
} from "@/lib/blog";
import styles from "./article-page.module.css";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

const dateFormatter = new Intl.DateTimeFormat("zh-CN", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

function formatDate(date: string) {
  return dateFormatter.format(new Date(`${date}T00:00:00+08:00`));
}

export function generateStaticParams() {
  return getPublishedPostSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPublishedPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.metadata.title,
    description: post.metadata.summary,
    keywords: [...post.metadata.tags],
    authors: [{ name: "Personal Agent Lab" }],
    openGraph: {
      type: "article",
      title: post.metadata.title,
      description: post.metadata.summary,
      publishedTime: post.metadata.publishedAt,
      modifiedTime: post.metadata.updatedAt,
      tags: [...post.metadata.tags],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = getPublishedPostBySlug(slug);
  const preview = await getPublishedPostPreviewBySlug(slug);

  if (!post || !preview) {
    notFound();
  }

  const { Content, metadata } = post;

  return (
    <main id="main-content" className={styles.page}>
      <header className={styles.hero}>
        <div className={`site-container ${styles.heroGrid}`}>
          <div className={styles.heroMeta}>
            <span>{metadata.eyebrow}</span>
            <i>READ / {preview.readingTimeMinutes} MIN</i>
          </div>
          <h1>{metadata.title}</h1>
          <p className={styles.subtitle}>{metadata.subtitle}</p>
          <div className={styles.publication}>
            <time dateTime={metadata.publishedAt}>
              {formatDate(metadata.publishedAt)}
            </time>
            <ul aria-label="文章标签">
              {metadata.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      <div className={`site-container ${styles.articleGrid}`}>
        <ArticleToc sections={metadata.sections} />
        <article className={styles.prose}>
          <Content />
        </article>
      </div>

      <footer className={styles.articleEnd}>
        <div className="site-container">
          <span>END OF {metadata.eyebrow}</span>
          <p>结论会随着实践继续校正，未经验证的部分不会写成事实。</p>
          <a href="#main-content">返回文章开头 ↑</a>
        </div>
      </footer>
    </main>
  );
}
