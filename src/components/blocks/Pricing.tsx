import type { PricingProps } from "@/types/content";

function formatUSD(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function Pricing({ title, currency, plans }: PricingProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            {title}
          </h2>
          <p className="text-sm text-slate-600">
            Prices in <span className="font-medium">{currency}</span>
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {plans.map(({ name, price, features }, idx) => (
            <article
              key={`${name}-${idx}`}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-base font-semibold text-slate-900">{name}</h3>
                <div className="text-lg font-semibold text-slate-900">
                  {formatUSD(price)}
                </div>
              </div>

              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                {features.map((f, fIdx) => (
                  <li key={`${name}-f-${fIdx}`} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-slate-900/70" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className="mt-6 w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                Choose {name}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
