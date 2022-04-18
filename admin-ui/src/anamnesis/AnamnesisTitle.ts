import { Anamnesis as TAnamnesis } from "../api/anamnesis/Anamnesis";

export const ANAMNESIS_TITLE_FIELD = "titre";

export const AnamnesisTitle = (record: TAnamnesis): string => {
  return record.titre || record.id;
};
