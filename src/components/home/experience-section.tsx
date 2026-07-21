import type { ExperiencePreview } from "@/data/home";
import styles from "./experience-section.module.css";

type ExperienceSectionProps = {
  experiences: readonly ExperiencePreview[];
};

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="time-log" className={styles.section} aria-labelledby="experience-title">
      <div className={styles.filmRail} aria-hidden="true"><span /><span /></div>
      <div className="site-container">
        <header className={styles.header}>
          <p>TIME LOG / 时间日志</p>
          <h2 id="experience-title">正在发生的学习与实践</h2>
          <span>只记录能够公开确认的内容。</span>
        </header>

        <div className={styles.reelMeta} aria-hidden="true">
          <span>ROLL B / CHRONOLOGY</span>
          <span>FRAME INDEX · CONTINUOUS RECORD</span>
          <span>24 FPS</span>
        </div>

        <div className={styles.log}>
          {experiences.map((experience, index) => (
            <article className={styles.entry} key={experience.title}>
              <span className={styles.frameIndex} aria-hidden="true">FRAME 0{index + 1}</span>
              <p className={styles.period}>{experience.period}</p>
              <div className={styles.identity}>
                <h3>{experience.title}</h3>
                <p>{experience.organization}</p>
              </div>
              <p className={styles.summary}>{experience.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
