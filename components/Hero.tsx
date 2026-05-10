import { StoreBadges } from "./StoreBadges";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section className="bg-hero-glow relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_at_top,rgba(121,53,238,0.18),transparent_55%)]" />

      <div className="relative mx-auto max-w-6xl px-6 pb-12 pt-1 sm:px-10 sm:pb-20 sm:pt-8 md:grid md:grid-cols-2 md:items-center md:gap-16 md:pb-32 md:pt-20">
        {/* Visual: top on mobile, right on desktop */}
        <div className="mb-3 flex justify-center sm:mb-8 md:order-2 md:mb-0 md:justify-end">
          <HeroVisual />
        </div>

        {/* Text + CTAs: below on mobile, left on desktop */}
        <div className="md:order-1">
          <h1 className="font-[family-name:var(--font-kanit)] text-[2.25rem] leading-[1.05] text-white sm:text-6xl md:text-7xl">
            Power up
            <br />
            <span className="text-[color:var(--color-lilac)]">your day.</span>
          </h1>

          <p className="mt-3 max-w-xl text-[15px] leading-snug text-[rgba(255,255,255,0.75)] sm:mt-6 sm:text-lg sm:leading-relaxed">
            Five goals a day. One simple ritual. Lansia turns your daily
            checkmarks into the story of who you actually are. Streaks,
            perfect weeks, and the patterns behind your best days.
          </p>

          <div className="mt-4 sm:mt-8">
            <StoreBadges size="lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
