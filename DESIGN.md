---
name: Agent 工程作品集
description: 后朋克印刷物与真实工程证据组成的动态作品集
colors:
  acid-signal: "#c7f23b"
  acid-hover: "#ddff68"
  void-black: "#050604"
  page-black: "#0b0c0a"
  surface-black: "#131510"
  raised-olive-black: "#1a1d15"
  dirty-ivory: "#e8e7de"
  muted-ivory: "#b5b7ac"
typography:
  display:
    fontFamily: "Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif"
    fontSize: "clamp(3.8rem, 6.3vw, 5.7rem)"
    fontWeight: 900
    lineHeight: 0.92
    letterSpacing: "-0.07em"
  headline:
    fontFamily: "Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif"
    fontSize: "clamp(2.7rem, 4.5vw, 4.15rem)"
    fontWeight: 820
    lineHeight: 0.98
    letterSpacing: "-0.05em"
  body:
    fontFamily: "Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif"
    fontSize: "1rem"
    fontWeight: 430
    lineHeight: 1.75
  label:
    fontFamily: "SFMono-Regular, Cascadia Code, Consolas, monospace"
    fontSize: "0.84rem"
    fontWeight: 750
    lineHeight: 1.5
  project-display:
    fontFamily: "Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif"
    fontSize: "clamp(3.6rem, 7.2vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.04em"
  section-impact:
    fontFamily: "Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3.6rem)"
    fontWeight: 850
    lineHeight: 1
    letterSpacing: "-0.04em"
  contact-display:
    fontFamily: "Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif"
    fontSize: "clamp(4rem, 8.5vw, 8.6rem)"
    fontWeight: 920
    lineHeight: 0.84
    letterSpacing: "-0.075em"
  contact-action:
    fontFamily: "Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif"
    fontSize: "clamp(1.7rem, 4.3vw, 4.4rem)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.055em"
  body-lead:
    fontFamily: "Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif"
    fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)"
    fontWeight: 520
    lineHeight: 1.7
rounded:
  square: "0"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "3rem"
  xl: "6rem"
components:
  action-link:
    textColor: "{colors.acid-signal}"
    rounded: "{rounded.square}"
    padding: "0.65rem 0"
  signal-panel:
    backgroundColor: "{colors.acid-signal}"
    textColor: "{colors.page-black}"
    rounded: "{rounded.square}"
    padding: "clamp(1.5rem, 4vw, 3rem)"
  evidence-panel:
    backgroundColor: "{colors.surface-black}"
    textColor: "{colors.dirty-ivory}"
    rounded: "{rounded.square}"
    padding: "clamp(1.5rem, 4vw, 3rem)"
---

# Design System: Agent 工程作品集

## Overview

**Creative North Star: "失控的广播档案"**

这是一个像深夜地下电台传单一样工作的技术作品集。版面有撕裂、错位、压印和信号干扰，但工程事实始终清楚。视觉上的疯癫来自真实纹理、极端字重和结构碰撞，不来自无意义标签或虚构界面。

页面把真实证据当作材料。视频、文章预览、合并记录和明确职责进入同一套印刷语言，在黑色场域中由一处酸绿色信号推动阅读。

**Key Characteristics:**

- 近黑场域、脏象牙白文字和单一酸绿色信号
- 超重中文标题、紧行距和紧字距
- 撕纸式裁切、旋转和不对称十二栏布局
- 真实产品媒体与原始印刷纹理
- 指针响应、滚动漂移和硬切页面转场

## Colors

调色板只允许一个高能信号，其余颜色承担背景、层次和长文阅读。

### Primary

- **酸性信号绿**：用于关键标题、当前状态、主链接和少量大面积高潮段落。

### Neutral

- **虚空黑**：最深背景与媒体承托层。
- **页面黑**：全站主体背景。
- **油墨表面黑**：项目舞台、卡片和文章引用层。
- **脏象牙白**：主文字和反白标题。
- **退色象牙灰**：正文、说明和次要事实。

**The One Signal Rule.** 同一屏幕只使用酸绿色作为彩色信号，不加入第二种强调色。

## Typography

**Display Font:** Noto Sans SC，回退到 PingFang SC 与 Microsoft YaHei

**Body Font:** Noto Sans SC，回退到 PingFang SC 与 Microsoft YaHei

**Label/Mono Font:** SFMono-Regular，回退到 Cascadia Code 与 Consolas

**Character:** 标题像压得过重的黑色铅字，正文保持克制和可读。中文标题依靠字重、行距和断行建立身份，不依赖装饰性英文字体。

### Hierarchy

- **Display**：用于首屏主张与页面开场，最多两到三行。
- **Headline**：用于主要章节与项目结论。
- **Title**：用于项目、文章和能力标题，保持短句。
- **Body**：用于职责、证据与解释，单行长度控制在约 38rem 到 52rem。
- **Label**：只用于日期、事实字段和技术信息，不承担装饰功能。
- **Contact Display / Action**：只用于独立联系页的大标题与邮箱动作，允许突破常规页面字号，但仍使用同一中文字体与紧缩规则。

