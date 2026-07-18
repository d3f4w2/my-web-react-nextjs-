import { SectionHeading } from "@/components/ui/section-heading";
import type { CapabilityItem } from "@/data/home";
import styles from "./home-sections.module.css";

type CapabilitySectionProps = {
  capabilities: readonly CapabilityItem[];
};

export function CapabilitySection({ capabilities }: CapabilitySectionProps) {
  return (
    <section
      className={`${styles.section} ${styles.borderedSection}`}
      aria-labelledby="capability-title"
    >
      <div className="site-container">
        <SectionHeading
          id="capability-title"
          eyebrow="Focus / 关注方向"
          title="从应用到评估，保留完整学习链路"
          description="先用结构说明准备展示的能力，再用真实项目和文章逐步提供证据。这里不会把尚未补充的经历包装成完成项。"
        />
        <div className={`${styles.grid} ${styles.threeColumnGrid}`}>
          {capabilities.map((capability) => (
            <article className={styles.capabilityCard} key={capability.index}>
              <span className={styles.capabilityIndex}>{capability.index}</span>
              <div className={styles.capabilityCopy}>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </div>
              <ul className={styles.keywordList} aria-label="方向关键词">
                {capability.keywords.map((keyword) => (
                  <li key={keyword}>{keyword}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
