import Image from "next/image";
import Link from "next/link";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer id="contact" className={styles.footer} aria-labelledby="contact-title">
      <div className={`site-container ${styles.frame}`}>
        <div className={styles.heading}>
          <h2 id="contact-title">
            <span>如果你在做 AI 产品或开源项目，</span>
            <span>可以联系我。</span>
          </h2>
        </div>

        <div id="contact-details" className={styles.contactDetails}>
          <div className={styles.links}>
            <a href="mailto:2471998283@qq.com">
              <span>邮箱</span>
              <strong>2471998283@qq.com</strong>
            </a>
            <Link href="/resume" transitionTypes={["nav-forward"]}>
              <span>简历</span>
              <strong>打开完整网页简历</strong>
            </Link>
            <a
              href="https://github.com/d3f4w2"
              target="_blank"
              rel="noreferrer"
            >
              <span>代码主页</span>
              <strong>github.com/d3f4w2</strong>
            </a>
            <details className={styles.wechat}>
              <summary>
                <span>微信</span>
                <strong>查看二维码</strong>
              </summary>
              <div className={styles.qrPanel}>
                <div className={styles.qrImage}>
                  <Image
                    src="/wechat-contact.jpg"
                    alt="微信二维码名片"
                    fill
                    sizes="(max-width: 640px) 72vw, 16rem"
                  />
                </div>
                <p>打开微信扫一扫。</p>
              </div>
            </details>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()}</span>
          <a href="#main-content">回到顶部</a>
        </div>
      </div>
    </footer>
  );
}
