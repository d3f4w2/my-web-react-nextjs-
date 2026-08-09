import type { ReactNode } from "react";
import { PageFrame } from "@/components/layout/page-frame";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <PageFrame activeSection="blog">{children}</PageFrame>;
}
