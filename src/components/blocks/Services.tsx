import Image from "next/image";
import type { ServicesProps } from "@/types/content";

export default function Services({ title, services }: ServicesProps) {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            {title}
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title: sTitle, description, icon }, idx) => (
            <article
              key={`${sTitle}-${idx}`}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-slate-100">
                  <Image
                    src={icon}
                    alt={`${sTitle} icon`}
                    fill
                    className="object-contain p-2"
                    sizes="48px"
                  />
                </div>
                <h3 className="text-base font-semibold text-slate-900">
                  {sTitle}
                </h3>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
