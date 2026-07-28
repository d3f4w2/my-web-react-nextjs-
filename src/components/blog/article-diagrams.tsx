import type { CSSProperties, ReactNode } from "react";
import styles from "./article-diagrams.module.css";

type CalloutProps = {
  label: string;
  tone?: "thesis" | "warning" | "note";
  children: ReactNode;
};

export function Callout({
  label,
  tone = "note",
  children,
}: CalloutProps) {
  return (
    <aside className={styles.callout} data-tone={tone}>
      <p>{label}</p>
      <div>{children}</div>
    </aside>
  );
}

const evolutionSteps = [
  ["01", "记录", "保存任务、决策、动作、结果与反馈"],
  ["02", "归因", "定位应该修改哪个能力组件"],
  ["03", "生成", "提出带版本和来源的候选更新"],
  ["04", "验证", "检查修复、泛化、回归、安全与成本"],
  ["05", "发布", "影子运行、灰度、晋升或回滚"],
] as const;

export function EvolutionLoop() {
  return (
    <figure className={styles.figure}>
      <div className={styles.figureHeader}>
        <span>EVOLUTION LOOP</span>
        <i>跨任务闭环</i>
      </div>
      <ol className={styles.loop}>
        {evolutionSteps.map(([index, title, description]) => (
          <li key={index}>
            <span>{index}</span>
            <div>
              <strong>{title}</strong>
              <p>{description}</p>
            </div>
          </li>
        ))}
      </ol>
      <figcaption>
        更新只有在进入后续任务，并且仍可验证和回滚时，才成为系统能力的一部分。
      </figcaption>
    </figure>
  );
}

const assets = [
  ["M", "Memory", "缺少事实、偏好或可复用经验"],
  ["H", "Harness", "分解、路由、检查或重规划有问题"],
  ["S", "Skill", "缺少稳定、可复用的领域操作方法"],
  ["T", "Tool", "接口、参数、返回或执行效率有问题"],
  ["θ", "Model", "给足信息后仍稳定缺少基础能力"],
  ["G", "Governance", "动作不应被允许，或缺少审批边界"],
] as const;

export function AssetMap() {
  return (
    <figure className={styles.figure}>
      <div className={styles.figureHeader}>
        <span>CHANGE TARGET</span>
        <i>先归因，再修改</i>
      </div>
      <div className={styles.assetMap}>
        {assets.map(([code, name, description]) => (
          <article key={name}>
            <b>{code}</b>
            <div>
              <strong>{name}</strong>
              <p>{description}</p>
            </div>
          </article>
        ))}
      </div>
      <figcaption>
        “改 Prompt”不是默认答案。修改范围越接近真实根因，副作用通常越可控。
      </figcaption>
    </figure>
  );
}

const evaluationLayers = [
  ["本次修复", "具体错误是否真的消失"],
  ["相似与新任务", "改动是否形成可迁移能力"],
  ["固定回归", "历史关键能力是否退化"],
  ["隐藏与安全", "是否过拟合，是否出现越权或欺诈"],
  ["工程与线上", "Token、延迟、成本、稳定性和真实流量"],
] as const;

export function EvaluationStack() {
  return (
    <figure className={styles.figure}>
      <div className={styles.figureHeader}>
        <span>EVALUATION STACK</span>
        <i>不是一个准确率</i>
      </div>
      <ol className={styles.stack}>
        {evaluationLayers.map(([title, description], index) => (
          <li key={title} style={{ "--layer": index } as CSSProperties}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{title}</strong>
            <p>{description}</p>
          </li>
        ))}
      </ol>
      <figcaption>
        局部提升不能抵消关键能力回归。高风险错误即使只出现一次，也可能阻止晋升。
      </figcaption>
    </figure>
  );
}

const releaseSteps = [
  "候选版本",
  "沙箱验证",
  "影子运行",
  "小流量灰度",
  "逐步扩大",
  "晋升 / 回滚",
] as const;

export function ReleaseRail() {
  return (
    <figure className={styles.figure}>
      <div className={styles.figureHeader}>
        <span>RELEASE RAIL</span>
        <i>把更新当作发布工程</i>
      </div>
      <ol className={styles.rail}>
        {releaseSteps.map((step, index) => (
          <li key={step}>
            <span>{index + 1}</span>
            <strong>{step}</strong>
          </li>
        ))}
      </ol>
      <figcaption>
        新版本必须携带完整血缘：模型、Memory、Harness、Skill、Tool、Schema、代码、数据和评测结果。
      </figcaption>
    </figure>
  );
}

export function RuntimeMap() {
  return (
    <figure className={styles.figure}>
      <div className={styles.figureHeader}>
        <span>CONTROL / EXECUTION</span>
        <i>可信控制面与受限执行面</i>
      </div>
      <div className={styles.runtime}>
        <section>
          <span>CONTROL PLANE</span>
          <strong>Harness</strong>
          <p>身份、策略、模型调用、审批、Trace、恢复和版本状态</p>
        </section>
        <i aria-hidden="true">受限任务与结果 ⇄</i>
        <section>
          <span>EXECUTION PLANE</span>
          <strong>Sandbox</strong>
          <p>文件、Shell、网络、进程、依赖和计算资源</p>
        </section>
      </div>
      <figcaption>
        模型提出动作，Harness 决定是否允许，Sandbox 负责在技术边界内执行。
      </figcaption>
    </figure>
  );
}
