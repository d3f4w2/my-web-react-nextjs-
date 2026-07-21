import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main id="main-content" className={styles.main}>
      <section className={styles.section} aria-labelledby="not-found-title">
        <div className={styles.beam} aria-hidden="true" />
        <div className={`site-container ${styles.layout}`}>
          <div className={styles.code} aria-hidden="true">
            404
          </div>

          <div className={styles.copy}>
            <p className={styles.eyebrow}>放映中断</p>
            <h1 id="not-found-title" className={styles.title}>
              这一幕没有进入最终剪辑。
            </h1>
            <p className={styles.description}>
              页面可能尚未创建、已经移动，或链接地址不完整。返回已确认的入口，继续查看项目与记录。
            </p>

            <nav className={styles.actions} aria-label="404 页面恢复导航">
              <Link
                className={styles.primaryAction}
                href="/"
                transitionTypes={["nav-back"]}
              >
                返回首页 <span aria-hidden="true">↗</span>
              </Link>
              <Link href="/projects" transitionTypes={["nav-forward"]}>
                查看项目
              </Link>
              <Link href="/blog" transitionTypes={["nav-forward"]}>
                阅读博客
              </Link>
            </nav>
          </div>
        </div>
      </section>
    </main>
  );
}
