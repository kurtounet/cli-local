import { IConfigDatabase } from "./database.interface.js";
import { IConfigFramework } from "./framework.interface.js";

export interface IProjectConfig {
  projectName: string;
  description?: string;
  path: string;
  starUml?: string;
  version?: string;
  mode?: string;
  frameworks: IConfigFramework[];
  databases?: IConfigDatabase[];
}
