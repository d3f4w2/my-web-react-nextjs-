import Image from "next/image";
import Link from "next/link";
import type { ProjectPreview } from "@/data/home";
import { personalProjects } from "@/data/home";
import { openSourceProjectProfiles } from "@/data/open-source";
import { ProjectVideo } from "@/components/projects/project-video";
import styles from "./featured-projects-section.module.css";

type FeaturedProjectsSectionProps = {
  projects: readonly ProjectPreview[];
};

export function FeaturedProjectsSection({ projects }: FeaturedProjectsSectionProps) {
  const internship = projects[0];
  const personal = personalProjects[0];
  const openSource = projects.slice(1);

  if (!internship || !personal) return null;

  return (
    <section
      id="featured-projects"
      className={styles.section}
      aria-labelledby="featured-projects-title"
    >
      <header className={`site-container ${styles.header}`}>
        <h2 id="featured-projects-title">真正困难的，不是让模型回答。</h2>
        <p>是让它理解任务、进入真实平台、处理意外，并把结果交到用户手上。</p>
      </header>

      <article id="internship-work" className={styles.internship}>
        <div className={`site-container ${styles.internshipGrid}`}>
          <div className={styles.projectCopy}>
            <h3>{internship.title}</h3>
            <p className={styles.summary}>{internship.summary}</p>

            <div className={styles.role}>
              <h4>核心职责在 Agent 后端</h4>
              <p>{internship.responsibility}</p>
            </div>

            <div className={styles.actions}>
              {internship.officialHref ? (
                <a href={internship.officialHref} target="_blank" rel="noreferrer">
                  打开傻瓜比价官网
                </a>
              ) : null}
              <Link href={internship.href ?? "/projects"} transitionTypes={["nav-forward"]}>
                进入完整项目
              </Link>
            </div>
          </div>

          <div className={styles.mediaStage} aria-label="傻瓜比价产品演示">
            {internship.media?.map((item, index) => (
              <figure className={styles.mediaFrame} data-position={index} key={item.src}>
                <ProjectVideo src={item.src} poster={item.poster} title={item.title} />
                <figcaption>
                  <strong>{item.title}</strong>
                  <span>{item.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className={styles.capabilities}>
            <div>
              <strong>跨平台能力</strong>
              <p>统一美团、京东和饿了么的任务入口，处理规格、价格、套餐与平台差异。</p>
            </div>
            <div>
              <strong>执行可追踪</strong>
              <p>让任务从客户端到 Agent 后端保持同一执行标识，可以查看进度、停止任务和确认结果。</p>
            </div>
            <div>
              <strong>异常可恢复</strong>
              <p>处理链接识别、平台回调和系统权限异常，让真实设备上的任务不因一次失败直接中断。</p>
            </div>
          </div>

          <aside className={styles.team} aria-labelledby="team-title">
            <h4 id="team-title">团队</h4>
            <p>{internship.teamIntro}</p>
          </aside>
        </div>
      </article>

      <article className={styles.personal}>
        <div className={`site-container ${styles.personalGrid}`}>
          <div className={styles.personalLead}>
            <span className={styles.personalStatus}>{personal.status}</span>
            <h3>{personal.title}</h3>
            <p>{personal.summary}</p>
          </div>
          <div className={styles.personalWork}>
            <strong>不是再塞几个工具，是让 Agent 承担执行责任。</strong>
            <p>{personal.responsibility}</p>
            <Link href={personal.href ?? "/projects"} transitionTypes={["nav-forward"]}>
              查看当前实现与共建方向
            </Link>
          </div>

          <div className={styles.personalSystems} aria-label="pi-go 当前能力">
            <article>
              <h4>安全执行</h4>
              <p>持久权限、危险操作确认、工具保护与无交互安全拒绝。</p>
            </article>
            <article>
              <h4>可靠修改</h4>
              <p>可靠锚点、AST 批量修改、统一 Diff 与多文件原子写入。</p>
            </article>
            <article>
              <h4>验证恢复</h4>
              <p>verify、LSP、DAP、回合撤销和受控 Git 交付。</p>
            </article>
          </div>

          <div className={styles.personalVerification} aria-label="pi-go 当前验证结果">
            <p><strong>13 组 / 89 项</strong><span>核心系统测试通过</span></p>
            <p><strong>9 个包</strong><span>完整离线构建通过</span></p>
            <p><strong>持续开发</strong><span>正在寻找长期共建者</span></p>
          </div>
        </div>
      </article>

      <div className={`site-container ${styles.openSource}`}>
        <h3>这些修复已经进入开源项目。</h3>
        <div className={styles.openSourceAuthority}>
          {openSourceProjectProfiles.map((profile) => (
            <a
              className={styles.openSourceProject}
              data-project={profile.repository.toLowerCase()}
              href={profile.sourceUrl}
              target="_blank"
              rel="noreferrer"
              key={profile.repository}
            >
              <Image
                className={styles.openSourceLogo}
                src={profile.logo}
                alt={profile.logoAlt}
                width={profile.repository === "Mastra" ? 4096 : 1365}
                height={profile.repository === "Mastra" ? 1001 : 1365}
              />
              <strong>{profile.reach}</strong>
              <span>{profile.position}</span>
            </a>
          ))}
        </div>
        <div className={styles.openSourceList}>
          {openSource.map((project) => (
            <a
              href={project.externalHref}
              target="_blank"
              rel="noreferrer"
              key={project.pullRequest}
            >
              <span>{project.repository}</span>
              <strong>{project.title}</strong>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
