import type { KitSlug } from "@/config/kits";
import { cn } from "@/lib/utils";

const GOLD = "var(--color-gold-500)";
const IVORY = "var(--color-ivory)";

function Ceo() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 10 L38 36 L10 36 Z" stroke={IVORY} strokeWidth="1.5" strokeLinejoin="round" />
      <line x1="10" y1="36" x2="38" y2="36" stroke={IVORY} strokeWidth="1.5" />
      <circle cx="24" cy="10" r="2" fill={GOLD} />
    </svg>
  );
}

function Cto() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="10" width="7" height="7" stroke={IVORY} strokeWidth="1.5" />
      <rect x="33" y="10" width="7" height="7" stroke={IVORY} strokeWidth="1.5" />
      <rect x="8" y="31" width="7" height="7" stroke={IVORY} strokeWidth="1.5" />
      <rect x="33" y="31" width="7" height="7" stroke={IVORY} strokeWidth="1.5" />
      <rect x="20.5" y="20.5" width="7" height="7" stroke={GOLD} strokeWidth="1.8" />
      <line x1="15" y1="13.5" x2="20.5" y2="22" stroke={IVORY} strokeWidth="1" opacity="0.7" />
      <line x1="33" y1="13.5" x2="27.5" y2="22" stroke={IVORY} strokeWidth="1" opacity="0.7" />
      <line x1="15" y1="34.5" x2="20.5" y2="26" stroke={IVORY} strokeWidth="1" opacity="0.7" />
      <line x1="33" y1="34.5" x2="27.5" y2="26" stroke={IVORY} strokeWidth="1" opacity="0.7" />
    </svg>
  );
}

function Cfo() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="9" y="30" width="6" height="8" fill={IVORY} opacity="0.55" />
      <rect x="18" y="24" width="6" height="14" fill={IVORY} opacity="0.7" />
      <rect x="27" y="18" width="6" height="20" fill={IVORY} opacity="0.85" />
      <rect x="36" y="10" width="6" height="28" fill={GOLD} />
      <line x1="6" y1="39" x2="44" y2="39" stroke={IVORY} strokeWidth="1" />
      <line x1="6" y1="8" x2="6" y2="39" stroke={IVORY} strokeWidth="1" />
    </svg>
  );
}

function Sales() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="22" r="14" stroke={IVORY} strokeWidth="1.5" />
      <circle cx="22" cy="22" r="9" stroke={IVORY} strokeWidth="1" opacity="0.6" />
      <line x1="32" y1="32" x2="40" y2="40" stroke={IVORY} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="26" cy="18" r="2.2" fill={GOLD} />
    </svg>
  );
}

function Cmo() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 28 A 8 8 0 0 1 32 28" stroke={IVORY} strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M11 28 A 13 13 0 0 1 37 28" stroke={IVORY} strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.75" />
      <path d="M6 28 A 18 18 0 0 1 42 28" stroke={IVORY} strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
      <circle cx="24" cy="30" r="2.4" fill={GOLD} />
    </svg>
  );
}

const ICONS: Record<KitSlug, () => React.JSX.Element> = {
  ceo: Ceo,
  cto: Cto,
  cfo: Cfo,
  sales: Sales,
  cmo: Cmo,
};

export function KitIcon({ slug, className }: { slug: KitSlug; className?: string }) {
  const Icon = ICONS[slug];
  return (
    <div className={cn("inline-flex items-center justify-center", className)}>
      <Icon />
    </div>
  );
}
