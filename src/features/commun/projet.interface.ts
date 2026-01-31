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

export interface IArchitecture {
  directory: IDirectory[];
}

export interface IFile {
  type?: string;
  framework?: string;
  name: string;
  pathInProject?: string;
  pathTemplate?: string;
  content?: string;
}

export interface IDirectory {
  _type: string;
  name: string;
  pathInProject: string;
  gitIgnore?: boolean;
  content?: string;
  createdAt?: Date;
  updatedAt?: Date;
  children: IDirectory[];
  varsTemplate?: Record<string, any>;
}

export interface IFolder {
  name: string;
  files?: IFile[];
  subFolders?: IFolder[];
}
