import Link from "next/link";
import styles from "./secondary-footer.module.css";

const contactItems = [
  {
    label: "Email",
    value: "2471998283@qq.com",
    href: "mailto:2471998283@qq.com",
  },
  {
    label: "GitHub",
    value: "github.com/d3f4w2",
    href: "https://github.com/d3f4w2",
  },
] as const;

export function SecondaryFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`site-container ${styles.inner}`}>
        <div className={styles.statement}>
          <p className={styles.eyebrow}>继续对话</p>
          <p className={styles.title}>真正的工作，从问题被说清楚之后开始。</p>
        </div>

        <div className={styles.contacts} aria-label="联系方式">
          {contactItems.map((item) => (
            <a
              className={styles.contact}
              href={item.href}
              key={item.label}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              target={item.href.startsWith("http") ? "_blank" : undefined}
            >
              <span>{item.label}</span>
              <strong>{item.value}</strong>
              <i aria-hidden="true">↗</i>
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
            博客
          </Link>
          <Link href="/#contact-details" transitionTypes={["nav-back"]}>
            微信联系
          </Link>
        </div>
      </div>
    </footer>
  );
}
