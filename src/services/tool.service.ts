import { BaseService } from "./base-service.service.js";
import { IToolService } from "@/types/tool-service.interface.js";

export class ToolService extends BaseService implements IToolService {
  public rename(path: string[], type: string): string {
    return `tree de ${path} ${type}`;
  }
}
