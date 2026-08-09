import type { ReactNode } from "react";
import { SecondaryFooter } from "./secondary-footer";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import type { NavigationSection } from "./site-navigation";

type PageFrameProps = {
  activeSection?: NavigationSection;
  children: ReactNode;
  footer?: "primary" | "secondary" | "none";
};

export function PageFrame({
  activeSection,
  children,
  footer = "secondary",
}: PageFrameProps) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        跳到主要内容
      </a>
      <SiteHeader activeSection={activeSection} />
      {children}
      {footer === "primary" ? (
        <SiteFooter />
      ) : footer === "secondary" ? (
        <SecondaryFooter />
      ) : null}
    </>
  );
}
