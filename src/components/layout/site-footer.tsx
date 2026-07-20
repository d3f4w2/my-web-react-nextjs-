import Image from "next/image";
import Link from "next/link";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={`site-container ${styles.inner}`}>
        <div className={styles.statement}>
          <p className={styles.kicker}>CONTACT / END CREDITS</p>
          <h2 className={styles.title}>下一次实验，也可以从一次对话开始。</h2>
          <p className={styles.note}>
            如果你想讨论 Agent、项目实践或实习机会，可以通过下面任意一种方式联系我。
          </p>
        </div>

        <div className={styles.contactList} aria-label="联系方式">
          <a className={styles.contactItem} href="mailto:2471998283@qq.com">
            <span>01 / EMAIL</span>
            <strong>2471998283@qq.com</strong>
            <i aria-hidden="true">↗</i>
          </a>
          <a
            className={styles.contactItem}
            href="https://github.com/d3f4w2"
            target="_blank"
            rel="noreferrer"
          >
            <span>02 / GITHUB</span>
            <strong>github.com/d3f4w2</strong>
            <i aria-hidden="true">↗</i>
          </a>
          <details className={styles.wechatContact}>
            <summary className={styles.contactItem}>
              <span>03 / WECHAT</span>
              <strong>生生 · 扫码添加</strong>
              <i aria-hidden="true">＋</i>
            </summary>
            <div className={styles.qrPanel}>
              <div className={styles.qrViewport}>
                <Image
                  className={styles.qrImage}
                  src="/wechat-contact.jpg"
                  alt="微信二维码名片"
                  fill
                  sizes="(max-width: 640px) 82vw, 22rem"
                />
              </div>
              <div className={styles.qrCaption}>
                <span>WECHAT CONTACT</span>
                <p>打开微信扫一扫，添加我为好友。</p>
              </div>
            </div>
          </details>
        </div>

        <div className={styles.bottomBar}>
          <nav className={styles.links} aria-label="页脚导航">
            <Link href="/">首页</Link>
            <Link href="/projects">项目</Link>
            <Link href="/blog">博客</Link>
          </nav>
          <a className={styles.backToTop} href="#main-content">
            Back to top / 重新进入实验室 <span aria-hidden="true">↑</span>
          </a>
        </div>

        <p className={styles.status}>
          <span aria-hidden="true" /> Personal Agent Lab · Local build · Open notebook
        </p>
      </div>
    </footer>
  );
}
