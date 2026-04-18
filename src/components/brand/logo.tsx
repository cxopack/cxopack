import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={cn("shrink-0", className)}
    >
      <rect x="5" y="7" width="20" height="2.4" rx="1" fill="var(--color-ivory)" />
      <rect x="5" y="12" width="15" height="2.4" rx="1" fill="var(--color-ivory)" />
      <rect x="5" y="17" width="22" height="2.6" rx="1" fill="var(--color-gold-500)" />
      <rect x="5" y="22" width="17" height="2.4" rx="1" fill="var(--color-ivory)" />
    </svg>
  );
}

export function Logo({
  className,
  size = "md",
  markOnly = false,
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
  markOnly?: boolean;
}) {
  const markSize = size === "sm" ? "h-5 w-5" : size === "lg" ? "h-9 w-9" : "h-7 w-7";
  const textSize = size === "sm" ? "text-sm" : size === "lg" ? "text-2xl" : "text-base";
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <LogoMark className={markSize} />
      {!markOnly && (
        <span className={cn("font-bold tracking-tight leading-none", textSize)}>
          <span className="text-[var(--color-fg)]">Cx</span>
          <span className="text-[var(--color-gold-500)]">O</span>
          <span className="text-[var(--color-fg)]">Pack</span>
        </span>
      )}
    </div>
  );
}
