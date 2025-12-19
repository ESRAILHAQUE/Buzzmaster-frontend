import type React from "react";
import styles from "./AnimatedOfferStars.module.css";

type AnimatedOfferStarsProps = {
  active?: boolean;
  /** 0..100 (percentage of the card width) */
  mouseX?: number;
  /** 0..100 (percentage of the card height) */
  mouseY?: number;
};

type Meteor = {
  x: string;
  y: string;
  w: string;
  h: string;
  r: string;
  o: number;
  d: string;
  delay: string;
};

type Twinkle = {
  tx: string;
  ty: string;
  ts: string;
  to: number;
  td: string;
  tDelay: string;
};

const METEORS: Meteor[] = [
  { x: "6%", y: "18%", w: "140px", h: "2px", r: "18deg", o: 0.55, d: "5.8s", delay: "0.2s" },
  { x: "10%", y: "62%", w: "120px", h: "2px", r: "22deg", o: 0.42, d: "6.6s", delay: "1.1s" },
  { x: "22%", y: "32%", w: "170px", h: "2px", r: "16deg", o: 0.5, d: "7.2s", delay: "0.7s" },
  { x: "34%", y: "74%", w: "150px", h: "2px", r: "20deg", o: 0.36, d: "6.9s", delay: "2.2s" },
  { x: "44%", y: "14%", w: "190px", h: "2px", r: "14deg", o: 0.48, d: "7.6s", delay: "1.7s" },
  { x: "58%", y: "44%", w: "160px", h: "2px", r: "19deg", o: 0.44, d: "6.1s", delay: "2.9s" },
  { x: "68%", y: "26%", w: "130px", h: "2px", r: "24deg", o: 0.34, d: "5.9s", delay: "3.5s" },
  { x: "76%", y: "66%", w: "180px", h: "2px", r: "15deg", o: 0.38, d: "7.9s", delay: "4.1s" },
];

const TWINKLES: Twinkle[] = [
  { tx: "12%", ty: "22%", ts: "3px", to: 0.35, td: "3.2s", tDelay: "0.1s" },
  { tx: "18%", ty: "52%", ts: "2px", to: 0.28, td: "2.6s", tDelay: "0.7s" },
  { tx: "28%", ty: "38%", ts: "2px", to: 0.22, td: "3.8s", tDelay: "1.4s" },
  { tx: "36%", ty: "18%", ts: "3px", to: 0.30, td: "2.9s", tDelay: "0.9s" },
  { tx: "46%", ty: "58%", ts: "2px", to: 0.24, td: "4.4s", tDelay: "2.1s" },
  { tx: "54%", ty: "30%", ts: "2px", to: 0.26, td: "3.1s", tDelay: "1.7s" },
  { tx: "62%", ty: "20%", ts: "3px", to: 0.32, td: "3.6s", tDelay: "2.8s" },
  { tx: "72%", ty: "46%", ts: "2px", to: 0.20, td: "4.0s", tDelay: "3.3s" },
  { tx: "82%", ty: "28%", ts: "2px", to: 0.22, td: "3.4s", tDelay: "1.9s" },
  { tx: "86%", ty: "64%", ts: "3px", to: 0.26, td: "4.8s", tDelay: "3.9s" },
];

const SPARKS = [
  { ox: "-24px", oy: "-18px", sd: "0.1s" },
  { ox: "18px", oy: "-10px", sd: "0.5s" },
  { ox: "34px", oy: "8px", sd: "0.9s" },
  { ox: "6px", oy: "22px", sd: "0.2s" },
  { ox: "-18px", oy: "26px", sd: "0.7s" },
  { ox: "-38px", oy: "6px", sd: "1.1s" },
  { ox: "-8px", oy: "-34px", sd: "1.3s" },
  { ox: "28px", oy: "-30px", sd: "0.8s" },
] as const;

function clamp01to100(n: number) {
  return Math.max(0, Math.min(100, n));
}

export default function AnimatedOfferStars({
  active = false,
  mouseX = 50,
  mouseY = 35,
}: AnimatedOfferStarsProps) {
  const mx = `${clamp01to100(mouseX).toFixed(2)}%`;
  const my = `${clamp01to100(mouseY).toFixed(2)}%`;

  return (
    <div
      className={`${styles.wrap} ${active ? styles.active : ""}`}
      aria-hidden="true"
      style={{ ["--mx" as any]: mx, ["--my" as any]: my } as React.CSSProperties}
    >
      <span className={styles.border} />
      <div className={styles.layer}>
        {METEORS.map((m, i) => (
          <span
            key={`m-${i}`}
            className={styles.meteor}
            style={
              {
                ["--x" as any]: m.x,
                ["--y" as any]: m.y,
                ["--w" as any]: m.w,
                ["--h" as any]: m.h,
                ["--r" as any]: m.r,
                ["--o" as any]: String(m.o),
                ["--d" as any]: m.d,
                ["--delay" as any]: m.delay,
              } as React.CSSProperties
            }
          />
        ))}

        {SPARKS.map((s, i) => (
          <span
            key={`s-${i}`}
            className={styles.spark}
            style={
              {
                ["--ox" as any]: s.ox,
                ["--oy" as any]: s.oy,
                ["--sd" as any]: s.sd,
              } as React.CSSProperties
            }
          />
        ))}

        {TWINKLES.map((t, i) => (
          <span
            key={`t-${i}`}
            className={styles.twinkle}
            style={
              {
                ["--tx" as any]: t.tx,
                ["--ty" as any]: t.ty,
                ["--ts" as any]: t.ts,
                ["--to" as any]: String(t.to),
                ["--td" as any]: t.td,
                ["--tDelay" as any]: t.tDelay,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </div>
  );
}


