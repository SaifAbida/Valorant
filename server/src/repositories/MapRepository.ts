import { Map } from "../modules/mapModule";
import { MapInterface } from "../interfaces/MapInterface";
import { mapCreationType, mapDocumentType } from "../types";
import { injectable } from "inversify";

@injectable()
export class MapRepository implements MapInterface<mapDocumentType> {
  private readonly database = Map;
  async create(map: mapCreationType): Promise<mapDocumentType> {
    const newMap = new this.database(map);
    return await newMap.save();
  }
  async getOne(id: string): Promise<mapDocumentType> {
    return await this.database.findById(id);
  }
  async getAll(): Promise<mapDocumentType[]> {
    return await this.database.find();
  }
  async update(id: string, map: mapCreationType): Promise<mapDocumentType> {
    return await this.database.findByIdAndUpdate(id, map, { new: true });
  }
  async delete(id: string): Promise<boolean> {
    return await this.database.findByIdAndDelete(id);
  }
}
