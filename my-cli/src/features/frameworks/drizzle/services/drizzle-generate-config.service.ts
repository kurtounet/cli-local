import { IProjectConfig } from "@frameworks-models/framework-commun.model";
import { writeFile } from "@utils/file-utils"; 
import { drizzleConfigTemplate } from "../templates/drizzle-config-template";

export function drizzleGenerateConfigService(
  rootPathProjectFramework: string,
  configFile: IProjectConfig,
  url: boolean = false
) {
   
    writeFile(
      `${rootPathProjectFramework}/drizzle.config.ts`,
      drizzleConfigTemplate(configFile),
      `Géneration du drizzle.config.ts`,
    );
   
/*
  writeFile(
    `${rootPathProjectFramework}/drizzle.config.ts`,
    drizzleConfigUrlTemplate(configFile),
    `Géneration du drizzle.config.ts`,
  );
*/
}
