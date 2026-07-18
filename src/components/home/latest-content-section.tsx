import { ContentCard } from "@/components/blog/content-card";
import { SectionHeading } from "@/components/ui/section-heading";
import type { ContentPreview } from "@/data/home";
import styles from "./home-sections.module.css";

type LatestContentSectionProps = {
  contents: readonly ContentPreview[];
};

export function LatestContentSection({ contents }: LatestContentSectionProps) {
  return (
    <section
      id="latest-content"
      className={styles.section}
      aria-labelledby="latest-content-title"
    >
      <div className="site-container">
        <SectionHeading
          id="latest-content-title"
          eyebrow="Notes / 内容中心"
          title="文章、学习记录与随笔放在同一个入口"
          description="不同内容共享清晰元数据，但正文结构按类型处理。当前卡片用于验证信息层级和不同长度内容的适配。"
        />
        <div className={`${styles.grid} ${styles.threeColumnGrid}`}>
          {contents.map((content) => (
            <ContentCard content={content} key={content.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
