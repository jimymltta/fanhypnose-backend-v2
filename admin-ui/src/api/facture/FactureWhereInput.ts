import { ConsultantWhereUniqueInput } from "../consultant/ConsultantWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FactureWhereInput = {
  consultant?: ConsultantWhereUniqueInput;
  file?: StringNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
