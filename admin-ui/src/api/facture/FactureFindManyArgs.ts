import { FactureWhereInput } from "./FactureWhereInput";
import { FactureOrderByInput } from "./FactureOrderByInput";

export type FactureFindManyArgs = {
  where?: FactureWhereInput;
  orderBy?: Array<FactureOrderByInput>;
  skip?: number;
  take?: number;
};
