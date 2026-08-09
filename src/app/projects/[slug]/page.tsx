import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageFrame } from "@/components/layout/page-frame";
import { JsonLd } from "@/components/metadata/json-ld";
import { ProjectVideo } from "@/components/projects/project-video";
import { getProjectDetail, projectDetails } from "@/data/project-details";
import { absoluteUrl, siteConfig } from "@/lib/site";
import styles from "./project-detail.module.css";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projectDetails.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectDetail((await params).slug);
  if (!project) return {};

  return {
    title: project.kind === "internship" ? "傻瓜比价 Agent 项目" : "pi-go 个人 Coding Agent 工程",
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "article",
      title: project.title,
      description: project.summary,
      url: `/projects/${project.slug}`,
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = getProjectDetail((await params).slug);
  if (!project) notFound();

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: absoluteUrl(`/projects/${project.slug}`),
  };

  return (
    <PageFrame activeSection="projects">
      <JsonLd data={projectJsonLd} />
      <main id="main-content" className={styles.page} data-project-kind={project.kind}>
        <header className={styles.hero}>
          <div className={`site-container ${styles.heroGrid}`}>
            <p className={styles.period}>{project.period}</p>
            <h1>{project.title}</h1>
            <p className={styles.statement}>{project.statement}</p>
            <div className={styles.actions}>
              <a href={project.primaryHref} target="_blank" rel="noreferrer">
                {project.primaryLabel}
              </a>
              {project.externalHref ? (
                <a href={project.externalHref} target="_blank" rel="noreferrer">
                  {project.externalLabel}
                </a>
              ) : null}
              <Link href="/projects" transitionTypes={["nav-back"]}>返回项目列表</Link>
            </div>
          </div>
        </header>

        <section className={`site-container ${styles.facts}`} aria-label="项目范围">
          {project.facts.map((fact) => (
            <div key={fact.title}>
              <h2>{fact.title}</h2>
              <p>{fact.value}</p>
            </div>
          ))}
        </section>

        <section className={styles.challenge}>
          <div className={`site-container ${styles.challengeGrid}`}>
            <h2>{project.challenge.title}</h2>
            <p>{project.challenge.body}</p>
          </div>
        </section>

        {project.verification ? (
          <section className={styles.verification} aria-labelledby="project-verification-title">
            <div className={`site-container ${styles.verificationIntro}`}>
              <h2 id="project-verification-title">{project.verification.title}</h2>
              <p>{project.verification.summary}</p>
            </div>
            <div className={`site-container ${styles.verificationFacts}`}>
              {project.verification.facts.map((fact) => (
                <article key={fact.label}>
                  <strong>{fact.value}</strong>
                  <h3>{fact.label}</h3>
                  <p>{fact.detail}</p>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {project.architecture ? (
          <section className={styles.architecture} aria-labelledby="project-architecture-title">
            <div className={`site-container ${styles.architectureIntro}`}>
              <h2 id="project-architecture-title">{project.architecture.title}</h2>
              <p>{project.architecture.summary}</p>
            </div>
            <div className={`site-container ${styles.systemGrid}`}>
              {project.architecture.systems.map((system) => (
                <article key={system.title}>
                  <h3>{system.title}</h3>
                  <p>{system.body}</p>
                  <ul>
                    {system.capabilities.map((capability) => <li key={capability}>{capability}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {project.media ? (
          <section className={`site-container ${styles.mediaSection}`} aria-labelledby="project-media-title">
            <h2 id="project-media-title">产品真实运行。</h2>
            <div className={styles.mediaGrid}>
              {project.media.map((item, index) => (
                <figure key={item.src} data-position={index}>
                  <ProjectVideo src={item.src} poster={item.poster} title={item.title} />
                  <figcaption>
                    <strong>{item.title}</strong>
                    <p>{item.caption}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        ) : null}

        <section className={`site-container ${styles.flow}`} aria-labelledby="project-flow-title">
          <h2 id="project-flow-title">
            {project.kind === "internship" ? "一次任务怎样穿过系统。" : "一次代码任务，怎样被 pi-go 接住。"}
          </h2>
          <div className={styles.flowTrack}>
            {project.stages.map((stage) => (
              <article key={stage.title}>
                <h3>{stage.title}</h3>
                <p>{stage.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.work} aria-labelledby="project-work-title">
          <div className="site-container">
            <h2 id="project-work-title">{project.kind === "personal" ? "这些系统已经进入当前分支。" : "我真正做下去的部分。"}</h2>
            <div className={styles.workList}>
              {project.work.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <div>
                    <p>{item.body}</p>
                    <strong>{item.proof}</strong>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`site-container ${styles.evidence}`} aria-labelledby="project-evidence-title">
          <h2 id="project-evidence-title">{project.kind === "personal" ? "构建、测试与代码证据。" : "可以继续核实的证据。"}</h2>
          <ul>
            {project.evidence.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        {project.collaboration ? (
          <section className={styles.collaboration} aria-labelledby="project-collaboration-title">
            <div className={`site-container ${styles.collaborationGrid}`}>
              <h2 id="project-collaboration-title">{project.collaboration.title}</h2>
              <div>
                <p>{project.collaboration.body}</p>
                <div className={styles.collaborationActions}>
                  <a href={project.primaryHref} target="_blank" rel="noreferrer">先看代码与进展</a>
                  <a href={`mailto:${siteConfig.email}?subject=pi-go%20共建`}>联系一起开发</a>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {project.team ? (
          <section className={styles.team} aria-labelledby="project-team-title">
            <div className={`site-container ${styles.teamGrid}`}>
              <h2 id="project-team-title">这是一支怎样的团队。</h2>
              <p>{project.team}</p>
            </div>
          </section>
        ) : null}
      </main>
    </PageFrame>
  );
}
