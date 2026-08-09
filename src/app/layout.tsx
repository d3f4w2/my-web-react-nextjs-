import type { Metadata } from "next";
import { JsonLd } from "@/components/metadata/json-ld";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: siteConfig.url,
  applicationName: siteConfig.name,
  title: {
    default: "首页",
    template: "%s",
  },
  description:
    "记录已经完成的 AI 产品功能、被开源项目合并的代码和技术文章。",
  keywords: ["AI 产品", "AI 工程", "开源贡献", "技术文章"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: siteConfig.name,
    title: "首页",
    description: "AI 产品功能、开源代码和技术文章。",
    url: "/",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "作品集首页",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "首页",
    description: "AI 产品功能、开源代码和技术文章。",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url.toString(),
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" data-scroll-behavior="smooth">
      <body>
        <JsonLd data={websiteJsonLd} />
        {children}
      </body>
    </html>
  );
}
