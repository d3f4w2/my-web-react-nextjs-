"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import styles from "./lab-epilogue.module.css";

export function LabEpilogue() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    mass: 0.35,
  });
  const titleScale = useTransform(progress, [0, 0.7, 1], [1, 0.9, 0.72]);
  const titleY = useTransform(progress, [0, 1], [48, -72]);
  const titleOpacity = useTransform(progress, [0, 0.78, 1], [1, 0.95, 0.46]);
  const wordScale = useTransform(progress, [0, 1], [1.18, 0.88]);
  const wordOpacity = useTransform(progress, [0, 0.55, 1], [0.02, 0.075, 0.025]);
  const lineScale = useTransform(progress, [0.08, 0.78], [0, 1]);
  const metaOpacity = useTransform(progress, [0.46, 0.82], [0, 1]);

  return (
    <section ref={sectionRef} className={styles.epilogue} aria-labelledby="epilogue-title">
      <div className={styles.stickyFrame}>
        <motion.p
          className={styles.backgroundWord}
          style={reduceMotion ? undefined : { opacity: wordOpacity, scale: wordScale }}
          aria-hidden="true"
        >
          OPEN LOOP
        </motion.p>

        <div className={`site-container ${styles.inner}`}>
          <motion.p
            className={styles.kicker}
            style={reduceMotion ? undefined : { opacity: titleOpacity }}
          >
            END NOTE / OPEN LOOP / 06
          </motion.p>

          <motion.h2
            id="epilogue-title"
            className={styles.title}
            style={
              reduceMotion
                ? undefined
                : { opacity: titleOpacity, scale: titleScale, y: titleY }
            }
          >
            <span>实验没有结束，</span>
            <span>只是这次记录到这里。</span>
          </motion.h2>

          <motion.div
            className={styles.meta}
            style={reduceMotion ? undefined : { opacity: metaOpacity }}
          >
            <p>结论暂存</p>
            <p>问题继续</p>
            <p>记录保持开放</p>
          </motion.div>

          <span className={styles.line} aria-hidden="true">
            <motion.i style={reduceMotion ? { scaleX: 1 } : { scaleX: lineScale }} />
          </span>
          <p className={styles.cue}>CONTINUE TO CONTACT / 继续查看联系方式</p>
        </div>
      </div>
    </section>
  );
}
