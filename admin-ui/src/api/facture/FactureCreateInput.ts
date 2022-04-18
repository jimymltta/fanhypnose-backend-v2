import { ConsultantWhereUniqueInput } from "../consultant/ConsultantWhereUniqueInput";

export type FactureCreateInput = {
  consultant?: ConsultantWhereUniqueInput | null;
  file?: string | null;
  title?: string | null;
};
