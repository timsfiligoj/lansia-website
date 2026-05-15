import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Lansia. Small wins, every day.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const SCREENSHOT_URL =
  "https://lansia.app/screenshots/feature-task-2.PNG";

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

async function loadScreenshotDataUri(): Promise<string | null> {
  try {
    const res = await fetch(SCREENSHOT_URL, { cache: "force-cache" });
    if (!res.ok) return null;
    const buf = await res.arrayBuffer();
    const bytes = new Uint8Array(buf);
    let binary = "";
    for (let i = 0; i < bytes.length; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    const base64 = btoa(binary);
    return `data:image/png;base64,${base64}`;
  } catch {
    return null;
  }
}

export default async function OGImage() {
  const [kanit500, kanit600, screenshot] = await Promise.all([
    loadKanit(500),
    loadKanit(600),
    loadScreenshotDataUri(),
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
          flexDirection: "row",
          background: "#0D070D",
          backgroundImage:
            "radial-gradient(ellipse at 25% 40%, rgba(121,53,238,0.38) 0%, rgba(13,7,13,0) 60%), radial-gradient(ellipse at 85% 95%, rgba(206,149,249,0.22) 0%, rgba(13,7,13,0) 55%)",
          fontFamily: kanit500 ? "Kanit, sans-serif" : "sans-serif",
          color: "#FFFFFF",
          position: "relative",
        }}
      >
        {/* Left column: copy */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "70px",
            width: "640px",
            gap: 36,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "8px 18px",
              borderRadius: 999,
              border: "1px solid rgba(206,149,249,0.35)",
              background: "rgba(206,149,249,0.10)",
              color: "#CE95F9",
              fontSize: 18,
              fontWeight: 500,
              letterSpacing: "0.22em",
              alignSelf: "flex-start",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
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
              fontWeight: 600,
              fontSize: 96,
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
            }}
          >
            <div style={{ display: "flex" }}>Small wins,</div>
            <div style={{ display: "flex", color: "#CE95F9" }}>every day.</div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: "rgba(255,255,255,0.72)",
              fontSize: 22,
              fontWeight: 500,
              lineHeight: 1.4,
            }}
          >
            <div style={{ display: "flex" }}>
              The daily plan that compounds.
            </div>
            <div style={{ display: "flex" }}>
              $4.99 lifetime, no subscription.
            </div>
          </div>
        </div>

        {/* Right column: phone mockup */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            position: "relative",
          }}
        >
          {screenshot ? (
            <div
              style={{
                display: "flex",
                position: "relative",
                width: 340,
                height: 738,
                borderRadius: 52,
                background: "#0A0A0A",
                border: "2px solid rgba(255,255,255,0.08)",
                padding: 10,
                boxShadow:
                  "0 40px 80px rgba(121,53,238,0.35), 0 20px 40px rgba(0,0,0,0.5)",
                overflow: "hidden",
              }}
            >
              <img
                src={screenshot}
                width={320}
                height={718}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 42,
                  objectFit: "cover",
                }}
              />
            </div>
          ) : null}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fonts.length ? fonts : undefined,
    }
  );
}
