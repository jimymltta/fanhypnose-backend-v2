import { ConsultantWhereUniqueInput } from "../consultant/ConsultantWhereUniqueInput";

export type FactureUpdateInput = {
  consultant?: ConsultantWhereUniqueInput | null;
  file?: string | null;
  title?: string | null;
};
