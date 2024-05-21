import { inject, injectable } from "inversify";
import { WeaponServices } from "../services/WeaponServices";
import { weaponCreationType } from "../types";
import {
  Body,
  Delete,
  Get,
  JsonController,
  Param,
  Post,
  Put,
  Req,
  Res,
} from "routing-controllers";
import { Response, Request } from "express";

@injectable()
@JsonController("/weapon")
export class WeaponControllers {
  constructor(
    @inject(WeaponServices) private readonly weaponServices: WeaponServices
  ) {}

  @Post("/")
  async createWeapon(@Body() weapon: weaponCreationType, @Res() res: Response) {
    const newWeapon = await this.weaponServices.createWeapon(weapon);
    return res.status(200).json(newWeapon);
  }

  @Get("/")
  async getWeapons(@Req() req: Request, @Res() res: Response) {
    const filters = req.query;
    const weapons = await this.weaponServices.getWeapons(filters);
    return res.status(200).json(weapons);
  }

  @Get("/:id")
  async getWeapon(@Param("id") id: string, @Res() res: Response) {
    const weapon = await this.weaponServices.getWeapon(id);
    return res.status(200).json(weapon);
  }

  @Put("/:id")
  async updateWeapon(
    @Body() weapon: weaponCreationType,
    @Param("id") id: string,
    @Res() res: Response
  ) {
    const updatedWeapon = await this.weaponServices.updateWeapon(id, weapon);
    return res.status(200).json(updatedWeapon);
  }

  @Delete("/:id")
  async deleteWeapon(@Param("id") id: string, @Res() res: Response) {
    await this.weaponServices.deleteWeapon(id);
    return res.status(200).json({ message: "Weapon deleted successfully" });
  }
}
