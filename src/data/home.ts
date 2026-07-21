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
};

export type ContentPreview = {
  type: string;
  title: string;
  summary: string;
  status: string;
  tags: readonly string[];
  href?: `/blog/${string}`;
};

export const capabilities = [
  { index: "01", title: "Agent 应用与自动化", description: "记录任务编排、工具调用与人在回路等真实实践，当前内容等待逐项补充。", keywords: ["Workflow", "Tool Use", "Human-in-the-loop"] },
  { index: "02", title: "Agent 工程与评估", description: "记录可观测性、评估方法与可靠性改进过程，不使用未经核实的效果数字。", keywords: ["Evaluation", "Tracing", "Reliability"] },
  { index: "03", title: "Agent 研究与实验", description: "展示论文学习、原型验证和开放问题，保留失败实验与阶段性结论。", keywords: ["Research", "Prototype", "Reflection"] },
] satisfies readonly CapabilityItem[];

export const featuredProjects = [
  { type: "实习 / 工作项目", title: "[受限项目占位] Agent 工作流实践", summary: "确认可公开范围后，只展示问题、个人职责、脱敏方案与可验证结果。", responsibility: "个人职责与公开边界等待本人确认", status: "待脱敏审查", tags: ["Agent 协作", "责任边界", "结果验证"] },
  { type: "个人 Agent 项目", title: "[个人项目占位] 从想法到可运行原型", summary: "将补充动机、独立负责范围、Agent 架构、关键决策与迭代记录。", responsibility: "项目范围与个人负责部分等待补充", status: "内容待补充", tags: ["Prototype", "Tool Calling", "Iteration"] },
  { type: "开源 / 比赛", title: "[贡献占位] 开源协作或比赛实践", summary: "根据真实材料补充 issue、贡献内容、团队分工与最终结果，不创建虚假链接。", responsibility: "贡献内容、协作范围与结果等待整理", status: "材料待整理", tags: ["Open Source", "Collaboration", "Learning"] },
] satisfies readonly ProjectPreview[];

export const experiences = [
  { period: "现在", title: "AI Agent 方向学习与项目实践", organization: "[个人经历占位]", summary: "用于梳理已经完成和正在进行的学习、实验与项目，具体时间和内容等待本人确认。" },
  { period: "待填写", title: "实习 / 真实工作经历", organization: "[组织名称暂不公开]", summary: "公开版本只保留经过审查的职责、方法与结果，受限业务信息不会进入网站。" },
] satisfies readonly ExperiencePreview[];

export const latestContent = [
  { type: "完整技术文章", title: "[文章占位] 如何拆解一个 Agent 工作流", summary: "计划从问题背景、核心概念、实现过程、结果分析与参考资料展开。", status: "草稿占位", tags: ["Agent Workflow", "Engineering"] },
  { type: "短学习记录", title: "[学习记录占位] 一次工具调用实验", summary: "计划记录学习目标、实验过程、遇到的问题、当前结论与下一步。", status: "草稿占位", tags: ["Tool Use", "Experiment"] },
  { type: "随笔", title: "[随笔占位] 我如何理解 Agent 的可靠性", summary: "保留更自由的思考形式，同时明确区分事实、经验、推测与尚未验证的观点。", status: "草稿占位", tags: ["Reflection", "Reliability"] },
] satisfies readonly ContentPreview[];
