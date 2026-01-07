import type { ContactProps } from "@/types/content";

export default function Contact({
  title,
  address,
  phone,
  email,
  form,
}: ContactProps) {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          {title}
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">
              Contact details
            </h3>

            <dl className="mt-4 space-y-3 text-sm text-slate-700">
              <div>
                <dt className="font-medium text-slate-900">Address</dt>
                <dd className="text-slate-600">{address}</dd>
              </div>
              <div>
                <dt className="font-medium text-slate-900">Phone</dt>
                <dd className="text-slate-600">{phone}</dd>
              </div>
              <div>
                <dt className="font-medium text-slate-900">Email</dt>
                <dd className="text-slate-600">{email}</dd>
              </div>
            </dl>
          </div>

          <form
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            method="post"
            action="#"
          >
            <h3 className="text-base font-semibold text-slate-900">
              Send a message
            </h3>

            <div className="mt-5 space-y-4">
              {form.fields.map((field) => {
                const common =
                  "mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-300";

                if (field.type === "textarea") {
                  return (
                    <label key={field.name} className="block">
                      <span className="text-sm font-medium text-slate-900">
                        {field.label}
                      </span>
                      <textarea
                        name={field.name}
                        required={field.required}
                        rows={5}
                        className={common}
                        placeholder="Write your message..."
                      />
                    </label>
                  );
                }

                return (
                  <label key={field.name} className="block">
                    <span className="text-sm font-medium text-slate-900">
                      {field.label}
                    </span>
                    <input
                      name={field.name}
                      type={field.type}
                      required={field.required}
                      className={common}
                      placeholder={
                        field.type === "email"
                          ? "you@example.com"
                          : "Your name"
                      }
                    />
                  </label>
                );
              })}
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
