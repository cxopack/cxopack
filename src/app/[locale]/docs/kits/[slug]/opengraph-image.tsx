import { ImageResponse } from "next/og";
import { KIT_DOCS } from "@/content/docs";

export const alt = "CxOPack kit";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateImageMetadata({ params }: { params: { slug: string } }) {
  const kit = KIT_DOCS[params.slug];
  if (!kit) return [];
  return [{ id: kit.slug, alt: `${kit.title} — ${kit.tagline}`, contentType, size }];
}

const INK_900 = "#0A0A0B";
const IVORY = "#EDE6D3";
const GOLD = "#C9A961";
const GOLD_LIGHT = "#E6CF91";
const DIM = "#71717a";
const MUTED = "#a1a1aa";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const kit = KIT_DOCS[slug];
  if (!kit) {
    return new ImageResponse(<div style={{ display: "flex" }}>404</div>, size);
  }

  const slugStr = kit.slug as string;
  const isBoard = slugStr === "board";
  const kitIndex = ["ceo", "cto", "cfo", "sales", "cmo"].indexOf(slugStr) + 1;
  const label = isBoard ? "THE BOARD" : `KIT · 0${kitIndex} / 05`;

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

        {/* Header: logo + edition */}
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
            Docs · Edition I
          </div>
        </div>

        {/* Kit code badge */}
        <div
          style={{
            display: "flex",
            marginTop: 60,
            fontFamily: "monospace",
            fontSize: 15,
            color: GOLD,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            zIndex: 1,
          }}
        >
          {label}
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            marginTop: 16,
            fontSize: 96,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1,
            color: IVORY,
            zIndex: 1,
          }}
        >
          {kit.title}
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 24,
            color: MUTED,
            maxWidth: 820,
            lineHeight: 1.35,
            zIndex: 1,
            fontStyle: "italic",
          }}
        >
          {kit.tagline}
        </div>

        {/* Skill count or Board persona chips */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            marginTop: 40,
            zIndex: 1,
          }}
        >
          {kit.skills.slice(0, 6).map((s) => (
            <div
              key={s.name}
              style={{
                display: "flex",
                fontFamily: "monospace",
                fontSize: 13,
                color: MUTED,
                padding: "6px 12px",
                border: `1px solid #2a2a30`,
                borderRadius: 6,
                background: "#101114",
              }}
            >
              {s.name}
            </div>
          ))}
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
          <span>
            {isBoard
              ? "Board · Orchestration · Shared Memory"
              : "Five Kits · One Install · Edition I"}
          </span>
          <span style={{ color: GOLD }}>cxopack.com/docs</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
