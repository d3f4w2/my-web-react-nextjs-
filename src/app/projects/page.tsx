import type { Metadata } from "next";
import { PageFrame } from "@/components/layout/page-frame";
import { JsonLd } from "@/components/metadata/json-ld";
import { OpenSourceContributions } from "@/components/projects/open-source-contributions";
import { ProjectCard } from "@/components/projects/project-card";
import { otherProjects, personalProjects } from "@/data/home";
import { openSourceContributions } from "@/data/open-source";
import { absoluteUrl } from "@/lib/site";
import styles from "../collection-page.module.css";

const description = "真实 Agent 产品、个人运行时扩展和已被上游合并的开源修复。每项工作都说明职责、难点与验证依据。";

export const metadata: Metadata = {
  title: "项目",
  description,
  alternates: { canonical: "/projects" },
  openGraph: { type: "website", title: "项目", description, url: "/projects" },
  twitter: { card: "summary_large_image", title: "项目", description },
};

const projectsJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Agent 工程项目",
  url: absoluteUrl("/projects"),
  description,
  mainEntity: {
    "@type": "ItemList",
    itemListElement: openSourceContributions.map((contribution, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: contribution.pullRequestUrl,
      name: contribution.title,
      description: contribution.summary,
    })),
  },
};

export default function ProjectsPage() {
  return (
    <PageFrame activeSection="projects">
      <JsonLd data={projectsJsonLd} />
      <main id="main-content" className={styles.page} data-page="projects">
        <div className="site-container">
          <header className={styles.intro}>
            <h1 className={styles.title}>
              <span>行动留下证据。</span>
              <span>故障留下方法。</span>
            </h1>
          </header>

          <section id="internship-work" className={styles.collection} aria-labelledby="internship-title">
            <div className={styles.collectionHeader}>
              <h2 id="internship-title">实习项目</h2>
            </div>
            <div className={styles.grid} data-layout="projects">
              {otherProjects.map((project, index) => (
                <ProjectCard index={index + 1} project={project} key={project.title} />
              ))}
            </div>
          </section>

          <section id="personal-work" className={styles.collection} aria-labelledby="personal-title">
            <div className={styles.collectionHeader}>
              <h2 id="personal-title">个人项目</h2>
            </div>
            <div className={styles.grid} data-layout="projects">
              {personalProjects.map((project, index) => (
                <ProjectCard index={index + 2} project={project} key={project.title} />
              ))}
            </div>
          </section>

          <OpenSourceContributions contributions={openSourceContributions} />

        </div>
      </main>
    </PageFrame>
  );
}
