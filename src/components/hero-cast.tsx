"use client";

import { motion } from "framer-motion";
import { CHIEF_OF_STAFF, KITS } from "@/config/kits";

type Row = {
  agentName: string;
  role: string;
};

const ROWS: Row[] = [
  ...KITS.map((k) => ({ agentName: k.agentName, role: k.role })),
  { agentName: CHIEF_OF_STAFF.agentName, role: CHIEF_OF_STAFF.role },
];

export function HeroCast() {
  return (
    <motion.ul
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
      }}
      className="flex flex-col gap-y-3"
    >
      {ROWS.map((row) => (
        <motion.li
          key={row.agentName}
          variants={{
            hidden: { opacity: 0, y: 6 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
            },
          }}
          className="flex items-baseline gap-3"
        >
          <span className="bg-gradient-to-r from-[var(--color-gold-500)] to-[var(--color-gold-300)] bg-clip-text text-2xl font-medium italic leading-tight tracking-tight text-transparent">
            {row.agentName}
          </span>
          <span aria-hidden className="text-sm text-[var(--color-fg-dim)]">
            ·
          </span>
          <span className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-fg-muted)]">
            {row.role}
          </span>
        </motion.li>
      ))}
    </motion.ul>
  );
}
