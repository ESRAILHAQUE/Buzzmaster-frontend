 "use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";

// (Links removed per request)

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileMenuId = useId();

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false);
    }

    if (mobileOpen) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/20 bg-[#0b1f14] text-white shadow-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 font-semibold tracking-tight text-white"
        >
          <span className="grid h-9 w-9 place-items-center rounded-sm bg-white/10 text-sm font-bold text-white shadow-sm ring-1 ring-white/15">
            BZ
          </span>
          <span className="hidden sm:inline">Buzzmaster</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {/* Links removed per request */}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#products"
            className="hidden rounded-sm px-3 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 md:inline-flex"
          >
            Browse Products
          </a>
          <Link
            href="/login"
            className="hidden rounded-sm px-3 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 md:inline-flex"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="hidden items-center justify-center rounded-sm bg-[#24362C] px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-white/10 transition hover:bg-[#1f2d25] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1f14] active:bg-[#18241d] md:inline-flex"
          >
            Sign Up
          </Link>

          <button
            type="button"
            aria-controls={mobileMenuId}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm ring-1 ring-white/15 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 md:hidden"
          >
            {mobileOpen ? (
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <nav
          id={mobileMenuId}
          aria-label="Mobile"
          className="border-t border-white/10 bg-[#0b1f14] md:hidden"
        >
          <div className="mx-auto w-full max-w-6xl px-4 py-3 sm:px-6">
            <div className="grid gap-2 text-sm">
              <a
                href="#products"
                onClick={() => setMobileOpen(false)}
                className="rounded-sm px-3 py-2 font-semibold text-white/90 hover:bg-white/10 hover:text-white"
              >
                Browse Products
              </a>
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="rounded-sm px-3 py-2 font-semibold text-white/90 hover:bg-white/10 hover:text-white"
              >
                Login
              </Link>
              <Link
                href="/signup"
                onClick={() => setMobileOpen(false)}
                className="rounded-sm bg-[#24362C] px-3 py-2 font-semibold text-white shadow-sm ring-1 ring-white/10 hover:bg-[#1f2d25]"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
