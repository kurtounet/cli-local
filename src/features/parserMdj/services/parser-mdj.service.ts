import { IAppContext } from "@/types/context.interface.js";
import { IEntityJson } from "../models/entity-json.model.js";

export class ParserMDJService {
  readonly serviceName = "ParserMDJService";

  constructor(protected cli: IAppContext) {}

  init(): Promise<void> {
    return Promise.resolve();
  }
  async loadFile(path: string): Promise<IEntityJson | null> {
    return null;
  }
  async parseMdjToJson(path: string): Promise<IEntityJson | null> {
    return null;
  }
  async getEntity(path: string): Promise<IEntityJson | null> {
    return null;
  }
  async getColums(path: string): Promise<IEntityJson | null> {
    return null;
  }
  async getRelations(path: string): Promise<IEntityJson | null> {
    return null;
  }
}
