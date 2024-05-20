import { WeaponRepository } from "../repositories/WeaponRepository";
import { inject, injectable } from "inversify";
import { NotFoundError } from "routing-controllers";
import { weaponCreationType } from "../types";

@injectable()
export class WeaponServices {
  constructor(
    @inject(WeaponRepository)
    private readonly weaponRepository: WeaponRepository
  ) {}

  async createWeapon(weapon: weaponCreationType) {
    return await this.weaponRepository.create(weapon);
  }

  async getWeapons() {
    return await this.weaponRepository.getAll();
  }

  async getWeapon(id: string) {
    const weapon = await this.weaponRepository.getOne(id);
    if (!weapon) {
      throw new NotFoundError("Weapon not found");
    }
    return weapon;
  }

  async updateWeapon(id: string, weapon: weaponCreationType) {
    const updatedWeapon = await this.weaponRepository.update(id, weapon);
    if (!updatedWeapon) {
      throw new NotFoundError("Weapon not found");
    }
    return updatedWeapon;
  }

  async deleteWeapon(id: string) {
    const deletedWeapon = await this.weaponRepository.delete(id);
    if (!deletedWeapon) {
      throw new NotFoundError("Weapon not found");
    }
    return true;
  }
}
