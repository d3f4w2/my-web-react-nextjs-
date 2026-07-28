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
    type: "开源 / 比赛",
    title: "开源协作：实践记录",
    summary:
      "将根据真实材料补充 issue、贡献内容、团队分工与最终结果，不创建虚假链接。",
    responsibility: "贡献内容、协作范围与结果待整理",
    status: "材料待整理",
    tags: ["Open Source", "Collaboration", "Learning"],
  },
] satisfies readonly ProjectPreview[];

export const experiences = [
  {
    period: "2026.07",
    title: "Agent 自进化，不是让模型随便改自己",
    organization: "8 篇论文 / Agent 工程学习归档",
    summary:
      "把 Memory、Skill、Tool、Harness、评测、安全和发布重新组织成一条可验证、可灰度、可回滚的生产闭环。",
    href: "/blog/agent-self-evolution",
    linkLabel: "查看完整技术文章",
  },
  {
    period: "待填写",
    title: "实习 / 真实工作经历",
    organization: "组织名称暂不公开",
    summary:
      "公开版本只保留经过审查的职责、方法与结果，受限业务信息不会进入网站。",
  },
] satisfies readonly ExperiencePreview[];
