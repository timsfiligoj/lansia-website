/* eslint-disable @next/next/no-img-element */
/**
 * Renders an iPhone-shaped frame around a screenshot.
 *
 * Drop real screenshots into `/public/screenshots/` and pass the filename.
 * Expected aspect: 9:19.5 (iPhone 14/15 Pro). Use PNGs at 1170x2532 or
 * export from the dev client via `xcrun simctl io booted screenshot`.
 */
export function PhoneMockup({
  src,
  alt,
  className = "",
}: {
  src?: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`phone-shadow relative ${className}`}>
      <div className="relative mx-auto aspect-[9/19.5] w-full max-w-[280px] rounded-[2.8rem] border border-white/10 bg-[#0A0A0A] p-2 sm:max-w-[320px]">
        {/* Notch */}
        <div className="absolute left-1/2 top-3 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-black"></div>
        {/* Screen */}
        <div className="relative h-full w-full overflow-hidden rounded-[2.2rem] bg-[#0D070D]">
          {src ? (
            <img
              src={src}
              alt={alt}
              className="h-full w-full object-cover"
            />
          ) : (
            <PlaceholderScreen />
          )}
        </div>
      </div>
    </div>
  );
}

function PlaceholderScreen() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center">
      <div className="h-16 w-16 rounded-full bg-[rgba(121,53,238,0.25)] ring-1 ring-[rgba(206,149,249,0.35)]" />
      <div className="font-[family-name:var(--font-kanit)] text-lg font-medium text-white">
        Lansia
      </div>
      <div className="text-xs text-[rgba(255,255,255,0.4)]">
        Drop a real screenshot
        <br />
        into /public/screenshots/
      </div>
    </div>
  );
}
