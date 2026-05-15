"use client";

import { useState } from "react";
import { FAQS } from "@/lib/faqs";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 sm:px-10">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="font-[family-name:var(--font-kanit)] text-4xl text-white sm:text-5xl md:text-6xl">
            Questions?
          </h2>
        </div>
        <ul className="divide-y divide-white/8 rounded-2xl border border-white/8 bg-white/[0.03]">
          {FAQS.map((item, i) => (
            <FaqItem
              key={item.q}
              {...item}
              open={openIndex === i}
              onToggle={() => setOpenIndex((prev) => (prev === i ? null : i))}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

function FaqItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <li>
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition hover:bg-white/[0.02]"
        aria-expanded={open}
      >
        <span className="font-[family-name:var(--font-kanit)] text-lg font-medium text-white md:text-xl">
          {q}
        </span>
        <span
          className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-white/15 text-white/70 transition-transform ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
            <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2h6z" />
          </svg>
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <p className="px-6 pb-6 text-base leading-relaxed text-[rgba(255,255,255,0.7)]">
            {a}
          </p>
        </div>
      </div>
    </li>
  );
}
