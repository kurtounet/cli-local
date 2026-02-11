import { IPluginManifest } from "@/types/plugins/plugin.interface.js";
 
import { BaseService } from "../base-service.service.js";
import { IPluginValidatorService } from "@/types/plugins/plugin-validator-service.interface.js";

export class PluginValidatorService extends BaseService implements IPluginValidatorService {
    readonly serviceName = "PluginValidatorService";
    
    async init(): Promise<void> {
        return Promise.resolve();
    }

    async validate(manifest: IPluginManifest): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}