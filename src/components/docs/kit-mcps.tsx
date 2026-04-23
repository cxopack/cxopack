import { ExternalLink } from "lucide-react";
import type { McpServer } from "@/content/docs/types";

export function KitMcps({ mcps }: { mcps: McpServer[] }) {
  return (
    <ul className="mt-4 divide-y divide-[var(--color-border)] rounded-xl border border-[var(--color-border)]">
      {mcps.map((mcp) => (
        <li key={mcp.name} className="flex flex-wrap items-center gap-x-4 gap-y-1 px-4 py-3">
          <span className="text-sm font-semibold text-[var(--color-fg)]">{mcp.name}</span>
          <span className="min-w-0 flex-1 text-sm text-[var(--color-fg-muted)]">{mcp.why}</span>
          <a
            href={mcp.docsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1 text-xs text-[var(--color-fg-dim)] hover:text-[var(--color-brand)]"
          >
            Docs <ExternalLink className="h-3 w-3" />
          </a>
        </li>
      ))}
    </ul>
  );
}
