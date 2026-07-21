"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./film-countdown-intro.module.css";

const INTRO_STORAGE_KEY = "personal-agent-lab:film-intro:v1";
const INTRO_DURATION_MS = 2820;
const SKIP_DURATION_MS = 260;

type IntroPhase = "playing" | "skipping" | "hidden";

type FilmCountdownIntroProps = {
  onComplete?: () => void;
};

function rememberIntro() {
  try {
    window.sessionStorage.setItem(INTRO_STORAGE_KEY, "complete");
  } catch {
    // Storage can be unavailable in strict privacy modes. The intro still works.
  }
}

export function FilmCountdownIntro({ onComplete }: FilmCountdownIntroProps) {
  const [phase, setPhase] = useState<IntroPhase>("playing");
  const hasNotifiedCompletion = useRef(false);

  const notifyComplete = useCallback(() => {
    if (hasNotifiedCompletion.current) return;
    hasNotifiedCompletion.current = true;
    onComplete?.();
  }, [onComplete]);

  const finishIntro = useCallback((withExit: boolean) => {
    rememberIntro();
    notifyComplete();
    setPhase(withExit ? "skipping" : "hidden");
  }, [notifyComplete]);

  useEffect(() => {
    let hasPlayed = false;

    try {
      hasPlayed = window.sessionStorage.getItem(INTRO_STORAGE_KEY) === "complete";
    } catch {
      // Keep the first-visit experience when storage cannot be read.
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (hasPlayed || reduceMotion) {
      if (reduceMotion) rememberIntro();
      const hideImmediately = window.setTimeout(() => {
        notifyComplete();
        setPhase("hidden");
      }, 0);
      return () => window.clearTimeout(hideImmediately);
    }
  }, [notifyComplete]);

  useEffect(() => {
    if (phase !== "playing") return;

    const root = document.documentElement;
    const previousRootOverflow = root.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;
    root.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      root.style.overflow = previousRootOverflow;
      document.body.style.overflow = previousBodyOverflow;
    };
  }, [phase]);

  useEffect(() => {
    if (phase !== "playing") return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") finishIntro(true);
    };

    window.addEventListener("keydown", handleKeyDown);
    const timer = window.setTimeout(
      () => finishIntro(false),
      INTRO_DURATION_MS,
    );

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.clearTimeout(timer);
    };
  }, [finishIntro, phase]);

  useEffect(() => {
    if (phase !== "skipping") return;
    const timer = window.setTimeout(() => setPhase("hidden"), SKIP_DURATION_MS);
    return () => window.clearTimeout(timer);
  }, [phase]);

  if (phase === "hidden") return null;

  return (
    <div
      className={`${styles.intro} ${phase === "skipping" ? styles.skipping : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Personal Agent Lab 电影倒计时开场"
    >
      <div className={styles.gateTop} aria-hidden="true" />
      <div className={styles.gateBottom} aria-hidden="true" />
      <div className={styles.filmTexture} aria-hidden="true" />

      <div className={styles.reelHeader} aria-hidden="true">
        <span>PERSONAL AGENT LAB</span>
        <span>LEADER / ROLL 01</span>
        <span>24 FPS · 16:9</span>
      </div>

      <div className={styles.leader} aria-hidden="true">
        <div className={styles.registrationMark}>
          <span className={styles.axisHorizontal} />
          <span className={styles.axisVertical} />
          <span className={styles.outerRing} />
          <span className={styles.innerRing} />
          <span className={styles.sweep} />
        </div>

        <p className={styles.pictureStart}>PICTURE START</p>
        <div className={styles.countdown}>
          <span>3</span>
          <span>2</span>
          <span>1</span>
        </div>
        <div className={styles.exposure} />
        <div className={styles.takeSlate}>
          <span>AGENT SYSTEM</span>
          <strong>TAKE 01</strong>
          <small>CAM A · READY</small>
        </div>
      </div>

      <div className={styles.frameFooter} aria-hidden="true">
        <span>FRAME 0000</span>
        <span>SYNC · PICTURE · SYSTEM</span>
      </div>

      <button
        className={styles.skipButton}
        type="button"
        onClick={() => finishIntro(true)}
      >
        跳过开场 <span aria-hidden="true">↗</span>
      </button>
      <span className={styles.screenReaderStatus} aria-live="polite">
        电影倒计时开场，按 Escape 可跳过。
      </span>
    </div>
  );
}
