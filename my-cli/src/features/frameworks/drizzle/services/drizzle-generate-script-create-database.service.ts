import { IDatabase } from "@features/frameworks/models/database.model";
import { IProjectConfig } from "@features/frameworks/models/framework-commun.model";
import { writeFile } from "@utils/file-utils";
import { write } from "fs";
import { drizzleScriptCreateDatabaseTemplate } from "../templates/scripts/drizzle-create-database.template";

export function drizzleGenerateScriptCreateDatabase(
  rootPathProjectFramework: string,
  configFile: IProjectConfig,
) {
  if (!configFile.databases) {
    return "";
  }
  writeFile(
    `${rootPathProjectFramework}/scripts/create-database.ts`,
    drizzleScriptCreateDatabaseTemplate(configFile),
    `Création de ./scripts/create-database.ts`,
  );
  /*
    const database: IDatabase = configFile.databases[0];
    return `mysql -h ${database.host} -P ${database.port} -u ${database.user} -p${database.password} -e "CREATE DATABASE ${database.database}"`;
    */
}
