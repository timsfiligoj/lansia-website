import { StoreBadges } from "./StoreBadges";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section className="bg-hero-glow relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_at_top,rgba(121,53,238,0.18),transparent_55%)]" />

      <div className="relative mx-auto max-w-6xl px-6 pb-12 pt-24 sm:px-10 sm:pb-20 sm:pt-28 md:grid md:grid-cols-2 md:items-center md:gap-16 md:pb-32 md:pt-32">
        {/* Text + CTAs: top on mobile, left on desktop */}
        <div className="text-center sm:text-left md:order-1">
          <h1 className="font-[family-name:var(--font-kanit)] text-[2.5rem] leading-[1.05] text-white sm:text-6xl md:text-7xl">
            Small wins,
            <br />
            <span className="text-[color:var(--color-lilac)]">every day.</span>
          </h1>

          <p className="mx-auto mt-4 max-w-md text-[15px] leading-snug text-[rgba(255,255,255,0.75)] sm:mx-0 sm:mt-6 sm:max-w-xl sm:text-lg sm:leading-relaxed">
            The daily plan that compounds. Up to five tasks for tomorrow,
            written tonight.
          </p>

          <div className="mt-6 sm:mt-8">
            <StoreBadges size="lg" />
          </div>
        </div>

        {/* Visual: below CTAs on mobile, right on desktop */}
        <div className="mt-10 flex justify-center sm:mt-14 md:order-2 md:mt-0 md:justify-end">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
