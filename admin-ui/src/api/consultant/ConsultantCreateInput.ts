import { AnamnesisCreateNestedManyWithoutConsultantsInput } from "./AnamnesisCreateNestedManyWithoutConsultantsInput";
import { FactureCreateNestedManyWithoutConsultantsInput } from "./FactureCreateNestedManyWithoutConsultantsInput";
import { ScriptCreateNestedManyWithoutConsultantsInput } from "./ScriptCreateNestedManyWithoutConsultantsInput";

export type ConsultantCreateInput = {
  address?: string | null;
  anamneses?: AnamnesisCreateNestedManyWithoutConsultantsInput;
  birthDate?: Date | null;
  comeFrom?: string | null;
  email?: string | null;
  factures?: FactureCreateNestedManyWithoutConsultantsInput;
  firstName?: string | null;
  job?: string | null;
  kids?: string | null;
  lastName?: string | null;
  married?: boolean | null;
  phone?: string | null;
  scripts?: ScriptCreateNestedManyWithoutConsultantsInput;
  whyTheyCome?:
    | "HypnoRelaxation"
    | "LiberationEmotionnelle"
    | "DeveloppementPersonnel"
    | "Tabac"
    | "Addiction"
    | "Douleur"
    | "TroubleSexuel"
    | "Enfant"
    | "PerformanceSportive"
    | null;
};
