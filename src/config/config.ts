import path from "node:path";

import { IAppConfig } from "@/types/config.interface.js";

export const defaultconfig: IAppConfig = {
  cliFolder: {
    name: ".cli-local",
    path: path.join(process.cwd(), "/.cli-local"),
    type: "directory",
    size: 0,
    level: 0,
    content: "",
    extension: "",
    children: [
      {
        name: "mclp",
        path: path.join(process.cwd(), "/.cli-local/mclp"),
        type: "file",
        size: 0,
        level: 1,
        content: "",
        extension: "",
      },
    ],
  },
  databases: [
    {
      type: "mysql",
      host: "localhost",
      port: 3306,
      user: "root",
      password: "",
      database: "task_backup",
    },
    {
      type: "sqlite",
      host: "localhost",
      port: 3306,
      user: "root",
      password: "",
      database: "task_backup",
    },
  ],
  tree: {
    exclude: ["node_modules", ".git", "dist", ".vscode", ".doc"],
    pathIn: process.cwd(),
    pathOut: "./tree",
    analysis: {
      enabled: false,
      extensions: [".ts", ".js"],
      save: true,
      maxLevel: 32,
    },
    output: [
      {
        type: "json",
        pathOut: "./tree",
        saveOnExecute: true,
      },
      {
        type: "md",
        pathOut: "./tree",
        saveOnExecute: true,
      },
      {
        type: "yaml",
        pathOut: "./tree",
        saveOnExecute: true,
      },
    ],
  },
};
