import Link from "next/link";

const navLinks = [
  { label: "Browse Products", href: "#products" },
  { label: "Pricing", href: "#pricing" },
  { label: "Support", href: "#support" },
] as const;

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur supports-backdrop-filter:bg-white/55">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 font-semibold tracking-tight text-slate-900"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-slate-900 text-sm font-bold text-white shadow-sm ring-1 ring-slate-900/10">
            BZ
          </span>
          <span className="hidden sm:inline">Buzzmaster</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-600 hover:text-slate-900"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="hidden rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 sm:inline-flex"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
          >
            Sign Up
          </Link>
        </div>
      </div>

      <nav className="border-t border-slate-200/70 md:hidden">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-2 px-4 py-2 text-xs sm:px-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-2 py-2 font-semibold text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            >
              {l.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
