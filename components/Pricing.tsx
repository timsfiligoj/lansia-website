const FREE_INCLUDES = [
  "Three goals a day",
  "Today and tomorrow view",
  "Evening reminder to plan tomorrow",
  "Basic stats",
];

const PRO_INCLUDES = [
  "Everything in Free",
  "Five goals a day",
  "Full history",
  "Full stats dashboard",
  "Weekly and yearly heatmaps",
  "Streaks, perfect weeks, strongest day",
  "Quiet milestones",
];

export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_at_center,rgba(121,53,238,0.15),transparent_65%)]" />

      <div className="relative mx-auto max-w-5xl px-6 sm:px-10">
        <div className="mb-14 text-center md:mb-20">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[rgba(206,149,249,0.3)] bg-[rgba(206,149,249,0.1)] px-4 py-1.5 text-xs font-medium tracking-wide text-[color:var(--color-lilac)]">
            PRICING
          </div>
          <h2 className="font-[family-name:var(--font-kanit)] text-4xl text-white sm:text-5xl md:text-6xl">
            One payment.
            <br />
            <span className="text-[color:var(--color-lilac)]">Yours forever.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-[rgba(255,255,255,0.7)]">
            {'No subscriptions. No renewals. No "you\'ve been billed" emails six months later.'}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {/* Free tier */}
          <div className="rounded-3xl border border-white/8 bg-white/[0.04] p-8 md:p-10">
            <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[rgba(255,255,255,0.5)]">
              Lansia Free
            </div>
            <div className="mb-1 font-[family-name:var(--font-kanit)] text-4xl text-white">
              Free
            </div>
            <div className="mb-8 text-sm text-[rgba(255,255,255,0.5)]">
              Forever. No card required.
            </div>

            <ul className="space-y-3">
              {FREE_INCLUDES.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/80">
                  <Check />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Lifetime tier */}
          <div className="relative overflow-hidden rounded-3xl border border-[rgba(206,149,249,0.55)] bg-gradient-to-br from-[rgba(121,53,238,0.28)] via-[rgba(121,53,238,0.12)] to-transparent p-8 shadow-[0_0_0_1px_rgba(206,149,249,0.12)] md:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[rgba(121,53,238,0.25)] blur-3xl" />
            <div className="relative">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[color:var(--color-lilac)]">
                Lansia Lifetime
              </div>
              <div className="mb-1 flex items-baseline gap-2">
                <div className="font-[family-name:var(--font-kanit)] text-4xl text-white">
                  $4.99
                </div>
              </div>
              <div className="mb-8 text-sm text-[rgba(255,255,255,0.7)]">
                One-time. No subscription, ever.
              </div>

              <ul className="space-y-3">
                {PRO_INCLUDES.map((item, i) => (
                  <li
                    key={item}
                    className={`flex items-start gap-3 ${
                      i === 0
                        ? "text-[color:var(--color-lilac)]"
                        : "text-white/90"
                    }`}
                  >
                    <Check accent={i !== 0} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Check({ accent = true }: { accent?: boolean }) {
  return (
    <svg
      className={`mt-0.5 h-5 w-5 flex-shrink-0 ${
        accent ? "text-[color:var(--color-lilac)]" : "text-[rgba(255,255,255,0.5)]"
      }`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="5 12 10 17 19 8" />
    </svg>
  );
}
