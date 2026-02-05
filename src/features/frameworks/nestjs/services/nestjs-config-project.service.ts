import { IFramework } from "@frameworks-models/framework-commun.model";
import { buildAndsaveFile } from "@utils/file-utils";
import * as fs from "fs";
import * as path from "path";

import { nestjsAppModuleTemplate } from "../templates/config/nestjs-app-module-template";
import { nestjsEnvironmentsTemplate } from "../templates/config/nestjs-environments-template";
import { nestjsMainTemplate } from "../templates/config/nestjs-main-template";
import { nestjsDatabaseSourceTemplate } from "../templates/database/nestjs-data-source-template";

/**
 *
 * @param projectPath
 */
export function createConfigProjectNestjs(projectPath: string) {
  // logInfo('Config du projet');
  // databaseConfigNestjs(projectPath);
  // appModuleNestjs(projectPath);
  // mainFileNestjs(projectPath);
}
/**
 *
 * @param projectPath
 * @param thisProjectConfig
 */
export function databaseConfigNestjs(
  projectPath: string,
  thisProjectConfig: IFramework,
) {
  const rootPath = path.join(projectPath, "src", "config");

  buildAndsaveFile(
    rootPath + `/database.config.ts`,
    nestjsDatabaseSourceTemplate(thisProjectConfig),
  );
}
/**
 *
 * @param projectPath
 * @param entities
 */
export function appModuleNestjs(
  projectPath: string,
  entities: {
    entityNamePascalCase: string;
    entityNameKebabCase: string;
  }[],
) {
  const rootPath = path.join(projectPath, "src");

  buildAndsaveFile(
    rootPath + `/app.module.ts`,
    nestjsAppModuleTemplate(entities),
  );
}
/**
 *
 * @param projectPath
 */
export function mainFileNestjs(projectPath: string) {
  const rootPath = path.join(projectPath, "src");

  buildAndsaveFile(rootPath + `/main.ts`, nestjsMainTemplate());
}
/**
 *
 * @param projectPath
 * @param framework
 */
export function createEnvironmentsNestjs(
  projectPath: string,
  framework: IFramework,
) {
  const rootPath = path.join(projectPath, "src");
  let content = "";
  framework.environments.forEach((environment) => {
    let envPath = "";
    content = nestjsEnvironmentsTemplate(environment);
    if (environment.mode === "env") {
      envPath = path.join(rootPath, ".env");
    } else {
      envPath = path.join(rootPath, ".env." + environment.mode);
    }
    buildAndsaveFile(envPath, content);
  });
}