**The Compression Rule.** 大标题使用紧字距与紧行距，正文绝不模仿这种压缩。

## Layout

全站最大内容宽度为 82rem。桌面端以十二栏不对称网格为基础，让媒体、标题和证据发生重叠与偏移；章节之间通过突然扩张的留白和酸绿色整面切换形成节奏。移动端回到单列，但保留裁切、旋转、横向媒体滑动与字号冲击，不把页面压成普通卡片列表。

滚动动画只改变 transform、filter 和 clip-path，所有内容在无动画环境中仍可直接阅读。项目正文、媒体和能力说明保持同一文档流，不使用吸顶正文叠加滚动视差，避免后续章节从前一段内容下方穿过。固定页头保留在页面切换过程中，主体采用撕裂式进入。

## Elevation & Depth

系统以平面层叠为主，不使用常规柔和卡片阴影。深度来自真实纹理、色块覆盖、裁切轮廓、旋转角度和前后层级。视频舞台与文章海报通过互相侵入建立空间，而不是依靠悬浮卡片。

**The Flat Material Rule.** 默认表面保持平面，深度必须来自构图和材料，不来自通用阴影。

## Shapes

所有圆角为零。主要轮廓使用轻微旋转和多边形裁切，模拟撕纸、套印偏移和不稳定的印刷边缘。细边框负责信息分区，大面积酸绿色只用于真正的视觉高潮。

## Components

### Buttons and action links

- **Shape:** 无圆角，以文字和底边建立点击感。
- **Primary:** 酸绿色文字或酸绿色整面，文案必须明确动作结果。
- **Hover / Focus:** 使用横向位移、轻微倾斜或颜色反转；键盘焦点为高对比描边。

### Cards / Containers

- **Corner Style:** 直角与多边形裁切。
- **Background:** 页面黑、表面黑或酸绿色。
- **Shadow Strategy:** 不使用通用阴影。
- **Border:** 半透明象牙白细线，重要分界可用酸绿色细线。
- **Internal Padding:** 从 1.5rem 到 3rem，随视口流动。

### Navigation

导航固定在顶部，背景接近纯黑。页头不重复展示站名，只保留“首页、项目、文章、简历、联系”五个明确入口。默认链接为退色象牙灰，当前页与悬停态切换为酸绿色，并使用短粗下划线形成信号感。

### Contact page

联系页是一张独立的酸绿色联系海报，不复用项目列表或通用联系页脚。邮箱占据最大阅读尺度，微信二维码直接展示，GitHub 与网页简历作为明确的次级入口。页面不使用等宽联系卡片，也不添加装饰性小标签；每段文字都对应一个可以立即完成的动作。

### Transmission collage

文章与项目媒体使用真实图像或视频，配合裁切、旋转、网点纹理和不对称覆盖。禁止用虚构仪表盘或假数据代替真实证据。

### Open-source authority plate

开源项目先展示官方品牌标识、项目定位、核心能力和可核实的 GitHub 关注量，再进入个人合并记录。品牌块使用现有黑色与酸绿色材料，不制造第三种品牌色，也不把贡献降格成普通链接列表。

### PI-GO personal project spotlight

`PI-GO` 是首页个人项目的主展位，不使用通用项目卡片。项目名全站统一大写，并作为独立视觉锚点：酸绿色背景上使用脏象牙白与黑色描边，深色背景上使用酸绿色；字号必须显著高于相邻说明文字。酸绿色整面承载项目判断，黑色反切结构展示安全执行、可靠修改和验证恢复三段责任链；构建、测试和持续开发状态必须与能力描述同时出现。详情页继续展开当前分支的验证结果、四类运行时系统、具体实现证据和共建入口。视觉可以偏移和撞色，但不把真实工程事实变成装饰数字。

### Project naming

项目主标题只显示项目名，不把功能说明拼进标题。`PI-GO`、`傻瓜比价` 与开源项目官方名称作为高对比、大字号视觉锚点；职责、能力与结果进入下方正文，避免标题和说明争抢同一层级。

## Do's and Don'ts

### Do:

- **Do** 让每个页面至少有一次明确的尺度变化或结构断裂。
- **Do** 优先使用真实视频、截图、代码链接和可验证事实。
- **Do** 在移动端保留视觉锋利度，同时保证正文、链接和媒体完整可用。
- **Do** 为 reduced motion 提供完整且静止的阅读体验。

### Don't:

- **Don't** 出现个人姓名、团队账号或内部截图；联系邮箱只出现在明确的联系与简历场景。
- **Don't** 使用圆角 SaaS 卡片、玻璃效果、霓虹渐变或第二强调色。
- **Don't** 在首屏放具体项目、履历、状态标签或无意义小字。
- **Don't** 用晦涩短语代替清晰职责、难点和结果。
- **Don't** 把页面重新排成等宽、等高、等间距的普通列表。
