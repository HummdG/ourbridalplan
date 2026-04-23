import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import path from "path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoPath = path.join(process.cwd(), "public", "brand", "logo.png");
  const logoBuffer = readFileSync(logoPath);
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#FAF8F5",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt="Our Bridal Plan"
          style={{ width: 260, height: 260, objectFit: "contain" }}
        />
        <div
          style={{
            width: 60,
            height: 1,
            background: "#C9A96E",
            margin: "20px 0",
          }}
        />
        <p
          style={{
            fontSize: 22,
            color: "#7A7A7A",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontFamily: "sans-serif",
            fontWeight: 300,
            margin: 0,
          }}
        >
          Wedding Planning &amp; Coordination
        </p>
        <p
          style={{
            fontSize: 13,
            color: "#C9A96E",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontFamily: "sans-serif",
            fontWeight: 400,
            margin: "12px 0 0",
          }}
        >
          UK AWA Award Winner 2025
        </p>
      </div>
    ),
    { ...size }
  );
}
