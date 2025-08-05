import * as fs from "fs";
import path from "path";
// import {
//     IDatabase,
//     IFramework,
//     IProjectCommand,
//     IProjectConfig,
// } from '@ frameworks/_global/interface/framework-commun.model';
import { FRAMEWORKS_LIST } from "@constants/global.constants";

import {
  IDatabase,
  IFramework,
  IProjectConfig,
} from "../interface/framework-commun.model";
import { IProjectCommand } from "@features/project/interfaces/project.models";
import { CONFIG_INIT_ELECTRON } from "@features/frameworks/electron/config/config-ini.mock";
import { CONFIG_INIT_NESTJS } from "@features/frameworks/nestjs/config/nestjs-config-ini.mock";
import { CONFIG_INIT_ANGULAR } from "@features/frameworks/angular/config/angular-config-ini.mock";
import { CONFIG_INIT_SYMFONY } from "@features/frameworks/symfony/config/symfony-config-ini.mock";

// const BASE_TEMPLATES = path.resolve(__dirname, '../../frameworks');

export function getConfigFrameworkMock(name: string) {
  let framework!: IFramework;

  if (FRAMEWORKS_LIST.includes(name.toLowerCase())) {
    if (name.toLowerCase().includes("angular")) {
      framework = CONFIG_INIT_ANGULAR;
    } else if (name.toLowerCase().includes("nestjs")) {
      framework = CONFIG_INIT_NESTJS;
    } else if (name.toLowerCase().includes("symfony")) {
      framework = CONFIG_INIT_SYMFONY;
    } else if (name.toLowerCase().includes("electron")) {
      framework = CONFIG_INIT_ELECTRON;
    }
  }
  return framework;
}

export function getConfigDatabaseMock(name: string) {
  const FrameworksList = ["mysql", "postgres", "mongodb", "sqlite"];
  let pathFile = "";
  let database!: IDatabase;

  if (FrameworksList.includes(name.toLowerCase())) {
    if (name.toLowerCase().includes("mysql")) {
      database = {
        type: "mysql",
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "my_database",
      };
    } else if (name.toLowerCase().includes("postgres")) {
      database = {
        type: "postgres",
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "my_database",
      };
    } else if (name.toLowerCase().includes("mongodb")) {
      database = {
        type: "mongodb",
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "my_database",
      };
    } else if (name.toLowerCase().includes("sqlite")) {
      database = {
        type: "sqlite",
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "my_database",
      };
    }
  }
  return database;
}

export function getConfigFrameworks(
  frameWorks: Array<string>,
): Array<IFramework> {
  let configFramework: Array<IFramework> = [];
  frameWorks.forEach((element) => {
    if (element != "no") {
      let config = getConfigFrameworkMock(element);
      if (config != null) {
        configFramework.push(config);
      }
    }
  });

  return configFramework;
}

export function getConfigDatabases(database: Array<string>): Array<IDatabase> {
  let configDatabase: Array<IDatabase> = [];
  database.forEach((element) => {
    let config = getConfigDatabaseMock(element);
    if (config != null) {
      configDatabase.push(config);
    }
  });
  return configDatabase;
}

/**
 * Creates a project configuration object based on the provided project command.
 * @param project The project command object.
 * @returns The project configuration object.
 */
export function createConfigProject(project: IProjectCommand) {
  const frameworksList = [...project.frontends, ...project.backends];
  const config: IProjectConfig = {
    projectName: project.name,
    path: project.path,
    starUml: project.starUml,
    version: "1.0.0",
    frameWorks: getConfigFrameworks(frameworksList),
    databases: getConfigDatabases(project.databases),
  };
  return config;
}
