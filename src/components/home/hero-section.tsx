"use client";

import Image from "next/image";
import Link from "next/link";
import type { PointerEvent } from "react";
import styles from "./hero-section.module.css";

export function HeroSection() {
  function moveSignal(event: PointerEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    event.currentTarget.style.setProperty("--signal-x", x.toFixed(3));
    event.currentTarget.style.setProperty("--signal-y", y.toFixed(3));
  }

  function resetSignal(event: PointerEvent<HTMLElement>) {
    event.currentTarget.style.setProperty("--signal-x", "0");
    event.currentTarget.style.setProperty("--signal-y", "0");
  }

  return (
    <section
      className={styles.hero}
      aria-labelledby="hero-title"
      onPointerMove={moveSignal}
      onPointerLeave={resetSignal}
    >
      <Image
        className={styles.texture}
        src="/assets/editorial/post-punk-hero.webp"
        alt=""
        fill
        priority
        sizes="100vw"
      />

      <div className={`site-container ${styles.frame}`}>
        <div className={styles.copy}>
          <h1 id="hero-title" className={styles.title}>
            <span>把模型的判断，</span>
            <strong>变成世界里的行动。</strong>
          </h1>
          <p className={styles.lead}>
            专注 Agent 的决策、执行、恢复与交付，让模型在真实环境里可靠行动。
          </p>
          <Link
            className={styles.action}
            href="#featured-projects"
            scroll
          >
            进入作品
          </Link>
        </div>

        <div className={styles.poster} aria-hidden="true">
          <span className={styles.posterWord}>行动</span>
          <span className={styles.posterEcho}>行动</span>
          <i />
        </div>
      </div>
    </section>
  );
}
