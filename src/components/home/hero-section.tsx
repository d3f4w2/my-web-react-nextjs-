"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import styles from "./hero-section.module.css";

const directions = [
  {
    id: "systems",
    label: "Agent Systems",
    note: "系统组织",
    module: "SYSTEM",
    status: "ARCHITECTURE LOCKED",
  },
  {
    id: "memory",
    label: "Memory & Context",
    note: "上下文保持",
    module: "MEMORY",
    status: "CONTEXT CONNECTED",
  },
  {
    id: "tools",
    label: "Tool Integration",
    note: "工具连接",
    module: "TOOLS",
    status: "TOOL PATH READY",
  },
  {
    id: "reliability",
    label: "Agent Reliability",
    note: "可靠执行",
    module: "RELIABILITY",
    status: "BOUNDARY VERIFIED",
  },
] as const;

type DirectionId = (typeof directions)[number]["id"];

const assemblyEase = [0.22, 1, 0.36, 1] as const;

type ModuleDockProps = {
  dockClassName: string;
  moduleClassName: string;
  label: string;
  openingReady: boolean;
  delay: number;
  entryX: number;
  entryY: number;
};

function ModuleDock({
  dockClassName,
  moduleClassName,
  label,
  openingReady,
  delay,
  entryX,
  entryY,
}: ModuleDockProps) {
  return (
    <motion.div
      className={`${styles.moduleDock} ${dockClassName}`}
      initial={false}
      animate={
        openingReady
          ? { opacity: 1, x: 0, y: 0, clipPath: "inset(0% 0% 0% 0%)" }
          : {
              opacity: 0,
              x: entryX,
              y: entryY,
              clipPath: "inset(42% 42% 42% 42%)",
            }
      }
      transition={{ duration: 0.78, delay, ease: assemblyEase }}
    >
      <div className={`${styles.module} ${moduleClassName}`}>
        <span>{label}</span>
        <i />
      </div>
    </motion.div>
  );
}

function HarnessVisual({
  activeDirection,
  openingReady,
}: {
  activeDirection: DirectionId;
  openingReady: boolean;
}) {
  return (
    <motion.div
      className={styles.harnessShell}
      initial={false}
      animate={
        openingReady
          ? {
              opacity: 1,
              scale: 1,
              clipPath: "inset(0% 0% 0% 0%)",
            }
          : {
              opacity: 0,
              scale: 0.94,
              clipPath: "inset(49% 0% 49% 0%)",
            }
      }
      transition={{ duration: 0.58, ease: assemblyEase }}
      aria-hidden="true"
    >
      <div
        className={styles.harness}
        data-active={activeDirection}
        data-ready={openingReady}
      >
        <span className={styles.frameLabel}>AGENT HARNESS</span>
        <span className={styles.frameRule} />
        <span className={styles.cornerTopLeft} />
        <span className={styles.cornerTopRight} />
        <span className={styles.cornerBottomLeft} />
        <span className={styles.cornerBottomRight} />

        <svg
          className={styles.connectionMap}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <motion.path
            className={`${styles.connection} ${styles.connectionSystems}`}
            d="M 22 23 L 50 50"
            initial={false}
            animate={{ pathLength: openingReady ? 1 : 0, opacity: openingReady ? 1 : 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease: assemblyEase }}
          />
          <motion.path
            className={`${styles.connection} ${styles.connectionMemory}`}
            d="M 78 23 L 50 50"
            initial={false}
            animate={{ pathLength: openingReady ? 1 : 0, opacity: openingReady ? 1 : 0 }}
            transition={{ duration: 0.7, delay: 0.42, ease: assemblyEase }}
          />
          <motion.path
            className={`${styles.connection} ${styles.connectionReliability}`}
            d="M 22 77 L 50 50"
            initial={false}
            animate={{ pathLength: openingReady ? 1 : 0, opacity: openingReady ? 1 : 0 }}
            transition={{ duration: 0.7, delay: 0.56, ease: assemblyEase }}
          />
          <motion.path
            className={`${styles.connection} ${styles.connectionTools}`}
            d="M 78 77 L 50 50"
            initial={false}
            animate={{ pathLength: openingReady ? 1 : 0, opacity: openingReady ? 1 : 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: assemblyEase }}
          />
        </svg>

        <motion.span
          className={styles.horizontalRail}
          initial={false}
          animate={{ scaleX: openingReady ? 1 : 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: assemblyEase }}
        />
        <motion.span
          className={styles.verticalRail}
          initial={false}
          animate={{ scaleY: openingReady ? 1 : 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: assemblyEase }}
        />
        <motion.span
          className={styles.lockRail}
          initial={false}
          animate={{ opacity: openingReady ? 1 : 0 }}
          transition={{ duration: 0.45, delay: 0.3 }}
        />

        <ModuleDock
          dockClassName={styles.systemsDock}
          moduleClassName={styles.systemsModule}
          label="SYSTEM"
          openingReady={openingReady}
          delay={0.34}
          entryX={-190}
          entryY={-82}
        />
        <ModuleDock
          dockClassName={styles.memoryDock}
          moduleClassName={styles.memoryModule}
          label="MEMORY"
          openingReady={openingReady}
          delay={0.5}
          entryX={190}
          entryY={-82}
        />
        <ModuleDock
          dockClassName={styles.reliabilityDock}
          moduleClassName={styles.reliabilityModule}
          label="RELIABILITY"
          openingReady={openingReady}
          delay={0.66}
          entryX={-190}
          entryY={86}
        />
        <ModuleDock
          dockClassName={styles.toolsDock}
          moduleClassName={styles.toolsModule}
          label="TOOLS"
          openingReady={openingReady}
          delay={0.82}
          entryX={190}
          entryY={86}
        />

        <motion.div
          className={styles.coreReveal}
          initial={false}
          animate={
            openingReady
              ? { opacity: 1, scale: 1, filter: "brightness(1)" }
              : { opacity: 0, scale: 0.46, filter: "brightness(2.4)" }
          }
          transition={{ duration: 0.58, delay: 1.02, ease: assemblyEase }}
        >
          <div className={styles.core}>
            <span>AGENT</span>
            <i />
          </div>
        </motion.div>

        <motion.div
          className={styles.lockFlash}
          initial={false}
          animate={openingReady ? { opacity: [0, 0, 0.82, 0] } : { opacity: 0 }}
          transition={{ duration: 0.42, delay: 1.08, times: [0, 0.45, 0.5, 1] }}
        />

        <div className={styles.baseTrack}>
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </motion.div>
  );
}

