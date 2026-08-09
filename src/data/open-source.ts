export type OpenSourceContribution = {
  featured: boolean;
  repository: string;
  pullRequest: number;
  title: string;
  summary: string;
  scope: string;
  mergedAt: string;
  mergedBy: string;
  mergeCommit: string;
  pullRequestUrl: string;
  issueUrl: string;
  commitUrl: string;
  facts: readonly {
    label: string;
    value: string;
  }[];
  evidence: readonly string[];
  tags: readonly string[];
};

export type OpenSourceProjectProfile = {
  repository: OpenSourceContribution["repository"];
  logo: string;
  logoAlt: string;
  officialUrl: string;
  sourceUrl: string;
  reach: string;
  position: string;
  description: string;
  strengths: readonly string[];
};

export const openSourceProjectProfiles = [
  {
    repository: "Mastra",
    logo: "/assets/brands/mastra-wordmark.png",
    logoAlt: "Mastra",
    officialUrl: "https://mastra.ai/",
    sourceUrl: "https://github.com/mastra-ai/mastra",
    reach: "27K+ GitHub Stars",
    position: "现代 TypeScript Agent 框架",
    description:
      "从 Agent、工具与记忆，到可暂停恢复的工作流、评估和可观察性，Mastra 把生产级 Agent 所需的核心能力放进同一套 TypeScript 框架。",
    strengths: [
      "Agent 与工具调用",
      "可暂停、恢复与回放的工作流",
      "记忆、评估与可观察性",
      "1000+ 模型统一路由",
    ],
  },
  {
    repository: "OpenHands",
    logo: "/assets/brands/openhands-logo.svg",
    logoAlt: "OpenHands",
    officialUrl: "https://openhands.dev/",
    sourceUrl: "https://github.com/OpenHands/OpenHands",
    reach: "83K+ GitHub Stars",
    position: "开源 AI Coding Agent",
    description:
      "OpenHands 让 Coding Agent 在真实工作区里执行命令、编辑文件、浏览网页并处理完整软件任务，是成熟的开源代码智能体工程。",
    strengths: [
      "真实代码任务执行",
      "命令、文件、浏览器与 MCP 工具",
      "本地、容器与云端运行",
      "模型无关的 Agent 能力",
    ],
  },
] satisfies readonly OpenSourceProjectProfile[];

export const openSourceContributions = [
  {
    featured: true,
    repository: "Mastra",
    pullRequest: 20346,
    title: "修复只读记忆仍可能被写入的问题",
    summary:
      "在 Mastra 中，AI 任务等待工具审批或暂停恢复时，系统仍可能向已经设为只读的记忆存储写入消息。我在统一入口增加只读检查，同时保留正常的工具执行和恢复逻辑。",
    scope: "我独立复现问题、完成代码修改和回归测试，并根据维护者反馈调整测试。",
    mergedAt: "2026.08.06 01:26 CST",
    mergedBy: "Mastra 项目维护者",
    mergeCommit: "04944890",
    pullRequestUrl: "https://github.com/mastra-ai/mastra/pull/20346",
    issueUrl: "https://github.com/mastra-ai/mastra/issues/20341",
    commitUrl:
      "https://github.com/mastra-ai/mastra/commit/049448906e4c3d2d615bbe865b073a0d890ddb7c",
    facts: [
      {
        label: "修改范围",
        value: "3 个文件，新增 32 行，删除 1 行",
      },
      {
        label: "影响功能",
        value: "只读记忆、任务暂停与恢复",
      },
      {
        label: "测试结果",
        value: "22 项测试全部通过",
      },
    ],
    evidence: [
      "先复现任务等待工具审批时仍会写入只读记忆的问题。",
      "在任务暂停前的统一写入入口增加只读检查，不影响允许写入的正常任务。",
      "完成类型检查、代码格式检查和 22 项相关测试后，修改被维护者合并。",
    ],
    tags: ["Agent Memory", "Read-only Boundary", "Tool Suspension"],
  },
  {
    featured: true,
    repository: "Mastra",
    pullRequest: 20312,
    title: "修复浏览器断开连接后服务可能报错的问题",
    summary:
      "浏览器断开实时消息连接后，清理操作失败可能变成没有处理的异步错误，严重时会影响服务进程。我补上错误处理，并保留真正需要上报的消息流错误。",
    scope: "我独立复现问题、修改断连处理逻辑、补充集成测试，并完成上游审核。",
    mergedAt: "2026.08.03 00:02 CST",
    mergedBy: "abhiaiyer91",
    mergeCommit: "52363cfc",
    pullRequestUrl: "https://github.com/mastra-ai/mastra/pull/20312",
    issueUrl: "https://github.com/mastra-ai/mastra/issues/20307",
    commitUrl:
      "https://github.com/mastra-ai/mastra/commit/52363cfc5a06a75144679b4641b5b3a58877425b",
    facts: [
      {
        label: "修改范围",
        value: "3 个文件，新增 39 行，删除 1 行",
      },
      {
        label: "影响功能",
        value: "实时消息连接断开后的清理",
      },
      {
        label: "测试结果",
        value: "2,559 项测试通过",
      },
    ],
    evidence: [
      "确认问题来自连接断开后的清理失败没有被程序处理。",
      "增加集成测试，模拟清理失败并确认服务不会再产生未处理的异步错误。",
      "完成相关测试、构建和代码格式检查后，修改被维护者合并。",
    ],
    tags: ["Agent Runtime", "SSE", "Failure Handling"],
  },
  {
    featured: true,
    repository: "OpenHands",
    pullRequest: 16168,
    title: "禁用工作方法后，新会话不再继续加载它",
    summary:
      "OpenHands 中的工作方法（Skill）被用户禁用后，新建会话仍可能继续加载它。我把过滤逻辑放到统一的会话创建入口，并覆盖两种会话创建方式。",
    scope: "我独立复现问题、修改会话创建逻辑、补充回归测试，并完成上游审核。",
    mergedAt: "2026.07.30 22:50 CST",
    mergedBy: "VascoSch92",
    mergeCommit: "e3330fe",
    pullRequestUrl: "https://github.com/OpenHands/OpenHands/pull/16168",
    issueUrl: "https://github.com/OpenHands/OpenHands/issues/16166",
    commitUrl:
      "https://github.com/OpenHands/OpenHands/commit/e3330fe6c6e4a029682f631fc741d912bf1a07c3",
    facts: [
      {
        label: "修改范围",
        value: "2 个文件，新增 73 行，删除 4 行",
      },
      {
        label: "影响功能",
        value: "两种新会话创建方式",
      },
      {
        label: "审核结果",
        value: "维护者批准并合并",
      },
    ],
    evidence: [
      "通过浏览器操作复现：禁用内置工作方法后，新会话仍会加载它。",
      "为内置和自定义工作方法补充两类会话创建测试，8 项相关测试全部通过。",
      "完成代码检查、类型检查和应用构建后，修改被维护者批准并合并。",
    ],
    tags: ["Agent Context", "Skill System", "Regression Testing"],
  },
] satisfies readonly OpenSourceContribution[];
