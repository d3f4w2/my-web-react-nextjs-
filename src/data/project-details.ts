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
    durationSeconds: number;
    durationLabel: string;
    responsibilities: readonly string[];
    chapters: readonly {
      at: number;
      label: string;
      body: string;
    }[];
  }[];
  resultEvidence?: {
    image: string;
    alt: string;
    title: string;
    summary: string;
    caption: string;
    points: readonly {
      title: string;
      body: string;
    }[];
  };
  team?: string;
};

export const projectDetails = [
  {
    slug: "shagua-agent",
    kind: "internship",
    title: "傻瓜比价",
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
      "真实比价结果页与优惠后价格回传",
      "三平台能力与 Agent 后端提交记录",
      "链接识别、平台回调与系统权限异常修复记录",
      "价格识别测试数据与领券过程信息维护记录",
    ],
    media: [
      {
        src: "/assets/work/price-comparison-full.mp4",
        poster: "/assets/work/price-comparison-poster.webp",
        title: "比价",
        caption: "从傻瓜比价发起任务，进入多个消费平台完成商品选择、规格识别与价格比较，再把结果送回应用。",
        durationSeconds: 132,
        durationLabel: "02:12",
        responsibilities: ["跨平台任务编排", "商品与规格识别", "价格结果回传"],
        chapters: [
          { at: 0, label: "发起", body: "在应用内提交要比较的商品。" },
          { at: 18, label: "选品", body: "进入平台并确认商品与规格。" },
          { at: 61, label: "切换", body: "继续进入其他平台寻找同款。" },
          { at: 105, label: "对齐", body: "统一规格后比较可成交价格。" },
          { at: 126, label: "回传", body: "把可确认的结果送回应用。" },
        ],
      },
      {
        src: "/assets/work/coupon-full.mp4",
        poster: "/assets/work/coupon-poster.webp",
        title: "领券",
        caption: "从应用发起领券任务，连续进入外部平台领取优惠，过程可追踪、可停止，完成后统一返回结果。",
        durationSeconds: 91,
        durationLabel: "01:31",
        responsibilities: ["领券任务生命周期", "执行进度追踪", "异常恢复与结果汇总"],
        chapters: [
          { at: 0, label: "开始", body: "创建领券任务并生成执行标识。" },
          { at: 13, label: "执行", body: "进入平台逐项领取可用优惠。" },
          { at: 39, label: "换台", body: "切换平台并保持同一任务进度。" },
          { at: 66, label: "追踪", body: "应用持续显示数量与执行状态。" },
          { at: 84, label: "完成", body: "汇总领券结果并返回应用。" },
        ],
      },
    ],
    resultEvidence: {
      image: "/assets/work/price-comparison-result.webp",
      alt: "傻瓜比价结果页展示淘宝、美团和京东的可比商品、优惠后价格、节省金额、最低价提示与继续购买入口。",
      title: "Agent 最后必须给出答案。",
      summary: "外部平台跑完之后，系统把可比商品、优惠后价格和差异说明送回傻瓜比价。用户看到的是可以判断、可以继续操作的结果，不是一句模糊的“任务完成”。",
      caption: "真实结果页，截取自上方完整比价演示的结果回传阶段。",
      points: [
        {
          title: "价格算清",
          body: "每个平台分别展示优惠后的可成交价格和已节省金额，最低价直接标出。",
        },
        {
          title: "差异说清",
          body: "商品不完全一致时保留规格差异与近似替换说明，不把不同商品伪装成同款。",
        },
        {
          title: "行动接上",
          body: "结果保留购买或查看入口，用户可以继续进入对应平台完成下一步。",
        },
      ],
    },
    team: "团队从产品、Agent 后端到客户端共同完成 0 到 1 的交付。成员具有清华、北大、中科院、人大、哈工大、哥大等教育背景，以及微软、亚马逊、字节、腾讯、百度、华为等工作经验。",
  },
  {
    slug: "pi-go",
    kind: "personal",
    title: "PI-GO",
    statement: "一个 Coding Agent 不该只会生成代码。PI-GO 把能力发现、权限与沙箱、可靠修改、验证评测、记忆学习和失败恢复收进同一套本地工程运行时。",
    summary: "PI-GO 以 Pi 为上游基础，将轻量终端 Agent 扩展为可执行、可验证、可控制、可恢复的单代理工程平台。当前工作区已经收口统一能力治理、跨平台 OS 沙箱、代码智能、上下文生命周期、证据评测、长期记忆、受控学习、MCP / ACP 与隔离任务 Worker，并完成专项验证。",
    period: "正在开发 · 寻找共建",
    primaryHref: "https://github.com/d3f4w2/pi",
    primaryLabel: "打开 PI-GO 代码仓库",
    externalHref: "https://pi.dev",
    externalLabel: "查看 Pi 上游项目",
    facts: [
      { title: "工程定位", value: "可执行、可验证、可控制、可恢复" },
      { title: "代码智能", value: "11 种 AST、15 项 LSP、23 项 DAP" },
      { title: "验证基线", value: "65 个测试文件、608 项专项测试" },
    ],
    challenge: {
      title: "工具越多，失控面就越大。",
      body: "能力增加会同时放大权限分叉、上下文膨胀、失败重试和自证式验证。PI-GO 不把这些问题继续交给提示词，而是在运行时分开用户授权、模型可见性、调用审批与 OS 强制边界，并要求每次修改留下可以复核的证据。",
    },
    verification: {
      title: "每个结论都要能复跑。",
      summary: "这里展示的是 2026-08-10 工作区基线，不把本机专项测试写成全平台发布结果，也不把固定实验写成线上 SLA。代码、测试、隐藏验收、原始基准和架构记录共同构成证据。",
      facts: [
        { value: "608", label: "项专项测试", detail: "分布在 65 个测试文件，覆盖 Coding Agent、Agent Core、AI、Evals 与脚本。" },
        { value: "84.0%", label: "上下文输入减少", detail: "固定长任务中活动消息 29 → 3，估算输入 48,910 → 7,850，关键证据全部保留。" },
        { value: "67.1%", label: "Windows RPC 启动中位耗时降低", detail: "七次交错本机基准由 6.165 秒降至 2.031 秒，并保存原始样本。" },
      ],
    },
    architecture: {
      title: "把 Agent 拆成四个互相制约的面。",
      summary: "协议、工具和模型都可以继续增加，但权限不能被能力绕过，结论不能由执行者自己证明，真正的文件与网络边界必须落到进程外。",
      systems: [
        {
          title: "控制面",
          body: "统一管理项目信任、工具开关、风险审批、持久权限、沙箱模式和学习候选，普通能力不能自行修改控制状态。",
          capabilities: ["项目信任", "按需能力暴露", "持久审批策略"],
        },
        {
          title: "能力与上下文面",
          body: "把读取、搜索、AST、LSP、DAP、Git、Browser、MCP 与 ACP 收敛到同一执行策略，并让可选能力按需加载、失败降级。",
          capabilities: ["统一能力路由", "上下文生命周期", "有界并发与熔断"],
        },
        {
          title: "证据面",
          body: "记录 Diff、类型诊断、测试、隐藏验收、Token、延迟和真实失败回归，用确定性结果回答任务为什么算完成。",
          capabilities: ["隔离 Agent Evals", "隐藏验收", "真实失败回归"],
        },
        {
          title: "进程外强制面",
          body: "由进程 broker 和 OS 后端执行文件、进程与网络边界：Linux 使用 Bubblewrap，macOS 使用 Seatbelt，Windows 支持受限令牌和独立低权限用户 + WFP。",
          capabilities: ["默认失败关闭", "精确网络授权", "跨平台沙箱"],
        },
      ],
    },
    collaboration: {
      title: "基线已经收口，项目仍在继续。",
      body: "PI-GO 正在持续开发。我在寻找愿意长期讨论并动手解决 Agent Runtime、OS 沙箱、代码智能、评测记忆、协议接入与终端交互问题的共建者。可以先核实代码、测试和架构记录，再通过 GitHub 或邮箱联系。",
    },
    stages: [
      { title: "理解任务", body: "用统一读取、精确搜索、11 语言 AST 与项目 LSP 确认代码结构和运行条件。" },
      { title: "按需加载", body: "低频工具、MCP、浏览器与语言服务只在需要时发现和启动，不把全部 Schema 塞进每一轮。" },
      { title: "安全执行", body: "调用先经过信任、审批与风险判断，再由进程 broker 和 OS 沙箱执行文件、进程与网络边界。" },
      { title: "留下证据", body: "Diff、类型检查、测试、DAP 与隐藏验收共同确认修改结果；失败可以熔断、撤销或降级。" },
      { title: "受控改进", body: "有效事实绑定来源进入记忆，重复失败只有经过同条件 A/B、灰度、批准与回滚门禁才会改变行为。" },
    ],
    work: [
      {
        title: "统一主 Agent 能力平台",
        body: "分开能力注册、用户允许、模型临时可见与调用审批；执行层统一处理 180 秒超时、连续失败熔断、恢复探测、脱敏错误，以及只读共享、写入独占的有界调度。",
        proof: "能力平台跨功能基线记录 15 个测试文件、105 个用例通过；低频工具每轮最多临时暴露两个。",
      },
      {
        title: "默认轻量 OS 沙箱",
        body: "为模型驱动的文件与进程工具实现默认失败关闭的跨平台边界。Windows 强后端使用独立低权限用户、会话 ACL 与 WFP 默认断网，需要联网时只批准精确 host:port。",
        proof: "沙箱聚焦基线覆盖 11 个测试文件、77 个用例；真实 Windows 集成确认直接出网拒绝、精确批准目的地可访问。",
      },
      {
        title: "本地代码智能与可靠编辑",
        body: "把统一读取、精确搜索、结构大纲、可靠锚点、AST 批量编辑、项目 LSP、DAP 和 Verify 串成代码任务链；写入前复核文件版本，多文件失败时逆序回滚。",
        proof: "AST 覆盖 11 种语言，LSP 提供 15 项操作，DAP 提供 23 项操作，并有 stale file、原子写入和多文件回滚测试。",
      },
      {
        title: "上下文生命周期",
        body: "完整会话保留在本地追加式 JSONL 中，只压缩发送给模型的临时视图；检查点回退使用文件摘要和 compare-and-swap，保留用户要求、失败测试与确定性证据。",
        proof: "固定长任务中活动消息 29 → 3，估算输入减少 84.0%；证据 98/98、用户要求 1/1、恢复标记 1/1 全部保留。",
      },
      {
        title: "证据评测与真实回归",
        body: "分开代码回归、评测器自检和真实 Agent Evals。每个能力案例在隔离项目启动全新 Agent，结束后才注入隐藏验收；真实失败只有形成失败、修改、通过三段证据才进入回归。",
        proof: "当前基线包含本地确定性评测、隔离 Agent 案例、隐藏验收、历史对比和 Eval 有界只读工具桥的专项测试。",
      },
      {
        title: "证据型记忆与受控自进化",
        body: "长期记忆绑定来源片段、文件指纹、时效与冲突规则，证据变化后自动失效。重复失败形成的策略候选必须绑定摘要，经过同条件 A/B、用户批准、真实任务灰度和自动回滚。",
        proof: "记忆、学习与 Agent 协议均有专项测试；候选不能扩大权限、修改安全策略、依赖、评分器或核心代码。",
      },
      {
        title: "协议、插件与隔离任务",
        body: "MCP 支持三种传输与 OAuth 2.1 凭据隔离；ACP、TUI 与 RPC 共用会话和审批运行时；受控插件分离下载、校验与启用；最多三个 Worker 在临时项目快照中并行工作。",
        proof: "MCP、ACP、插件供应链、Browser 2.0 与 task Worker 均有专项测试；Worker 结果不会自动合并进主工作区。",
      },
      {
        title: "Windows 启动性能",
        body: "用 Node 原生 TypeScript、bootstrap 早返回、模块懒加载和初始化重叠替代源码启动热路径，并用 baseline / candidate 交错方式保存可复跑原始样本。",
        proof: "七次本机基准中 --version 中位耗时降低 52.6%，RPC 可用中位耗时由 6.165 秒降至 2.031 秒，降低 67.1%。",
      },
    ],
    evidence: [
      "本轮变更专项记录 65 个测试文件、608 个用例通过",
      "11 种 AST 语言、15 项 LSP 操作、23 项 DAP 操作均有实现与专项测试",
      "Windows 强沙箱真实集成确认默认断网与精确目的地授权",
      "固定长任务实验估算输入减少 84.0%，关键证据、用户要求和恢复标记全部保留",
      "外部信息固定十题官方源首命中 10/10，十次同资源读取缓存命中率 90%",
      "Windows RPC 启动中位耗时降低 67.1%，机器、版本、方法与原始样本均已保存",
      "当前事实属于 2026-08-10 工作区基线；正式发布仍需 release 流程和 CI 门禁",
    ],
  },
] as const satisfies readonly ProjectDetail[];

export function getProjectDetail(slug: string): ProjectDetail | undefined {
  return projectDetails.find((project) => project.slug === slug);
}
