import type { Metadata } from "next";
import "@fontsource-variable/jetbrains-mono";
import "@fontsource-variable/manrope";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionProvider } from "@/components/providers/motion-provider";
import "./globals.css";

export const metadata: Metadata = {
  applicationName: "Personal Agent Lab",
  title: {
    default: "Personal Agent Lab",
    template: "%s | Personal Agent Lab",
  },
  description:
    "一个持续整理 AI Agent 项目、实践经历与学习记录的个人作品集。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main-content">
          跳到主要内容
        </a>
        <MotionProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </MotionProvider>
      </body>
    </html>
  );
}
