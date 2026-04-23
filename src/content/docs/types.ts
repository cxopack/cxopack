import type { KitSlug } from "@/config/kits";

export type McpServer = {
  name: string;
  why: string;
  docsUrl: string;
  install?: string;
};

export type CadenceItem = {
  when: string;
  duration: string;
  action: string;
  skill?: string;
};

export type Cadence = {
  daily?: CadenceItem[];
  weekly: CadenceItem[];
  monthly: CadenceItem[];
  adhoc: CadenceItem[];
};

export type SkillDoc = {
  name: string;
  type: "skill" | "subagent" | "command";
  trigger: string;
  when: string;
  steps: string[];
  example: { input: string; output: string };
  pitfalls: string[];
};

export type PlaybookStep = {
  title: string;
  when: string;
  asset: string;
  assetType: "skill" | "subagent" | "command";
  input: string;
  output: string;
  time: string;
};

export type KitDoc = {
  slug: KitSlug;
  title: string;
  tagline: string;
  heroSentence: string;
  review: {
    intro: string;
    questions: string[];
    brainstormPrompts: string[];
  };
  mcps: McpServer[];
  cadence: Cadence;
  skills: SkillDoc[];
  playbook: PlaybookStep[];
  firstWin: string;
};
