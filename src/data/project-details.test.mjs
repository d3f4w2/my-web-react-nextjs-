import assert from "node:assert/strict";
import test from "node:test";
import { getProjectDetail } from "./project-details.ts";

test("PI-GO exposes one verified public npm release contract", () => {
  const project = getProjectDetail("pi-go");

  assert.ok(project);
  assert.deepEqual(project.release, {
    packageName: "pi-gogogo",
    version: "0.84.1",
    channel: "latest",
    executable: "pigo",
    installCommand: "npm install -g --ignore-scripts pi-gogogo",
    launchCommand: "pigo",
    registryHref: "https://www.npmjs.com/package/pi-gogogo",
    repositoryHref: "https://github.com/d3f4w2/pi-Gogogo",
    nodeRequirement: ">=22.19.0",
    platforms: ["Windows", "macOS", "Linux"],
    verification: [
      "从 npm 公共注册表安装精确版本到空的临时全局前缀",
      "验证生成清单、pigo 命令 shim、版本输出与脱敏 doctor 结果",
      "安装不依赖 lifecycle scripts；公开包与 fork 仓库元数据一致",
    ],
  });
});
