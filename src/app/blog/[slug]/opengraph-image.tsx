import { ImageResponse } from "next/og";
import { ShareImage } from "@/components/metadata/share-image";
import { getPublishedPostBySlug, getPublishedPostSlugs } from "@/lib/blog";
import { loadShareImageFont } from "@/lib/share-image";

export const alt = "AI 工程技术文章";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type ArticleOpenGraphImageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPublishedPostSlugs().map((slug) => ({ slug }));
}

export default async function ArticleOpenGraphImage({
  params,
}: ArticleOpenGraphImageProps) {
  const { slug } = await params;
  const post = getPublishedPostBySlug(slug);
  const editorialFont = await loadShareImageFont();
  const title = post?.metadata.title ?? "Agent 工程记录";
  const publishedAt = post?.metadata.publishedAt ?? "2026";

  return new ImageResponse(
    <ShareImage
      category="技术文章"
      footer={`${publishedAt} 发布`}
    >
      <div
        style={{
          display: "flex",
          maxWidth: 920,
          fontSize: title.length > 24 ? 70 : 82,
          fontWeight: 600,
          letterSpacing: "-0.03em",
          lineHeight: 1.08,
        }}
      >
        {title}
      </div>
    </ShareImage>,
    {
      ...size,
      fonts: [
        {
          name: "Portfolio Editorial",
          data: editorialFont,
          style: "normal",
          weight: 600,
        },
      ],
    },
  );
}
