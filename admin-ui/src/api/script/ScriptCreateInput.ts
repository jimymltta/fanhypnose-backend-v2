import { ConsultantWhereUniqueInput } from "../consultant/ConsultantWhereUniqueInput";

export type ScriptCreateInput = {
  consultant?: ConsultantWhereUniqueInput | null;
  text?: string | null;
  title?: string | null;
};
