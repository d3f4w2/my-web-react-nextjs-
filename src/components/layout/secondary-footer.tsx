import Link from "next/link";
import styles from "./secondary-footer.module.css";

const contactItems = [
  {
    label: "邮箱",
    value: "2471998283@qq.com",
    href: "mailto:2471998283@qq.com",
  },
  {
    label: "简历",
    value: "打开完整网页简历",
    href: "/resume",
  },
  {
    label: "代码主页",
    value: "github.com/d3f4w2",
    href: "https://github.com/d3f4w2",
  },
  {
    label: "微信",
    value: "打开联系页面",
    href: "/contact",
  },
] as const;

export function SecondaryFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`site-container ${styles.inner}`}>
        <div className={styles.statement}>
          <p className={styles.title}>需要了解项目细节，可以直接联系我。</p>
        </div>

        <div className={styles.contacts} aria-label="联系方式">
          {contactItems.map((item) => (
            <a
              className={styles.contact}
              href={item.href}
              key={item.label}
              rel={item.href.startsWith("https") ? "noreferrer" : undefined}
              target={item.href.startsWith("https") ? "_blank" : undefined}
            >
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </a>
          ))}
        </div>

        <div className={styles.navigation}>
          <Link href="/" transitionTypes={["nav-back"]}>
            返回首页
          </Link>
          <Link href="/projects" transitionTypes={["nav-forward"]}>
            项目
          </Link>
          <Link href="/blog" transitionTypes={["nav-forward"]}>
            文章
          </Link>
          <Link href="/resume" transitionTypes={["nav-forward"]}>
            简历
          </Link>
          <Link href="/contact" transitionTypes={["nav-forward"]}>
            联系
          </Link>
        </div>
      </div>
    </footer>
  );
}
