import Link from "next/link";
import { SiteNavigation } from "./site-navigation";
import styles from "./site-header.module.css";

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={`site-container ${styles.inner}`}>
        <Link className={styles.brand} href="/" aria-label="Personal Agent Lab 首页">
          <span className={styles.brandMark} aria-hidden="true">
            LAB
          </span>
          <span className={styles.brandName}>Personal Agent Lab</span>
        </Link>
        <SiteNavigation />
      </div>
    </header>
  );
}
