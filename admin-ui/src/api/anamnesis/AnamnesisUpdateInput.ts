import { ConsultantWhereUniqueInput } from "../consultant/ConsultantWhereUniqueInput";

export type AnamnesisUpdateInput = {
  consultant?: ConsultantWhereUniqueInput | null;
  text?: string | null;
  titre?: string | null;
};
