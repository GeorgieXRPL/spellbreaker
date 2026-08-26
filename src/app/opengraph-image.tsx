import { ImageResponse } from "next/og";

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
          alignItems: "center",
          justifyContent: "center",
          background: "#f3ebe0",
          color: "#0e0d0b",
        }}
      >
        <div
          style={{
            fontSize: 92,
            letterSpacing: -3,
            fontFamily: "Georgia, serif",
          }}
        >
          SPELL BREAKER
        </div>
        <div style={{ marginTop: 18, fontSize: 22, color: "#5c554c" }}>
          Launching on Robinhood Chain
        </div>
      </div>
    ),
    { ...size },
  );
}
