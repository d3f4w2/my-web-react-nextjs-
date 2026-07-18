import { SectionHeading } from "@/components/ui/section-heading";
import type { ExperiencePreview } from "@/data/home";
import styles from "./home-sections.module.css";

type ExperienceSectionProps = {
  experiences: readonly ExperiencePreview[];
};

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section
      className={`${styles.section} ${styles.borderedSection}`}
      aria-labelledby="experience-title"
    >
      <div className="site-container">
        <SectionHeading
          id="experience-title"
          eyebrow="Experience / 经历"
          title="学生身份，也保留真实实践的分量"
          description="学习经历与实习实践会平衡呈现。组织名称、时间、职责和成果只有在本人确认后才会替换占位内容。"
        />
        <div className={styles.experienceGrid}>
          {experiences.map((experience) => (
            <article className={styles.experienceCard} key={experience.title}>
              <p className={styles.experiencePeriod}>{experience.period}</p>
              <div className={styles.experienceCopy}>
                <h3>{experience.title}</h3>
                <p className={styles.experienceOrganization}>
                  {experience.organization}
                </p>
                <p className={styles.experienceSummary}>{experience.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
