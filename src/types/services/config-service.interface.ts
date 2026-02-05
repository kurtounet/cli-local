import { IAppConfig } from "../config.interface.js";
import { IBaseService } from "./base-service.interface.js";

export interface IConfigService extends IBaseService {
  serviceName: string;
  logLevel: "debug" | "info" | "warn" | "error";
  init(): Promise<void>;
  load(projectPath: string): Promise<IAppConfig>;
  initConfigFile(projectPath: string, dataFrom?: IAppConfig): Promise<IAppConfig>;
  defaults: IAppConfig;
  current: IAppConfig;
}
