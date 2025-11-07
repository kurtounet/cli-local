import * as path from "path";
import * as fs from "fs";
import { IFramework } from "@frameworks-models/framework-commun.model";
import { buildAndsaveFile } from "@utils/file-utils";
import { nestjsDatabaseSourceTemplate } from "../templates/database/nestjs-data-source-template";
import { nestjsAppModuleTemplate } from "../templates/config/nestjs-app-module-template";
import { nestjsMainTemplate } from "../templates/config/nestjs-main-template";
import { nestjsEnvironmentsTemplate } from "../templates/config/nestjs-environments-template";

export function createConfigProjectNestjs(projectPath: string) {
  // logInfo('Config du projet');
  // databaseConfigNestjs(projectPath);
  // appModuleNestjs(projectPath);
  // mainFileNestjs(projectPath);
}
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
export function appModuleNestjs(
  projectPath: string,
  entities: Array<{
    entityNamePascalCase: string;
    entityNameKebabCase: string;
  }>,
) {
  const rootPath = path.join(projectPath, "src");

  buildAndsaveFile(
    rootPath + `/app.module.ts`,
    nestjsAppModuleTemplate(entities),
  );
}
export function mainFileNestjs(projectPath: string) {
  const rootPath = path.join(projectPath, "src");

  buildAndsaveFile(rootPath + `/main.ts`, nestjsMainTemplate());
}
export function createEnvironmentsNestjs(
  projectPath: string,
  framework: IFramework,
) {
  const rootPath = path.join(projectPath, "src");
  let content: string = "";
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
