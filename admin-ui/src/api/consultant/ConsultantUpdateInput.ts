import { AnamnesisUpdateManyWithoutConsultantsInput } from "./AnamnesisUpdateManyWithoutConsultantsInput";
import { FactureUpdateManyWithoutConsultantsInput } from "./FactureUpdateManyWithoutConsultantsInput";
import { ScriptUpdateManyWithoutConsultantsInput } from "./ScriptUpdateManyWithoutConsultantsInput";

export type ConsultantUpdateInput = {
  address?: string | null;
  anamneses?: AnamnesisUpdateManyWithoutConsultantsInput;
  birthDate?: Date | null;
  comeFrom?: string | null;
  email?: string | null;
  factures?: FactureUpdateManyWithoutConsultantsInput;
  firstName?: string | null;
  job?: string | null;
  kids?: string | null;
  lastName?: string | null;
  married?: boolean | null;
  phone?: string | null;
  scripts?: ScriptUpdateManyWithoutConsultantsInput;
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
