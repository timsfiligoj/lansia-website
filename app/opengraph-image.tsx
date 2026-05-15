import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Lansia. Small wins, every day.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadKanit(weight: 500 | 600): Promise<ArrayBuffer | null> {
  try {
    const cssRes = await fetch(
      `https://fonts.googleapis.com/css2?family=Kanit:wght@${weight}&display=swap`,
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

export default async function OGImage() {
  const [kanit500, kanit600] = await Promise.all([
    loadKanit(500),
    loadKanit(600),
  ]);

  const fonts = [];
  if (kanit500) {
    fonts.push({
      name: "Kanit",
      data: kanit500,
      weight: 500 as const,
      style: "normal" as const,
    });
  }
  if (kanit600) {
    fonts.push({
      name: "Kanit",
      data: kanit600,
      weight: 600 as const,
      style: "normal" as const,
    });
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#0D070D",
          backgroundImage:
            "radial-gradient(ellipse at 50% 30%, rgba(121,53,238,0.35) 0%, rgba(13,7,13,0) 60%), radial-gradient(ellipse at 80% 100%, rgba(206,149,249,0.18) 0%, rgba(13,7,13,0) 55%)",
          fontFamily: kanit500 ? "Kanit, sans-serif" : "sans-serif",
          color: "#FFFFFF",
          padding: "80px",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            padding: "10px 22px",
            borderRadius: 999,
            border: "1px solid rgba(206,149,249,0.35)",
            background: "rgba(206,149,249,0.10)",
            color: "#CE95F9",
            fontSize: 22,
            fontWeight: 500,
            letterSpacing: "0.22em",
            marginBottom: 48,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "#CE95F9",
            }}
          />
          <div style={{ display: "flex" }}>LANSIA</div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontWeight: 600,
            fontSize: 132,
            lineHeight: 1.02,
            letterSpacing: "-0.02em",
            textAlign: "center",
          }}
        >
          <div style={{ display: "flex" }}>Small wins,</div>
          <div style={{ display: "flex", color: "#CE95F9" }}>every day.</div>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 48,
            color: "rgba(255,255,255,0.72)",
            fontSize: 30,
            fontWeight: 500,
            letterSpacing: "0",
          }}
        >
          The daily plan that compounds. $4.99 lifetime, no subscription.
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fonts.length ? fonts : undefined,
    }
  );
}
