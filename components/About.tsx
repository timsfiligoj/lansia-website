export function About() {
  return (
    <section
      id="story"
      className="relative overflow-hidden py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_at_center,rgba(121,53,238,0.12),transparent_65%)]" />

      <div className="relative mx-auto max-w-3xl px-6 sm:px-10">
        <div className="mb-12 text-center md:mb-16">
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[rgba(206,149,249,0.3)] bg-[rgba(206,149,249,0.1)] px-4 py-1.5 text-xs font-medium tracking-[0.18em] text-[color:var(--color-lilac)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-lilac)]" aria-hidden="true" />
            <span>NOTE FROM THE FOUNDER</span>
          </div>

          <h2 className="font-[family-name:var(--font-kanit)] text-4xl text-white sm:text-5xl md:text-6xl">
            It started as a
            <br />
            <span className="text-[color:var(--color-lilac)]">spreadsheet.</span>
          </h2>
        </div>

        <div className="relative mx-auto max-w-2xl">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-2 -top-6 font-[family-name:var(--font-kanit)] text-7xl leading-none text-[rgba(206,149,249,0.18)] sm:-left-6 sm:text-8xl"
          >
            &ldquo;
          </div>

          <div className="space-y-6 font-[family-name:var(--font-kanit)] text-lg leading-[1.7] text-[rgba(255,255,255,0.85)] sm:text-xl">
            <p className="text-[rgba(255,255,255,0.95)]">
              Before Lansia was an app, it was a spreadsheet I kept open for
              five years.
            </p>
            <p>
              Every evening I&apos;d write down two to five things I wanted to
              do the next day. That was the whole system. No tagging, no
              prioritization framework, no monthly review. Just tomorrow&apos;s
              list, tonight.
            </p>
            <p>
              Two things changed almost immediately. I fell asleep faster
              because my head was already empty. I started mornings without
              that five-minute fog of figuring out what to do first. I&apos;d
              do the hardest thing of the day before checking anything else.
              By 10am the day couldn&apos;t really go sideways anymore.
            </p>
            <p>
              I tried the obvious apps along the way. Todoist. Notion.
              Habitify. Things. They all asked me to set up a system. I
              wanted the opposite of a system. I wanted one short list, every
              day, and a record that I&apos;d shown up.
            </p>
            <p>
              Lansia is that practice, in your pocket. Designed, built, and
              shipped in Slovenia. By one person.
            </p>
          </div>

          <div className="mt-12 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[rgba(206,149,249,0.35)] to-transparent" />
            <div className="text-center font-[family-name:var(--font-kanit)]">
              <div className="text-lg text-white">Tim</div>
              <div className="mt-0.5 text-[11px] uppercase tracking-[0.2em] text-[rgba(255,255,255,0.5)]">
                Founder
              </div>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[rgba(206,149,249,0.35)] to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
