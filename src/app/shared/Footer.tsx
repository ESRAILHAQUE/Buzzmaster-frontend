import Link from "next/link";

const footerLinks = [
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
  { label: "Support", href: "#support" },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b1f14] text-[#F1F5F9]">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-sm bg-[#24362C] text-sm font-bold text-white shadow-sm ring-1 ring-white/10">
              BZ
            </span>
            <span className="font-semibold tracking-tight text-white">
              Buzzmaster
            </span>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-6 text-white/75">
            Premium digital products with instant delivery, secure checkout, and
            responsive support.
          </p>
        </div>

        <div className="md:justify-self-center">
          <p className="text-sm font-semibold text-white">Quick Links</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a className="text-white/75 transition hover:text-white" href="#products">
                Browse Products
              </a>
            </li>
            <li>
              <a className="text-white/75 transition hover:text-white" href="#pricing">
                Pricing
              </a>
            </li>
            <li>
              <a className="text-white/75 transition hover:text-white" href="#support">
                Contact Support
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Contact</p>
          <div className="mt-3 space-y-2 text-sm text-white/75" id="support">
            <p>
              Email:{" "}
              <a className="font-semibold text-[#F1F5F9] transition hover:text-white" href="mailto:support@buzzmaster.com">
                support@buzzmaster.com
              </a>
            </p>
            <p>
              Hours: <span className="font-medium text-white">24/7</span>
            </p>
            <p className="text-xs text-white/60">
              Average response time: ~5 minutes
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-4 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Buzzmaster. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {footerLinks.map((l) => (
              <Link key={l.href} href={l.href} className="transition hover:text-white">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
