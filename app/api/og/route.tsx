import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/blog";

export const dynamic = "force-dynamic";

const SIZE = { width: 1200, height: 630 } as const;

async function loadGoogleFont(
  family: "Kanit" | "Inter",
  weight: number
): Promise<ArrayBuffer | null> {
  try {
    const cssRes = await fetch(
      `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&display=swap`,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
        },
      }
    );
    if (!cssRes.ok) return null;
    const css = await cssRes.text();
    const match = css.match(/src:\s*url\((https:\/\/[^)]+\.ttf)\)/);
    if (!match) return null;
    const fontRes = await fetch(match[1]);
    if (!fontRes.ok) return null;
    return await fontRes.arrayBuffer();
  } catch {
    return null;
  }
}

function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return iso;
  return d
    .toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      timeZone: "UTC",
    })
    .toUpperCase();
}

// ============================================================================
// Right-side graphic variants
// ============================================================================

type Variant = "today" | "heatmap" | "streak" | "evening";

const SLUG_VARIANT: Record<string, Variant> = {
  "5-years-of-planning-my-life-in-a-google-sheet": "heatmap",
  "lansia-is-for-people-who-hate-habit-trackers": "today",
  "nobody-is-perfect": "streak",
  "a-daily-plan-is-not-a-habit-tracker": "today",
  "why-your-todo-list-keeps-failing-you": "today",
  "the-five-minute-habit-that-changes-mornings": "evening",
  "do-the-hardest-thing-first": "evening",
  "streaks-should-be-invisible": "streak",
  "forget-the-5-year-plan": "heatmap",
  "why-lansia-is-a-one-time-payment": "today",
  "stop-whining-start-winning": "today",
  "built-in-slovenia-by-one-person": "heatmap",
};

function chooseVariant(slug: string | null): Variant {
  if (!slug) return "today";
  return SLUG_VARIANT[slug] ?? "today";
}

// Shared front-card frame styling — every variant uses the same tilted glass
// panel so the right side feels like the same family of artifact.
const FRONT_CARD_STYLE: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  position: "relative",
  transform: "rotate(-4deg)",
  width: 360,
  padding: 28,
  borderRadius: 28,
  border: "1px solid rgba(255,255,255,0.10)",
  background: "rgba(21,17,26,0.85)",
  boxShadow:
    "0 40px 80px rgba(121,53,238,0.35), 0 16px 32px rgba(0,0,0,0.5)",
};

const CARD_KICKER: React.CSSProperties = {
  display: "flex",
  fontFamily: "Kanit, sans-serif",
  fontSize: 12,
  fontWeight: 500,
  letterSpacing: "0.18em",
  color: "rgba(255,255,255,0.5)",
};

const CARD_FOOTER_LINE: React.CSSProperties = {
  display: "flex",
  marginTop: 18,
  paddingTop: 14,
  borderTop: "1px solid rgba(255,255,255,0.06)",
  fontFamily: "Inter, sans-serif",
  fontSize: 12,
  color: "rgba(255,255,255,0.4)",
  letterSpacing: "0.05em",
};

// ----- Variant: Today's plan -----

type TaskRow = { label: string; done: boolean };
const SAMPLE_TASKS: TaskRow[] = [
  { label: "Hardest thing first", done: true },
  { label: "10km run", done: true },
  { label: "Ship blog post", done: false },
  { label: "Read 20 pages", done: false },
];

function renderTodayCard() {
  return (
    <div style={FRONT_CARD_STYLE}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 4,
        }}
      >
        <div style={CARD_KICKER}>TOMORROW</div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontFamily: "Inter, sans-serif",
            fontSize: 12,
            fontWeight: 500,
            color: "#CE95F9",
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: 999,
              background: "#CE95F9",
            }}
          />
          <div style={{ display: "flex" }}>3/5</div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          fontFamily: "Kanit, sans-serif",
          fontWeight: 600,
          fontSize: 28,
          color: "#FFFFFF",
          marginBottom: 18,
        }}
      >
        Today's plan
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {SAMPLE_TASKS.map((task, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 12px",
              borderRadius: 12,
              background: task.done
                ? "rgba(206,149,249,0.10)"
                : "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 20,
                height: 20,
                borderRadius: 6,
                background: task.done ? "#CE95F9" : "transparent",
                border: task.done
                  ? "1px solid #CE95F9"
                  : "1px solid rgba(255,255,255,0.25)",
              }}
            >
              {task.done ? (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12.5L10 17.5L19 7"
                    stroke="#0D070D"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : null}
            </div>
            <div
              style={{
                display: "flex",
                fontFamily: "Inter, sans-serif",
                fontWeight: task.done ? 400 : 500,
                fontSize: 16,
                color: task.done
                  ? "rgba(255,255,255,0.55)"
                  : "rgba(255,255,255,0.92)",
                textDecoration: task.done ? "line-through" : "none",
                textDecorationColor: "rgba(255,255,255,0.3)",
              }}
            >
              {task.label}
            </div>
          </div>
        ))}
      </div>

      <div style={CARD_FOOTER_LINE}>Small wins, every day.</div>
    </div>
  );
}

