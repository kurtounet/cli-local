import { ITemplateContext } from "./plugin-execution-context.interface.js";
import { ISDKContext } from "./sdk-context.interface.js";

export interface IPluginExecutionContext {
  manifest: IPluginManifest;
  pluginDir: string;
  templateContext: ITemplateContext;
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
  version?: string;
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
  execute(args: any, data: any): Promise<void>;
}

export interface IPluginModule {
  default: new (sdk: ISDKContext) => IPluginService;
}
