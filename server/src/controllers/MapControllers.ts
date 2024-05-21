import { inject, injectable } from "inversify";
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
import { MapServices } from "../services/MapServices";
import { mapCreationType } from "../types";
import { Response, Request } from "express";

@injectable()
@JsonController("/map")
export class MapControllers {
  constructor(@inject(MapServices) private readonly mapServices: MapServices) {}

  @Post("/")
  async createMap(@Body() map: mapCreationType, @Res() res: Response) {
    const newMap = await this.mapServices.createMap(map);
    return res.status(200).json(newMap);
  }

  @Get("/")
  async getMaps(@Req() req: Request, @Res() res: Response) {
    const filters = req.query
    const maps = await this.mapServices.getMaps(filters);
    return res.status(200).json(maps);
  }

  @Get("/:id")
  async getMap(@Param("id") id: string, @Res() res: Response) {
    const map = await this.mapServices.getMap(id);
    return res.status(200).json(map);
  }

  @Put("/:id")
  async updateMap(
    @Param("id") id: string,
    @Body() map: mapCreationType,
    @Res() res: Response
  ) {
    const updatedMap = await this.mapServices.updateMap(id, map);
    return res.status(200).json(updatedMap);
  }

  @Delete("/:id")
  async deleteMap(@Param("id") id: string, @Res() res: Response) {
    await this.mapServices.deleteMap(id);
    return res.status(200).json({ message: "Map deleted successfully" });
  }
}
