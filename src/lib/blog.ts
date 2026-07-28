import "server-only";

import { readFile } from "node:fs/promises";
import path from "node:path";
import { blogPostRegistry } from "@/content/blog/registry";
import type { BlogPostPreview, BlogPostRecord } from "@/types/blog";

function countReadableUnits(source: string) {
  const withoutCodeAndImports = source
    .replace(/^import\s.+$/gm, "")
    .replace(/^export\s.+$/gm, "")
    .replace(/```[\s\S]*?```/g, "")
    .replace(/<[^>]+>/g, " ");

  const hanCharacters = withoutCodeAndImports.match(/\p{Script=Han}/gu)?.length ?? 0;
  const latinWords =
    withoutCodeAndImports.match(/[A-Za-z0-9]+(?:[-'][A-Za-z0-9]+)*/g)?.length ?? 0;

  return hanCharacters + latinWords * 2;
}

async function getReadingTimeMinutes(sourceFile: string) {
  const fullPath = path.join(
    process.cwd(),
    "src",
    "content",
    "blog",
    sourceFile,
  );
  const source = await readFile(fullPath, "utf8");

  return Math.max(1, Math.ceil(countReadableUnits(source) / 500));
}

function byPublishedDateDescending(
  left: BlogPostRecord,
  right: BlogPostRecord,
) {
  return right.metadata.publishedAt.localeCompare(left.metadata.publishedAt);
}

export async function getPublishedPostPreviews(): Promise<BlogPostPreview[]> {
  const publishedPosts = blogPostRegistry
    .filter((post) => !post.metadata.draft)
    .toSorted(byPublishedDateDescending);

  return Promise.all(
    publishedPosts.map(async (post) => ({
      slug: post.slug,
      href: `/blog/${post.slug}`,
      title: post.metadata.title,
      summary: post.metadata.summary,
      type: post.metadata.type,
      publishedAt: post.metadata.publishedAt,
      updatedAt: post.metadata.updatedAt,
      tags: post.metadata.tags,
      status: "已发布" as const,
      featured: post.metadata.featured,
      readingTimeMinutes: await getReadingTimeMinutes(post.sourceFile),
    })),
  );
}

export async function getPublishedPostPreviewBySlug(slug: string) {
  const previews = await getPublishedPostPreviews();

  return previews.find((post) => post.slug === slug);
}

export function getPublishedPostBySlug(slug: string) {
  return blogPostRegistry.find(
    (post) => post.slug === slug && !post.metadata.draft,
  );
}

export function getPublishedPostSlugs() {
  return blogPostRegistry
    .filter((post) => !post.metadata.draft)
    .map((post) => post.slug);
}
