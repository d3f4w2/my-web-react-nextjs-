import { ImageResponse } from "next/og";
import { ShareImage } from "@/components/metadata/share-image";
import { loadShareImageFont } from "@/lib/share-image";

export const alt = "作品集首页";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const editorialFont = await loadShareImageFont();

  return new ImageResponse(
    <ShareImage
      category="作品集"
      footer="AI 产品功能、开源代码和技术文章"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 88,
          fontWeight: 600,
          letterSpacing: "-0.035em",
          lineHeight: 1.04,
        }}
      >
        <span>让 AI 不只回答，</span>
        <span style={{ color: "#c7f23b" }}>还要完成任务。</span>
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
