import { ConsultantWhereUniqueInput } from "../consultant/ConsultantWhereUniqueInput";

export type AnamnesisCreateInput = {
  consultant?: ConsultantWhereUniqueInput | null;
  text?: string | null;
  titre?: string | null;
};
