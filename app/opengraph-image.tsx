import { ImageResponse } from "next/og";

export const alt = "Alpha Clean Engineering — Installation, Testing & Commissioning";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #061b35 0%, #0B2E5B 55%, #092548 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* Triangle mark */}
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: "46px solid transparent",
              borderRight: "46px solid transparent",
              borderBottom: "80px solid #ffffff",
            }}
          />
          <div
            style={{
              fontSize: 30,
              letterSpacing: 6,
              fontWeight: 700,
              color: "#cdddf0",
            }}
          >
            ALPHA CLEAN ENGINEERING
          </div>
        </div>

        <div
          style={{
            marginTop: 50,
            fontSize: 70,
            fontWeight: 800,
            lineHeight: 1.05,
            maxWidth: 950,
          }}
        >
          Installation, Testing &amp; Commissioning Contractor
        </div>

        <div
          style={{
            marginTop: 28,
            fontSize: 32,
            color: "#9bb4d6",
          }}
        >
          Your Equipment. Our Execution. — India &amp; North Africa
        </div>

        <div
          style={{
            marginTop: 44,
            height: 6,
            width: 180,
            background: "#1f6feb",
            borderRadius: 4,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
