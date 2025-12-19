import Container from "./Container";
import SectionHeader from "./SectionHeader";

const tiers = [
  {
    name: "Starter",
    price: "$9",
    note: "Good for getting started",
    features: ["Basic support", "Standard delivery", "Access to featured list"],
  },
  {
    name: "Pro",
    price: "$29",
    note: "Best for regular buyers",
    features: ["Priority support", "Faster processing", "Early access offers"],
    highlight: true,
  },
  {
    name: "Business",
    price: "$79",
    note: "For teams & volume",
    features: ["Dedicated assistance", "Bulk tools", "Custom invoicing"],
  },
] as const;

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-white py-12 sm:py-16">
      <Container>
        <SectionHeader
          eyebrow="Pricing"
          title="Simple plans, clear value"
          subtitle="Pick a plan that matches your volume. Upgrade or change anytime."
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={[
                "rounded-2xl border p-6 shadow-sm",
                t.highlight
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 bg-white text-slate-900",
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p
                    className={[
                      "mt-1 text-xs",
                      t.highlight ? "text-white/70" : "text-slate-600",
                    ].join(" ")}
                  >
                    {t.note}
                  </p>
                </div>
                {t.highlight ? (
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                    Popular
                  </span>
                ) : null}
              </div>

              <div className="mt-6 flex items-end gap-2">
                <p className="text-4xl font-semibold tracking-tight">{t.price}</p>
                <p
                  className={[
                    "pb-1 text-xs",
                    t.highlight ? "text-white/70" : "text-slate-500",
                  ].join(" ")}
                >
                  /month
                </p>
              </div>

              <ul
                className={[
                  "mt-6 space-y-3 text-sm",
                  t.highlight ? "text-white/80" : "text-slate-600",
                ].join(" ")}
              >
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span
                      className={[
                        "mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold",
                        t.highlight
                          ? "bg-white/10 text-white"
                          : "bg-slate-100 text-slate-700",
                      ].join(" ")}
                    >
                      ✓
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={[
                  "mt-7 inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold shadow-sm",
                  t.highlight
                    ? "bg-white text-slate-900 hover:bg-slate-100"
                    : "bg-slate-900 text-white hover:bg-slate-800",
                ].join(" ")}
              >
                Get started
              </button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}


