import { ConsultantWhereUniqueInput } from "../consultant/ConsultantWhereUniqueInput";

export type ScriptUpdateInput = {
  consultant?: ConsultantWhereUniqueInput | null;
  text?: string | null;
  title?: string | null;
};
