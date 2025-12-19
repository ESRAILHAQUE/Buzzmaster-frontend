import type { ReactNode } from "react";

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  right,
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  right?: ReactNode;
  tone?: "light" | "dark";
}) {
  const eyebrowCls =
    tone === "dark"
      ? "text-xs font-semibold uppercase tracking-[0.18em] text-white/70"
      : "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500";

  const titleCls =
    tone === "dark"
      ? "mt-1 text-2xl font-semibold tracking-tight text-white sm:text-3xl"
      : "mt-1 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl";

  const subtitleCls =
    tone === "dark"
      ? "mt-2 text-sm leading-6 text-white/80 sm:text-base"
      : "mt-2 text-sm leading-6 text-slate-600 sm:text-base";

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        {eyebrow ? (
          <p className={eyebrowCls}>{eyebrow}</p>
        ) : null}
        <h2 className={titleCls}>{title}</h2>
        {subtitle ? (
          <p className={subtitleCls}>{subtitle}</p>
        ) : null}
      </div>
      {right ? <div className="shrink-0">{right}</div> : null}
    </div>
  );
}


