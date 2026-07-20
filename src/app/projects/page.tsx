import type { Metadata } from "next";
import { ProjectCard } from "@/components/projects/project-card";
import { featuredProjects } from "@/data/home";
import styles from "../collection-page.module.css";

export const metadata: Metadata = {
  title: "项目",
  description: "AI Agent 实践、个人项目与开源协作的项目索引。",
};

export default function ProjectsPage() {
  return (
    <main id="main-content" className={styles.page}>
      <div className="site-container">
        <header className={styles.intro}>
          <p className={styles.eyebrow}>Experiment Archive / 实验档案</p>
          <h1 className={styles.title}>每个项目，都应该留下可以复查的过程。</h1>
          <p className={styles.description}>
            这里将收录实习或真实工作项目、个人 Agent 项目，以及开源贡献或比赛实践。受限项目会先完成脱敏审查。
          </p>
        </header>

        <section className={styles.collection} aria-labelledby="project-list-title">
          <div className={styles.collectionHeader}>
            <h2 id="project-list-title">实验样本</h2>
            <p>03 SAMPLE RECORDS · CONTENT PENDING</p>
          </div>
          <div className={styles.grid} data-layout="projects">
            {featuredProjects.map((project, index) => (
              <ProjectCard index={index + 1} project={project} key={project.title} />
            ))}
          </div>
        </section>

        <p className={styles.notice}>
          <strong>为什么暂时没有详情链接？</strong>
          目前还没有经过本人确认的公开项目材料。确认后会在同一数据结构中加入详情路由，不会用虚假案例填满页面。
        </p>
      </div>
    </main>
  );
}
