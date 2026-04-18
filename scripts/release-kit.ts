/**
 * Release a kit by pushing kits/<slug>/ to its private GitHub repo.
 *
 * Usage: pnpm tsx scripts/release-kit.ts <slug> [--message "v0.x.y — notes"]
 */

import { execSync } from "node:child_process";
import { existsSync, mkdtempSync, rmSync, cpSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const SLUGS = ["ceo", "cto", "cfo", "sales", "cmo"] as const;
type Slug = (typeof SLUGS)[number];

function sh(cmd: string, cwd?: string) {
  return execSync(cmd, { cwd, stdio: "inherit", env: process.env });
}

function main() {
  const [slug, ...rest] = process.argv.slice(2);
  if (!slug || !SLUGS.includes(slug as Slug)) {
    console.error(`Usage: release-kit <${SLUGS.join("|")}>`);
    process.exit(1);
  }
  const messageIdx = rest.indexOf("--message");
  const message =
    messageIdx >= 0 ? rest[messageIdx + 1] : `release ${new Date().toISOString().slice(0, 10)}`;

  const org = process.env.GITHUB_ORG ?? "cxopack";
  const repo = `cxopack-${slug}`;
  const src = join(process.cwd(), "kits", slug);
  if (!existsSync(src)) {
    console.error(`Source folder missing: ${src}`);
    process.exit(1);
  }

  const work = mkdtempSync(join(tmpdir(), `cxopack-${slug}-`));
  try {
    console.log(`→ cloning ${org}/${repo}`);
    sh(`git clone --depth 1 git@github.com:${org}/${repo}.git .`, work);

    console.log(`→ syncing kits/${slug}/ → ${repo}`);
    cpSync(src, work, { recursive: true, force: true });

    console.log(`→ committing & pushing`);
    sh(`git add -A`, work);
    try {
      sh(`git diff --cached --quiet`, work);
      console.log("nothing to release");
      return;
    } catch {
      // has staged changes — proceed
    }
    sh(`git commit -m "${message}"`, work);
    sh(`git push`, work);
    console.log(`✅ released ${repo}`);
  } finally {
    rmSync(work, { recursive: true, force: true });
  }
}

main();
