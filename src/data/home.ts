import { openSourceContributions } from "./open-source";

export type CapabilityItem = {
  index: string;
  title: string;
  description: string;
  keywords: readonly string[];
};

export type ProjectPreview = {
  type: string;
  title: string;
  summary: string;
  responsibility: string;
  status: string;
  tags: readonly string[];
  href?: `/projects/${string}`;
  linkLabel?: string;
};

export type ExperiencePreview = {
  period: string;
  title: string;
  organization: string;
  summary: string;
  href?: `/blog/${string}`;
  linkLabel?: string;
};

export const capabilities = [
  {
    index: "01",
    title: "Agent 应用与自动化",
    description:
      "这里将整理任务编排、工具调用与人在回路等真实实践，当前内容等待逐项补充。",
    keywords: ["Workflow", "Tool Use", "Human-in-the-loop"],
  },
  {
    index: "02",
    title: "Agent 工程与评估",
    description:
      "这里将记录可观察性、评估方法与可靠性改进过程，不使用未经核实的效果数字。",
    keywords: ["Evaluation", "Tracing", "Reliability"],
  },
  {
    index: "03",
    title: "Agent 研究与实验",
    description:
      "这里将展示论文学习、原型验证和开放问题，保留失败实验与阶段性结论。",
    keywords: ["Research", "Prototype", "Reflection"],
  },
] satisfies readonly CapabilityItem[];

const HOMEPAGE_OPEN_SOURCE_LIMIT = 2;

const featuredOpenSourceProjects = openSourceContributions
  .filter((contribution) => contribution.featured)
  .slice(0, HOMEPAGE_OPEN_SOURCE_LIMIT)
  .map(
    (contribution): ProjectPreview => ({
      type: "开源贡献",
      title: `${contribution.repository.split(" / ")[0]}：${contribution.title}`,
      summary: contribution.summary,
      responsibility: contribution.scope,
      status: "已被上游合并",
      tags: contribution.tags,
      href: "/projects/#open-source-contributions",
      linkLabel: "查看全部开源贡献 →",
    }),
  );

export const otherProjects = [
  {
    type: "实习 / 工作项目",
    title: "受限项目：Agent 工作流实践",
    summary:
      "等待确认可公开范围后，只展示问题、个人职责、脱敏方案与可验证结果。",
    responsibility: "公开范围与个人职责仍待确认",
    status: "待脱敏审查",
    tags: ["Agent 协作", "责任边界", "结果验证"],
  },
] satisfies readonly ProjectPreview[];

export const featuredProjects = [
  ...otherProjects,
  ...featuredOpenSourceProjects,
] satisfies readonly ProjectPreview[];

export const experiences = [
  {
    period: "2026.07.30",
    title: "一项 Agent 任务，到底是怎么跑完的",
    organization: "Harness / Runtime / Multi-Agent / Agentic Coding",
    summary:
      "从 Issue 进入系统开始，拆开 Task、Session、Worker、Workspace、Tool 执行和代码交付之间的数据流。",
    href: "/blog/agent-runtime-from-loop-to-production",
    linkLabel: "查看完整技术文章",
  },
  {
    period: "2026.07.28",
    title: "Agent 自进化，不是让模型随便改自己",
    organization: "8 篇论文 / Agent 工程学习归档",
    summary:
      "把 Memory、Skill、Tool、Harness、评测、安全和发布重新组织成一条可验证、可灰度、可回滚的生产闭环。",
    href: "/blog/agent-self-evolution",
    linkLabel: "查看完整技术文章",
  },
] satisfies readonly ExperiencePreview[];
