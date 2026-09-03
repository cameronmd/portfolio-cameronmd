import { ImageResponse } from "next/og";
import { profile } from "@/data/cv";

export const alt = `${profile.name} — ${profile.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
// Render the card to a static PNG at build time (required by `output: export`).
export const dynamic = "force-static";

// Branded share card: name + role on the brand gradient (no photo), matching
// the CMD favicon. Rendered to a PNG at build time by next/og.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          color: "#ffffff",
          backgroundImage: "linear-gradient(135deg, #316bff 0%, #1539e1 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 96,
              height: 96,
              borderRadius: 24,
              border: "4px solid rgba(255,255,255,0.45)",
              fontSize: 38,
              fontWeight: 700,
              letterSpacing: -2,
            }}
          >
            CMD
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 30,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.85)",
            }}
          >
            {profile.headline}
          </div>
          <div
            style={{
              fontSize: 92,
              fontWeight: 800,
              marginTop: 12,
              lineHeight: 1.05,
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              fontSize: 40,
              marginTop: 20,
              color: "rgba(255,255,255,0.9)",
            }}
          >
            {profile.specialism}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 28,
            color: "rgba(255,255,255,0.8)",
          }}
        >
          <div style={{ display: "flex" }}>
            {profile.url.replace(/^https?:\/\//, "")}
          </div>
          <div style={{ display: "flex" }}>
            {profile.links.github.replace(/^https?:\/\//, "")}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
