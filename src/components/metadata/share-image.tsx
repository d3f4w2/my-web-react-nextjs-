import type { ReactNode } from "react";

type ShareImageProps = {
  category: string;
  children: ReactNode;
  footer: string;
};

export function ShareImage({ category, children, footer }: ShareImageProps) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "58px 68px 52px",
        color: "#f1ede4",
        background: "#0c0b0a",
        fontFamily: "Portfolio Editorial",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "flex-start",
          paddingBottom: "22px",
          borderBottom: "1px solid rgba(241, 237, 228, 0.22)",
          fontSize: 19,
          letterSpacing: "0.08em",
        }}
      >
        <span style={{ fontWeight: 600 }}>{category}</span>
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          paddingRight: "118px",
        }}
      >
        {children}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingTop: "20px",
          borderTop: "1px solid rgba(241, 237, 228, 0.22)",
          color: "#aaa399",
          fontSize: 16,
        }}
      >
        <span>{footer}</span>
      </div>

      <div
        style={{
          position: "absolute",
          top: 58,
          right: 68,
          width: 150,
          height: 2,
          background: "#c7f23b",
        }}
      />
    </div>
  );
}
