import { IPluginManifest } from "../plugin.interface.js";
import { IBagData } from "./data-bag.interface.js";

export interface IPluginData {
  manifest: IPluginManifest;
  pluginDir: string;
  data: IBagData;
}
