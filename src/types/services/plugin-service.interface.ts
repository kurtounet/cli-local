import { ISDKContext } from "../commun/sdk-context.interface.js";
import { IBaseService } from "./base-service.interface.js";

export interface IPluginService extends IBaseService {
  readonly serviceName: string;
  init(): Promise<void>;
  load(pluginId: string, path: string): Promise<any>;
  getSDKContext(): ISDKContext;
  // plugins: Map<string, unknown>;
  // registerPlugin(PluginClass: unknown): Promise<void>;
  // run(pluginName: string, args: string[]): Promise<unknown>;
  // log(msg: string): void;
}
