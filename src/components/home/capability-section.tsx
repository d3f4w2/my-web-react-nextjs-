"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/section-heading";
import type { CapabilityItem } from "@/data/home";
import styles from "./home-sections.module.css";

type CapabilitySectionProps = {
  capabilities: readonly CapabilityItem[];
};

export function CapabilitySection({ capabilities }: CapabilitySectionProps) {
  return (
    <section
      className={`${styles.section} ${styles.capabilitySection}`}
      aria-labelledby="capability-title"
    >
      <div className="site-container">
        <SectionHeading
          id="capability-title"
          index="L/02"
          eyebrow="Tool Rack / 工具架"
          title="能力不是标签，而是正在使用的实验工具"
          description="这里先标记正在关注的能力，再由真实项目和文章逐步提供证据。尚未完成的学习不会包装成已经掌握。"
        />
        <div className={`${styles.grid} ${styles.threeColumnGrid}`}>
          {capabilities.map((capability, index) => (
            <motion.article
              className={styles.capabilityCard}
              data-index={capability.index}
              initial={false}
              whileHover={{ x: 8 }}
              transition={{ duration: 0.28, delay: index * 0.02 }}
              key={capability.index}
            >
              <div className={styles.capabilityTopline}>
                <span className={styles.capabilityIndex}>{capability.index}</span>
                <span className={styles.capabilitySignal} aria-hidden="true" />
              </div>
              <div className={styles.capabilityCopy}>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </div>
              <ul className={styles.keywordList} aria-label="方向关键词">
                {capability.keywords.map((keyword) => (
                  <li key={keyword}>{keyword}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
