import * as fs from "fs";
import path from "path";
import { FRAMEWORKS_LIST } from "@constants/global.constants";

import { IFramework, IProjectConfig } from "../models/framework-commun.model";

import { logInfo } from "@utils/logger";
import { IDatabase } from "../models/database.model";
import { IProjectCommand } from "@models/project-command.model";
import { CONFIG_INIT_NUXT } from "@nuxt/config/nuxt-config-ini.mock";
import { CONFIG_INIT_NITRO } from "@nitro/config/nitro-config-ini.mock";
import { CONFIG_INIT_ELECTRON } from "@electron/config/config-ini.mock";
import { CONFIG_INIT_NESTJS } from "@nestjs/config/nestjs-config-ini.mock";
import { CONFIG_INIT_ANGULAR } from "@angular/config/angular-config-ini.mock";
import { CONFIG_INIT_SYMFONY } from "@symfony/config/symfony-config-ini.mock";

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
    } else if (name.toLowerCase().includes("nitro")) {
      framework = CONFIG_INIT_NITRO;
    } else if (name.toLowerCase().includes("nuxt")) {
      framework = CONFIG_INIT_NUXT;
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
  logInfo(`${frameworksList}`);
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
export function createConfigProjectExisting(project: IProjectCommand) {
  logInfo(` Géneration de la configuration et du .cli-local du projet existant...`);
  // A remplacer par la lecture du .cli-local
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
