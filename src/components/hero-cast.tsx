"use client";

import { motion } from "framer-motion";
import { CHIEF_OF_STAFF, KITS } from "@/config/kits";

type Row = {
  agentName: string;
  role: string;
  posterTag: string;
};

const ROWS: Row[] = [
  ...KITS.map((k) => ({
    agentName: k.agentName,
    role: k.role,
    posterTag: k.posterTag,
  })),
  {
    agentName: CHIEF_OF_STAFF.agentName,
    role: CHIEF_OF_STAFF.role,
    posterTag: CHIEF_OF_STAFF.posterTag,
  },
];

export function HeroCast() {
  return (
    <div className="relative">
      {/* faint grid backing the poster */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-x-4 -inset-y-2 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border-strong) 1px, transparent 1px)",
          backgroundSize: "0 32px",
        }}
      />

      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
        }}
        className="space-y-3"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { duration: 0.4 } },
          }}
          className="mono mb-2 text-[10px] uppercase tracking-[0.18em] text-[var(--color-fg-dim)]"
        >
          The cast · Edition I
        </motion.div>

        {ROWS.map((row) => (
          <motion.div
            key={row.agentName}
            variants={{
              hidden: { opacity: 0, x: 12 },
              show: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            className="grid grid-cols-[auto_1fr] items-baseline gap-x-4 border-b border-[var(--color-border)] py-2 last:border-b-0 sm:grid-cols-[auto_1fr_auto] sm:gap-x-6"
          >
            <span className="bg-gradient-to-r from-[var(--color-gold-500)] to-[var(--color-gold-300)] bg-clip-text text-3xl font-semibold italic leading-none tracking-tight text-transparent md:text-4xl">
              {row.agentName}
            </span>
            <span className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-fg-muted)] sm:text-[11px]">
              {row.role}
            </span>
            <span className="col-span-2 text-sm text-[var(--color-fg-muted)] sm:col-span-1 sm:text-right">
              {row.posterTag}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
