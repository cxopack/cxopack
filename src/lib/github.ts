import { Octokit } from "@octokit/rest";
import { KITS, type KitSlug } from "@/config/kits";

let _octokit: Octokit | null = null;
function getOctokit(): Octokit {
  if (_octokit) return _octokit;
  const auth = process.env.GITHUB_APP_TOKEN;
  if (!auth) {
    throw new Error("GITHUB_APP_TOKEN is not set — cannot call GitHub API.");
  }
  _octokit = new Octokit({ auth });
  return _octokit;
}

const ORG = () => process.env.GITHUB_ORG ?? "cxopack";

function repoForKit(slug: KitSlug): string {
  const kit = KITS.find((k) => k.slug === slug);
  if (!kit) throw new Error(`Unknown kit slug: ${slug}`);
  return process.env[kit.repoEnvKey] ?? `cxopack-${slug}`;
}

export async function inviteToKitRepos(
  githubUsername: string,
  kitSlugs: KitSlug[]
): Promise<{ repo: string; ok: boolean; error?: string }[]> {
  const octokit = getOctokit();
  const owner = ORG();
  const results = await Promise.all(
    kitSlugs.map(async (slug) => {
      const repo = repoForKit(slug);
      try {
        await octokit.repos.addCollaborator({
          owner,
          repo,
          username: githubUsername,
          permission: "pull",
        });
        return { repo, ok: true };
      } catch (err) {
        const message = err instanceof Error ? err.message : "unknown error";
        return { repo, ok: false, error: message };
      }
    })
  );
  return results;
}

export async function getGithubUser(username: string) {
  try {
    const { data } = await getOctokit().users.getByUsername({ username });
    return data;
  } catch {
    return null;
  }
}
