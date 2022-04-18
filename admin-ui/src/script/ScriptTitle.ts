import { Script as TScript } from "../api/script/Script";

export const SCRIPT_TITLE_FIELD = "title";

export const ScriptTitle = (record: TScript): string => {
  return record.title || record.id;
};
