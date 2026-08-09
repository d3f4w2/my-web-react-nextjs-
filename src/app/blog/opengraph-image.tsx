import { ImageResponse } from "next/og";
import { ShareImage } from "@/components/metadata/share-image";
import { loadShareImageFont } from "@/lib/share-image";

export const alt = "AI 工程技术文章";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function BlogOpenGraphImage() {
  const editorialFont = await loadShareImageFont();

  return new ImageResponse(
    <ShareImage
      category="技术文章"
      footer="解释 AI 任务执行和系统能力更新"
    >
      <div
        style={{
          display: "flex",
          maxWidth: 940,
          fontSize: 78,
          fontWeight: 600,
          letterSpacing: "-0.03em",
          lineHeight: 1.08,
        }}
      >
        两篇文章，讲清 AI 系统怎样工作。
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
