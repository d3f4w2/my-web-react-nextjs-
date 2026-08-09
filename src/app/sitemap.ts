import type { MetadataRoute } from "next";
import { getPublishedPostSlugs, getPublishedPostBySlug } from "@/lib/blog";
import { absoluteUrl, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified: siteConfig.updatedAt,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: absoluteUrl("/projects"),
      lastModified: siteConfig.updatedAt,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/projects/shagua-agent"),
      lastModified: siteConfig.updatedAt,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/projects/pi-go"),
      lastModified: siteConfig.updatedAt,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/resume"),
      lastModified: siteConfig.updatedAt,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/contact"),
      lastModified: siteConfig.updatedAt,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: absoluteUrl("/blog"),
      lastModified: siteConfig.updatedAt,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const articleRoutes: MetadataRoute.Sitemap = getPublishedPostSlugs().map(
    (slug) => {
      const post = getPublishedPostBySlug(slug);

      return {
        url: absoluteUrl(`/blog/${slug}`),
        lastModified:
          post?.metadata.updatedAt ?? post?.metadata.publishedAt ?? siteConfig.updatedAt,
        changeFrequency: "monthly",
        priority: post?.metadata.featured ? 0.8 : 0.7,
      };
    },
  );

  return [...staticRoutes, ...articleRoutes];
}
