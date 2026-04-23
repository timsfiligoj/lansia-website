type Size = "md" | "lg";

export function StoreBadges({ size = "md" }: { size?: Size }) {
  const heightClass = size === "lg" ? "h-14" : "h-12";
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href="https://apps.apple.com/app/id000000000"
        aria-label="Download on the App Store"
        className="transition hover:opacity-90"
      >
        <div
          className={`${heightClass} flex items-center gap-3 rounded-xl border border-white/15 bg-black px-5`}
        >
          <svg
            className="h-7 w-7 text-white"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M17.05 12.536c-.02-2.214 1.807-3.278 1.89-3.33-1.029-1.504-2.633-1.71-3.2-1.732-1.361-.138-2.663.8-3.352.8-.706 0-1.77-.78-2.907-.758-1.496.022-2.88.872-3.65 2.211-1.558 2.697-.397 6.678 1.11 8.868.736 1.076 1.61 2.28 2.76 2.237 1.109-.045 1.528-.715 2.867-.715 1.332 0 1.72.715 2.897.69 1.196-.022 1.952-1.097 2.685-2.176.846-1.25 1.194-2.465 1.215-2.528-.027-.013-2.332-.894-2.355-3.567zm-2.2-6.55c.607-.742 1.014-1.769.902-2.796-.872.036-1.933.58-2.56 1.318-.56.654-1.051 1.7-.92 2.705.972.076 1.967-.493 2.578-1.227z" />
          </svg>
          <div className="flex flex-col text-left leading-none">
            <span className="text-[9px] text-[rgba(255,255,255,0.7)]">
              Download on the
            </span>
            <span className="font-[family-name:var(--font-kanit)] text-lg font-medium text-white">
              App Store
            </span>
          </div>
        </div>
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=app.lansia"
        aria-label="Get it on Google Play"
        className="transition hover:opacity-90"
      >
        <div
          className={`${heightClass} flex items-center gap-3 rounded-xl border border-white/15 bg-black px-5`}
        >
          <svg
            className="h-7 w-7"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92z"
              fill="#34A853"
            />
            <path
              d="M16.613 14.822l-2.82-2.82L3.61 1.814l13.004 7.526z"
              fill="#FBBC04"
            />
            <path
              d="M21.186 11.1c.538.309.538 1.087 0 1.396l-3.572 2.058-3.023-3.022 3.023-3.022 3.572 2.06z"
              fill="#EA4335"
            />
            <path
              d="M16.613 9.177L3.61 1.814l10.182 10.188z"
              fill="#4285F4"
            />
          </svg>
          <div className="flex flex-col text-left leading-none">
            <span className="text-[9px] text-[rgba(255,255,255,0.7)]">
              GET IT ON
            </span>
            <span className="font-[family-name:var(--font-kanit)] text-lg font-medium text-white">
              Google Play
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}
