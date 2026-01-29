import { IAppConfig } from "../config.interface.js";
import { IBaseService } from "./base-service.interface.js";

// src/types/config-service.interface.ts
export interface IConfigService extends IBaseService {
  serviceName: string;
  logLevel: "debug" | "info" | "warn" | "error";
  init(): Promise<void>;
  load(projectPath: string): Promise<IAppConfig>;
  defaults: IAppConfig;
  current: IAppConfig;
}
