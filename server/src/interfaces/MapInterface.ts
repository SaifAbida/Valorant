import { mapCreationType } from "../types";

export interface MapInterface<mapDocumentType> {
  create(map: mapCreationType): Promise<mapDocumentType>;
  getOne(id: string): Promise<mapDocumentType | null>;
  getAll(): Promise<mapDocumentType[]>;
  update(id: string, map: mapCreationType): Promise<mapDocumentType | null>;
  delete(id: string): Promise<boolean | null>;
}
