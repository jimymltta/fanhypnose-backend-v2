import { Consultant } from "../consultant/Consultant";

export type Facture = {
  consultant?: Consultant | null;
  createdAt: Date;
  file: string | null;
  id: string;
  title: string | null;
  updatedAt: Date;
};
