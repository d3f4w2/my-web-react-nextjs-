import Link from "next/link";
import { SiteNavigation } from "./site-navigation";
import styles from "./site-header.module.css";

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={`site-container ${styles.inner}`}>
        <Link className={styles.brand} href="/" aria-label="AI Agent Portfolio 首页">
          <span className={styles.brandMark} aria-hidden="true">
            A/01
          </span>
          <span className={styles.brandName}>Agent Portfolio</span>
        </Link>
        <SiteNavigation />
      </div>
    </header>
  );
}
