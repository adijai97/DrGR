"use client";
import React, { ReactNode } from "react";
import styles from "./aurora-background.module.css";

/**
 * AuroraOverlay — drop inside any position:relative + overflow:hidden
 * container as its first child. Renders the animated warm-aurora layer
 * clipped to the card bounds. z-index:0; all card content should be z-index:1+.
 */
export function AuroraOverlay({ mask = true }: { mask?: boolean }) {
  return (
    <div className={styles.wrap} aria-hidden="true">
      <div className={[styles.aurora, mask ? styles.mask : ""].filter(Boolean).join(" ")} />
    </div>
  );
}

/**
 * AuroraBackground — full-page variant matching the original 21st.dev API.
 */
interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export function AuroraBackground({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) {
  return (
    <div
      className={className}
      style={{ position: "relative", overflow: "hidden", background: "#C9724A" }}
      {...props}
    >
      <AuroraOverlay />
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}
