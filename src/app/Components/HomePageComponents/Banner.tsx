import Container from "./Container";

export default function Banner() {
  return (
    <section className="bg-slate-50">
      <Container>
        <div className="py-6">
          <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Limited-time promotion
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Recharge and receive bonus credits applied automatically at
                checkout.
              </p>
            </div>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
            >
              See plans
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
