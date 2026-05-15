type Review = {
  stars: 5;
  name: string;
  source: "App Store" | "Play Store";
  text: string;
};

const REVIEWS: Review[] = [
  {
    stars: 5,
    name: "Rok",
    source: "App Store",
    text: "So simple, I can't believe it. And SO efective. Absolutely love it.",
  },
  {
    stars: 5,
    name: "Jonathan",
    source: "App Store",
    text: "Finally an app that doesn't overcomplicate things. Beautiful UI and a great way to track daily progress.",
  },
  {
    stars: 5,
    name: "Tea",
    source: "App Store",
    text: "I just love the idea of focusing on what I can do tomorrow and not in 6 months. Keeps me accountable. Love how beautiful the app looks.",
  },
];

export function Reviews() {
  const isThree = REVIEWS.length === 3;
  return (
    <section id="reviews" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="mb-14 text-center md:mb-20">
          <h2 className="font-[family-name:var(--font-kanit)] text-4xl text-white sm:text-5xl md:text-6xl">
            From people who
            <br />
            <span className="text-[color:var(--color-lilac)]">kept it.</span>
          </h2>
        </div>

        <div
          className={`grid gap-6 md:gap-8 ${
            isThree ? "md:grid-cols-3" : "md:grid-cols-2"
          }`}
        >
          {REVIEWS.map((review, i) => (
            <ReviewCard key={`${review.name}-${i}`} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ name, source, text }: Review) {
  return (
    <article className="rounded-3xl border border-white/8 bg-white/[0.06] p-8 md:p-10">
      <div
        className="mb-5 flex items-center gap-1"
        aria-label="5 out of 5 stars"
        role="img"
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} />
        ))}
      </div>
      <p className="text-base leading-relaxed text-[rgba(255,255,255,0.92)] font-[family-name:var(--font-kanit)] sm:text-lg">
        {text}
      </p>
      <div className="mt-6">
        <div className="font-[family-name:var(--font-kanit)] text-base text-white">
          {name}
        </div>
      </div>
    </article>
  );
}

function Star() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="#CE95F9"
      className="flex-shrink-0"
    >
      <path d="M12 2.25l2.92 6.34 6.96.78-5.18 4.7 1.44 6.82L12 17.5l-6.14 3.39 1.44-6.82-5.18-4.7 6.96-.78L12 2.25z" />
    </svg>
  );
}
