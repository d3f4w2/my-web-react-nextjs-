import Link from "next/link";
import { SiteNavigation } from "./site-navigation";
import styles from "./site-header.module.css";

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={`site-container ${styles.inner}`}>
        <Link className={styles.brand} href="/" aria-label="Personal Agent Lab 首页">
          <span className={styles.brandSignal} aria-hidden="true" />
          <span className={styles.brandName}>Agent Systems Lab</span>
        </Link>
        <div className={styles.systemState} aria-label="网站当前状态">
          <span>SYS_MODE: <b>ASSEMBLY</b></span>
          <span>STATUS: <b>RUNNING</b></span>
        </div>
        <SiteNavigation />
      </div>
    </header>
  );
}
