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

const taskRuntimeSteps = [
  ["01", "登记", "外部请求去重，创建 Task 与 Session"],
  ["02", "领取", "队列唤醒 Worker，创建新的 Attempt"],
  ["03", "执行", "Harness 驱动模型、Tool 与审批"],
  ["04", "验证", "测试、Evaluator、CI 与人工审查"],
  ["05", "交付", "提交版本、PR、发布或失败恢复"],
] as const;

export function TaskRuntimeFlow() {
  return (
    <figure className={styles.figure}>
      <div className={styles.figureHeader}>
        <span>TASK RUNTIME</span>
        <i>一项任务怎样穿过系统</i>
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
  ["Task", "业务目标", "这件事是否仍然需要完成"],
  ["Session", "执行现场", "某次 Agent 执行当前进行到哪里"],
  ["Attempt", "一次接手", "哪个 Worker 正在推进这段执行"],
  ["Workspace", "工作目录", "代码、文件和测试产物放在哪里"],
] as const;

export function RuntimeIdentityMap() {
  return (
    <figure className={styles.figure}>
      <div className={styles.figureHeader}>
        <span>RUNTIME IDENTITIES</span>
        <i>不要把四个对象混成“会话”</i>
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
  ["Context", "当前需要知道什么"],
  ["Model", "提出回复或 Tool Call"],
  ["Validate", "检查 Schema、权限与审批"],
  ["Handler", "调用真实代码或外部 API"],
  ["Result", "标准化、保存并送回模型"],
] as const;

export function HarnessLoopMap() {
  return (
    <figure className={styles.figure}>
      <div className={styles.figureHeader}>
        <span>HARNESS LOOP</span>
        <i>决定一步，执行一步</i>
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
        <span>Tool Result 返回 Context，直到模型给出最终回复</span>
      </div>
      <figcaption>
        模型只能提出动作。验证、执行、落库和循环终止都属于 Harness。
      </figcaption>
    </figure>
  );
}

export function AgentTeamMap() {
  return (
    <figure className={styles.figure}>
      <div className={styles.figureHeader}>
        <span>PLANNER / EXECUTOR / EVALUATOR</span>
        <i>长任务中的三个职责</i>
      </div>
      <div className={styles.agentTeam}>
        <section>
          <span>01</span>
          <strong>Planner</strong>
          <p>根据目标和证据决定下一步</p>
        </section>
        <i aria-hidden="true">下发当前步骤 →</i>
        <section>
          <span>02</span>
          <strong>Executor</strong>
          <p>执行步骤并提交结果与证据</p>
        </section>
        <i aria-hidden="true">结果与证据 →</i>
        <section>
          <span>03</span>
          <strong>Evaluator</strong>
          <p>按验收标准决定通过或退回</p>
        </section>
      </div>
      <div className={styles.feedbackRail}>
        <span>不通过：带着具体问题回到 Planner</span>
      </div>
      <figcaption>
        三者是职责，不一定对应三种不同模型。简单任务可以由一个 Agent 分阶段完成。
      </figcaption>
    </figure>
  );
}