// ----- Variant: Year heatmap -----

const HEATMAP_INTENSITY_COLORS = [
  "rgba(255,255,255,0.05)",
  "rgba(206,149,249,0.18)",
  "rgba(206,149,249,0.38)",
  "rgba(206,149,249,0.62)",
  "#CE95F9",
];

function buildHeatmapPattern(rows: number, cols: number): number[][] {
  // Deterministic pseudo-random pattern. Mixes a few seeds so the output
  // reads as organic rather than periodic.
  const pattern: number[][] = [];
  for (let r = 0; r < rows; r++) {
    const row: number[] = [];
    for (let c = 0; c < cols; c++) {
      const seed = (r * 17 + c * 31 + ((r + 1) * (c + 1) * 7)) % 100;
      let intensity: number;
      if (seed < 18) intensity = 0;
      else if (seed < 40) intensity = 1;
      else if (seed < 62) intensity = 2;
      else if (seed < 84) intensity = 3;
      else intensity = 4;
      row.push(intensity);
    }
    pattern.push(row);
  }
  return pattern;
}

function renderHeatmapCard() {
  const ROWS = 7;
  const COLS = 18;
  const CELL = 13;
  const GAP = 4;
  const pattern = buildHeatmapPattern(ROWS, COLS);

  return (
    <div style={FRONT_CARD_STYLE}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 4,
        }}
      >
        <div style={CARD_KICKER}>THIS YEAR</div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontFamily: "Inter, sans-serif",
            fontSize: 12,
            fontWeight: 500,
            color: "#CE95F9",
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: 999,
              background: "#CE95F9",
            }}
          />
          <div style={{ display: "flex" }}>127 days</div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          fontFamily: "Kanit, sans-serif",
          fontWeight: 600,
          fontSize: 28,
          color: "#FFFFFF",
          marginBottom: 22,
        }}
      >
        Your year so far
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: GAP,
        }}
      >
        {pattern.map((row, r) => (
          <div key={r} style={{ display: "flex", gap: GAP }}>
            {row.map((intensity, c) => (
              <div
                key={c}
                style={{
                  width: CELL,
                  height: CELL,
                  borderRadius: 3,
                  background: HEATMAP_INTENSITY_COLORS[intensity],
                }}
              />
            ))}
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          marginTop: 22,
          alignItems: "center",
          gap: 8,
          fontFamily: "Inter, sans-serif",
          fontSize: 11,
          color: "rgba(255,255,255,0.45)",
        }}
      >
        <div style={{ display: "flex" }}>Less</div>
        {HEATMAP_INTENSITY_COLORS.map((color, i) => (
          <div
            key={i}
            style={{
              width: 10,
              height: 10,
              borderRadius: 2,
              background: color,
            }}
          />
        ))}
        <div style={{ display: "flex" }}>More</div>
      </div>
    </div>
  );
}

// ----- Variant: Streak counter -----

