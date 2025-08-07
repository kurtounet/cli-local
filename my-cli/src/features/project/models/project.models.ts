import { IDatabase } from "@frameworks-models/database.model";
import { IFramework } from "@frameworks-models/framework-commun.model";

 

export interface IProjectConfig {
  projectName: string;
  description?: string;
  path: string;
  starUml?: string;
  version?: string;
  frameWorks: IFramework[];
  databases?: IDatabase[];

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
  pathInProject?: string;
  gitIgnore: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  children: IDirectory[];
}

export interface IFolder {
  name: string;
  files?: IFile[];
  subFolders?: IFolder[];
}


