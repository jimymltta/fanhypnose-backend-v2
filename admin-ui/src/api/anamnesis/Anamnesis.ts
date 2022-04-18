import { Consultant } from "../consultant/Consultant";

export type Anamnesis = {
  consultant?: Consultant | null;
  createdAt: Date;
  id: string;
  text: string | null;
  titre: string | null;
  updatedAt: Date;
};