function renderStreakCard() {
  // Last 7 days: 5 hits, 1 miss, 1 today.
  const week: Array<"hit" | "miss" | "today"> = [
    "hit",
    "hit",
    "miss",
    "hit",
    "hit",
    "hit",
    "today",
  ];
  const dayLabels = ["M", "T", "W", "T", "F", "S", "S"];

  return (
    <div style={FRONT_CARD_STYLE}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 4,
        }}
      >
        <div style={CARD_KICKER}>CURRENT STREAK</div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontFamily: "Inter, sans-serif",
            fontSize: 12,
            fontWeight: 500,
            color: "#CE95F9",
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: 999,
              background: "#CE95F9",
            }}
          />
          <div style={{ display: "flex" }}>WK 17</div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 10,
          marginBottom: 22,
          marginTop: 6,
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "Kanit, sans-serif",
            fontWeight: 600,
            fontSize: 84,
            lineHeight: 0.9,
            color: "#FFFFFF",
            letterSpacing: "-0.03em",
          }}
        >
          127
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "Kanit, sans-serif",
            fontWeight: 400,
            fontSize: 22,
            color: "rgba(255,255,255,0.55)",
          }}
        >
          days
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: 8,
          marginBottom: 14,
        }}
      >
        {week.map((state, i) => {
          const isHit = state === "hit";
          const isToday = state === "today";
          return (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
                flex: 1,
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: 28,
                  height: 28,
                  borderRadius: 999,
                  background: isHit
                    ? "#CE95F9"
                    : isToday
                    ? "rgba(206,149,249,0.18)"
                    : "rgba(255,255,255,0.06)",
                  border: isToday
                    ? "1px dashed rgba(206,149,249,0.55)"
                    : "1px solid rgba(255,255,255,0.06)",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {isHit ? (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12.5L10 17.5L19 7"
                      stroke="#0D070D"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : null}
              </div>
              <div
                style={{
                  display: "flex",
                  fontFamily: "Inter, sans-serif",
                  fontSize: 10,
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.4)",
                  letterSpacing: "0.08em",
                }}
              >
                {dayLabels[i]}
              </div>
            </div>
          );
        })}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 6,
          paddingTop: 14,
          borderTop: "1px solid rgba(255,255,255,0.06)",
          fontFamily: "Inter, sans-serif",
          fontSize: 12,
          color: "rgba(255,255,255,0.55)",
        }}
      >
        <div style={{ display: "flex" }}>Bounce-back rate</div>
        <div
          style={{
            display: "flex",
            color: "#CE95F9",
            fontWeight: 500,
          }}
        >
          95%
        </div>
      </div>
    </div>
  );
}

// ----- Variant: Evening / "Tomorrow's three" -----

function renderEveningCard() {
  // The user has filled in one task; rows 2 and 3 are still empty, mid-ritual.
  const rows: Array<{ index: number; text: string; filled: boolean }> = [
    { index: 1, text: "Hardest thing first", filled: true },
    { index: 2, text: "", filled: false },
    { index: 3, text: "", filled: false },
  ];

  return (
    <div style={FRONT_CARD_STYLE}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 4,
        }}
      >
        <div style={CARD_KICKER}>TONIGHT</div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontFamily: "Inter, sans-serif",
            fontSize: 12,
            fontWeight: 500,
            color: "#CE95F9",
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: 999,
              background: "#CE95F9",
            }}
          />
          <div style={{ display: "flex" }}>10:00 PM</div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          fontFamily: "Kanit, sans-serif",
          fontWeight: 600,
          fontSize: 28,
          color: "#FFFFFF",
          marginBottom: 4,
        }}
      >
        Tomorrow's three
      </div>
      <div
        style={{
          display: "flex",
          fontFamily: "Kanit, sans-serif",
          fontWeight: 300,
          fontSize: 14,
          color: "rgba(255,255,255,0.5)",
          marginBottom: 18,
        }}
      >
        Write it down. Go to bed.
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {rows.map((row) => (
          <div
            key={row.index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "12px 12px",
              borderRadius: 12,
              background: row.filled
                ? "rgba(206,149,249,0.06)"
                : "rgba(255,255,255,0.03)",
              border: row.filled
                ? "1px solid rgba(206,149,249,0.22)"
                : "1px dashed rgba(255,255,255,0.12)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 22,
                height: 22,
                borderRadius: 999,
                background: row.filled
                  ? "rgba(206,149,249,0.20)"
                  : "rgba(255,255,255,0.04)",
                border: row.filled
                  ? "1px solid rgba(206,149,249,0.45)"
                  : "1px solid rgba(255,255,255,0.10)",
                fontFamily: "Kanit, sans-serif",
                fontWeight: 500,
                fontSize: 12,
                color: row.filled ? "#CE95F9" : "rgba(255,255,255,0.4)",
              }}
            >
              {row.index}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: 16,
                color: row.filled
                  ? "rgba(255,255,255,0.92)"
                  : "rgba(255,255,255,0.28)",
              }}
            >
              {row.text || "…"}
            </div>
            {row.filled ? (
              <div
                style={{
                  display: "flex",
                  marginLeft: 4,
                  width: 2,
                  height: 18,
                  background: "#CE95F9",
                }}
              />
            ) : null}
          </div>
        ))}
      </div>

      <div style={CARD_FOOTER_LINE}>Sleep faster. Wake up decided.</div>
    </div>
  );
}

function renderVariant(variant: Variant) {
  switch (variant) {
    case "heatmap":
      return renderHeatmapCard();
    case "streak":
      return renderStreakCard();
    case "evening":
      return renderEveningCard();
    case "today":
    default:
      return renderTodayCard();
  }
}

