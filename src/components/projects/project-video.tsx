"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./project-video.module.css";

type ProjectVideoProps = {
  src: string;
  poster: string;
  title: string;
};

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduced(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  return reduced;
}

export function ProjectVideo({ src, poster, title }: ProjectVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const userRequestedPlayback = useRef(false);
  const hasActivated = useRef(false);
  const hasPreparedMedia = useRef(false);
  const reduceMotion = usePrefersReducedMotion();
  const [mediaReady, setMediaReady] = useState(false);
  const [activated, setActivated] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (!entry.isIntersecting) {
          video.pause();
          return;
        }

        if (!hasPreparedMedia.current) {
          hasPreparedMedia.current = true;
          setMediaReady(true);
        }

        if (reduceMotion) return;

        if (!hasActivated.current) {
          hasActivated.current = true;
          setActivated(true);
          return;
        }

        void video.play();
      },
      { rootMargin: "240px 0px", threshold: 0.08 },
    );

    observer.observe(video);
    return () => {
      observer.disconnect();
      video.pause();
    };
  }, [reduceMotion]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !activated) return;
    if (reduceMotion && !userRequestedPlayback.current) return;

    void video.play().catch(() => {
      setPlaying(false);
    });
  }, [activated, reduceMotion]);

  const togglePlayback = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!hasPreparedMedia.current) {
      hasPreparedMedia.current = true;
      setMediaReady(true);
    }

    if (!activated) {
      userRequestedPlayback.current = true;
      setActivated(true);
      return;
    }

    if (video.paused) {
      userRequestedPlayback.current = true;
      void video.play();
    } else {
      video.pause();
    }
  }, [activated]);

  return (
    <div className={styles.frame}>
      <video
        ref={videoRef}
        src={activated ? src : undefined}
        poster={mediaReady ? poster : undefined}
        muted
        loop
        playsInline
        preload="none"
        aria-label={`${title}功能演示`}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        当前浏览器不支持视频播放。
      </video>
      <noscript>
        <video
          className={styles.fallbackPoster}
          poster={poster}
          muted
          playsInline
          preload="none"
          aria-label={`${title}功能演示静态预览`}
        />
      </noscript>
      <button
        type="button"
        className={styles.control}
        aria-label={`${playing ? "暂停" : "播放"}${title}功能演示`}
        aria-pressed={playing}
        onClick={togglePlayback}
      >
        {playing ? "暂停" : "播放"}
      </button>
    </div>
  );
}
