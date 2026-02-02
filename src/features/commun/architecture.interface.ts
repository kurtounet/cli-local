import { IMemberInfo } from "./member-info.interface.js";

export interface IFileNode {
  type: "directory" | "file";
  name: string;
  path: string;
  extension: string;
  size: number;
  level: number;
  content: string;
  metadata?: IMemberInfo[];
  children?: IFileNode[];
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
