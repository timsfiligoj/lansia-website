/**
 * Milestones visual. Same floating-card language as HeroVisual.
 * A main "milestones board" card with a grid of unlock tiles, plus a
 * floating "unlocked" toast. Pure CSS animation, no JS.
 */

type Tile = {
  icon: string;
  title: string;
  sub: string;
  state: "unlocked" | "progress" | "locked";
};

const TILES: Tile[] = [
  { icon: "✨", title: "First goal", sub: "You showed up", state: "unlocked" },
  { icon: "🔥", title: "7-day streak", sub: "Unlocked", state: "unlocked" },
  { icon: "🎯", title: "30 goals", sub: "24 of 30", state: "progress" },
  { icon: "⭐", title: "Perfect week", sub: "Locked", state: "locked" },
  { icon: "💯", title: "100 goals", sub: "Locked", state: "locked" },
  { icon: "📅", title: "30-day streak", sub: "Locked", state: "locked" },
];

export function MilestonesVisual() {
  return (
    <div className="hero-visual relative aspect-square w-full max-w-[460px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(circle_at_50%_55%,rgba(157,80,235,0.28),transparent_65%)]"
      />

      {/* Main milestones board */}
      <div className="hv-card hv-card-goals absolute left-1/2 top-[10%] w-[88%] -translate-x-1/2 rounded-2xl border border-white/12 bg-[rgba(21,17,26,0.92)] p-4 shadow-[0_40px_70px_-25px_rgba(121,53,238,0.55)] backdrop-blur-md sm:p-5">
        <div className="mb-4 flex items-center justify-between">
          <span className="font-[family-name:var(--font-kanit)] text-base text-white">
            Milestones
          </span>
          <span className="rounded-full border border-[rgba(206,149,249,0.3)] bg-[rgba(206,149,249,0.1)] px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-[color:var(--color-lilac)]">
            2 / 6 unlocked
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {TILES.map((t, i) => (
            <MilestoneTile key={i} {...t} index={i} />
          ))}
        </div>
      </div>

      {/* Floating "unlocked" toast: top-right */}
      <div className="hv-card hv-card-streak absolute right-0 top-0 w-[58%] rounded-2xl border border-white/12 bg-[rgba(21,17,26,0.85)] p-3 shadow-[0_30px_60px_-20px_rgba(121,53,238,0.5)] backdrop-blur-md sm:p-4">
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[rgba(157,80,235,0.18)] ring-1 ring-[rgba(206,149,249,0.4)] text-base"
          >
            🔥
          </span>
          <div className="min-w-0 flex-1">
            <div className="text-[10px] font-medium uppercase tracking-[0.14em] text-[color:var(--color-lilac)]">
              Unlocked
            </div>
            <div className="truncate font-[family-name:var(--font-kanit)] text-sm text-white">
              7-day streak
            </div>
          </div>
        </div>
      </div>

      {/* Floating progress chip: bottom-right */}
      <div className="hv-card hv-card-heatmap absolute bottom-[6%] right-[4%] w-[44%] rounded-2xl border border-white/12 bg-[rgba(21,17,26,0.85)] p-3 shadow-[0_30px_60px_-20px_rgba(121,53,238,0.5)] backdrop-blur-md sm:p-4">
        <div className="mb-1 flex items-center justify-between text-[10px] uppercase tracking-[0.14em]">
          <span className="text-white/55">30 goals</span>
          <span className="text-[color:var(--color-lilac)]">80%</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[80%] rounded-full bg-[color:var(--color-purple-light)]" />
        </div>
        <div className="mt-1.5 text-[11px] text-white/55">24 of 30</div>
      </div>
    </div>
  );
}

function MilestoneTile({
  icon,
  title,
  sub,
  state,
  index,
}: Tile & { index: number }) {
  const baseShell =
    "rounded-xl border p-2.5 flex flex-col items-center text-center";
  const stateShell =
    state === "unlocked"
      ? "border-[rgba(206,149,249,0.45)] bg-[rgba(157,80,235,0.18)]"
      : state === "progress"
        ? "border-white/12 bg-white/[0.04]"
        : "border-white/8 bg-white/[0.02] opacity-55";
  return (
    <div
      className={`${baseShell} ${stateShell}`}
      style={{ animation: `hv-cell-in 0.7s ease-out ${0.4 + index * 0.08}s both` }}
    >
      <span
        aria-hidden="true"
        className={`mb-1 flex h-7 w-7 items-center justify-center rounded-full text-sm ${
          state === "unlocked"
            ? "bg-[rgba(157,80,235,0.25)] ring-1 ring-[rgba(206,149,249,0.5)]"
            : "bg-white/5 ring-1 ring-white/10"
        }`}
      >
        {icon}
      </span>
      <div className="text-[11px] font-medium leading-tight text-white">
        {title}
      </div>
      <div
        className={`mt-0.5 text-[9px] leading-tight ${
          state === "unlocked"
            ? "text-[color:var(--color-lilac)]"
            : "text-white/45"
        }`}
      >
        {sub}
      </div>
    </div>
  );
}
