"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What is Lansia?",
    a: "Lansia is a mobile app that keeps you focused on up to five daily goals. Mark them done as you go, see missed ones, and watch the patterns behind your best days emerge over time.",
  },
  {
    q: "Why five goals, not fifty?",
    a: "Because real focus has a limit. When you can pick anything, you pick everything — and finish nothing. The cap is the feature.",
  },
  {
    q: "What should my goals look like?",
    a: "Anything from “Go for a 10-minute walk” to “Finish the first draft of my book.” You're in control. The only rule is that the goal motivates you to move.",
  },
  {
    q: "What if I don't complete a task?",
    a: "Nobody's perfect. Missed goals are a normal part of the week — Lansia tracks your bounce-back rate so you can see how quickly you recover, not just how often you hit 100%.",
  },
  {
    q: "Is Lansia free?",
    a: "Yes — the free tier gives you three goals a day, today + tomorrow view, and an evening reminder. Lansia Lifetime is a one-time purchase that unlocks five goals a day, the full stats dashboard, and all-time history.",
  },
  {
    q: "Is it really a one-time purchase?",
    a: "Yes. No subscriptions, no renewals, no surprise charges. Buy once, keep it forever on any device signed into the same App Store or Google Play account.",
  },
  {
    q: "Does Lansia sell my data?",
    a: "No. We don't sell data, we don't run ads, we don't use your goals to train AI. Your data is yours and you can delete your account from inside the app at any time.",
  },
];

export function FAQ() {
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
            <FaqItem key={item.q} {...item} defaultOpen={i === 0} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function FaqItem({
  q,
  a,
  defaultOpen = false,
}: {
  q: string;
  a: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <li>
      <button
        onClick={() => setOpen((v) => !v)}
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
