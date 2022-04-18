import { ConsultantWhereInput } from "./ConsultantWhereInput";
import { ConsultantOrderByInput } from "./ConsultantOrderByInput";

export type ConsultantFindManyArgs = {
  where?: ConsultantWhereInput;
  orderBy?: Array<ConsultantOrderByInput>;
  skip?: number;
  take?: number;
};
