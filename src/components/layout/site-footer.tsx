import Link from "next/link";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`site-container ${styles.inner}`}>
        <div>
          <p className={styles.title}>AI Agent Portfolio</p>
          <p className={styles.note}>内容与联系方式将在本人确认后逐步公开。</p>
        </div>
        <div className={styles.links} aria-label="页脚导航">
          <Link href="/">首页</Link>
          <Link href="/projects">项目</Link>
          <Link href="/blog">博客</Link>
        </div>
        <p className={styles.status}>
          <span aria-hidden="true" /> Local build · Content draft
        </p>
      </div>
    </footer>
  );
}
