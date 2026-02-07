import { IMemberInfo } from "./member-info.interface.js";

// Common properties for everything in the file tree
interface IBaseNode {
  name: string;
  path: string;
  extension: string;
  size: number;
  level: number;
  createdAt?: Date;
  updatedAt?: Date;
  metadata?: IMemberInfo[];
}

export interface IFile extends IBaseNode {
  type: "file";
  content?: string;
}

export interface IDirectory extends IBaseNode {
  type: "directory" | "file";
  pathInProject: string;
  gitIgnore?: boolean;
  children?: (IDirectory | IFile)[]; // Recursive structure
}

export interface IArchitecture {
  directory: IDirectory[];
}
