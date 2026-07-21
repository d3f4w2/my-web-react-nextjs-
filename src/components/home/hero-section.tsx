"use client";

import { type PointerEvent as ReactPointerEvent, useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
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
    coordinate: "01 / SYSTEM",
    status: "ARCHITECTURE ALIGNED",
  },
  {
    id: "memory",
    label: "Memory & Context",
    note: "上下文保持",
    coordinate: "02 / MEMORY",
    status: "CONTEXT IN FRAME",
  },
  {
    id: "tools",
    label: "Tool Integration",
    note: "工具连接",
    coordinate: "03 / TOOLS",
    status: "TOOL PATH OPEN",
  },
  {
    id: "reliability",
    label: "Agent Reliability",
    note: "可靠执行",
    coordinate: "04 / RELIABILITY",
    status: "BOUNDARY STABLE",
  },
] as const;

type DirectionId = (typeof directions)[number]["id"];

const editorialEase = [0.22, 1, 0.36, 1] as const;

const shotEntries: Record<
  DirectionId,
  { x: number; y: number; rotateX: number; rotateY: number; rotateZ: number; labelX: number }
> = {
  systems: { x: -34, y: 0, rotateX: 0, rotateY: -13, rotateZ: -1.2, labelX: -72 },
  memory: { x: 34, y: 0, rotateX: 0, rotateY: 13, rotateZ: 1.2, labelX: 72 },
  tools: { x: 0, y: 30, rotateX: -10, rotateY: 0, rotateZ: 0.8, labelX: 0 },
  reliability: { x: 0, y: -26, rotateX: 10, rotateY: 0, rotateZ: -0.8, labelX: 0 },
};

