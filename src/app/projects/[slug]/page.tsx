import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageFrame } from "@/components/layout/page-frame";
import { JsonLd } from "@/components/metadata/json-ld";
import { InternshipDemo } from "@/components/projects/internship-demo";
import { InternshipResultEvidence } from "@/components/projects/internship-result-evidence";
import { CopyInstallCommand } from "@/components/projects/copy-install-command";
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
    title: project.kind === "internship" ? "傻瓜比价 Agent 项目" : "PI-GO 个人 Coding Agent 工程",
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
  const isPiGo = project.kind === "personal";

  const projectJsonLd = project.release
    ? {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: project.title,
        description: project.summary,
        url: absoluteUrl(`/projects/${project.slug}`),
        applicationCategory: "DeveloperApplication",
        operatingSystem: project.release.platforms.join(", "),
        softwareVersion: project.release.version,
        downloadUrl: project.release.registryHref,
        sameAs: [project.release.registryHref, project.release.repositoryHref],
        isAccessibleForFree: true,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
      }
    : {
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
            <h1>
              {isPiGo ? (
                <span className={styles.piGoName}>{project.title}</span>
              ) : (
                <span className={styles.shaguaName}>{project.title}</span>
              )}
            </h1>
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

        {project.release ? (
          <section className={styles.release} aria-labelledby="pigo-release-title">
            <div className={`site-container ${styles.releaseShell}`}>
              <div className={styles.releaseIntro}>
                <p className={styles.releaseEyebrow}>PUBLIC RELEASE / NPM</p>
                <h2 id="pigo-release-title">一行安装，任何目录直接启动。</h2>
                <p>
                  PI-GO 已经不是本机演示包。公开版本从 npm 官方注册表安装，命令固定为
                  <strong> {project.release.executable}</strong>；安装后可以先运行 doctor，再进入真实工程。
                </p>
              </div>

              <div className={styles.releaseConsole} aria-label="PI-GO 安装命令">
                <div className={styles.releaseConsoleBar}>
                  <span>NPM / {project.release.channel.toUpperCase()}</span>
                  <span>PUBLIC</span>
                </div>
                <div className={styles.installCommand}>
                  <span aria-hidden="true">$</span>
                  <code>{project.release.installCommand}</code>
                  <CopyInstallCommand
                    command={project.release.installCommand}
                    className={styles.copyCommand}
                  />
                </div>
                <div className={styles.launchCommand}>
                  <span>安装完成后</span>
                  <code>{project.release.launchCommand}</code>
                  <code>pigo doctor</code>
                </div>
              </div>

              <dl className={styles.releaseMeta}>
                <div>
                  <dt>VERSION</dt>
                  <dd>v{project.release.version}</dd>
                </div>
                <div>
                  <dt>PACKAGE</dt>
                  <dd>{project.release.packageName}</dd>
                </div>
                <div>
                  <dt>RUNTIME</dt>
                  <dd>Node {project.release.nodeRequirement}</dd>
                </div>
                <div>
                  <dt>PLATFORMS</dt>
                  <dd>{project.release.platforms.join(" / ")}</dd>
                </div>
              </dl>

              <div className={styles.releaseProof}>
                <h3>公开发行验收</h3>
                <ol>
                  {project.release.verification.map((item) => <li key={item}>{item}</li>)}
                </ol>
              </div>

              <div className={styles.releaseLinks}>
                <a href={project.release.registryHref} target="_blank" rel="noreferrer">
                  在 npm 查看公开包 ↗
                </a>
                <a href={project.release.repositoryHref} target="_blank" rel="noreferrer">
                  查看 GitHub 源码 ↗
                </a>
              </div>
            </div>
          </section>
        ) : null}

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
            <div className={styles.mediaIntro}>
              <h2 id="project-media-title">领券 / 比价</h2>
              <p>两段完整 Android 操作演示。点击步骤，可以直接跳到对应位置。</p>
            </div>
            <InternshipDemo items={project.media} />
            {project.resultEvidence ? <InternshipResultEvidence evidence={project.resultEvidence} /> : null}
          </section>
        ) : null}

        <section className={`site-container ${styles.flow}`} aria-labelledby="project-flow-title">
          <h2 id="project-flow-title">
            {project.kind === "internship" ? "一次任务怎样穿过系统。" : "一次代码任务，怎样被 PI-GO 接住。"}
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
                  <a href={`mailto:${siteConfig.email}?subject=PI-GO%20共建`}>联系一起开发</a>
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
