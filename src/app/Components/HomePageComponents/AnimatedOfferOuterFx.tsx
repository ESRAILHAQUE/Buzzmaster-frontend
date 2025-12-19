import type React from "react";
import styles from "./AnimatedOfferOuterFx.module.css";

type AnimatedOfferOuterFxProps = {
  active?: boolean;
  /** 0..100 (percentage of the card width) */
  mouseX?: number;
  /** 0..100 (percentage of the card height) */
  mouseY?: number;
};

const OUTER_STARS = [
  { s: "6px", o: 0.28, a: "18deg", r: "calc(50% - 2px)", d: "6.6s", delay: "0.1s", gd: "1.8s", gDelay: "0.2s" },
  { s: "5px", o: 0.22, a: "56deg", r: "calc(49% + 6px)", d: "7.8s", delay: "0.9s", gd: "2.2s", gDelay: "0.6s" },
  { s: "7px", o: 0.30, a: "94deg", r: "calc(50% + 12px)", d: "8.4s", delay: "1.4s", gd: "2.6s", gDelay: "1.1s" },
  { s: "5px", o: 0.20, a: "132deg", r: "calc(49% + 2px)", d: "6.9s", delay: "0.4s", gd: "2.0s", gDelay: "0.8s" },
  { s: "6px", o: 0.26, a: "176deg", r: "calc(50% + 10px)", d: "9.2s", delay: "2.1s", gd: "2.8s", gDelay: "1.4s" },
  { s: "5px", o: 0.18, a: "214deg", r: "calc(49% + 14px)", d: "7.1s", delay: "1.9s", gd: "2.1s", gDelay: "0.9s" },
  { s: "7px", o: 0.24, a: "252deg", r: "calc(50% + 6px)", d: "8.9s", delay: "2.7s", gd: "2.4s", gDelay: "1.7s" },
  { s: "6px", o: 0.20, a: "292deg", r: "calc(50% + 18px)", d: "10.2s", delay: "3.2s", gd: "3.0s", gDelay: "2.0s" },
  { s: "5px", o: 0.18, a: "328deg", r: "calc(49% + 8px)", d: "7.4s", delay: "0.7s", gd: "2.3s", gDelay: "1.2s" },
] as const;

function clamp01to100(n: number) {
  return Math.max(0, Math.min(100, n));
}

export default function AnimatedOfferOuterFx({
  active = false,
  mouseX = 50,
  mouseY = 35,
}: AnimatedOfferOuterFxProps) {
  const mx = `${clamp01to100(mouseX).toFixed(2)}%`;
  const my = `${clamp01to100(mouseY).toFixed(2)}%`;

  return (
    <div
      className={`${styles.outer} ${active ? styles.active : ""}`}
      aria-hidden="true"
      style={{ ["--mx" as any]: mx, ["--my" as any]: my } as React.CSSProperties}
    >
      {OUTER_STARS.map((st, i) => (
        <span
          key={`o-${i}`}
          className={styles.star}
          style={
            {
              ["--s" as any]: st.s,
              ["--o" as any]: String(st.o),
              ["--a" as any]: st.a,
              ["--r" as any]: st.r,
              ["--d" as any]: st.d,
              ["--delay" as any]: st.delay,
              ["--gd" as any]: st.gd,
              ["--gDelay" as any]: st.gDelay,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}


