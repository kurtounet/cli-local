import { IDataBase } from "./commun/database.interface.js";
import { IFileNode } from "./commun/file-node.interface.js";

export interface IOutputTreeConfig {
  type: "json" | "md" | "yaml";
  pathOut: string;
  saveOnExecute: boolean;
}
export interface IAppConfig {
  cliFolder: IFileNode;
  databases: IDataBase[];
  doc: {
    pathIn: string;
    pathOut: string;
    saveOnExecute: boolean;
  };
  tree: {
    exclude: string[];
    pathIn: string;
    pathOut: string;
    analysis: {
      enabled: boolean;
      extensions: string[];
      save: boolean;
      maxLevel: number;
    };
    output: IOutputTreeConfig[];
  };
}
