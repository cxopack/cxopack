import { ceoDoc } from "./ceo";
import { ctoDoc } from "./cto";
import { cfoDoc } from "./cfo";
import { salesDoc } from "./sales";
import { cmoDoc } from "./cmo";
import boardDoc from "./board";
// NOTE: devopsDoc exists as an internal draft — intentionally NOT imported into the public docs.
import type { KitDoc } from "./types";

export const KIT_DOCS: Record<string, KitDoc> = {
  ceo: ceoDoc,
  cto: ctoDoc,
  cfo: cfoDoc,
  sales: salesDoc,
  cmo: cmoDoc,
  board: boardDoc,
};

/** Standard 5 kits for landing + pricing (excludes Board). */
export const KIT_DOCS_LIST: KitDoc[] = [ceoDoc, ctoDoc, cfoDoc, salesDoc, cmoDoc];

/** All docs incl. Board — for docs navigation + routes. */
export const ALL_DOCS: KitDoc[] = [...KIT_DOCS_LIST, boardDoc];

export type { KitDoc } from "./types";
