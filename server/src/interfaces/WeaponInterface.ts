import { weaponCreationType } from "../types";

export interface WeaponInterface<weaponDocumentType> {
  create(weapon: weaponCreationType): Promise<weaponDocumentType>;
  getOne(id: string): Promise<weaponDocumentType | null>;
  getAll(): Promise<weaponDocumentType[]>;
  update(
    id: string,
    weapon: weaponCreationType
  ): Promise<weaponDocumentType | null>;
  delete(id: string): Promise<boolean | null>;
}
