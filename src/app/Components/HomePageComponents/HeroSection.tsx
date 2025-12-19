"use client";

import Link from "next/link";
import Container from "./Container";
import AnimatedOfferStars from "./AnimatedOfferStars";
import AnimatedOfferOuterFx from "./AnimatedOfferOuterFx";
import { useRef, useState, useSyncExternalStore } from "react";
import type React from "react";

function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (onStoreChange) => {
      const mql = window.matchMedia(query);
      const handler = () => onStoreChange();
      mql.addEventListener?.("change", handler);
      return () => mql.removeEventListener?.("change", handler);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}

export default function HeroSection() {
  const [isHover, setIsHover] = useState(false);
  const [mouse, setMouse] = useState({ x: 50, y: 35 });
  const isAutoBoost = useMediaQuery("(hover: none)");
  const rafRef = useRef<number | null>(null);
  const nextRef = useRef(mouse);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    nextRef.current = { x, y };

    if (rafRef.current != null) return;
    rafRef.current = window.requestAnimationFrame(() => {
      setMouse(nextRef.current);
      rafRef.current = null;
    });
  };

  return (
    <section className="relative overflow-hidden bg-[#0b1f14]">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -top-24 left-1/2 h-72 w-184 -translate-x-1/2 rounded-full bg-emerald-200/20 blur-3xl" />
        <div className="absolute -bottom-36 left-1/3 h-72 w-184 -translate-x-1/2 rounded-full bg-lime-200/15 blur-3xl" />
      </div>

      <Container>
        <div className="relative py-14 sm:py-20">


          <div className="mt-6 grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Premium Email Accounts, delivered instantly.
              </h1>
              <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-white/70 sm:text-lg">
                We sell premium email accounts with verified quality, clear
                stock availability, and fast delivery. Buy confidently with a
                smooth checkout and responsive support.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#products"
                  className="inline-flex items-center justify-center rounded-sm bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100"
                >
                  Browse products
                </a>
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center rounded-sm border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Create an account
                </Link>
              </div>


            </div>

            <div className="lg:col-span-5">
              <div
                className="group relative overflow-visible transition duration-500 will-change-transform hover:-translate-y-0.5 hover:drop-shadow-[0_22px_70px_rgba(0,0,0,0.45)]"
                onPointerEnter={() => setIsHover(true)}
                onPointerLeave={() => setIsHover(false)}
                onPointerMove={handlePointerMove}
              >
                <AnimatedOfferOuterFx active={isHover || isAutoBoost} mouseX={mouse.x} mouseY={mouse.y} />
                <div className="relative z-10 overflow-hidden rounded-sm border border-white/10 bg-linear-to-b from-white/10 to-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">
                  <AnimatedOfferStars active={isHover || isAutoBoost} mouseX={mouse.x} mouseY={mouse.y} />
                  <div className="relative">
                    <p className="text-sm font-semibold text-white">Today’s offer</p>
                    <p className="mt-2 text-2xl font-semibold tracking-tight text-white">
                      Seasonal bonus credits
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/70">
                      Recharge more, get extra credits automatically applied at
                      checkout. Limited-time promotion.
                    </p>
                    <div className="mt-6 space-y-3">
                      {[
                        { amount: "$100+", bonus: "10% bonus" },
                        { amount: "$500+", bonus: "15% bonus" },
                        { amount: "$1000+", bonus: "20% bonus" },
                      ].map((r) => (
                        <div
                          key={r.amount}
                          className="flex items-center justify-between rounded-sm border border-white/10 bg-white/5 px-4 py-3 text-sm text-white"
                        >
                          <span className="font-semibold">{r.amount} recharge</span>
                          <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-900">
                            {r.bonus}
                          </span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-5 text-xs text-white/60">
                      Limited time only • Ends soon
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}


