import Image from "next/image";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer id="contact" className={styles.footer} aria-labelledby="contact-title">
      <div className={`site-container ${styles.inner}`}>
        <div className={styles.topline}>
          <p>PERSONAL AGENT LAB / END</p>
          <span>Open for conversation</span>
        </div>

        <div className={styles.statement}>
          <h2 id="contact-title" className={styles.title}>
            <span>真正的工作，</span>
            <span>发生在回答之后。</span>
          </h2>
          <p className={styles.invitation}>
            希望遇到认真构建 Agent 的优秀团队。
          </p>
        </div>

        <div className={styles.contactList} aria-label="联系方式">
          <a className={styles.contactItem} href="mailto:2471998283@qq.com">
            <span>Email</span>
            <strong>2471998283@qq.com</strong>
            <i aria-hidden="true">↗</i>
          </a>
          <a
            className={styles.contactItem}
            href="https://github.com/d3f4w2"
            target="_blank"
            rel="noreferrer"
          >
            <span>GitHub</span>
            <strong>github.com/d3f4w2</strong>
            <i aria-hidden="true">↗</i>
          </a>
          <details className={styles.wechatContact}>
            <summary className={styles.contactItem}>
              <span>WeChat</span>
              <strong>点击展开二维码</strong>
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
                <span>WECHAT CONTACT</span>
                <p>打开微信扫一扫，添加我为好友。</p>
              </div>
            </div>
          </details>
        </div>

        <div className={styles.lastFrame}>
          <p>Email · GitHub · WeChat</p>
          <a href="#main-content">
            返回开场 <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
