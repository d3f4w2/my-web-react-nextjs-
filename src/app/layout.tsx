import type { Metadata } from "next";
import "@fontsource-variable/jetbrains-mono";
import "@fontsource-variable/manrope";
import { RouteFooter } from "@/components/layout/route-footer";
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
    "记录 Agent 系统、上下文、工具集成与可靠执行的个人工程实践。",
  keywords: ["AI Agent", "Agent Engineering", "Tool Calling", "可靠性"],
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: "Personal Agent Lab",
    title: "Personal Agent Lab",
    description: "记录 Agent 系统、上下文、工具集成与可靠执行的个人工程实践。",
  },
  twitter: {
    card: "summary",
    title: "Personal Agent Lab",
    description: "记录 Agent 系统、上下文、工具集成与可靠执行的个人工程实践。",
  },
  robots: {
    index: true,
    follow: true,
  },
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
          <RouteFooter />
        </MotionProvider>
      </body>
    </html>
  );
}
