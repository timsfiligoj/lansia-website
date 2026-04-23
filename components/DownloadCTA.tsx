import { StoreBadges } from "./StoreBadges";

export function DownloadCTA() {
  return (
    <section id="download" className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_at_center,rgba(121,53,238,0.2),transparent_60%)]" />
      <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-10">
        <h2 className="font-[family-name:var(--font-kanit)] text-4xl text-white sm:text-5xl md:text-6xl">
          Start your first day.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-[rgba(255,255,255,0.7)]">
          Free to download. Takes 30 seconds to set up. Your evening reminder
          starts tomorrow.
        </p>
        <div className="mt-10 flex justify-center">
          <StoreBadges size="lg" />
        </div>
      </div>
    </section>
  );
}
