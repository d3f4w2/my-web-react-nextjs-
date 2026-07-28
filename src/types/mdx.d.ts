declare module "*.mdx" {
  import type { BlogPostMetadata } from "@/types/blog";

  export const metadata: BlogPostMetadata;
}
