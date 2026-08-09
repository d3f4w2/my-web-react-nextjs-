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
        <span>能力更新流程</span>
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
  ["M", "记忆（Memory）", "缺少事实、偏好或已经验证的经验"],
  ["H", "执行控制（Harness）", "任务拆分、工具选择或检查过程有问题"],
  ["S", "工作方法（Skill）", "缺少稳定、可以重复使用的操作步骤"],
  ["T", "工具（Tool）", "接口、参数、返回结果或执行过程有问题"],
  ["θ", "模型（Model）", "信息完整时仍无法完成基础任务"],
  ["G", "权限规则", "动作不应被允许，或缺少人工审批"],
] as const;

export function AssetMap() {
  return (
    <figure className={styles.figure}>
      <div className={styles.figureHeader}>
        <span>先判断问题出在哪里</span>
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
        <span>怎样验证新版本</span>
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
  "扩大使用 / 恢复旧版",
] as const;

export function ReleaseRail() {
  return (
    <figure className={styles.figure}>
      <div className={styles.figureHeader}>
        <span>怎样逐步发布新版本</span>
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
        每个新版本都要记录模型、记忆、执行规则、工作方法、工具、参数格式、代码、数据和测试结果。
      </figcaption>
    </figure>
  );
}

export function RuntimeMap() {
  return (
    <figure className={styles.figure}>
      <div className={styles.figureHeader}>
        <span>谁决定动作，谁负责执行</span>
      </div>
      <div className={styles.runtime}>
        <section>
          <span>负责判断和记录</span>
          <strong>执行控制程序</strong>
          <p>检查身份、权限、模型请求、人工审批、运行记录和恢复状态</p>
        </section>
        <i aria-hidden="true">受限任务与结果 ⇄</i>
        <section>
          <span>负责运行真实动作</span>
          <strong>隔离执行环境</strong>
          <p>限制文件、命令、网络、进程、依赖和计算资源</p>
        </section>
      </div>
      <figcaption>
        模型提出动作，控制程序检查是否允许，隔离环境负责执行。
      </figcaption>
    </figure>
  );
}

const taskRuntimeSteps = [
  ["01", "登记", "去掉重复请求，创建任务和执行记录"],
  ["02", "领取", "队列通知后端进程接手任务"],
  ["03", "执行", "控制程序调用模型和工具，必要时等待人工审批"],
  ["04", "验证", "运行测试、自动检查和人工审查"],
  ["05", "交付", "提交代码、创建合并请求，失败时恢复任务"],
] as const;

export function TaskRuntimeFlow() {
  return (
    <figure className={styles.figure}>
      <div className={styles.figureHeader}>
        <span>一项任务怎样完成</span>
      </div>
      <ol className={styles.taskFlow}>
        {taskRuntimeSteps.map(([index, title, description]) => (
          <li key={index}>
            <span>{index}</span>
            <strong>{title}</strong>
            <p>{description}</p>
          </li>
        ))}
      </ol>
      <figcaption>
        模型调用只占中间一段。任务入口、状态、恢复和交付都由模型外部的系统负责。
      </figcaption>
    </figure>
  );
}

const runtimeIdentities = [
  ["任务（Task）", "要完成的事情", "这件事是否仍然需要完成"],
  ["执行记录（Session）", "当前进度", "这次 AI 执行已经进行到哪里"],
  ["接手记录（Attempt）", "一次执行尝试", "哪个后端进程正在处理任务"],
  ["工作目录（Workspace）", "文件位置", "代码、文件和测试结果放在哪里"],
] as const;

export function RuntimeIdentityMap() {
  return (
    <figure className={styles.figure}>
      <div className={styles.figureHeader}>
        <span>系统需要分别保存的四类信息</span>
      </div>
      <div className={styles.identityMap}>
        {runtimeIdentities.map(([name, role, description]) => (
          <article key={name}>
            <span>{name}</span>
            <strong>{role}</strong>
            <p>{description}</p>
          </article>
        ))}
      </div>
      <figcaption>
        Worker 可以消失，Attempt 可以重建；Task、Session 和已保存的 Workspace 仍要允许系统继续工作。
      </figcaption>
    </figure>
  );
}

const harnessSteps = [
  ["准备信息", "只提供当前步骤需要的目标、规则和结果"],
  ["模型建议", "模型提出回复或工具调用请求"],
  ["检查请求", "检查参数格式、权限和人工审批"],
  ["执行工具", "调用真实代码或外部接口"],
  ["保存结果", "整理并保存结果，再交给模型决定下一步"],
] as const;

export function HarnessLoopMap() {
  return (
    <figure className={styles.figure}>
      <div className={styles.figureHeader}>
        <span>控制程序怎样推进任务</span>
      </div>
      <ol className={styles.harnessLoop}>
        {harnessSteps.map(([title, description], index) => (
          <li key={title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{title}</strong>
            <p>{description}</p>
          </li>
        ))}
      </ol>
      <div className={styles.loopReturn} aria-hidden="true">
        <span>工具结果会回到下一步输入，直到任务完成</span>
      </div>
      <figcaption>
        模型只负责提出动作。检查、执行、保存结果和停止任务都由控制程序完成。
      </figcaption>
    </figure>
  );
}

export function AgentTeamMap() {
  return (
    <figure className={styles.figure}>
      <div className={styles.figureHeader}>
        <span>长任务中的三个职责</span>
      </div>
      <div className={styles.agentTeam}>
        <section>
          <span>01</span>
          <strong>计划</strong>
          <p>根据目标和证据决定下一步</p>
        </section>
        <i aria-hidden="true">下发当前步骤 →</i>
        <section>
          <span>02</span>
          <strong>执行</strong>
          <p>执行步骤并提交结果与证据</p>
        </section>
        <i aria-hidden="true">结果与证据 →</i>
        <section>
          <span>03</span>
          <strong>验收</strong>
          <p>按验收标准决定通过或退回</p>
        </section>
      </div>
      <div className={styles.feedbackRail}>
        <span>没有通过：说明具体问题，再重新制定下一步</span>
      </div>
      <figcaption>
        这三项是职责，不一定需要三个 AI。简单任务可以由一个 AI 分阶段完成。
      </figcaption>
    </figure>
  );
}
