"use client";

import { useMemo, useRef, useState } from "react";
import styles from "./internship-demo.module.css";

type DemoChapter = {
  at: number;
  label: string;
  body: string;
};

type DemoItem = {
  src: string;
  poster: string;
  title: string;
  caption: string;
  durationSeconds: number;
  durationLabel: string;
  responsibilities: readonly string[];
  chapters: readonly DemoChapter[];
};

type InternshipDemoProps = {
  items: readonly DemoItem[];
};

function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const rest = Math.floor(seconds % 60);
  return `${String(minutes).padStart(2, "0")}:${String(rest).padStart(2, "0")}`;
}

function DemoPlayer({ item, index }: { item: DemoItem; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [playing, setPlaying] = useState(false);

  const activeChapter = useMemo(() => {
    let active = 0;
    item.chapters.forEach((chapter, chapterIndex) => {
      if (currentTime >= chapter.at) active = chapterIndex;
    });
    return active;
  }, [currentTime, item.chapters]);

  const seekTo = (seconds: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = seconds;
    setCurrentTime(seconds);
    void video.play();
  };

  const progress = Math.min(100, (currentTime / item.durationSeconds) * 100);

  return (
    <article className={styles.demo} data-demo-index={index}>
      <div className={styles.copy}>
        <h3>{item.title}</h3>
        <p className={styles.caption}>{item.caption}</p>
        <ul className={styles.responsibilities} aria-label={`${item.title}功能中的核心职责`}>
          {item.responsibilities.map((responsibility) => (
            <li key={responsibility}>{responsibility}</li>
          ))}
        </ul>
      </div>

      <div className={styles.playerStage}>
        <div className={styles.playerMeta} aria-live="polite">
          <strong>{playing ? "正在播放" : "完整演示"}</strong>
          <span>{formatTime(currentTime)} / {item.durationLabel}</span>
        </div>
        <div className={styles.phoneFrame}>
          <video
            ref={videoRef}
            controls
            playsInline
            preload="metadata"
            poster={item.poster}
            aria-label={`${item.title}完整功能演示，时长 ${item.durationLabel}`}
            onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onEnded={() => setPlaying(false)}
          >
            <source src={item.src} type="video/mp4" />
            当前浏览器不支持视频播放。
          </video>
        </div>
        <div className={styles.progressTrack} aria-hidden="true">
          <span style={{ transform: `scaleX(${progress / 100})` }} />
        </div>
      </div>

      <ol className={styles.chapters} aria-label={`${item.title}演示章节`}>
        {item.chapters.map((chapter, chapterIndex) => (
          <li key={`${chapter.at}-${chapter.label}`}>
            <button
              type="button"
              className={chapterIndex === activeChapter ? styles.activeChapter : undefined}
              aria-current={chapterIndex === activeChapter ? "step" : undefined}
              onClick={() => seekTo(chapter.at)}
            >
              <span>{formatTime(chapter.at)}</span>
              <strong>{chapter.label}</strong>
              <small>{chapter.body}</small>
            </button>
          </li>
        ))}
      </ol>
    </article>
  );
}

export function InternshipDemo({ items }: InternshipDemoProps) {
  return (
    <div className={styles.theater}>
      {items.map((item, index) => (
        <DemoPlayer key={item.src} item={item} index={index} />
      ))}
    </div>
  );
}
