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
    statement: "一个 Coding Agent 不该靠一句“已完成”交付。PI-GO 冻结原始目标和验收边界，持续执行，在模型外验证差距，再按证据自动重规划，直到达标或触发明确停止条件。",
    summary: "PI-GO 以 Pi 为上游基础，把能力治理、跨平台 OS 沙箱、代码智能、会话检查点、确定性验证和回执 CI 串成可验证工程执行器。交互里只有一个 /run：开始、查看、暂停、恢复、决策、停止和终态验收按状态出现；shell 的 pigo run / pigo ci 保留给脚本和流水线。",
    period: "已公开发布 · 持续开发",
    primaryHref: "https://github.com/d3f4w2/pi-Gogogo",
    primaryLabel: "打开 PI-GO 代码仓库",
    externalHref: "https://www.npmjs.com/package/pi-gogogo",
    externalLabel: "查看 npm 公开包",
    facts: [
      { title: "工程闭环", value: "执行、验证差距、自动重规划" },
      { title: "闭环验证", value: "5 个测试文件、48 项用例" },
      { title: "公开发行", value: "npm latest · v0.84.1" },
    ],
    challenge: {
      title: "工具越多，失控面就越大。",
      body: "能力增加会同时放大权限分叉、上下文膨胀、失败重试和模型自证。PI-GO 不把“继续做完”和“测试通过”留在提示词里：运行时冻结目标、范围、验收和总预算，模型只负责执行与报告，独立验证器负责发现差距，状态机负责决定继续、暂停还是停止。",
    },
    verification: {
      title: "每个结论都要能复跑。",
      summary: "这里展示的是 2026-08-13 可复跑基线：本机专项测试仍与公共发布结果分开，固定实验不写成线上 SLA；只有 npm 注册表元数据和发布后隔离安装被记为公开发行证据。闭环状态机、私有基线、独立验证、回执策略、代码测试和架构记录共同构成工程证据。",
      facts: [
        { value: "48", label: "项闭环专项测试", detail: "覆盖单入口控制、命令解析、状态转换、预算、停滞、阶段恢复、分支异步隔离、私有 Git 基线、幂等终态回执和离线验收。" },
        { value: "4", label: "类聚合预算", detail: "墙钟时间、Token、工具调用和 Agent 轮次全部跨目标累计，不会在重规划时重置。" },
        { value: "2", label: "层独立判定", detail: "模型用 goal_report 报告语义状态；模型外 VerifyService 与离线 CI 决定验收结果。" },
      ],
    },
    architecture: {
      title: "把 Agent 拆成四个互相制约的面。",
      summary: "目标状态机、执行能力、证据判定和进程外强制互相制约：计划可以改变，但目标和验收不能被执行者重写；工具可以增加，但权限和最终结论不能被能力绕过。",
      systems: [
        {
          title: "控制面",
          body: "唯一 /run 控制中心按状态只展示当前合法动作；目标状态机冻结原始目标、修改范围、验收项和总预算，同时统一管理项目信任、工具开关、风险审批和沙箱模式。",
          capabilities: ["状态驱动单入口", "安全边界暂停 / 恢复", "预算与停滞保护"],
        },
        {
          title: "能力与上下文面",
          body: "把读取、搜索、AST、LSP、DAP、Git、Browser、MCP 与 ACP 收敛到同一执行策略，并让可选能力按需加载、失败降级。",
          capabilities: ["统一能力路由", "上下文生命周期", "有界并发与熔断"],
        },
        {
          title: "证据面",
          body: "模型外子进程复跑冻结的类型检查、测试和 lint；私有 Git 基线识别净改动，版本化回执交给离线 CI 独立判定。",
          capabilities: ["独立 VerifyService", "隐私安全回执", "离线 CI 策略"],
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
      { title: "冻结目标", body: "把原始目标、Git 基线、允许修改范围、验收项和总预算固化为不可变运行边界。" },
      { title: "工程执行", body: "复用当前 AgentSession 的上下文、缓存、代码智能、审批和 OS 沙箱完成一轮实现。" },
      { title: "独立验证", body: "Agent 停止后，由独立子进程执行冻结检查；模型的完成报告不能替代测试结果。" },
      { title: "差距纠偏", body: "失败命令、关键输出、工作区摘要和最近三轮尝试形成下一轮上下文；原目标不变，本轮计划自动重做。" },
      { title: "终态验收", body: "通过、预算耗尽、相同差距停滞或需用户决策都会落盘；终态可直接在 /run 内验收，流水线继续使用 pigo ci。" },
    ],
    work: [
      {
        title: "一个入口控制整个可验证目标循环",
        body: "交互式 /run 既能快速启动，也能按当前状态打开控制中心；快速、标准和八小时预设降低配置成本。状态、暂停、恢复、决策、停止与终态验收不再拆成子命令，运行中请求会在 Agent 回合或独立验证完成后的安全边界生效。",
        proof: "5 个测试文件、48 项闭环用例覆盖单入口动作、合法状态转换、验证期暂停证据、相同差距停滞、用户决策、预算、严格检查点恢复、异步分支隔离和交互协调；npm run check 通过。",
      },
      {
        title: "长时运行不是无限重试",
        body: "每 10 次工具调用保存一次预算检查点，正常退出补齐尾部计数，上下文压缩消耗也计入冻结 Token 预算；验收项自动去重并限制合约规模。下一轮会读取最近三轮执行摘要和验证差距，避免在证据不变时重复同一方案。",
        proof: "暂停发生在 goal_report 之后时会直接恢复到待验证阶段；已有验证证据时只在剩余轮次预算内继续。慢验证器和回执写入通过运行 ID 与修订号栅栏隔离，切换会话后不会落到新分支。",
      },
      {
        title: "私有基线、终态回执与独立 CI",
        body: "在项目外原子保存 Git 初始索引与脏文件指纹，终态比较净改动、HEAD 和范围，再生成不含目标原文、源码或工具输出的 SHA-256 回执；终态 /run 验收与 shell 的 pigo ci 复用同一离线策略门禁。",
        proof: "回执通过既有 schema 与完整性校验，保留真实停止原因和最近验证证据；相同内容可幂等重试、不同内容不覆盖。交互不再注册 /ci，流水线仍可用零参数 pigo ci 发现当前项目最新私有回执。",
      },
      {
        title: "一行安装与 fork 自有发布",
        body: "把构建后的 CLI、运行时资源和必要依赖收敛为无安装脚本的 pi-gogogo 产品包，公开命令保持为 pigo；发布工作流只属于 d3f4w2/pi-Gogogo，不能误发上游 scoped workspaces。",
        proof: "pi-gogogo@0.84.1 于 2026-08-13 首发到 npm。发布后 smoke 从公共 registry 把精确版本安装到空的临时全局前缀，并验证生成清单、平台命令 shim、版本输出和脱敏 doctor 结果；npm latest、pigo bin 与 GitHub 仓库元数据一致。",
      },
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
      "闭环执行器 5 个测试文件、48 项用例通过，npm run check 通过",
      "唯一交互入口 /run、状态检查点、私有 Git 基线和 CI 回执均已进入内置扩展",
      "安全边界暂停按执行阶段恢复；严格检查点校验、异步分支隔离、上下文压缩与工具尾部检查点纳入长期运行边界",
      "终态回执保留真实停止原因与最近验证证据；相同内容幂等重放，不同内容拒绝覆盖",
      "11 种 AST 语言、15 项 LSP 操作、23 项 DAP 操作均有实现与专项测试",
      "Windows 强沙箱真实集成确认默认断网与精确目的地授权",
      "固定长任务实验估算输入减少 84.0%，关键证据、用户要求和恢复标记全部保留",
      "外部信息固定十题官方源首命中 10/10，十次同资源读取缓存命中率 90%",
      "Windows RPC 启动中位耗时降低 67.1%，机器、版本、方法与原始样本均已保存",
      "pi-gogogo@0.84.1 已公开发布；npm latest、pigo bin、fork 仓库元数据与发布后隔离安装验收均已通过，后续版本的 GitHub OIDC trusted publisher 工作流已落盘",
    ],
  },
] as const satisfies readonly ProjectDetail[];

export function getProjectDetail(slug: string): ProjectDetail | undefined {
  return projectDetails.find((project) => project.slug === slug);
}
