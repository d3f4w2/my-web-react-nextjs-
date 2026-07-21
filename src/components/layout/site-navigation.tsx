"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./site-header.module.css";

const navigationItems = [
  { href: "/projects", label: "项目", transitionType: "nav-forward" },
  { href: "/blog", label: "博客", transitionType: "nav-forward" },
  { href: "/#contact-details", label: "联系", transitionType: "nav-back" },
] as const;

export function SiteNavigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="主要导航">
      <ul className={styles.navigationList}>
        {navigationItems.map((item) => {
          const routeHref = item.href.split("#")[0];
          const isActive =
            routeHref !== "/" &&
            (pathname === routeHref || pathname.startsWith(`${routeHref}/`));

          return (
            <li key={item.href}>
              <Link
                className={styles.navigationLink}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                transitionTypes={[item.transitionType]}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
