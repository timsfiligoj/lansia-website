import type { ReactNode } from "react";
import { PhoneMockup } from "./PhoneMockup";
import { MilestonesVisual } from "./MilestonesVisual";

type Feature = {
  badge: string;
  emoji: string;
  title: string;
  body: string;
  reverse?: boolean;
  visual: ReactNode;
};

const FEATURES: Feature[] = [
  {
    badge: "Tasks",
    emoji: "✨",
    title: "Write tomorrow's list, tonight.",
    body: "Write tomorrow's plan tonight, or first thing in the morning. Up to five tasks. Tap to mark done. Swipe to mark missed. That's the whole app. A daily ritual simple enough to actually keep.",
    visual: (
      <PhoneMockup
        src="/screenshots/feature-task-2.PNG"
        alt="Today's tasks with completed, pending, and missed items"
        className="w-full max-w-[210px] sm:max-w-[280px]"
      />
    ),
  },
  {
    badge: "Stats",
    emoji: "📊",
    title: "The patterns behind your best days.",
    body: "Streaks, perfect weeks, weekly heatmap, year-at-a-glance, strongest day, success rate. Your record, surfaced quietly. Not a leaderboard, not a guilt trip.",
    reverse: true,
    visual: (
      <PhoneMockup
        src="/screenshots/feature-stats.png"
        alt="Stats screen with circular progress, streak cards, and heatmaps"
        bare
        className="w-full max-w-[210px] sm:max-w-[280px]"
      />
    ),
  },
  {
    badge: "Milestones",
    emoji: "💜",
    title: "Small wins, earned.",
    body: "First goal. 7-day streak. 14-day streak. Perfect week. 30 goals. 100 goals. Six quiet milestones. Earned once, kept forever, even if your streak slips.",
    visual: <MilestonesVisual />,
  },
  {
    badge: "Daily Boost",
    emoji: "🔥",
    title: "One line, every morning.",
    body: "One hand-picked quote, every morning. No ads, no notifications screaming. Just one line that nudges you to show up.",
    reverse: true,
    visual: (
      <PhoneMockup
        src="/screenshots/feature-boost.png"
        alt="Daily Boost screen with today's motivational quote"
        bare
        className="w-full max-w-[210px] sm:max-w-[280px]"
      />
    ),
  },
];

export function Features() {
  return (
    <section id="features" className="bg-section-glow relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="mb-16 text-center md:mb-20">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[rgba(206,149,249,0.3)] bg-[rgba(206,149,249,0.1)] px-4 py-1.5 text-xs font-medium tracking-wide text-[color:var(--color-lilac)]">
            FEATURES
          </div>
          <h2 className="font-[family-name:var(--font-kanit)] text-4xl text-white sm:text-5xl md:text-6xl">
            Built to keep,
            <br />
            <span className="text-[color:var(--color-lilac)]">
              not to grind.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[rgba(255,255,255,0.7)] sm:text-xl">
            No yearly goals. No habit chains. Just tomorrow's list, written
            tonight.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {FEATURES.map((f) => (
            <FeatureRow key={f.badge} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureRow({ badge, emoji, title, body, reverse, visual }: Feature) {
  return (
    <div
      className={`grid items-center gap-12 md:grid-cols-2 md:gap-16 ${
        reverse ? "md:[&>:first-child]:order-2" : ""
      }`}
    >
      <div>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-1.5 text-sm text-white">
          <span aria-hidden="true">{emoji}</span>
          <span className="font-medium">{badge}</span>
        </div>
        <h3 className="mb-5 font-[family-name:var(--font-kanit)] text-3xl leading-tight text-white md:text-4xl">
          {title}
        </h3>
        <p className="text-lg leading-relaxed text-[rgba(255,255,255,0.7)]">
          {body}
        </p>
      </div>
      <div className="flex justify-center">{visual}</div>
    </div>
  );
}
