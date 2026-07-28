import type { MDXContent } from "mdx/types";

export type BlogContentType = "完整技术文章" | "短学习记录" | "随笔";

export type BlogSection = {
  id: string;
  label: string;
};

export type BlogPostMetadata = {
  title: string;
  subtitle: string;
  summary: string;
  type: BlogContentType;
  publishedAt: string;
  updatedAt?: string;
  tags: readonly string[];
  draft: boolean;
  featured: boolean;
  eyebrow: string;
  sections: readonly BlogSection[];
};

export type BlogPostPreview = {
  slug: string;
  href: `/blog/${string}`;
  title: string;
  summary: string;
  type: BlogContentType;
  publishedAt: string;
  updatedAt?: string;
  tags: readonly string[];
  status: "已发布";
  featured: boolean;
  readingTimeMinutes: number;
};

export type BlogPostRecord = {
  slug: string;
  sourceFile: string;
  metadata: BlogPostMetadata;
  Content: MDXContent;
};
