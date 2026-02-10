import { IBaseService } from "../services/base-service.interface.js";
import { IPlugin } from "./plugin.interface.js";
 

export interface IPluginLoaderService extends IBaseService {
    load(pluginId: string, type: string): Promise<IPlugin>;
}