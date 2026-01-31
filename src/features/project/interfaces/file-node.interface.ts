import { IMemberInfo } from "@/types/commun/member-info.interface.js";

export interface IFileNode {
  name: string;
  path: string;
  type: "directory" | "file";
  extension: string;
  size: number;
  level: number;
  content: string;
  metadata?: IMemberInfo[];
  children?: IFileNode[];
}
