import { Consultant as TConsultant } from "../api/consultant/Consultant";

export const CONSULTANT_TITLE_FIELD = "firstName";

export const ConsultantTitle = (record: TConsultant): string => {
  return record.firstName || record.id;
};
