/**
 * Three glass cards (streak / today's goals / year heatmap) arranged with
 * parallax tilt and gentle float. Visualizes the lansia ritual without a
 * phone frame. Pure CSS animation, no JS.
 */
export function HeroVisual() {
  return (
    <div className="hero-visual relative aspect-square w-full max-w-[240px] sm:max-w-[380px] md:max-w-[460px]">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(circle_at_50%_50%,rgba(157,80,235,0.28),transparent_65%)]"
      />

      {/* Streak card: top-right */}
      <div className="hv-card hv-card-streak absolute right-0 top-0 w-[58%] rounded-2xl border border-white/12 bg-[rgba(21,17,26,0.85)] p-3 shadow-[0_30px_60px_-20px_rgba(121,53,238,0.5)] backdrop-blur-md sm:p-4 md:p-5">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/55 sm:text-xs sm:tracking-[0.14em]">
            Current streak
          </span>
          <span aria-hidden="true" className="text-sm sm:text-base">🔥</span>
        </div>
        <div className="mt-2 flex items-baseline gap-2 sm:mt-3">
          <span className="font-[family-name:var(--font-kanit)] text-3xl font-medium text-white sm:text-4xl md:text-5xl">
            12
          </span>
          <span className="text-xs text-white/55 sm:text-sm">days</span>
        </div>
        <div className="mt-2 flex gap-1 sm:mt-3">
          {Array.from({ length: 7 }).map((_, i) => (
            <span
              key={i}
              className={`h-1 flex-1 rounded-full sm:h-1.5 ${
                i < 5
                  ? "bg-[color:var(--color-purple-light)]"
                  : "bg-white/10"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Goals card: center-left */}
      <div className="hv-card hv-card-goals absolute left-0 top-[30%] w-[68%] rounded-2xl border border-white/12 bg-[rgba(21,17,26,0.92)] p-3 shadow-[0_40px_70px_-25px_rgba(121,53,238,0.55)] backdrop-blur-md sm:p-4 md:p-5">
        <div className="mb-2 flex items-center justify-between sm:mb-3">
          <span className="font-[family-name:var(--font-kanit)] text-sm text-white sm:text-base">
            Today
          </span>
          <span className="text-[10px] text-white/45 sm:text-xs">3 / 5</span>
        </div>
        <ul className="space-y-1.5 sm:space-y-2">
          <GoalRow label="10km run" done delay={0} />
          <GoalRow label="Meeting with Phillip" done={false} delay={0.4} />
          <GoalRow label="Proposal v2" done delay={0.8} />
          <GoalRow label="Read 30 min" done delay={1.2} />
        </ul>
      </div>

      {/* Heatmap card: bottom-right */}
      <div className="hv-card hv-card-heatmap absolute bottom-0 right-[4%] w-[64%] rounded-2xl border border-white/12 bg-[rgba(21,17,26,0.85)] p-3 shadow-[0_30px_60px_-20px_rgba(121,53,238,0.5)] backdrop-blur-md sm:p-4 md:p-5">
        <div className="mb-2 flex items-center justify-between sm:mb-3">
          <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/55 sm:text-xs sm:tracking-[0.14em]">
            Your year
          </span>
          <span className="text-[10px] text-[color:var(--color-lilac)] sm:text-xs">+18%</span>
        </div>
        <div className="grid grid-cols-12 gap-[2px] sm:gap-[3px]">
          {HEATMAP_PATTERN.map((level, i) => (
            <span
              key={i}
              className="aspect-square rounded-[2px] sm:rounded-[3px]"
              style={{
                background: heatmapColor(level),
                animation: `hv-cell-in 1.2s ease-out ${i * 0.012}s both`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function GoalRow({
  label,
  done,
  delay,
}: {
  label: string;
  done: boolean;
  delay: number;
}) {
  return (
    <li className="flex items-center gap-2 sm:gap-2.5">
      <span
        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full sm:h-5 sm:w-5 ${
          done
            ? "bg-[color:var(--color-purple-light)]"
            : "border border-white/20 bg-transparent"
        }`}
        style={
          done
            ? { animation: `hv-check-in 0.5s ease-out ${delay}s both` }
            : undefined
        }
      >
        {done && (
          <svg
            viewBox="0 0 12 12"
            className="h-2.5 w-2.5 text-white sm:h-3 sm:w-3"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2.5 6.2 5 8.5l4.5-5" />
          </svg>
        )}
      </span>
      <span
        className={`text-xs sm:text-sm ${
          done ? "text-white/55 line-through decoration-white/30" : "text-white"
        }`}
      >
        {label}
      </span>
    </li>
  );
}

// 0 = empty, 1 = light, 2 = mid, 3 = strong. 6 rows × 12 cols.
const HEATMAP_PATTERN = [
  1, 2, 0, 3, 2, 3, 3, 2, 1, 0, 2, 3,
  2, 3, 3, 2, 0, 3, 2, 3, 3, 2, 3, 2,
  0, 2, 3, 3, 3, 2, 3, 3, 0, 3, 2, 3,
  3, 3, 2, 3, 1, 3, 2, 3, 3, 0, 3, 3,
  2, 3, 3, 0, 3, 3, 2, 3, 3, 3, 2, 3,
  3, 2, 3, 3, 3, 2, 3, 1, 3, 3, 3, 2,
];

function heatmapColor(level: number) {
  switch (level) {
    case 3:
      return "var(--color-purple-light)";
    case 2:
      return "rgba(157, 80, 235, 0.55)";
    case 1:
      return "rgba(157, 80, 235, 0.25)";
    default:
      return "rgba(255, 255, 255, 0.06)";
  }
}
