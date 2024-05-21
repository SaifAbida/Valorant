import { MapRepository } from "../repositories/MapRepository";
import { inject, injectable } from "inversify";
import { mapCreationType, mapDocumentType } from "../types";
import { NotFoundError } from "routing-controllers";

@injectable()
export class MapServices {
  constructor(
    @inject(MapRepository) private readonly mapRepository: MapRepository
  ) {}

  async createMap(map: mapCreationType) {
    return await this.mapRepository.create(map);
  }

  async getMaps(fitlers: Partial<mapDocumentType> = {}) {
    return await this.mapRepository.getAll(fitlers);
  }

  async getMap(id: string) {
    const map = await this.mapRepository.getOne(id);
    if (!map) {
      throw new NotFoundError("Map not found");
    }
    return map;
  }

  async updateMap(id: string, map: mapCreationType) {
    const updatedMap = await this.mapRepository.update(id, map);
    if (!updatedMap) {
      throw new NotFoundError("Map not found");
    }
    return updatedMap;
  }

  async deleteMap(id: string) {
    const deletedMap = await this.mapRepository.delete(id);
    if (!deletedMap) {
      throw new NotFoundError("Map not found");
    }
    return true;
  }
}
