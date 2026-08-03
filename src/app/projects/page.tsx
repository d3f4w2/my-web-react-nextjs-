import type { Metadata } from "next";
import { OpenSourceContributions } from "@/components/projects/open-source-contributions";
import { ProjectCard } from "@/components/projects/project-card";
import { otherProjects } from "@/data/home";
import { openSourceContributions } from "@/data/open-source";
import styles from "../collection-page.module.css";

export const metadata: Metadata = {
  title: "项目",
  description: "记录 Agent 项目的问题、个人职责、工程方法、公开边界与验证过程。",
};

export default function ProjectsPage() {
  return (
    <main id="main-content" className={styles.page} data-page="projects">
      <div className="site-container">
        <header className={styles.intro}>
          <p className={styles.eyebrow}>项目与方法</p>
          <h1 className={styles.title}>不只展示结果，也留下系统如何被做出来。</h1>
          <p className={styles.description}>
            这里记录真实工作、个人 Agent 原型与协作实践。没有确认的事实不包装成成果；受限内容先完成脱敏审查，再公开方法与证据。
          </p>
        </header>

        <OpenSourceContributions contributions={openSourceContributions} />

        <section className={styles.collection} aria-labelledby="project-list-title">
          <div className={styles.collectionHeader}>
            <h2 id="project-list-title">其他项目材料</h2>
            <p>问题、职责、边界、验证</p>
          </div>
          <div className={styles.grid} data-layout="projects">
            {otherProjects.map((project, index) => (
              <ProjectCard index={index + 1} project={project} key={project.title} />
            ))}
          </div>
        </section>

        <p className={styles.notice}>
          <strong>公开边界：</strong>
          上方开源贡献已经提供可核验的上游证据；其余项目材料仍在确认与脱敏，详情入口只会在问题背景、个人职责和证据都能够被准确说明后开放。
        </p>
      </div>
    </main>
  );
}
