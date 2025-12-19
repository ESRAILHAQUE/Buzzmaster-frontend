import Container from "./Container";
import SectionHeader from "./SectionHeader";

type Product = {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  stock: number;
  status: "In stock" | "Limited" | "Out of stock";
};

const products: Product[] = [
  {
    id: "gmx-com-1m",
    name: "GMX.COM",
    subtitle: "1 month old",
    price: "$0.015",
    stock: 2885,
    status: "In stock",
  },
  {
    id: "gmx-us-1m",
    name: "GMX.US",
    subtitle: "1 month old",
    price: "$0.015",
    stock: 2300,
    status: "In stock",
  },
  {
    id: "onet-pop3",
    name: "Onet.pl",
    subtitle: "POP3, SMTP, IMAP activated",
    price: "$0.05",
    stock: 794,
    status: "Limited",
  },
  {
    id: "gmail-edu",
    name: "Gmail edu",
    subtitle: "72h domain .org",
    price: "$0.012",
    stock: 6245,
    status: "In stock",
  },
  {
    id: "gmx-us-aged",
    name: "GMX.US",
    subtitle: "2 week+ aged",
    price: "$0.012",
    stock: 2457,
    status: "In stock",
  },
  {
    id: "mail-com",
    name: "Mail.com",
    subtitle: "Fresh",
    price: "$0.01",
    stock: 3304,
    status: "In stock",
  },
  {
    id: "gmx-es",
    name: "GMX.ES",
    subtitle: "Fresh",
    price: "$0.01",
    stock: 1736,
    status: "Limited",
  },
  {
    id: "gmx-us-pop3",
    name: "GMX.US",
    subtitle: "POP3, IMAP, SMTP activated",
    price: "$0.01",
    stock: 6378,
    status: "In stock",
  },
];

function StatusPill({ status }: { status: Product["status"] }) {
  const cls =
    status === "In stock"
      ? "bg-emerald-50 text-emerald-700 ring-emerald-200"
      : status === "Limited"
        ? "bg-amber-50 text-amber-700 ring-amber-200"
        : "bg-rose-50 text-rose-700 ring-rose-200";

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${cls}`}
    >
      {status}
    </span>
  );
}

export default function FeaturedProducts() {
  return (
    <section id="products" className="bg-slate-50 py-12 sm:py-16">
      <Container>
        <SectionHeader
          eyebrow="Featured products"
          title="Browse popular picks"
          subtitle="Clear stock visibility, fast checkout, and a layout designed for quick scanning."
          right={
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
            >
              View all products
              <span className="ml-2 text-slate-400">→</span>
            </a>
          }
        />

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="hidden grid-cols-12 gap-4 border-b border-slate-200 bg-slate-50 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 sm:grid">
            <div className="col-span-5">Product</div>
            <div className="col-span-2">Price</div>
            <div className="col-span-2">Stock</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-1 text-right">Action</div>
          </div>

          <ul className="divide-y divide-slate-200">
            {products.map((p) => (
              <li key={p.id} className="px-5 py-4">
                <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-12">
                  <div className="sm:col-span-5">
                    <p className="text-sm font-semibold text-slate-900">
                      {p.name}{" "}
                      <span className="ml-2 text-xs font-semibold text-slate-500">
                        ({p.subtitle})
                      </span>
                    </p>
                    <p className="mt-1 text-xs text-slate-500 sm:hidden">
                      Price: <span className="font-semibold">{p.price}</span> •{" "}
                      Stock: <span className="font-semibold">{p.stock}</span>
                    </p>
                  </div>

                  <div className="hidden text-sm font-semibold text-slate-900 sm:col-span-2 sm:block">
                    {p.price}
                  </div>
                  <div className="hidden text-sm text-slate-600 sm:col-span-2 sm:block">
                    {p.stock}
                  </div>
                  <div className="sm:col-span-2">
                    <StatusPill status={p.status} />
                  </div>

                  <div className="sm:col-span-1 sm:text-right">
                    <button
                      type="button"
                      className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 sm:w-auto"
                    >
                      View
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}


