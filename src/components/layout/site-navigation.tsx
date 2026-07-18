"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./site-header.module.css";

const navigationItems = [
  { href: "/projects", label: "项目" },
  { href: "/blog", label: "博客" },
] as const;

export function SiteNavigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="主要导航">
      <ul className={styles.navigationList}>
        {navigationItems.map((item) => {
          const isActive =
            pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <li key={item.href}>
              <Link
                className={styles.navigationLink}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
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
