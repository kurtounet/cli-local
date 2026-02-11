import { IBaseService } from "../services/base-service.interface.js";
import { IPluginManifest } from "./plugin.interface.js";

export interface IPluginValidatorService extends IBaseService {
    validate(manifest: IPluginManifest): Promise<boolean>;
}   