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
