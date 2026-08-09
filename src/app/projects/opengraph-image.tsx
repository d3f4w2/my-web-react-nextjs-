import { ImageResponse } from "next/og";
import { ShareImage } from "@/components/metadata/share-image";
import { loadShareImageFont } from "@/lib/share-image";

export const alt = "AI 产品与开源代码项目";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function ProjectsOpenGraphImage() {
  const editorialFont = await loadShareImageFont();

  return new ImageResponse(
    <ShareImage
      category="项目记录"
      footer="AI 电商产品和已经合并的开源代码"
    >
      <div
        style={{
          display: "flex",
          maxWidth: 920,
          fontSize: 78,
          fontWeight: 600,
          letterSpacing: "-0.03em",
          lineHeight: 1.08,
        }}
      >
        项目做了什么，我负责什么，结果如何验证。
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
