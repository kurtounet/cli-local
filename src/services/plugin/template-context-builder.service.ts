import { IPluginManifest } from "@/types/plugins/plugin.interface.js";
 
import { BaseService } from "../base-service.service.js";
import { ITemplateContextBuilderService } from "@/types/plugins/template-context-builder-service.interface.js";
import { ITemplateContext } from "@/types/plugins/plugin-execution-context.interface.js";

export class TemplateContextBuilderService extends BaseService implements ITemplateContextBuilderService {
    readonly serviceName = "TemplateContextBuilderService";
    
    async init(): Promise<void> {
        return Promise.resolve();
    }

    async build(manifest: IPluginManifest): Promise<ITemplateContext> {
        throw new Error("Method not implemented.");
    }
}