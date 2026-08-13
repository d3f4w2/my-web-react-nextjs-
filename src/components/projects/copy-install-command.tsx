"use client";

import { useEffect, useRef, useState } from "react";

type CopyState = "idle" | "copied" | "manual";

type CopyInstallCommandProps = {
  command: string;
  className?: string;
};

const labels: Record<CopyState, string> = {
  idle: "复制安装命令",
  copied: "已复制",
  manual: "请手动选择复制",
};

export function CopyInstallCommand({ command, className }: CopyInstallCommandProps) {
  const [state, setState] = useState<CopyState>("idle");
  const resetTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimer.current !== null) window.clearTimeout(resetTimer.current);
    };
  }, []);

  async function copyCommand() {
    if (!navigator.clipboard) {
      setState("manual");
      return;
    }

    try {
      await navigator.clipboard.writeText(command);
      setState("copied");
      if (resetTimer.current !== null) window.clearTimeout(resetTimer.current);
      resetTimer.current = window.setTimeout(() => setState("idle"), 2400);
    } catch {
      setState("manual");
    }
  }

  return (
    <button
      type="button"
      className={className}
      data-copy-state={state}
      onClick={copyCommand}
      aria-live="polite"
    >
      {labels[state]}
    </button>
  );
}
