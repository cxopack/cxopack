import { ImageResponse } from "next/og";

export const alt = "CxOPack — Hire five executives. Pay €299.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK_900 = "#0A0A0B";
const IVORY = "#EDE6D3";
const GOLD = "#C9A961";
const GOLD_LIGHT = "#E6CF91";
const DIM = "#71717a";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: INK_900,
          padding: 64,
          position: "relative",
          color: IVORY,
          fontFamily: "Inter, sans-serif",
        }}
      >
        {/* radial gold glow */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 700,
            height: 700,
            background: `radial-gradient(circle at 70% 50%, rgba(201, 169, 97, 0.18), transparent 70%)`,
          }}
        />

        {/* grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.08,
            backgroundImage:
              "linear-gradient(#2a2a30 1px, transparent 1px), linear-gradient(90deg, #2a2a30 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* header row: logo + EDITION */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: 1,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
              <rect x="5" y="7" width="20" height="2.4" rx="1" fill={IVORY} />
              <rect x="5" y="12" width="15" height="2.4" rx="1" fill={IVORY} />
              <rect x="5" y="17" width="22" height="2.6" rx="1" fill={GOLD} />
              <rect x="5" y="22" width="17" height="2.4" rx="1" fill={IVORY} />
            </svg>
            <div
              style={{
                display: "flex",
                fontSize: 28,
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              <span style={{ color: IVORY }}>Cx</span>
              <span style={{ color: GOLD }}>O</span>
              <span style={{ color: IVORY }}>Pack</span>
            </div>
          </div>
          <div
            style={{
              fontFamily: "monospace",
              fontSize: 14,
              color: GOLD,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Edition · I
          </div>
        </div>

        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            fontFamily: "monospace",
            marginTop: 80,
            fontSize: 16,
            color: GOLD,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            zIndex: 1,
          }}
        >
          An AI C-suite · in a pack
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 20,
            fontSize: 110,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1,
            zIndex: 1,
            maxWidth: 900,
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", gap: 18 }}>
            <span style={{ color: IVORY }}>Hire five</span>
            <span
              style={{
                color: GOLD_LIGHT,
                fontStyle: "italic",
              }}
            >
              executives.
            </span>
          </div>
          <div style={{ display: "flex", color: IVORY, marginTop: 4 }}>Pay €299.</div>
        </div>

        {/* Subtitle */}
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 22,
            color: "#a1a1aa",
            maxWidth: 820,
            lineHeight: 1.35,
            zIndex: 1,
          }}
        >
          CEO · CTO · CFO · Head of Sales · CMO — production-grade AI executive kits that work in
          Claude, ChatGPT, Cursor, any tool.
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: "monospace",
            fontSize: 13,
            color: DIM,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            zIndex: 1,
          }}
        >
          <span>Full Pack · Five Kits · One Install</span>
          <span style={{ color: GOLD }}>cxopack.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
