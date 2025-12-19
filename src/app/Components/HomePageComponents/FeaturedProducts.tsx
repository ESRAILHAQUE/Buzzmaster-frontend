import Container from "./Container";
import SectionHeader from "./SectionHeader";

type Product = {
  id: string;
  category: string;
  name: string;
  subtitle: string;
  price: string;
  stock: number;
  status: "In stock" | "Limited" | "Out of stock";
};

const products: Product[] = [
  {
    id: "gmx-com-1m",
    category: "GMX",
    name: "GMX.COM",
    subtitle: "1 month old",
    price: "$0.015",
    stock: 2885,
    status: "In stock",
  },
  {
    id: "gmx-us-1m",
    category: "GMX",
    name: "Gmail edu cho thuê 72h domain .org",
    subtitle: "1 month old",
    price: "$0.015",
    stock: 2300,
    status: "In stock",
  },
  {
    id: "gmx-us-aged",
    category: "GMX",
    name: "GMX.US",
    subtitle: "2 week+ aged",
    price: "$0.012",
    stock: 2457,
    status: "In stock",
  },
  {
    id: "gmx-es",
    category: "GMX",
    name: "GMX.ES",
    subtitle: "Fresh",
    price: "$0.01",
    stock: 1736,
    status: "Limited",
  },
  {
    id: "gmx-us-pop3",
    category: "GMX",
    name: "Onet.pl (POP3, SMTP, IMAP activated)",
    subtitle: "POP3, IMAP, SMTP activated",
    price: "$0.01",
    stock: 6378,
    status: "In stock",
  },
];

function StatusLabel({ status }: { status: Product["status"] }) {
  const dotCls =
    status === "In stock"
      ? "bg-emerald-400"
      : status === "Limited"
        ? "bg-amber-400"
        : "bg-rose-400";

  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold text-white/85">
      <span className={`h-2 w-2 rounded-full ${dotCls}`} aria-hidden="true" />
      {status}
    </span>
  );
}

function groupByCategory(items: Product[]) {
  const map = new Map<string, Product[]>();
  for (const p of items) {
    const list = map.get(p.category) ?? [];
    list.push(p);
    map.set(p.category, list);
  }
  return Array.from(map.entries());
}

export default function FeaturedProducts() {
  const grouped = groupByCategory(products);

  return (
    <section
      id="products"
      className="relative overflow-hidden bg-linear-to-b from-[#0b1f14] to-[#06150d] py-12 sm:py-16"
    >
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-28 left-1/2 h-72 w-200 -translate-x-1/2 rounded-full bg-[#628141]/25 blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 h-72 w-184 -translate-x-1/2 rounded-full bg-[#24362C]/35 blur-3xl" />
      </div>
      <Container>
        <SectionHeader
          eyebrow="Featured products"
          title="Browse popular picks"
          subtitle="Clear stock visibility, fast checkout, and a layout designed for quick scanning."
          tone="dark"
        />

        <div className="relative mt-8 space-y-6">
          {grouped.map(([category, items]) => (
            <div
              key={category}
              className="overflow-hidden rounded-sm border border-[#628141]/50 bg-[#0f2a1b]/80 shadow-[0_0_0_1px_rgba(0,0,0,0.25)] ring-1 ring-black/10 backdrop-blur"
            >


              <div className="divide-y divide-white/10">
                {items.map((p) => (
                  <div
                    key={p.id}
                    className="flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                  >
                    <div className="flex flex-1 items-start gap-4">
                      <span className="inline-flex shrink-0 items-center rounded-full bg-[#24362C] px-3 py-1 text-xs font-semibold text-white ring-1 ring-[#628141]/50">
                        Stock: {p.stock}
                      </span>

                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-white">
                          {p.name}{" "}
                          <span className="ml-2 text-xs font-semibold text-white/70">
                            ({p.subtitle})
                          </span>
                        </p>
                        <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                          <span className="font-semibold text-slate-50">
                            {p.price}
                          </span>
                          <StatusLabel status={p.status} />
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-sm bg-[#F1F5F9] px-4 py-2 text-sm font-semibold cursor-pointer text-[#1F2D25] shadow-sm ring-1 ring-black/10 transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1f14] active:bg-slate-100 sm:shrink-0"
                    >
                      View Details
                      <span className="ml-2 text-[#1F2D25]/70">→</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="pt-4 text-center">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-sm bg-[#F1F5F9] px-6 py-3 text-sm font-semibold text-[#1F2D25] shadow-sm ring-1 ring-black/10 transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1f14] active:bg-slate-100"
            >
              View All Products
              <span className="ml-2 text-[#1F2D25]/70">→</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}


