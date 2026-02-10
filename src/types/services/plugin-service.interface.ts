import { IProjectConfig } from "@/features/commun/projet.interface.js";
import { IGetEntityJson } from "@/features/parserMdj/models/entity-json.model.js";

import { IBagData } from "../commun/data-bag.interface.js";
import { IPlugin } from "../plugin.interface.js";
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
  buildBagData(configProjectData: IProjectConfig, entitiesData: IGetEntityJson): Promise<IBagData>;
  // plugins: Map<string, unknown>;
  // registerPlugin(PluginClass: unknown): Promise<void>;
  // run(pluginName: string, args: string[]): Promise<unknown>;
  // log(msg: string): void;
}
