import Link from "next/link";
import styles from "./hero-section.module.css";

const workflowSteps = [
  { index: "01", title: "Observe", detail: "输入 · 约束" },
  { index: "02", title: "Plan", detail: "目标 · 工具" },
  { index: "03", title: "Act", detail: "调用 · 协作" },
  { index: "04", title: "Evaluate", detail: "验证 · 迭代" },
] as const;

export function HeroSection() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={`site-container ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>AI Agent Internship Portfolio · Draft 01</p>
          <h1 id="hero-title" className={styles.title}>
            让 Agent 从一次演示，
            <span>走向可观察的工作流。</span>
          </h1>
          <p className={styles.lead}>
            这里将整理我的 Agent 项目、真实实践与学习记录。当前使用明确占位内容，所有经历、成果与数据都会在本人确认后公开。
          </p>
          <div className={styles.actions}>
            <Link className={styles.primaryAction} href="/projects">
              查看项目结构
              <span aria-hidden="true">↗</span>
            </Link>
            <a className={styles.secondaryAction} href="#latest-content">
              阅读学习记录
            </a>
          </div>
          <ul className={styles.signals} aria-label="当前网站状态">
            <li>
              <span>ROLE</span> AI Agent 开发 / 实习方向
            </li>
            <li>
              <span>MODE</span> 本地构建 · 内容草稿
            </li>
          </ul>
        </div>

        <div className={styles.workflowPanel} aria-label="Agent 工作流示意图">
          <div className={styles.panelHeader}>
            <div>
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </div>
            <p>workflow.agent.ts</p>
            <span>LOCAL</span>
          </div>
          <ol className={styles.workflowList}>
            {workflowSteps.map((step) => (
              <li className={styles.workflowStep} key={step.index}>
                <span className={styles.stepIndex}>{step.index}</span>
                <div>
                  <p>{step.title}</p>
                  <span>{step.detail}</span>
                </div>
              </li>
            ))}
          </ol>
          <div className={styles.panelFooter}>
            <p>
              <span>status</span> ready_for_iteration
            </p>
            <p>
              <span>content</span> placeholder_verified
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
