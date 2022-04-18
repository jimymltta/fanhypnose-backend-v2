import { ScriptWhereInput } from "./ScriptWhereInput";
import { ScriptOrderByInput } from "./ScriptOrderByInput";

export type ScriptFindManyArgs = {
  where?: ScriptWhereInput;
  orderBy?: Array<ScriptOrderByInput>;
  skip?: number;
  take?: number;
};
