import { ISDKContext } from "./commun/sdk-context.interface.js";

export interface IPluginService {
  execute(args: Record<string, unknown>, data: Record<string, unknown>): Promise<void>;
}
export interface IPlugin {
  type: string;
  description?: string;
  id: string;
  name: string;
  pluginDir: string;
  templateDir?: string;
}

export interface IPluginManifest {
  id: string;
  name: string;
  templateDir?: string;
  service: string;
  description?: string;
  blueprints?: IPluginBlueprint[];
}

export interface IPluginBlueprint {
  type: string;
  target: string;
  prefix?: string;
  suffix?: string;
  template: string;
  description?: string;
}
export interface IPackPlugin {
  instance: IPluginService;
  manifest: IPluginManifest;
  pluginDir: string;
}

export interface IPluginsIndexJson {
  plugins: Record<string, IPlugin[]>;
}

export interface IPluginService {
  execute(args: Record<string, unknown>, data: Record<string, unknown>): Promise<void>;
}
export interface IPluginModule {
  default: new (sdk: ISDKContext) => IPluginService;
}
