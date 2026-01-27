import { IMemberInfo } from "./member-info.interface.js";

export interface IFileNode {
  path: string;
  name: string;
  type: "directory" | "file";
  extension: string;
  size: number;
  level: number;
  metadata?: IMemberInfo[];
  children?: IFileNode[];
}
