"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  const footerRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 92,
    damping: 27,
    mass: 0.4,
  });

  const gateTopY = useTransform(progress, [0, 0.06, 0.23], ["0%", "0%", "-104%"]);
  const gateBottomY = useTransform(progress, [0, 0.06, 0.23], ["0%", "0%", "104%"]);
  const packetX = useTransform(progress, [0.08, 0.25, 0.4], ["-58vw", "-18vw", "0vw"]);
  const packetOpacity = useTransform(progress, [0.06, 0.12, 0.42], [0, 1, 1]);
  const systemOpacity = useTransform(progress, [0.16, 0.3], [0, 1]);
  const copyX = useTransform(progress, [0.24, 0.48], [-42, 0]);
  const copyOpacity = useTransform(progress, [0.2, 0.45], [0, 1]);
  const contextX = useTransform(progress, [0.25, 0.55], [-92, 0]);
  const memoryX = useTransform(progress, [0.25, 0.55], [92, 0]);
  const toolsY = useTransform(progress, [0.25, 0.55], [76, 0]);
  const evidenceY = useTransform(progress, [0.25, 0.55], [-76, 0]);
  const lockOpacity = useTransform(progress, [0.46, 0.6], [0, 1]);
  const lockScale = useTransform(progress, [0.46, 0.6], [1.3, 1]);
  const infoX = useTransform(progress, [0.46, 0.66], [36, 0]);
  const infoOpacity = useTransform(progress, [0.46, 0.66], [0, 1]);
  const contactsY = useTransform(progress, [0.58, 0.76], [54, 0]);
  const contactsOpacity = useTransform(progress, [0.58, 0.76], [0, 1]);

  return (
    <footer
      ref={footerRef}
      id="contact"
      className={styles.footer}
      aria-labelledby="contact-title"
    >
      <div className={styles.stickyFrame}>
        {!reduceMotion ? (
          <div className={styles.paperGate} aria-hidden="true">
            <motion.div className={styles.paperGateTop} style={{ y: gateTopY }}>
              <span>学习记录已归档</span>
              <i>汇入最终系统</i>
            </motion.div>
            <motion.div className={styles.paperGateBottom} style={{ y: gateBottomY }}>
              <span>系统结构正在收束</span>
              <i>联系方式即将开启</i>
            </motion.div>
          </div>
        ) : null}

        <div className={styles.finalFrameMeta} aria-hidden="true">
          <span>FINAL SYSTEM</span>
          <span>STRUCTURE READY</span>
        </div>

        <div className={`site-container ${styles.finalGrid}`}>
          <motion.section
            className={styles.conclusion}
            style={reduceMotion ? undefined : { x: copyX, opacity: copyOpacity }}
          >
            <p className={styles.kicker}>SYSTEM READY / 系统就绪</p>
            <h2 id="contact-title" className={styles.title}>
              <span>结构已就绪。</span>
              <span>证据在归档。</span>
              <span>协作入口开启。</span>
            </h2>
            <p className={styles.invitation}>
              希望遇到认真构建 Agent、重视边界与可靠性的优秀团队。
            </p>
          </motion.section>

          <motion.div
            className={styles.systemStage}
            style={reduceMotion ? undefined : { opacity: systemOpacity }}
            aria-hidden="true"
          >
            <div className={styles.systemStageHeader}>
              <span>AGENT SYSTEM</span>
              <i>STABLE</i>
            </div>
            <span className={styles.systemRail} />
            <motion.div
              className={styles.evidencePacket}
              style={
                reduceMotion
                  ? undefined
                  : { x: packetX, opacity: packetOpacity }
              }
            >
              <b>LOG</b>
              <span>ARCHIVED</span>
            </motion.div>

            <div className={styles.assemblyField}>
              <span className={`${styles.connector} ${styles.connectorHorizontal}`} />
              <span className={`${styles.connector} ${styles.connectorVertical}`} />
              <motion.div
                className={`${styles.systemModule} ${styles.moduleContext}`}
                style={reduceMotion ? undefined : { x: contextX }}
              >
                CONTEXT
              </motion.div>
              <motion.div
                className={`${styles.systemModule} ${styles.moduleMemory}`}
                style={reduceMotion ? undefined : { x: memoryX }}
              >
                MEMORY
              </motion.div>
              <motion.div
                className={`${styles.systemModule} ${styles.moduleTools}`}
                style={reduceMotion ? undefined : { y: toolsY }}
              >
                TOOLS
              </motion.div>
              <motion.div
                className={`${styles.systemModule} ${styles.moduleEvidence}`}
                style={reduceMotion ? undefined : { y: evidenceY }}
              >
                EVIDENCE
              </motion.div>

              <div className={styles.agentCore}>
                <span>
                  <b>AGENT</b>
                  <small>结构稳定</small>
                </span>
                <i />
              </div>
              <motion.span
                className={`${styles.systemLock} ${styles.lockTopLeft}`}
                style={reduceMotion ? undefined : { opacity: lockOpacity, scale: lockScale }}
              />
              <motion.span
                className={`${styles.systemLock} ${styles.lockTopRight}`}
                style={reduceMotion ? undefined : { opacity: lockOpacity, scale: lockScale }}
              />
              <motion.span
                className={`${styles.systemLock} ${styles.lockBottomLeft}`}
                style={reduceMotion ? undefined : { opacity: lockOpacity, scale: lockScale }}
              />
              <motion.span
                className={`${styles.systemLock} ${styles.lockBottomRight}`}
                style={reduceMotion ? undefined : { opacity: lockOpacity, scale: lockScale }}
              />
            </div>

            <motion.p
              className={styles.systemStatus}
              style={reduceMotion ? undefined : { opacity: lockOpacity }}
            >
              结构就绪 · 内容持续更新
            </motion.p>
          </motion.div>

          <motion.aside
            className={styles.systemInfo}
            style={reduceMotion ? undefined : { x: infoX, opacity: infoOpacity }}
          >
            <p>当前状态</p>
            <dl>
              <div><dt>结构</dt><dd>就绪</dd></div>
              <div><dt>内容</dt><dd>整理中</dd></div>
              <div><dt>联系</dt><dd>开放</dd></div>
            </dl>
            <span>没有虚构指标，只保留可确认的信息与下一步入口。</span>
          </motion.aside>
        </div>

        <motion.div
          id="contact-details"
          className={`site-container ${styles.contactDock}`}
          style={
            reduceMotion
              ? undefined
              : { y: contactsY, opacity: contactsOpacity }
          }
          aria-label="联系方式"
        >
          <a className={styles.contactItem} href="mailto:2471998283@qq.com">
            <span>EMAIL</span>
            <strong>2471998283@qq.com</strong>
            <i aria-hidden="true">↗</i>
          </a>
          <a
            className={styles.contactItem}
            href="https://github.com/d3f4w2"
            target="_blank"
            rel="noreferrer"
          >
            <span>GITHUB</span>
            <strong>github.com/d3f4w2</strong>
            <i aria-hidden="true">↗</i>
          </a>
          <details className={styles.wechatContact}>
            <summary className={styles.contactItem}>
              <span>WECHAT</span>
              <strong>打开微信二维码</strong>
              <i aria-hidden="true">＋</i>
            </summary>
            <div className={styles.qrPanel}>
              <div className={styles.qrViewport}>
                <Image
                  className={styles.qrImage}
                  src="/wechat-contact.jpg"
                  alt="微信二维码名片"
                  fill
                  sizes="(max-width: 640px) 82vw, 20rem"
                />
              </div>
              <div className={styles.qrCaption}>
                <span>微信联系</span>
                <p>打开微信扫一扫，添加我为好友。</p>
              </div>
            </div>
          </details>
        </motion.div>

        <div className={`site-container ${styles.lastFrame}`}>
          <p>联系方式</p>
          <a href="#main-content">返回开场 <span aria-hidden="true">↑</span></a>
        </div>
      </div>
    </footer>
  );
}
