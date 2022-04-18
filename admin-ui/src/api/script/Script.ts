import { Consultant } from "../consultant/Consultant";

export type Script = {
  consultant?: Consultant | null;
  createdAt: Date;
  id: string;
  text: string | null;
  title: string | null;
  updatedAt: Date;
};
