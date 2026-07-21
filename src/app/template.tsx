import { ViewTransition } from "react";

export default function RouteTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransition
      default="route-cut"
      enter={{
        "nav-forward": "route-forward",
        "nav-back": "route-back",
        default: "route-cut",
      }}
      exit={{
        "nav-forward": "route-forward",
        "nav-back": "route-back",
        default: "route-cut",
      }}
    >
      {children}
    </ViewTransition>
  );
}
