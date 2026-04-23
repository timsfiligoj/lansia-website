import { StoreBadges } from "./StoreBadges";
import { PhoneMockup } from "./PhoneMockup";

export function Hero() {
  return (
    <section className="bg-hero-glow relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_at_top,rgba(121,53,238,0.18),transparent_55%)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 pb-24 pt-10 sm:px-10 md:grid-cols-2 md:gap-16 md:pb-32 md:pt-16">
        <div className="order-2 md:order-1">
          <h1 className="font-[family-name:var(--font-kanit)] text-5xl leading-[1.05] text-white sm:text-6xl md:text-7xl">
            Power up
            <br />
            <span className="text-[color:var(--color-lilac)]">your day.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[rgba(255,255,255,0.75)]">
            Five goals a day. One simple ritual. Lansia turns your daily
            checkmarks into the story of who you actually are — streaks,
            perfect weeks, and the patterns behind your best days.
          </p>

          <div className="mt-8">
            <StoreBadges size="lg" />
          </div>
        </div>

        <div className="order-1 flex items-start justify-center md:order-2 md:justify-end">
          <PhoneMockup
            src="/screenshots/hero-home.png"
            alt="Lansia home screen with five goals for the day"
            className="w-full max-w-[320px]"
          />
        </div>
      </div>
    </section>
  );
}
