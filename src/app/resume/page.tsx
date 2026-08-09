import type { Metadata } from "next";
import Link from "next/link";
import { PageFrame } from "@/components/layout/page-frame";
import { JsonLd } from "@/components/metadata/json-ld";
import { openSourceContributions } from "@/data/open-source";
import { absoluteUrl, siteConfig } from "@/lib/site";
import styles from "./resume.module.css";

const description = "211 本硕在读，精通 Agent 并具备全栈开发能力；拥有数学竞赛与西门子挑战赛获奖经历，以及 Wonderable AI 实习经验。";

export const metadata: Metadata = {
  title: "简历",
  description,
  alternates: { canonical: "/resume" },
  openGraph: { type: "profile", title: "简历", description, url: "/resume" },
};

const resumeJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: "简历",
  url: absoluteUrl("/resume"),
  description,
};

export default function ResumePage() {
  return (
    <PageFrame activeSection="resume">
      <JsonLd data={resumeJsonLd} />
      <main id="main-content" className={styles.page}>
        <header className={styles.hero}>
          <div className={`site-container ${styles.heroGrid}`}>
            <h1>
              <span>精通 Agent，</span>
              <span>也能完成</span>
              <span>全栈开发。</span>
            </h1>
            <p>211 本硕在读。曾实习于 Wonderable AI，能够独立完成 Agent 后端、Web 与客户端开发，并把产品真正交付出来。</p>
            <div className={styles.heroActions}>
              <a href={`mailto:${siteConfig.email}`}>发送邮件</a>
              <a href={siteConfig.github} target="_blank" rel="noreferrer">查看代码主页</a>
              <Link href="/projects" transitionTypes={["nav-forward"]}>查看全部项目</Link>
            </div>
          </div>
        </header>

        <section className={styles.profile} aria-labelledby="resume-profile-title">
          <div className={`site-container ${styles.profileIntro}`}>
            <h2 id="resume-profile-title">技术之外，也有硬成绩。</h2>
            <p>211 本硕在读；数学与工程竞赛均有获奖记录。</p>
          </div>
          <div className={`site-container ${styles.achievementGrid}`}>
            <article>
              <strong>211</strong>
              <h3>本硕在读</h3>
            </article>
            <article>
              <strong>多次二等奖</strong>
              <h3>全国大学生数学竞赛</h3>
            </article>
            <article>
              <strong>一等奖</strong>
              <h3>西门子挑战赛<br />网络化信息化方向</h3>
            </article>
            <article>
              <strong>Wonderable AI</strong>
              <h3>Agent 工程实习经历</h3>
            </article>
          </div>
        </section>

        <section className={`site-container ${styles.focus}`} aria-labelledby="resume-focus-title">
          <h2 id="resume-focus-title">Agent 与全栈开发能力。</h2>
          <div className={styles.focusGrid}>
            <article><h3>Agent 后端</h3><p>任务理解、执行主流程、平台能力、过程追踪、异常恢复与结果回传。</p></article>
            <article><h3>Agent Runtime</h3><p>持久权限、结构化修改、验证与调试、失败恢复、上下文治理和受控 Git 交付。</p></article>
            <article><h3>客户端联调</h3><p>Android 任务承接、执行标识贯通、过程状态展示和真实设备问题处理。</p></article>
            <article><h3>开源交付</h3><p>围绕并发、协议兼容与配置行为修复问题，并让代码通过上游维护者审查。</p></article>
          </div>
        </section>

        <section className={styles.experience} aria-labelledby="resume-experience-title">
          <div className="site-container">
            <h2 id="resume-experience-title">真实产品经历。</h2>
            <article className={styles.experienceEntry}>
              <div>
                <h3>Wonderable AI · Agent 核心开发实习</h3>
                <time>2026.05 至今</time>
              </div>
              <div>
                <p>负责 Agent 后端主流程与平台能力，让用户需求可以进入美团、京东和饿了么，完成比价、领券、过程追踪与结果回传。</p>
                <ul>
                  <li>建设三平台主能力，处理商品规格、价格、套餐与平台差异。</li>
                  <li>让执行标识贯穿 Android 与 Agent 后端，支持进度查看、停止任务和结果确认。</li>
                  <li>修复链接识别、平台回调和系统权限异常，补齐真实环境下的恢复能力。</li>
                  <li>维护价格识别测试数据与领券过程信息，使功能能够持续回归验证。</li>
                </ul>
                <Link href="/projects/shagua-agent" transitionTypes={["nav-forward"]}>进入完整项目详情</Link>
              </div>
            </article>
          </div>
        </section>

        <section className={`site-container ${styles.selectedWork}`} aria-labelledby="resume-work-title">
          <h2 id="resume-work-title">个人工程。</h2>
          <div className={styles.selectedWorkGrid}>
            <article>
              <h3 className={styles.piGoTitle}>PI-GO</h3>
              <p>正在开发的个人 Coding Agent 工程分支。已完成从权限、结构化修改、验证调试到回合撤销与 Git 交付的执行责任链；当前 9 个包构建与 13 组 89 项测试通过，并寻找长期共建者。</p>
              <Link href="/projects/pi-go" transitionTypes={["nav-forward"]}>查看当前实现与共建方向</Link>
            </article>
            <article>
              <h3>技术写作</h3>
              <p>把 Agent 的任务执行、审批、恢复，以及记忆、工具和工作方法的安全更新写成可复用的工程解释。</p>
              <Link href="/blog" transitionTypes={["nav-forward"]}>阅读技术文章</Link>
            </article>
          </div>
        </section>

        <section className={styles.openSource} aria-labelledby="resume-open-source-title">
          <div className="site-container">
            <h2 id="resume-open-source-title">已经被上游合并的代码。</h2>
            <div className={styles.contributions}>
              {openSourceContributions.map((contribution) => (
                <article key={contribution.pullRequestUrl}>
                  <h3>{contribution.title}</h3>
                  <p>{contribution.summary}</p>
                  <a href={contribution.pullRequestUrl} target="_blank" rel="noreferrer">查看合并记录</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`site-container ${styles.contact}`} aria-labelledby="resume-contact-title">
          <h2 id="resume-contact-title">如果方向一致，直接联系。</h2>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </section>
      </main>
    </PageFrame>
  );
}
