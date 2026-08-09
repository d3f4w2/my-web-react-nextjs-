import { openSourceContributions } from "./open-source";

export type ProjectPreview = {
  type: string;
  title: string;
  summary: string;
  responsibility: string;
  status: string;
  tags: readonly string[];
  href?: `/projects/${string}`;
  linkLabel?: string;
  repository?: string;
  pullRequest?: number;
  externalHref?: string;
  officialHref?: string;
  teamIntro?: string;
  mergedAt?: string;
  mergeCommit?: string;
  facts?: readonly {
    label: string;
    value: string;
  }[];
  evidence?: readonly string[];
  period?: string;
  media?: readonly {
    src: string;
    poster: string;
    title: string;
    caption: string;
  }[];
};

export type ExperiencePreview = {
  period: string;
  title: string;
  organization: string;
  summary: string;
  href?: `/blog/${string}`;
  linkLabel?: string;
};

const HOMEPAGE_OPEN_SOURCE_LIMIT = 3;

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
      linkLabel: "查看完整记录",
      repository: contribution.repository,
      pullRequest: contribution.pullRequest,
      externalHref: contribution.pullRequestUrl,
      mergedAt: contribution.mergedAt,
      mergeCommit: contribution.mergeCommit,
      facts: contribution.facts,
      evidence: contribution.evidence,
    }),
  );

export const otherProjects = [
  {
    type: "AI 电商产品",
    title: "傻瓜比价",
    summary:
      "用户在 Android 应用中提出需求后，Agent 会理解任务、调用不同平台的操作能力、识别商品与价格，并把可确认的比价或领券结果送回应用。",
    responsibility:
      "作为核心开发成员，我的主要职责在 Agent 后端：搭建任务执行主流程，建设美团、京东和饿了么的平台能力，完善领券与比价的过程追踪、结果回传和异常恢复；同时负责 Android 侧任务承接与联调。",
    status: "核心开发成员",
    tags: ["Agent 后端", "平台能力", "执行追踪", "Android"],
    href: "/projects/shagua-agent",
    linkLabel: "进入实习项目",
    officialHref: "https://shaguabijia.com/",
    teamIntro:
      "团队成员具有清华、北大、中科院、人大、哈工大、哥大等教育背景，以及微软、亚马逊、字节、腾讯、百度、华为等工作经验。团队围绕真实消费场景，从产品、Agent 后端到客户端共同完成 0 到 1 的交付。",
    period: "2026.05 至今",
    facts: [
      { label: "核心职责", value: "Agent 后端主流程与平台能力" },
      { label: "平台范围", value: "美团、京东、饿了么" },
      { label: "交付范围", value: "任务理解、执行、追踪、恢复与结果回传" },
    ],
    evidence: [
      "为三大外卖平台建设统一的主能力，并处理商品规格、价格识别、套餐结算和平台回调差异。",
      "把执行标识从 Android 端贯穿到 Agent 后端，使领券和比价任务可以追踪进度、停止执行并返回结果。",
      "补齐链接识别、回调失败、系统权限返回失败等真实环境问题，让任务在异常情况下仍能恢复。",
      "持续维护价格识别测试数据和领券过程信息，让功能迭代可以被验证。",
    ],
    media: [
      {
        src: "/assets/work/price-comparison-demo.mp4",
        poster: "/assets/work/price-comparison-poster.webp",
        title: "跨平台比价",
        caption: "AI 打开外部购物平台，识别同一商品的规格并比较价格。",
      },
      {
        src: "/assets/work/coupon-demo.mp4",
        poster: "/assets/work/coupon-poster.webp",
        title: "自动领券",
        caption: "用户可以看到执行进度、停止任务，并在应用中查看领券结果。",
      },
    ],
  },
] satisfies readonly ProjectPreview[];

export const personalProjects = [
  {
    type: "个人项目",
    title: "PI-GO",
    summary:
      "以 Pi 为上游基础持续演进的个人 Coding Agent 工程分支。它把权限、代码修改、验证、调试、恢复和 Git 交付连成一条可控执行链。",
    responsibility:
      "当前版本已完成持久工具权限、可靠锚点与 AST 修改、修改后验证、DAP 调试、持久运行环境、回合撤销、结构化 Git、运行指标和 Web 可靠性等系统；项目仍在持续开发，并寻找愿意一起把 Coding Agent 做进真实工程的人。",
    status: "正在开发 · 寻找共建",
    tags: ["权限边界", "结构化修改", "验证闭环", "失败恢复"],
    href: "/projects/pi-go",
    externalHref: "https://github.com/d3f4w2/pi",
    linkLabel: "进入 PI-GO",
    facts: [
      { label: "工程形态", value: "Agent Runtime、CLI 与终端界面" },
      { label: "当前验证", value: "9 个包离线构建、13 组 89 项测试通过" },
      { label: "项目状态", value: "持续开发，寻找长期共建者" },
    ],
    evidence: [
      "已形成理解、约束、修改、验证、恢复与交付的完整责任链。",
      "当前分支 9 个包离线构建通过，13 组 89 项针对性测试最终全部通过。",
      "权限、撤销、Git、AST 编辑、调试、评估与指标均有实现、架构记录与测试。",
    ],
  },
] satisfies readonly ProjectPreview[];

export const featuredProjects = [
  ...otherProjects,
  ...featuredOpenSourceProjects,
] satisfies readonly ProjectPreview[];

export const experiences = [
  {
    period: "2026.07.30",
    title: "一项 AI 任务从开始到交付，系统内部发生了什么",
    organization: "任务保存、执行、暂停、恢复和交付",
    summary:
      "用一个代码修复任务，说明系统怎样保存任务、调用工具、等待审批、从失败中恢复，并最终提交代码。",
    href: "/blog/agent-runtime-from-loop-to-production",
    linkLabel: "查看完整技术文章",
  },
  {
    period: "2026.07.28",
    title: "AI 系统怎样安全地更新记忆、工具和工作方法",
    organization: "根据八篇论文整理的工程方法",
    summary:
      "解释系统怎样从失败中提取改进方案，经过测试后逐步发布，并在出现问题时恢复旧版本。",
    href: "/blog/agent-self-evolution",
    linkLabel: "查看完整技术文章",
  },
] satisfies readonly ExperiencePreview[];
