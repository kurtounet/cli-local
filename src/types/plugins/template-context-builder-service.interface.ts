import { IBaseService } from "../services/base-service.interface.js";
import { ITemplateContext } from "./plugin-execution-context.interface.js";
import { IPluginManifest } from "./plugin.interface.js";

export interface ITemplateContextBuilderService extends IBaseService {
    build(manifest: IPluginManifest): Promise<ITemplateContext>;
}       