import { ConsultantWhereUniqueInput } from "../consultant/ConsultantWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AnamnesisWhereInput = {
  consultant?: ConsultantWhereUniqueInput;
  id?: StringFilter;
  text?: StringNullableFilter;
  titre?: StringNullableFilter;
};