type HeroSectionProps = {
  openingReady?: boolean;
};

export function HeroSection({ openingReady = true }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const [activeDirection, setActiveDirection] =
    useState<DirectionId>("systems");
  const [manualControl, setManualControl] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 28,
    mass: 0.35,
  });
  const visualScale = useTransform(smoothProgress, [0, 0.62, 1], [1, 0.98, 0.67]);
  const visualY = useTransform(smoothProgress, [0, 1], [0, -118]);
  const visualOpacity = useTransform(
    smoothProgress,
    [0, 0.76, 1],
    [1, 0.94, 0.08],
  );
  const visualX = useTransform(smoothProgress, [0, 0.62, 1], [0, 12, 188]);
  const visualRotate = useTransform(smoothProgress, [0, 0.72, 1], [0, 0, -3.4]);
  const copyOpacity = useTransform(smoothProgress, [0, 0.68, 1], [1, 1, 0]);
  const copyX = useTransform(smoothProgress, [0, 0.7, 1], [0, -22, -88]);
  const bridgeScale = useTransform(smoothProgress, [0, 0.64, 1], [1, 1, 0.18]);

  useEffect(() => {
    if (!openingReady || reduceMotion || manualControl) return;

    const cycle = window.setInterval(() => {
      setActiveDirection((current) => {
        const currentIndex = directions.findIndex((item) => item.id === current);
        return directions[(currentIndex + 1) % directions.length].id;
      });
    }, 2450);

    return () => {
      window.clearInterval(cycle);
    };
  }, [manualControl, openingReady, reduceMotion]);

  const activeIndex = directions.findIndex((item) => item.id === activeDirection);
  const activeItem = directions[activeIndex];

  return (
    <section ref={sectionRef} className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.stickyFrame} data-ready={openingReady}>
        <div className={styles.ambientField} aria-hidden="true" />
        <motion.div
          className={styles.filmMeta}
          initial={false}
          animate={{ opacity: openingReady ? 1 : 0 }}
          transition={{ duration: 0.35, delay: 0.08 }}
          aria-hidden="true"
        >
          <span className={styles.recording}><i /> REC</span>
          <span>ROLL 01 / ASSEMBLY 0001</span>
          <span>24 FPS · LIVE SYSTEM</span>
        </motion.div>

        <motion.div
          className={styles.stageBridge}
          initial={false}
          animate={{ opacity: openingReady ? 1 : 0, scaleX: openingReady ? 1 : 0 }}
          style={{ scaleX: bridgeScale }}
          transition={{ duration: 0.62, delay: 0.26, ease: assemblyEase }}
          aria-hidden="true"
        >
          <span />
        </motion.div>

        <div className={`site-container ${styles.inner}`}>
          <motion.div
            className={styles.copy}
            style={{ opacity: copyOpacity, x: copyX }}
          >
            <motion.p
              className={styles.eyebrow}
              initial={false}
              animate={
                openingReady
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -48 }
              }
              transition={{ duration: 0.55, delay: 0.12, ease: assemblyEase }}
            >
              Personal Agent Lab
            </motion.p>
            <motion.h1
              id="hero-title"
              className={styles.title}
              initial={false}
              animate={openingReady ? "visible" : "hidden"}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.18 } },
              }}
            >
              {["把 Agent", "做成真正能工作", "的系统。"].map((line) => (
                <motion.span
                  key={line}
                  variants={{
                    hidden: { opacity: 0, x: -72, clipPath: "inset(0 100% 0 0)" },
                    visible: {
                      opacity: 1,
                      x: 0,
                      clipPath: "inset(0 0% 0 0)",
                      transition: { duration: 0.7, ease: assemblyEase },
                    },
                  }}
                >
                  {line}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              className={styles.description}
              initial={false}
              animate={
                openingReady
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 22 }
              }
              transition={{ duration: 0.65, delay: 0.52, ease: assemblyEase }}
            >
              我关心的不只是 Agent 能不能回答，而是它能不能理解上下文、使用工具，并把任务可靠地做完。
            </motion.p>

            <motion.ul
              className={styles.directionList}
              initial={false}
              animate={openingReady ? "visible" : "hidden"}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.68 } },
              }}
              onPointerEnter={() => setManualControl(true)}
              onPointerLeave={() => setManualControl(false)}
              onFocus={() => setManualControl(true)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setManualControl(false);
                }
              }}
              aria-label="关注方向"
            >
              {directions.map((direction, index) => (
                <motion.li
                  key={direction.id}
                  variants={{
                    hidden: { opacity: 0, x: -24 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <button
                    className={styles.directionButton}
                    data-active={activeDirection === direction.id}
                    type="button"
                    onPointerEnter={() => setActiveDirection(direction.id)}
                    onFocus={() => setActiveDirection(direction.id)}
                  >
                    <span>{direction.label}</span>
                    <small>0{index + 1} · {direction.note}</small>
                  </button>
                </motion.li>
              ))}
            </motion.ul>

            <motion.a
              className={styles.projectLink}
              href="#featured-projects"
              initial={false}
              animate={
                openingReady
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -20 }
              }
              transition={{ duration: 0.55, delay: 1.02, ease: assemblyEase }}
            >
              <span>查看项目</span>
              <i aria-hidden="true" />
              <b aria-hidden="true">→</b>
            </motion.a>
          </motion.div>

          <motion.div
            className={styles.visual}
            style={{
              opacity: visualOpacity,
              scale: visualScale,
              x: visualX,
              y: visualY,
              rotate: visualRotate,
            }}
          >
            <motion.div
              className={styles.viewfinder}
              initial={false}
              animate={{ opacity: openingReady ? 1 : 0, scale: openingReady ? 1 : 1.08 }}
              transition={{ duration: 0.55, delay: 0.12, ease: assemblyEase }}
              aria-hidden="true"
            >
              <span /><span /><span /><span />
            </motion.div>
            <HarnessVisual
              activeDirection={activeDirection}
              openingReady={openingReady}
            />
            <div className={styles.assemblyTelemetry} aria-live="polite">
              <span>SEQ 0{activeIndex + 1} / 04 · {activeItem.module}</span>
              <motion.strong
                key={activeDirection}
                initial={{ opacity: 0, y: 7 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.26 }}
              >
                {activeItem.status}
              </motion.strong>
            </div>
            <p className={styles.visualCaption} aria-hidden="true">
              Context connected to tools through a reliable system boundary.
            </p>
          </motion.div>
        </div>

        <motion.div
          className={styles.scrollCue}
          initial={false}
          animate={{ opacity: openingReady ? 1 : 0 }}
          transition={{ duration: 0.4, delay: 1.25 }}
          aria-hidden="true"
        >
          <span />
          SCROLL TO TRANSFER SYSTEM
        </motion.div>
      </div>
    </section>
  );
}