// ============================================================================
// Route handler
// ============================================================================

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");

  let title = searchParams.get("title") ?? "Lansia";
  let description =
    searchParams.get("description") ?? "Small wins, every day.";
  let dateStr = "";

  if (slug) {
    const post = getPostBySlug(slug);
    if (post) {
      title = post.title;
      description = post.description;
      dateStr = formatDate(post.date);
    }
  }

  const variant = chooseVariant(slug);
  const titleSize = title.length <= 32 ? 76 : title.length <= 60 ? 64 : 56;

  const [kanit300, kanit500, kanit600, kanit700, inter400, inter500] =
    await Promise.all([
      loadGoogleFont("Kanit", 300),
      loadGoogleFont("Kanit", 500),
      loadGoogleFont("Kanit", 600),
      loadGoogleFont("Kanit", 700),
      loadGoogleFont("Inter", 400),
      loadGoogleFont("Inter", 500),
    ]);

  const fonts: {
    name: string;
    data: ArrayBuffer;
    weight: 300 | 400 | 500 | 600 | 700;
    style: "normal";
  }[] = [];
  if (kanit300)
    fonts.push({ name: "Kanit", data: kanit300, weight: 300, style: "normal" });
  if (kanit500)
    fonts.push({ name: "Kanit", data: kanit500, weight: 500, style: "normal" });
  if (kanit600)
    fonts.push({ name: "Kanit", data: kanit600, weight: 600, style: "normal" });
  if (kanit700)
    fonts.push({ name: "Kanit", data: kanit700, weight: 700, style: "normal" });
  if (inter400)
    fonts.push({ name: "Inter", data: inter400, weight: 400, style: "normal" });
  if (inter500)
    fonts.push({ name: "Inter", data: inter500, weight: 500, style: "normal" });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          background: "#0D070D",
          backgroundImage:
            "radial-gradient(ellipse at 95% 8%, rgba(121,53,238,0.55) 0%, rgba(13,7,13,0) 50%), radial-gradient(ellipse at 8% 95%, rgba(206,149,249,0.18) 0%, rgba(13,7,13,0) 50%)",
          fontFamily: "Kanit, sans-serif",
          color: "#FFFFFF",
          position: "relative",
        }}
      >
        {/* Dot grid texture */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)",
            backgroundSize: "32px 32px",
            opacity: 0.6,
          }}
        />

        {/* Left column: copy */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px",
            width: 720,
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "8px 16px",
              borderRadius: 999,
              border: "1px solid rgba(206,149,249,0.32)",
              background: "rgba(206,149,249,0.08)",
              color: "#CE95F9",
              fontSize: 16,
              fontWeight: 500,
              letterSpacing: "0.22em",
              alignSelf: "flex-start",
              fontFamily: "Kanit, sans-serif",
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: 999,
                background: "#CE95F9",
              }}
            />
            <div style={{ display: "flex" }}>JOURNAL</div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 28,
              maxWidth: 600,
            }}
          >
            <div
              style={{
                display: "flex",
                fontFamily: "Kanit, sans-serif",
                fontWeight: 700,
                fontSize: titleSize,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "#FFFFFF",
                wordBreak: "break-word",
              }}
            >
              {title}
            </div>
            <div
              style={{
                display: "flex",
                fontFamily: "Kanit, sans-serif",
                fontWeight: 300,
                fontSize: 22,
                lineHeight: 1.5,
                color: "rgba(255,255,255,0.72)",
                maxWidth: 580,
              }}
            >
              {description}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 999,
                  background: "#CE95F9",
                  boxShadow: "0 0 12px rgba(206,149,249,0.7)",
                }}
              />
              <div
                style={{
                  display: "flex",
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: 500,
                  fontSize: 28,
                  color: "#FFFFFF",
                }}
              >
                Lansia
              </div>
            </div>
            {dateStr ? (
              <div
                style={{
                  display: "flex",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  color: "rgba(255,255,255,0.45)",
                  letterSpacing: "0.18em",
                }}
              >
                {dateStr}
              </div>
            ) : (
              <div style={{ display: "flex" }} />
            )}
          </div>
        </div>

        {/* Right column: variant graphic */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              position: "absolute",
              width: 460,
              height: 460,
              borderRadius: 999,
              background:
                "radial-gradient(circle at center, rgba(121,53,238,0.55) 0%, rgba(13,7,13,0) 60%)",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              transform: "translate(40px, 28px) rotate(8deg)",
              width: 330,
              height: 360,
              borderRadius: 28,
              border: "1px solid rgba(255,255,255,0.06)",
              background: "rgba(255,255,255,0.025)",
            }}
          />
          {renderVariant(variant)}
        </div>
      </div>
    ),
    {
      ...SIZE,
      fonts: fonts.length ? fonts : undefined,
    }
  );
}
