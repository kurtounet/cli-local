export interface IPluginService {
  execute(args: any, data: any): Promise<void>;
}
export interface IPlugin {
  type: string;
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
  blueprints?: any[];
}

export interface IPluginBlueprint {
  type: string;
  target: string;
  prefix?: string;
  suffix?: string;
  template: string;
  description?: string;
}
