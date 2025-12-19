import Link from "next/link";
import Container from "./Container";

export default function CtaStrip() {
  return (
    <section className="bg-slate-950 py-10 sm:py-12">
      <Container>
        <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold text-white">
              Ready to get started?
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/70">
              Create an account in seconds and browse products with clean stock
              visibility, fast checkout, and instant delivery.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
            >
              Browse products
            </a>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Create account
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}


