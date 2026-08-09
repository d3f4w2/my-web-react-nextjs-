import Link from "next/link";
import styles from "./site-header.module.css";

const navigationItems = [
  { section: undefined, href: "/", label: "首页", transitionType: "nav-back" },
  { section: "projects", href: "/projects", label: "项目", transitionType: "nav-forward" },
  { section: "blog", href: "/blog", label: "文章", transitionType: "nav-forward" },
  { section: "resume", href: "/resume", label: "简历", transitionType: "nav-forward" },
  { section: "contact", href: "/contact", label: "联系", transitionType: "nav-forward" },
] as const;

export type NavigationSection = "projects" | "blog" | "resume" | "contact";

type SiteNavigationProps = {
  activeSection?: NavigationSection;
};

export function SiteNavigation({ activeSection }: SiteNavigationProps) {
  return (
    <nav aria-label="主要导航">
      <ul className={styles.navigationList}>
        {navigationItems.map((item) => (
          <li key={item.href}>
            <Link
              className={styles.navigationLink}
              href={item.href}
              aria-current={
                item.section !== undefined && item.section === activeSection
                  ? "page"
                  : undefined
              }
              transitionTypes={[item.transitionType]}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
