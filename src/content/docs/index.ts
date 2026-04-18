import { ceoDoc } from "./ceo";
import { ctoDoc } from "./cto";
import { cfoDoc } from "./cfo";
import { salesDoc } from "./sales";
import { cmoDoc } from "./cmo";
import type { KitDoc } from "./types";

export const KIT_DOCS: Record<string, KitDoc> = {
  ceo: ceoDoc,
  cto: ctoDoc,
  cfo: cfoDoc,
  sales: salesDoc,
  cmo: cmoDoc,
};

export const KIT_DOCS_LIST: KitDoc[] = [ceoDoc, ctoDoc, cfoDoc, salesDoc, cmoDoc];

export type { KitDoc } from "./types";
