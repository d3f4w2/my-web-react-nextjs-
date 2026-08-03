export type OpenSourceContribution = {
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

export const openSourceContributions = [
  {
    repository: "Mastra / mastra",
    pullRequest: 20312,
    title: "让 Hono SSE 断连清理失败不再击穿服务进程",
    summary:
      "修复客户端断开 SSE 连接后，ReadableStream reader.cancel() 拒绝因缺少处理而逃逸为未处理 Promise rejection 的问题。适配器现在在断连边界接住清理失败，同时保留正常的流错误报告语义。",
    scope: "独立复现、边界修复、集成回归测试与上游协作",
    mergedAt: "2026.08.03 · 00:02 CST",
    mergedBy: "abhiaiyer91",
    mergeCommit: "52363cfc",
    pullRequestUrl: "https://github.com/mastra-ai/mastra/pull/20312",
    issueUrl: "https://github.com/mastra-ai/mastra/issues/20307",
    commitUrl:
      "https://github.com/mastra-ai/mastra/commit/52363cfc5a06a75144679b4641b5b3a58877425b",
    facts: [
      {
        label: "改动规模",
        value: "3 files · +39 / −1",
      },
      {
        label: "影响路径",
        value: "Hono SSE abort",
      },
      {
        label: "验证规模",
        value: "2,559 tests",
      },
    ],
    evidence: [
      "定位客户端断连后 reader.cancel() 的拒绝未被消费，导致异步清理错误逃逸为未处理 rejection。",
      "补充真实取消失败的集成回归测试，验证断连清理不会再产生未处理 rejection。",
      "完成 @mastra/hono 测试、lint、构建与格式检查，并在维护者批准后进入上游 main。",
    ],
    tags: ["Agent Runtime", "SSE", "Failure Handling"],
  },
  {
    repository: "OpenHands / OpenHands",
    pullRequest: 16168,
    title: "让禁用的 Skill 真正退出新会话的 Agent 上下文",
    summary:
      "修复 Skill 在设置中被禁用后，仍会被带入新会话 agent_context 的一致性缺陷。过滤逻辑统一放在上下文构建入口，同时覆盖 OpenHands 与 ACP 两条会话创建路径。",
    scope: "独立复现、修复、回归测试与上游协作",
    mergedAt: "2026.07.30 · 22:50 CST",
    mergedBy: "VascoSch92",
    mergeCommit: "e3330fe",
    pullRequestUrl: "https://github.com/OpenHands/OpenHands/pull/16168",
    issueUrl: "https://github.com/OpenHands/OpenHands/issues/16166",
    commitUrl:
      "https://github.com/OpenHands/OpenHands/commit/e3330fe6c6e4a029682f631fc741d912bf1a07c3",
    facts: [
      {
        label: "改动规模",
        value: "2 files · +73 / −4",
      },
      {
        label: "影响路径",
        value: "OpenHands + ACP",
      },
      {
        label: "上游结论",
        value: "Maintainer approved",
      },
    ],
    evidence: [
      "浏览器端复现禁用 bundled skill 后创建新会话的真实请求流程。",
      "补充 bundled / custom skill 在两类 Agent 路径中的回归覆盖，定向测试 8 / 8 通过。",
      "完成 lint、格式、类型检查与应用构建验证，随后由上游维护者批准并合并。",
    ],
    tags: ["Agent Context", "Skill System", "Regression Testing"],
  },
] satisfies readonly OpenSourceContribution[];
