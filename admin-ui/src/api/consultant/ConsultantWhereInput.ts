import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AnamnesisListRelationFilter } from "../anamnesis/AnamnesisListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FactureListRelationFilter } from "../facture/FactureListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { ScriptListRelationFilter } from "../script/ScriptListRelationFilter";

export type ConsultantWhereInput = {
  address?: StringNullableFilter;
  anamneses?: AnamnesisListRelationFilter;
  birthDate?: DateTimeNullableFilter;
  comeFrom?: StringNullableFilter;
  email?: StringNullableFilter;
  factures?: FactureListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  job?: StringNullableFilter;
  kids?: StringNullableFilter;
  lastName?: StringNullableFilter;
  married?: BooleanNullableFilter;
  phone?: StringNullableFilter;
  scripts?: ScriptListRelationFilter;
  whyTheyCome?:
    | "HypnoRelaxation"
    | "LiberationEmotionnelle"
    | "DeveloppementPersonnel"
    | "Tabac"
    | "Addiction"
    | "Douleur"
    | "TroubleSexuel"
    | "Enfant"
    | "PerformanceSportive";
};
