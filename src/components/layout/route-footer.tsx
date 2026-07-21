"use client";

import { usePathname } from "next/navigation";
import { SecondaryFooter } from "./secondary-footer";
import { SiteFooter } from "./site-footer";

export function RouteFooter() {
  const pathname = usePathname();

  return pathname === "/" ? <SiteFooter /> : <SecondaryFooter />;
}
