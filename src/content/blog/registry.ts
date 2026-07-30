import AgentSelfEvolutionArticle, {
  metadata as agentSelfEvolutionMetadata,
} from "./agent-self-evolution.mdx";
import AgentRuntimeArticle, {
  metadata as agentRuntimeMetadata,
} from "./agent-runtime-from-loop-to-production.mdx";
import type { BlogPostMetadata, BlogPostRecord } from "@/types/blog";

function assertMetadata(
  slug: string,
  metadata: BlogPostMetadata,
): BlogPostMetadata {
  const requiredText = [
    ["title", metadata.title],
    ["subtitle", metadata.subtitle],
    ["summary", metadata.summary],
    ["type", metadata.type],
    ["publishedAt", metadata.publishedAt],
    ["eyebrow", metadata.eyebrow],
  ] as const;

  for (const [field, value] of requiredText) {
    if (!value.trim()) {
      throw new Error(`Blog post "${slug}" is missing metadata.${field}.`);
    }
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(metadata.publishedAt)) {
    throw new Error(
      `Blog post "${slug}" has an invalid publishedAt date. Use YYYY-MM-DD.`,
    );
  }

  if (metadata.tags.length === 0) {
    throw new Error(`Blog post "${slug}" must have at least one tag.`);
  }

  const sectionIds = new Set<string>();

  for (const section of metadata.sections) {
    if (!section.id.trim() || !section.label.trim()) {
      throw new Error(`Blog post "${slug}" has an incomplete section.`);
    }

    if (sectionIds.has(section.id)) {
      throw new Error(
        `Blog post "${slug}" has duplicate section id "${section.id}".`,
      );
    }

    sectionIds.add(section.id);
  }

  return metadata;
}

const posts = [
  {
    slug: "agent-runtime-from-loop-to-production",
    sourceFile: "agent-runtime-from-loop-to-production.mdx",
    metadata: assertMetadata(
      "agent-runtime-from-loop-to-production",
      agentRuntimeMetadata,
    ),
    Content: AgentRuntimeArticle,
  },
  {
    slug: "agent-self-evolution",
    sourceFile: "agent-self-evolution.mdx",
    metadata: assertMetadata(
      "agent-self-evolution",
      agentSelfEvolutionMetadata,
    ),
    Content: AgentSelfEvolutionArticle,
  },
] satisfies readonly BlogPostRecord[];

const slugs = new Set<string>();

for (const post of posts) {
  if (slugs.has(post.slug)) {
    throw new Error(`Duplicate blog post slug "${post.slug}".`);
  }

  slugs.add(post.slug);
}

export const blogPostRegistry = posts;
