import { SectionHeading } from "@/components/ui/section-heading";
import type { ExperiencePreview } from "@/data/home";
import styles from "./home-sections.module.css";

type ExperienceSectionProps = {
  experiences: readonly ExperiencePreview[];
};

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section
      className={`${styles.section} ${styles.experienceSection}`}
      aria-labelledby="experience-title"
    >
      <div className="site-container">
        <SectionHeading
          id="experience-title"
          index="L/03"
          eyebrow="Time Log / 时间日志"
          title="学习与实践，按发生顺序留下记录"
          description="学习经历与实习实践会平衡呈现。组织名称、时间、职责和成果只有在本人确认后才会替换占位内容。"
        />
        <div className={styles.experienceGrid}>
          <span className={styles.timelineTrack} aria-hidden="true">
            <span />
          </span>
          {experiences.map((experience) => (
            <article className={styles.experienceCard} key={experience.title}>
              <span className={styles.timelineNode} aria-hidden="true" />
              <p className={styles.experiencePeriod}>{experience.period}</p>
              <div className={styles.experienceCopy}>
                <h3>{experience.title}</h3>
                <p className={styles.experienceOrganization}>{experience.organization}</p>
                <p className={styles.experienceSummary}>{experience.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
