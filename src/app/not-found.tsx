import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main id="main-content" className={styles.main}>
      <section className={styles.section} aria-labelledby="not-found-title">
        <div className={`site-container ${styles.layout}`}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>404 / Route not found</p>
            <h1 id="not-found-title" className={styles.title}>
              这条路径没有进入工作流。
            </h1>
            <p className={styles.description}>
              页面可能尚未创建、已经移动，或链接地址不完整。你可以回到已确认的入口继续浏览。
            </p>

            <nav className={styles.actions} aria-label="404 页面恢复导航">
              <Link className={styles.primaryAction} href="/">
                返回首页 <span aria-hidden="true">↗</span>
              </Link>
              <Link className={styles.secondaryAction} href="/projects">
                查看项目
              </Link>
              <Link className={styles.textAction} href="/blog">
                阅读博客 <span aria-hidden="true">→</span>
              </Link>
            </nav>

            <p className={styles.hint}>
              如果你是通过旧链接来到这里，可以从首页重新选择路径。
            </p>
          </div>

          <aside className={styles.statusPanel} aria-label="路由检查结果">
            <div className={styles.panelHeader}>
              <span className={styles.windowDots} aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <code>route.check.ts</code>
              <span className={styles.panelState}>UNMATCHED</span>
            </div>

            <div className={styles.panelBody}>
              <p className={styles.errorCode} aria-label="错误代码 404">
                404
              </p>
              <p className={styles.panelMessage}>No page module matched this route.</p>

              <dl className={styles.routeStatus}>
                <div>
                  <dt>route.match</dt>
                  <dd>not_found</dd>
                </div>
                <div>
                  <dt>response</dt>
                  <dd>404</dd>
                </div>
                <div>
                  <dt>next.action</dt>
                  <dd>recover_to_known_route</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
