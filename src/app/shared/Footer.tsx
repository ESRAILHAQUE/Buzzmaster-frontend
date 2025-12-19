import Link from "next/link";

const footerLinks = [
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
  { label: "Support", href: "#support" },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-slate-900 text-sm font-bold text-white shadow-sm ring-1 ring-slate-900/10">
              BZ
            </span>
            <span className="font-semibold tracking-tight text-slate-900">
              Buzzmaster
            </span>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">
            Premium digital products with instant delivery, secure checkout, and
            responsive support.
          </p>
        </div>

        <div className="md:justify-self-center">
          <p className="text-sm font-semibold text-slate-900">Quick Links</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a className="text-slate-600 hover:text-slate-900" href="#products">
                Browse Products
              </a>
            </li>
            <li>
              <a className="text-slate-600 hover:text-slate-900" href="#pricing">
                Pricing
              </a>
            </li>
            <li>
              <a className="text-slate-600 hover:text-slate-900" href="#support">
                Contact Support
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-900">Contact</p>
          <div className="mt-3 space-y-2 text-sm text-slate-600" id="support">
            <p>
              Email:{" "}
              <a className="font-semibold text-slate-900" href="mailto:support@buzzmaster.com">
                support@buzzmaster.com
              </a>
            </p>
            <p>
              Hours: <span className="font-medium">24/7</span>
            </p>
            <p className="text-xs text-slate-500">
              Average response time: ~5 minutes
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-4 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Buzzmaster. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {footerLinks.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-slate-900">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