function AgentCoreStage({
  activeDirection,
  openingReady,
}: {
  activeDirection: DirectionId;
  openingReady: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const activeIndex = directions.findIndex((item) => item.id === activeDirection);
  const activeItem = directions[activeIndex];
  const shotEntry = shotEntries[activeDirection];
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateY = useSpring(pointerX, { stiffness: 90, damping: 24, mass: 0.55 });
  const rotateX = useSpring(pointerY, { stiffness: 90, damping: 24, mass: 0.55 });

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    pointerX.set(x * 7);
    pointerY.set(y * -5);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <motion.div
      className={styles.coreStage}
      data-active={activeDirection}
      data-ready={openingReady}
      initial={false}
      animate={
        openingReady
          ? { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }
          : { opacity: 0, clipPath: "inset(18% 18% 18% 18%)" }
      }
      transition={{ duration: 0.9, delay: 0.12, ease: editorialEase }}
      style={{ rotateX, rotateY, transformPerspective: 1400 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      aria-hidden="true"
    >
      <motion.div
        className={styles.stageHalo}
        initial={false}
        animate={{ opacity: openingReady ? 1 : 0, scale: openingReady ? 1 : 0.76 }}
        transition={{ duration: 1.15, delay: 0.3, ease: editorialEase }}
      />

      <motion.div
        className={styles.shotLabel}
        key={`label-${activeDirection}`}
        initial={reduceMotion ? false : { opacity: 0, x: shotEntry.labelX, clipPath: "inset(0 100% 0 0)" }}
        animate={
          reduceMotion
            ? { opacity: 0.07, x: 0, clipPath: "inset(0 0% 0 0)" }
            : { opacity: [0, 0.14, 0.07], x: 0, clipPath: "inset(0 0% 0 0)" }
        }
        transition={{ duration: reduceMotion ? 0 : 1.05, times: [0, 0.34, 1], ease: editorialEase }}
      >
        <span>0{activeIndex + 1}</span>
        <strong>{activeDirection}</strong>
      </motion.div>

      <motion.div
        className={styles.lightGate}
        key={`gate-${activeDirection}`}
        initial={reduceMotion ? false : { opacity: 0, x: "-115%" }}
        animate={reduceMotion ? { opacity: 0, x: 0 } : { opacity: [0, 0.72, 0], x: "115%" }}
        transition={{ duration: reduceMotion ? 0 : 0.92, times: [0, 0.45, 1], ease: editorialEase }}
      />

      <svg className={styles.signalField} viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path
          className={`${styles.signalPath} ${styles.signalSystems}`}
          d="M 13 20 L 36 20 L 47 44"
          initial={false}
          animate={{ pathLength: openingReady ? 1 : 0, opacity: openingReady ? 1 : 0 }}
          transition={{ duration: 0.9, delay: 0.38, ease: editorialEase }}
        />
        <motion.path
          className={`${styles.signalPath} ${styles.signalMemory}`}
          d="M 87 20 L 64 20 L 53 44"
          initial={false}
          animate={{ pathLength: openingReady ? 1 : 0, opacity: openingReady ? 1 : 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: editorialEase }}
        />
        <motion.path
          className={`${styles.signalPath} ${styles.signalReliability}`}
          d="M 13 80 L 36 80 L 47 56"
          initial={false}
          animate={{ pathLength: openingReady ? 1 : 0, opacity: openingReady ? 1 : 0 }}
          transition={{ duration: 0.9, delay: 0.62, ease: editorialEase }}
        />
        <motion.path
          className={`${styles.signalPath} ${styles.signalTools}`}
          d="M 87 80 L 64 80 L 53 56"
          initial={false}
          animate={{ pathLength: openingReady ? 1 : 0, opacity: openingReady ? 1 : 0 }}
          transition={{ duration: 0.9, delay: 0.74, ease: editorialEase }}
        />
      </svg>

      <div className={styles.coordinateField}>
        {directions.map((direction, index) => (
          <motion.div
            className={`${styles.coordinate} ${styles[`coordinate${direction.id[0].toUpperCase()}${direction.id.slice(1)}` as keyof typeof styles]}`}
            data-active={activeDirection === direction.id}
            key={direction.id}
            initial={false}
            animate={
              openingReady
                ? { opacity: 1, x: 0, y: 0 }
                : {
                    opacity: 0,
                    x: index % 2 === 0 ? -22 : 22,
                    y: index < 2 ? -12 : 12,
                  }
            }
            transition={{ duration: 0.62, delay: 0.52 + index * 0.09, ease: editorialEase }}
          >
            <span>0{index + 1}</span>
            <strong>{direction.id.toUpperCase()}</strong>
            <i />
          </motion.div>
        ))}
      </div>

      <div className={styles.apertureRing} />
      <div className={styles.orbitArc} />

      <motion.div
        className={styles.focusLock}
        key={`focus-${activeDirection}`}
        initial={reduceMotion ? false : { opacity: 0, scale: 1.24, rotateZ: shotEntry.rotateZ * 2.4 }}
        animate={
          reduceMotion
            ? { opacity: 0.42, scale: 1, rotateZ: 0 }
            : { opacity: [0, 0.9, 0.42], scale: [1.24, 0.96, 1], rotateZ: 0 }
        }
        transition={{ duration: reduceMotion ? 0 : 0.92, times: [0, 0.7, 1], ease: editorialEase }}
      />

      <motion.div
        className={styles.coreAssembly}
        initial={false}
        animate={
          openingReady
            ? { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }
            : { opacity: 0, scale: 0.72, y: 26, filter: "blur(10px)" }
        }
        transition={{ duration: 0.72, delay: 0.44, ease: editorialEase }}
      >
        <div className={`${styles.coreLayer} ${styles.coreLayerBack}`} />
        <div className={`${styles.coreLayer} ${styles.coreLayerMiddle}`} />
        <motion.div
          className={styles.coreBody}
          key={activeDirection}
          initial={
            reduceMotion
              ? false
              : {
                  x: shotEntry.x,
                  y: shotEntry.y,
                  rotateX: shotEntry.rotateX,
                  rotateY: shotEntry.rotateY,
                  rotateZ: shotEntry.rotateZ,
                  scale: 0.94,
                }
          }
          animate={
            reduceMotion
              ? { x: 0, y: 0, rotateX: 0, rotateY: 0, rotateZ: 0, scale: 1 }
              : { x: 0, y: 0, rotateX: 0, rotateY: 0, rotateZ: 0, scale: [0.94, 1.025, 1] }
          }
          transition={{ duration: reduceMotion ? 0 : 0.82, times: [0, 0.76, 1], ease: editorialEase }}
        >
          <span className={styles.chassisRail} />
          <span className={styles.coreSerial}>PAL / AGENT · 01</span>
          <span className={styles.frameCounter}>FRAME / 0{activeIndex + 1}</span>
          <motion.div
            className={styles.coreAperture}
            key={`aperture-${activeDirection}`}
            initial={reduceMotion ? false : { scale: 0.78, rotateZ: -6 }}
            animate={
              reduceMotion
                ? { scale: 1, rotateZ: 0 }
                : { scale: [0.78, 1.08, 1], rotateZ: [shotEntry.rotateZ * 4, 0.8, 0] }
            }
            transition={{ duration: reduceMotion ? 0 : 0.72, times: [0, 0.7, 1], ease: editorialEase }}
          >
            <span>AGENT</span>
            <i />
          </motion.div>
          <span className={styles.signalSlit} />
          <span className={styles.coreState}>{activeItem.coordinate} / ACTIVE</span>
        </motion.div>
      </motion.div>

      <span className={`${styles.cropMark} ${styles.cropTopLeft}`} />
      <span className={`${styles.cropMark} ${styles.cropTopRight}`} />
      <span className={`${styles.cropMark} ${styles.cropBottomLeft}`} />
      <span className={`${styles.cropMark} ${styles.cropBottomRight}`} />
    </motion.div>
  );
}

type HeroSectionProps = {
  openingReady?: boolean;
};

export function HeroSection({ openingReady = true }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const [activeDirection, setActiveDirection] = useState<DirectionId>("systems");
  const [manualControl, setManualControl] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 92, damping: 28, mass: 0.4 });
  const copyOpacity = useTransform(progress, [0, 0.7, 1], [1, 1, 0]);
  const copyX = useTransform(progress, [0, 0.68, 1], [0, -22, -124]);
  const stageOpacity = useTransform(progress, [0, 0.82, 1], [1, 1, 0]);
  const stageScale = useTransform(progress, [0, 0.56, 0.78, 1], [1, 1.08, 1.04, 0.78]);
  const stageX = useTransform(progress, [0, 0.64, 1], [0, 24, 204]);
  const stageY = useTransform(progress, [0, 0.64, 1], [0, -28, -140]);
  const stageRotate = useTransform(progress, [0, 0.58, 0.78, 1], [0, 0, -1.4, -5]);

  useEffect(() => {
    if (!openingReady || reduceMotion || manualControl) return;
    const cycle = window.setInterval(() => {
      setActiveDirection((current) => {
        const index = directions.findIndex((item) => item.id === current);
        return directions[(index + 1) % directions.length].id;
      });
    }, 3600);
    return () => window.clearInterval(cycle);
  }, [manualControl, openingReady, reduceMotion]);

  const activeIndex = directions.findIndex((item) => item.id === activeDirection);
  const activeItem = directions[activeIndex];

  return (
    <section ref={sectionRef} className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.stickyFrame} data-ready={openingReady}>
        <div className={styles.atmosphere} aria-hidden="true" />
        <motion.div
          className={styles.filmMeta}
          initial={false}
          animate={{ opacity: openingReady ? 1 : 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          aria-hidden="true"
        >
          <span className={styles.recording}><i /> REC</span>
          <span>PORTRAIT / SYSTEM 01</span>
          <span>24 FPS · LIVE</span>
        </motion.div>

        <div className={`site-container ${styles.inner}`}>
          <motion.div className={styles.copy} style={{ opacity: copyOpacity, x: copyX }}>
            <motion.p
              className={styles.eyebrow}
              initial={false}
              animate={openingReady ? { opacity: 1, x: 0 } : { opacity: 0, x: -36 }}
              transition={{ duration: 0.58, delay: 0.12, ease: editorialEase }}
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
                visible: { transition: { staggerChildren: 0.11, delayChildren: 0.18 } },
              }}
            >
              {["把 Agent", "做成真正能工作", "的系统。"].map((line) => (
                <motion.span
                  key={line}
                  variants={{
                    hidden: { opacity: 0, y: 42, clipPath: "inset(100% 0 0 0)" },
                    visible: {
                      opacity: 1,
                      y: 0,
                      clipPath: "inset(0% 0 0 0)",
                      transition: { duration: 0.72, ease: editorialEase },
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
              animate={openingReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.65, delay: 0.55, ease: editorialEase }}
            >
              我关心的不只是 Agent 能不能回答，而是它能不能理解上下文、使用工具，并把任务可靠地做完。
            </motion.p>

            <motion.ul
              className={styles.directionList}
              initial={false}
              animate={openingReady ? "visible" : "hidden"}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.075, delayChildren: 0.72 } },
              }}
              onPointerEnter={() => setManualControl(true)}
              onPointerLeave={() => setManualControl(false)}
              onFocus={() => setManualControl(true)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setManualControl(false);
              }}
              aria-label="关注方向"
            >
              {directions.map((direction, index) => (
                <motion.li
                  key={direction.id}
                  variants={{
                    hidden: { opacity: 0, x: -18 },
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
                    <small>0{index + 1} / {direction.note}</small>
                  </button>
                </motion.li>
              ))}
            </motion.ul>

            <motion.a
              className={styles.projectLink}
              href="#featured-projects"
              initial={false}
              animate={openingReady ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.55, delay: 1.05 }}
            >
              <span>查看项目</span>
              <i aria-hidden="true" />
              <b aria-hidden="true">↗</b>
            </motion.a>
          </motion.div>

          <motion.div
            className={styles.visual}
            style={{
              opacity: stageOpacity,
              scale: stageScale,
              x: stageX,
              y: stageY,
              rotate: stageRotate,
            }}
          >
            <AgentCoreStage activeDirection={activeDirection} openingReady={openingReady} />
            <div className={styles.telemetry} aria-live="polite">
              <motion.span
                key={`coordinate-${activeDirection}`}
                initial={reduceMotion ? false : { opacity: 0, x: -18, clipPath: "inset(0 100% 0 0)" }}
                animate={{ opacity: 1, x: 0, clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: reduceMotion ? 0 : 0.48, ease: editorialEase }}
              >
                {activeItem.coordinate}
              </motion.span>
              <motion.strong
                key={`status-${activeDirection}`}
                initial={reduceMotion ? false : { opacity: 0, x: 18, clipPath: "inset(0 0 0 100%)" }}
                animate={{ opacity: 1, x: 0, clipPath: "inset(0 0 0 0%)" }}
                transition={{ duration: reduceMotion ? 0 : 0.54, delay: reduceMotion ? 0 : 0.16, ease: editorialEase }}
              >
                {activeItem.status}
              </motion.strong>
            </div>
          </motion.div>
        </div>

        <motion.div
          className={styles.scrollCue}
          initial={false}
          animate={{ opacity: openingReady ? 1 : 0 }}
          transition={{ duration: 0.4, delay: 1.35 }}
          aria-hidden="true"
        >
          <span />
          SCROLL / NEXT SCENE
        </motion.div>
      </div>
    </section>
  );
}
