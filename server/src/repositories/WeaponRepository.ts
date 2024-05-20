import { WeaponInterface } from "../interfaces/WeaponInterface";
import { Weapon } from "../modules/weaponModule";
import { weaponDocumentType, weaponCreationType } from "../types";
import { injectable } from "inversify";

@injectable()
export class WeaponRepository implements WeaponInterface<weaponDocumentType> {
  private readonly database = Weapon;
  async create(weapon: weaponCreationType): Promise<weaponDocumentType> {
    const newAgent = new this.database(weapon);
    return await newAgent.save();
  }
  async getOne(id: string): Promise<weaponDocumentType> {
    return await this.database.findById(id);
  }
  async getAll(): Promise<weaponDocumentType[]> {
    return await this.database.find();
  }
  async update(
    id: string,
    weapon: weaponCreationType
  ): Promise<weaponDocumentType> {
    return await this.database.findByIdAndUpdate(id, weapon, { new: true });
  }
  async delete(id: string): Promise<boolean> {
    return await this.database.findByIdAndDelete(id);
  }
}
