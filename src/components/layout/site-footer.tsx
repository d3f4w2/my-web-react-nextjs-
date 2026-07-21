"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  const footerRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: footerRef, offset: ["start end", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 88, damping: 28, mass: 0.4 });
  const assemblyX = useTransform(progress, [0.05, 0.68], [120, 0]);
  const assemblyScale = useTransform(progress, [0.05, 0.68], [0.82, 1]);
  const sealScale = useTransform(progress, [0.58, 0.88], [0, 1]);

  return (
    <footer ref={footerRef} id="contact" className={styles.footer} aria-labelledby="contact-title">
      <div className={styles.stickyFrame}>
        <div className={`site-container ${styles.inner}`}>
          <div className={styles.topline}><p>SYSTEM ASSEMBLY COMPLETE / 系统装配完成</p><span>STATUS: STRUCTURE READY · CONTENT IN REVIEW</span></div>
          <div className={styles.finalStage}>
            <div className={styles.statement}>
              <p className={styles.eyebrow}>FINAL FRAME / RESPONSIBLE DELIVERY</p>
              <h2 id="contact-title" className={styles.title}><span>系统稳定。</span><span>证据闭环。</span><span>可持续协作。</span></h2>
              <ul className={styles.principles}><li>理解上下文，服从目标约束</li><li>链接工具，安全可靠地调用</li><li>记录执行，让结果可验证可追溯</li></ul>
            </div>
            <motion.div className={styles.assemblyPanel} style={reduceMotion ? undefined : { x: assemblyX, scale: assemblyScale }}>
              <Image className={styles.assemblyImage} src="/assets/homepage/agent-assembly.png" alt="完成装配的 Agent 系统核心" fill sizes="(max-width: 767px) 92vw, 52vw" />
              <motion.div className={styles.seal} style={reduceMotion ? undefined : { scale: sealScale }} aria-hidden="true">LAB<br />SEAL</motion.div>
              <div className={styles.systemInfo}><span>CORE MODULES <b>4 / 4</b></span><span>EVIDENCE CHAIN <b>TRACEABLE</b></span><span>STATUS <b>RUNNING</b></span></div>
            </motion.div>
          </div>
          <div className={styles.contactList} aria-label="联系方式">
            <a className={styles.contactItem} href="mailto:2471998283@qq.com"><span>MAIL</span><strong>2471998283@qq.com</strong><i aria-hidden="true">↗</i></a>
            <a className={styles.contactItem} href="https://github.com/d3f4w2" target="_blank" rel="noreferrer"><span>GITHUB</span><strong>github.com/d3f4w2</strong><i aria-hidden="true">↗</i></a>
            <details className={styles.wechatContact}>
              <summary className={styles.contactItem}><span>WECHAT</span><strong>点击展开二维码</strong><i aria-hidden="true">＋</i></summary>
              <div className={styles.qrPanel}><div className={styles.qrViewport}><Image className={styles.qrImage} src="/wechat-contact.jpg" alt="微信二维码名片" fill sizes="20rem" /></div><p>打开微信扫一扫，添加我为好友。</p></div>
            </details>
          </div>
          <div className={styles.lastFrame}><p>AGENT SYSTEMS LAB / BUILD FOR HUMANS</p><a href="#main-content">返回开场 <span aria-hidden="true">↑</span></a></div>
        </div>
      </div>
    </footer>
  );
}
