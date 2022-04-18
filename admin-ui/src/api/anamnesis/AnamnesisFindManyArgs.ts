import { AnamnesisWhereInput } from "./AnamnesisWhereInput";
import { AnamnesisOrderByInput } from "./AnamnesisOrderByInput";

export type AnamnesisFindManyArgs = {
  where?: AnamnesisWhereInput;
  orderBy?: Array<AnamnesisOrderByInput>;
  skip?: number;
  take?: number;
};
