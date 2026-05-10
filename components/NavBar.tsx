import Link from "next/link";

export function NavBar() {
  return (
    <nav className="relative z-20 w-full">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10">
        <Link
          href="/"
          className="font-[family-name:var(--font-kanit)] text-xl font-medium text-white sm:text-2xl"
        >
          Lansia
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <a
            href="#features"
            className="hidden text-[rgba(255,255,255,0.7)] transition hover:text-white sm:block"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="hidden text-[rgba(255,255,255,0.7)] transition hover:text-white sm:block"
          >
            Pricing
          </a>
          <a
            href="#download"
            className="rounded-full bg-[color:var(--color-purple)] px-4 py-2 font-medium text-white shadow-[0_8px_24px_-8px_rgba(121,53,238,0.7)] transition hover:bg-[color:var(--color-purple-light)]"
          >
            Download
          </a>
        </div>
      </div>
    </nav>
  );
}
