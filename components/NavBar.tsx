"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-30 w-full transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300 ease-out ${
        scrolled
          ? "border-b border-white/[0.06] backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
      style={
        scrolled
          ? {
              background:
                "radial-gradient(circle at 50% 0%, rgba(121, 53, 238, 0.22) 0%, rgba(13, 7, 13, 0) 70%), rgba(13, 7, 13, 0.7)",
              boxShadow: "0 8px 32px -16px rgba(121, 53, 238, 0.35)",
            }
          : undefined
      }
    >
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
            href="#reviews"
            className="hidden text-[rgba(255,255,255,0.7)] transition hover:text-white sm:block"
          >
            Reviews
          </a>
          <a
            href="#pricing"
            className="hidden text-[rgba(255,255,255,0.7)] transition hover:text-white sm:block"
          >
            Pricing
          </a>
          <a
            href="#download"
            className="rounded-full border border-[rgba(206,149,249,0.32)] px-4 py-2 font-medium text-[color:var(--color-lilac)] transition hover:border-[rgba(206,149,249,0.6)] hover:text-white"
          >
            Download
          </a>
        </div>
      </div>
    </nav>
  );
}
