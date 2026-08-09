import Image from "next/image";
import Link from "next/link";
import type { ExperiencePreview } from "@/data/home";
import { PointerImageFrame } from "./pointer-image-frame";
import styles from "./experience-section.module.css";

const articleImages = [
  "/assets/editorial/agent-runtime.webp",
  "/assets/editorial/agent-self-evolution.webp",
] as const;

type ExperienceSectionProps = {
  experiences: readonly ExperiencePreview[];
};

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="time-log" className={styles.section} aria-labelledby="experience-title">
      <header className={`site-container ${styles.header}`}>
        <h2 id="experience-title">把系统写明白。</h2>
        <p>不包装概念。两篇文章分别拆开 Agent 怎样执行任务，以及系统怎样安全地更新自己的能力。</p>
      </header>

      <div className={`site-container ${styles.entries}`}>
        {experiences.map((experience, index) => (
          <article className={styles.entry} key={experience.title}>
            <PointerImageFrame className={styles.imageFrame}>
              <Image
                src={articleImages[index] ?? articleImages[0]}
                alt={`${experience.title}文章页面预览`}
                fill
                sizes="(max-width: 768px) 100vw, 52vw"
              />
            </PointerImageFrame>

            <div className={styles.copy}>
              <time>{experience.period}</time>
              <h3>{experience.title}</h3>
              <p>{experience.summary}</p>
              {experience.href ? (
                <Link className={styles.action} href={experience.href} transitionTypes={["nav-forward"]}>
                  {experience.linkLabel ?? "阅读文章"}
                </Link>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
