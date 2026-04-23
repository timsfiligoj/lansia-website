import { PhoneMockup } from "./PhoneMockup";

type Feature = {
  badge: string;
  emoji: string;
  title: string;
  body: string;
  screenshot: string;
  alt: string;
  reverse?: boolean;
};

const FEATURES: Feature[] = [
  {
    badge: "Tasks",
    emoji: "✨",
    title: "Plan your day with purpose",
    body: "Write up to five goals every morning (or the night before). Tap to mark them done. Swipe to mark missed. That's the whole app — a daily ritual simple enough to actually keep.",
    screenshot: "/screenshots/feature-tasks.png",
    alt: "Today's goals with a mix of completed and pending items",
  },
  {
    badge: "Stats",
    emoji: "📊",
    title: "See the story behind your days",
    body: "Streaks, perfect weeks, weekly rhythm heatmap, year-at-a-glance, consistency, comeback rate, week-over-week — your habits become proof of progress.",
    screenshot: "/screenshots/feature-stats.png",
    alt: "Stats screen with circular progress, streak cards, and heatmaps",
    reverse: true,
  },
  {
    badge: "Milestones",
    emoji: "💜",
    title: "Small wins, earned",
    body: "First goal. 7-day streak. Perfect week. 30 goals. 100 goals. Every unlock arrives quietly, without gamification — because the progress itself is the reward.",
    screenshot: "/screenshots/feature-milestones.png",
    alt: "Milestones strip showing unlocked and in-progress achievements",
  },
  {
    badge: "Daily Boost",
    emoji: "🔥",
    title: "A quote to start with",
    body: "A fresh, hand-picked motivational quote every morning. No ads, no notifications screaming at you. Just one line that nudges you to show up.",
    screenshot: "/screenshots/feature-boost.png",
    alt: "Daily Boost screen with today's motivational quote",
    reverse: true,
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

function FeatureRow({ badge, emoji, title, body, screenshot, alt, reverse }: Feature) {
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
      <div className="flex justify-center">
        <PhoneMockup src={screenshot} alt={alt} className="w-full max-w-[280px]" />
      </div>
    </div>
  );
}
