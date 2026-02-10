import { IPlugin } from "@/types/plugins/plugin.interface.js";
 
import { BaseService } from "../base-service.service.js";
import { IPluginLoaderService } from "@/types/plugins/plugin-loader-service.interface.js";

export class PluginLoaderService extends BaseService implements IPluginLoaderService {
    readonly serviceName = "PluginLoaderService";
    
    async init(): Promise<void> {
        return Promise.resolve();
    }

    async load(pluginId: string, type: string): Promise<IPlugin> {
        throw new Error("Method not implemented.");
    }
}