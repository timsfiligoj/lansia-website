import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/8 py-14">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="font-[family-name:var(--font-kanit)] text-2xl font-medium text-white">
              Lansia
            </div>
            <p className="mt-3 max-w-xs text-sm text-[rgba(255,255,255,0.55)]">
              Daily goals. Real progress. Built in Slovenia by one person who
              has journaled their daily goals every day for years.
            </p>
          </div>

          <div>
            <div className="mb-3 text-xs font-medium uppercase tracking-wide text-[rgba(255,255,255,0.5)]">
              App
            </div>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a
                  href="#features"
                  className="transition hover:text-white"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="transition hover:text-white"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#download"
                  className="transition hover:text-white"
                >
                  Download
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="mb-3 text-xs font-medium uppercase tracking-wide text-[rgba(255,255,255,0.5)]">
              Legal
            </div>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link
                  href="/privacy"
                  className="transition hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/8 pt-8 text-xs text-[rgba(255,255,255,0.4)] sm:flex-row sm:items-center">
          <div>&copy; {new Date().getFullYear()} Lansia</div>
          <div>Made in Slovenia 🇸🇮</div>
        </div>
      </div>
    </footer>
  );
}
