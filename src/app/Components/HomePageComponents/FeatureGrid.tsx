import Container from "./Container";
import SectionHeader from "./SectionHeader";
import { IconBolt, IconChat, IconCheckBadge, IconShield } from "./Icons";

const features = [
  {
    title: "Instant delivery",
    description: "Get your accounts immediately after purchase—no waiting.",
    Icon: IconBolt,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    title: "Secure payment",
    description: "Encrypted checkout with modern fraud protection built-in.",
    Icon: IconShield,
    color: "text-cyan-700",
    bg: "bg-cyan-50",
  },
  {
    title: "Quality guaranteed",
    description: "Verified inventory with clear stock and transparent rules.",
    Icon: IconCheckBadge,
    color: "text-emerald-700",
    bg: "bg-emerald-50",
  },
  {
    title: "24/7 support",
    description: "Fast responses when you need help—any time, any device.",
    Icon: IconChat,
    color: "text-violet-700",
    bg: "bg-violet-50",
  },
] as const;

export default function FeatureGrid() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <Container>
        <SectionHeader
          eyebrow="Why Buzzmaster"
          title="A checkout experience built for speed and trust"
          subtitle="Clean UX, clear policies, and reliable delivery—designed to feel smooth on every screen."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, description, Icon, color, bg }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div
                className={`grid h-11 w-11 place-items-center rounded-xl ${bg}`}
              >
                <Icon className={`h-6 w-6 ${color}`} />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-slate-900">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}


