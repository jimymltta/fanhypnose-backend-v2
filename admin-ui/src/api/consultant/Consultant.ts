import { Anamnesis } from "../anamnesis/Anamnesis";
import { Facture } from "../facture/Facture";
import { Script } from "../script/Script";

export type Consultant = {
  address: string | null;
  anamneses?: Array<Anamnesis>;
  birthDate: Date | null;
  comeFrom: string | null;
  createdAt: Date;
  email: string | null;
  factures?: Array<Facture>;
  firstName: string | null;
  id: string;
  job: string | null;
  kids: string | null;
  lastName: string | null;
  married: boolean | null;
  phone: string | null;
  scripts?: Array<Script>;
  updatedAt: Date;
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
