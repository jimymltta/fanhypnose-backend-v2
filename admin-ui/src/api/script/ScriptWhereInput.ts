import { ConsultantWhereUniqueInput } from "../consultant/ConsultantWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ScriptWhereInput = {
  consultant?: ConsultantWhereUniqueInput;
  id?: StringFilter;
  text?: StringNullableFilter;
  title?: StringNullableFilter;
};
