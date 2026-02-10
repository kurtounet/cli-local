import { IProjectConfig } from "@/features/commun/projet.interface.js";
import { IGetEntityJson } from "@/features/parserMdj/models/entity-json.model.js";

import { IPlugin } from "../plugins/plugin.interface.js";
import { ITemplateContext } from "../plugins/plugin-execution-context.interface.js";
import { ISDKContext } from "../plugins/sdk-context.interface.js";
import { IBaseService } from "./base-service.interface.js";

export interface IPluginService extends IBaseService {
  readonly serviceName: string;
  init(): Promise<void>;
  load(pluginId: string, path: string): Promise<any>;
  list(): Promise<IPlugin[]>;
  listByType(type: string): Promise<IPlugin[]>;
  initPlugins(pluginId: string, type: string): Promise<void>;
  newPlugin(pluginId: string, type: string): Promise<any>;
  delete(pluginId: string, type: string): Promise<void>;
  buildTemplateContext(
    configProjectData: IProjectConfig,
    entitiesData: IGetEntityJson,
  ): Promise<ITemplateContext>;
  getSDKContext(): ISDKContext;
  // plugins: Map<string, unknown>;
  // registerPlugin(PluginClass: unknown): Promise<void>;
  // run(pluginName: string, args: string[]): Promise<unknown>;
  // log(msg: string): void;
}
