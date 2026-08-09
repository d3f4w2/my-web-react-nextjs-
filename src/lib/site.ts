const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const vercelProductionHost =
  process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim() ||
  process.env.VERCEL_URL?.trim();

const resolvedSiteUrl = configuredSiteUrl
  ? configuredSiteUrl
  : vercelProductionHost
    ? `https://${vercelProductionHost}`
    : "http://localhost:3000";

export const siteConfig = {
  name: "作品集",
  shortName: "作品集",
  description:
    "记录已经完成的 AI 产品功能、被开源项目合并的代码和技术文章。",
  url: new URL(resolvedSiteUrl),
  email: "2471998283@qq.com",
  github: "https://github.com/d3f4w2",
  updatedAt: "2026-08-09",
} as const;

export function absoluteUrl(pathname: string) {
  return new URL(pathname, siteConfig.url).toString();
}
