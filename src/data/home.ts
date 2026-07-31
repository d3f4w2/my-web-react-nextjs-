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

export const featuredProjects = [
  {
    type: "实习 / 工作项目",
    title: "受限项目：Agent 工作流实践",
    summary:
      "等待确认可公开范围后，只展示问题、个人职责、脱敏方案与可验证结果。",
    responsibility: "公开范围与个人职责仍待确认",
    status: "待脱敏审查",
    tags: ["Agent 协作", "责任边界", "结果验证"],
  },
  {
    type: "个人 Agent 项目",
    title: "个人项目：从想法到可运行原型",
    summary:
      "将补充动机、独立负责范围、Agent 架构、关键决策与迭代记录。",
    responsibility: "项目范围与个人负责部分待补充",
    status: "内容待补充",
    tags: ["Prototype", "Tool Calling", "Iteration"],
  },
  {
    type: "开源贡献",
    title: "OpenHands：禁用 Skill 上下文修复",
    summary:
      "修复禁用 Skill 仍进入新会话 Agent context 的一致性缺陷，同时覆盖 OpenHands 与 ACP 路径；PR #16168 已由上游维护者批准并合并。",
    responsibility: "独立复现、修复、回归测试与上游协作",
    status: "已被上游合并",
    tags: ["Open Source", "Agent Context", "Regression Testing"],
    href: "/projects/#open-source-contributions",
  },
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
