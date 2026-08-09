import { SiteNavigation, type NavigationSection } from "./site-navigation";
import styles from "./site-header.module.css";

type SiteHeaderProps = {
  activeSection?: NavigationSection;
};

export function SiteHeader({ activeSection }: SiteHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={`site-container ${styles.inner}`}>
        <SiteNavigation activeSection={activeSection} />
      </div>
    </header>
  );
}
