"use client";

import { motion } from "motion/react";
import { ContentCard } from "@/components/blog/content-card";
import { SectionHeading } from "@/components/ui/section-heading";
import type { BlogPostPreview } from "@/types/blog";
import styles from "./home-sections.module.css";

type LatestContentSectionProps = {
  contents: readonly BlogPostPreview[];
};

export function LatestContentSection({ contents }: LatestContentSectionProps) {
  return (
    <section
      id="latest-content"
      className={`${styles.section} ${styles.contentSection}`}
      aria-labelledby="latest-content-title"
    >
      <div className="site-container">
        <SectionHeading
          id="latest-content-title"
          index="L/04"
          eyebrow="Field Notes / 观察记录"
          title="结论可以更新，推理过程必须留下"
          description="不同内容共享清晰元数据，但正文结构按类型处理。当前卡片用于验证信息层级和不同长度内容的适配。"
        />
        <div className={`${styles.grid} ${styles.threeColumnGrid}`}>
          {contents.map((content, index) => (
            <motion.div
              data-content-index={index}
              initial={false}
              transition={{ duration: 0.28, delay: index * 0.02 }}
              whileHover={{ y: -8 }}
              key={content.slug}
            >
              <ContentCard content={content} variant={index === 0 ? "featured" : "default"} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
