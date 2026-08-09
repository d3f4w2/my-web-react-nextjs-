"use client";

import type { PointerEvent, ReactNode } from "react";

type PointerImageFrameProps = {
  children: ReactNode;
  className: string;
};

export function PointerImageFrame({
  children,
  className,
}: PointerImageFrameProps) {
  const moveImage = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * -0.7;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * -0.7;

    event.currentTarget.style.setProperty("--image-x", `${x}rem`);
    event.currentTarget.style.setProperty("--image-y", `${y}rem`);
  };

  const resetImage = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty("--image-x", "0rem");
    event.currentTarget.style.setProperty("--image-y", "0rem");
  };

  return (
    <div
      className={className}
      onPointerMove={moveImage}
      onPointerLeave={resetImage}
    >
      {children}
    </div>
  );
}
