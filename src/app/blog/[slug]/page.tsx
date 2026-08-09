import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleToc } from "@/components/blog/article-toc";
import { JsonLd } from "@/components/metadata/json-ld";
import {
  getPublishedPostBySlug,
  getPublishedPostPreviewBySlug,
  getPublishedPostSlugs,
} from "@/lib/blog";
import { absoluteUrl } from "@/lib/site";
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
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: post.metadata.title,
      description: post.metadata.summary,
      url: `/blog/${slug}`,
      publishedTime: post.metadata.publishedAt,
      modifiedTime: post.metadata.updatedAt,
      tags: [...post.metadata.tags],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metadata.title,
      description: post.metadata.summary,
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
  const articleUrl = absoluteUrl(`/blog/${slug}`);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: metadata.title,
    description: metadata.summary,
    url: articleUrl,
    mainEntityOfPage: articleUrl,
    datePublished: metadata.publishedAt,
    dateModified: metadata.updatedAt ?? metadata.publishedAt,
    inLanguage: "zh-CN",
    isAccessibleForFree: true,
    keywords: metadata.tags.join(", "),
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <main id="main-content" className={styles.page}>
      <header className={styles.hero}>
        <div className={`site-container ${styles.heroGrid}`}>
          <h1>{metadata.title}</h1>
          <p className={styles.subtitle}>{metadata.subtitle}</p>
          <div className={styles.publication}>
            <time dateTime={metadata.publishedAt}>
              {formatDate(metadata.publishedAt)}
            </time>
            <span>预计阅读 {preview.readingTimeMinutes} 分钟</span>
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
          <p>文章中的判断会随着新实践继续更新。</p>
          <a href="#main-content">返回文章开头</a>
        </div>
      </footer>
      </main>
    </>
  );
}
