export type ProjectDetail = {
  slug: "shagua-agent" | "pi-go";
  kind: "internship" | "personal";
  title: string;
  statement: string;
  summary: string;
  period: string;
  primaryHref: string;
  primaryLabel: string;
  externalHref?: string;
  externalLabel?: string;
  facts: readonly { title: string; value: string }[];
  challenge: { title: string; body: string };
  stages: readonly { title: string; body: string }[];
  work: readonly { title: string; body: string; proof: string }[];
  evidence: readonly string[];
  verification?: {
    title: string;
    summary: string;
    facts: readonly { value: string; label: string; detail: string }[];
  };
  architecture?: {
    title: string;
    summary: string;
    systems: readonly { title: string; body: string; capabilities: readonly string[] }[];
  };
  collaboration?: {
    title: string;
    body: string;
  };
  media?: readonly {
    src: string;
    poster: string;
    title: string;
    caption: string;
  }[];
  team?: string;
};

export const projectDetails = [
  {
    slug: "shagua-agent",
    kind: "internship",
    title: "让 Agent 进入真实平台，完成比价与领券。",
    statement: "我负责的核心不是界面，而是 Agent 后端怎样把一次用户意图变成可以执行、追踪、恢复并返回结果的完整任务。",
    summary: "傻瓜比价面向真实消费场景。用户在 Android 应用中提出需求，系统需要理解目标、进入不同平台、识别商品与价格、处理领券过程，并把可确认的结果送回应用。",
    period: "2026.05 至今",
    primaryHref: "https://shaguabijia.com/",
    primaryLabel: "打开傻瓜比价官网",
    facts: [
      { title: "核心职责", value: "Agent 后端主流程" },
      { title: "平台范围", value: "美团、京东、饿了么" },
      { title: "交付边界", value: "理解、执行、追踪、恢复、回传" },
    ],
    challenge: {
      title: "难点从来不是调用一次模型。",
      body: "真实平台会出现链接格式差异、商品规格变化、套餐结算差异、回调失败和系统权限异常。系统必须知道任务进行到哪里、失败发生在哪里，以及是否能够继续。",
    },
    stages: [
      { title: "接住任务", body: "Android 端提交用户目标与必要上下文，建立贯穿整个任务的执行标识。" },
      { title: "拆解目标", body: "Agent 判断任务属于比价、领券或具体平台操作，并选择对应的平台能力。" },
      { title: "进入平台", body: "调用美团、京东或饿了么的操作能力，处理商品、规格、价格与套餐差异。" },
      { title: "记录过程", body: "持续保存执行进度、领券信息和关键结果，让客户端可以查看或停止任务。" },
      { title: "返回结果", body: "把可确认的价格、优惠与执行状态送回 Android 应用，同时保留失败恢复入口。" },
    ],
    work: [
      {
        title: "统一 Agent 执行主流程",
        body: "把不同消费任务收敛到同一条任务生命周期中，明确开始、执行、停止、完成和失败状态，避免平台逻辑各自生长成无法追踪的脚本。",
        proof: "执行标识从 Android 端贯穿 Agent 后端，任务进度与最终结果可以对应到同一次请求。",
      },
      {
        title: "建设三大平台能力",
        body: "围绕美团、京东和饿了么实现对应能力，处理链接识别、商品规格、价格识别、套餐与结算等平台差异。",
        proof: "仓库记录包含三平台主能力对齐，以及饿了么、京东、美团相关功能与修复。",
      },
      {
        title: "让执行过程可追踪",
        body: "把比价和领券从一次黑盒调用改造成连续过程。客户端能够获得进度、停止执行，并在完成后读取对应结果。",
        proof: "功能演示展示了执行进度、停止任务、领券结果与比价结果的完整交互。",
      },
      {
        title: "处理真实环境里的失败",
        body: "补齐外部平台回调失败、链接识别异常和 Android 系统权限返回失败等问题，让一次局部异常不必直接终止整个任务。",
        proof: "持续维护异常修复与价格识别测试数据，使平台变化后仍能回归验证。",
      },
      {
        title: "承接 Android 侧联调",
        body: "负责客户端任务承接与后端联调，确保任务标识、过程状态和结果数据在设备与 Agent 后端之间保持一致。",
        proof: "产品演示来自真实 Android 流程，不是静态原型或概念页面。",
      },
    ],
    evidence: [
      "真实 Android 比价功能演示",
      "真实 Android 自动领券功能演示",
      "三平台能力与 Agent 后端提交记录",
      "链接识别、平台回调与系统权限异常修复记录",
      "价格识别测试数据与领券过程信息维护记录",
    ],
    media: [
      {
        src: "/assets/work/price-comparison-demo.mp4",
        poster: "/assets/work/price-comparison-poster.webp",
        title: "跨平台比价",
        caption: "Agent 进入外部购物平台，识别同一商品的规格与价格，并把结果送回应用。",
      },
      {
        src: "/assets/work/coupon-demo.mp4",
        poster: "/assets/work/coupon-poster.webp",
        title: "自动领券",
        caption: "任务执行过程可以被查看和停止，完成后在应用内确认领券结果。",
      },
    ],
    team: "团队从产品、Agent 后端到客户端共同完成 0 到 1 的交付。成员具有清华、北大、中科院、人大、哈工大、哥大等教育背景，以及微软、亚马逊、字节、腾讯、百度、华为等工作经验。",
  },
  {
    slug: "pi-go",
    kind: "personal",
    title: "pi-go：让 Coding Agent 对自己的执行负责。",
    statement: "这是我的个人 Coding Agent 工程分支。它不把能力停在生成代码，而是把权限、修改、验证、调试、恢复和交付做成同一条可控执行链。",
    summary: "pi-go 以 Pi 的 Agent Runtime、Coding Agent 和终端界面为上游基础，面向真实代码任务补齐执行安全与工程闭环。当前分支已经实现持久权限、结构化修改、验证控制、回合撤销、Git 交付、调试与本地运行环境，并通过完整离线构建和针对性测试。",
    period: "正在开发 · 寻找共建",
    primaryHref: "https://github.com/d3f4w2/pi",
    primaryLabel: "打开 pi-go 代码仓库",
    externalHref: "https://pi.dev",
    externalLabel: "查看 Pi 上游项目",
    facts: [
      { title: "工程形态", value: "Agent Runtime、CLI、TUI" },
      { title: "当前验证", value: "9 包构建、89 项测试" },
      { title: "核心闭环", value: "理解、修改、验证、恢复、交付" },
    ],
    challenge: {
      title: "写出代码，只完成了一半。",
      body: "真实 Coding Agent 还必须知道什么操作需要确认、修改是否落在正确位置、验证有没有发生、失败后怎样恢复，以及最终怎样安全提交。pi-go 把这些责任从提示词移到运行时。",
    },
    verification: {
      title: "当前版本已经可以被验证。",
      summary: "我直接在当前工作分支上完成离线构建和核心系统测试。第一次测试暴露出未构建的工作区依赖与 Windows 临时目录超时；补齐依赖后，失败测试全部重跑通过。",
      facts: [
        { value: "89", label: "项针对性测试", detail: "权限、撤销、Git、AST 编辑、调试、运行环境、指标与 Web 可靠性。" },
        { value: "13", label: "组核心测试", detail: "覆盖当前新增系统，不以页面文案代替实现验证。" },
        { value: "9", label: "个包离线构建", detail: "从 TUI、Agent Core 到 Coding Agent 的完整工作区构建通过。" },
      ],
    },
    architecture: {
      title: "不是工具堆砌，是一条执行责任链。",
      summary: "每个系统都对应 Coding Agent 在真实项目里必须承担的一类责任，并通过统一权限、事件与状态边界连接起来。",
      systems: [
        {
          title: "安全边界",
          body: "工具在执行前按读取、写入和运行分级；模式与单工具规则可持久化，明确危险操作不能被普通白名单绕过。",
          capabilities: ["持久工具权限", "危险操作确认", "无交互时安全拒绝"],
        },
        {
          title: "代码修改链",
          body: "从结构化搜索、可靠锚点到 AST 批量修改，所有写入先生成 Diff，再检查文件是否变化并原子落盘。",
          capabilities: ["AST 结构化修改", "统一 Diff", "多文件原子写入"],
        },
        {
          title: "验证与调试",
          body: "修改后由单 Agent 控制器检查验证证据；LSP、verify、DAP 调试器和持久 Python/Bun 环境共同承担定位与验证。",
          capabilities: ["修改后验证闭环", "DAP 调试", "持久代码运行"],
        },
        {
          title: "恢复与交付",
          body: "一次回合可以在不硬重置 Git 的前提下撤销；结构化 Git 只开放受控操作，本地指标记录任务是否真正完成。",
          capabilities: ["回合文件撤销", "结构化 Git", "隐私友好的运行指标"],
        },
      ],
    },
    collaboration: {
      title: "它已经能工作，也远没有结束。",
      body: "pi-go 正在持续开发。我在寻找愿意长期讨论并动手解决 Agent Runtime、工具安全、代码理解、验证恢复与终端交互问题的共建者。可以先看代码和现有测试，再通过 GitHub 或邮箱直接联系。",
    },
    stages: [
      { title: "理解", body: "结合结构搜索、LSP、网页读取与环境诊断，先确认代码和运行条件。" },
      { title: "约束", body: "工具权限、风险分级和调用保护决定哪些动作可以直接执行。" },
      { title: "修改", body: "可靠锚点与 AST 编辑生成可预览 Diff，并在写入前再次检查文件状态。" },
      { title: "验证", body: "verify、LSP、DAP 与持久运行环境提供当前修改之后的验证证据。" },
      { title: "交付", body: "结构化 Git 完成暂存和提交；失败时可以停止、撤销或恢复，而不是硬做到底。" },
    ],
    work: [
      {
        title: "持久权限与工具保护",
        body: "把工具划分为读取、写入和运行三类风险，提供便捷、标准、严格三种模式，以及单工具允许、询问或禁止规则。设置会跨会话保存，关键危险操作始终再次确认。",
        proof: "当前分支包含 /permissions 管理界面、无交互安全拒绝和危险命令保护；tool-approval 与 permissions 测试通过。",
      },
      {
        title: "结构化代码修改",
        body: "为精确修改保留可靠锚点，为跨文件同构修改提供 AST 模式。批量变更在内存中生成完整结果，展示统一 Diff，检查竞争修改后再原子写入，途中失败会回滚。",
        proof: "可靠锚点提交 d9cb819e5；当前分支 ast_edit、Diff 渲染与原子写入测试通过。",
      },
      {
        title: "修改后的验证闭环",
        body: "单 Agent 控制器记录代码修改是否在当前变更之后经过 verify 或 LSP 诊断。正常流程完全静默，只有 Agent 准备结束却漏掉验证时才发出有限提醒。",
        proof: "当前分支 execution-controller 测试通过；不会无限重试，也不会在验证工具缺失时拖垮任务。",
      },
      {
        title: "回合级文件撤销",
        body: "每次 Agent 工作前记录真实 Git 工作区基线，能够一起恢复修改、新建、删除和重命名；如果文件后来被用户或其他程序改过，整次撤销会停止，不覆盖新变化。",
        proof: "当前分支 turn-undo 服务与交互测试通过；不运行 git reset --hard，也不修改索引、提交或 stash。",
      },
      {
        title: "结构化 Git 交付",
        body: "Agent 和用户共享同一套受控 Git 能力，只开放状态、Diff、历史、明确文件暂存、提交和推送，不接受任意参数，也不提供强推和硬重置。",
        proof: "当前分支 git 工具与交互测试通过；提交会核对声明文件与真实暂存区，推送必须确认。",
      },
      {
        title: "调试与持久运行环境",
        body: "统一 DAP 客户端支持断点、单步、调用栈、变量和求值；Python 与 Bun 代码可以在同一项目内复用长驻进程，避免每次验证都重新启动环境。",
        proof: "当前分支 DAP 协议、debug 扩展与 eval 扩展测试通过；无适配器时快速返回安装提示。",
      },
      {
        title: "运行指标与 Web 可靠性",
        body: "本地指标只记录耗时、工具计数、错误和验证结果，不保存提示、参数、路径或代码。网页请求设置并发上限、重复请求合并和取消隔离，并保留 SSRF 与大小限制。",
        proof: "当前分支 run-metrics 与 web-extension 测试通过；失败只终止当前工具调用，不击穿进程。",
      },
      {
        title: "环境、长任务与上下文治理",
        body: "在运行前检查环境，在长任务中维护清晰状态，隔离代理循环异常与重复工具失败，并控制无效历史占用上下文。",
        proof: "提交 8aeb57a2d、587a68215、673082b0a、bf97a72f2、420534aa7 与 0e2524c70。",
      },
    ],
    evidence: [
      "当前工作区 9 个包完成离线构建",
      "13 组、89 项核心系统测试最终全部通过",
      "权限、撤销、Git、AST 编辑、调试、评估与指标均有对应架构文档和测试",
      "工具保护、环境诊断、长任务、失败隔离、上下文治理与可靠编辑保留连续提交记录",
      "公开仓库用于核实已提交历史；当前工作分支能力以本地构建和测试结果为准",
    ],
  },
] as const satisfies readonly ProjectDetail[];

export function getProjectDetail(slug: string): ProjectDetail | undefined {
  return projectDetails.find((project) => project.slug === slug);
}
