import { Facture as TFacture } from "../api/facture/Facture";

export const FACTURE_TITLE_FIELD = "title";

export const FactureTitle = (record: TFacture): string => {
  return record.title || record.id;
};
