import * as fs from "fs";
import * as path from "path";


import { updateGitIgnore } from "@features/frameworks/services/git.service";
import { SymfonyDotEnvLocal, SymfonyDotEnvTest } from "../templates/symfony-environment.template";
import { writeFile } from "@utils/file-utils";
import { IProjectConfig } from "@features/project/models/project.models";
export function symfonyGenerateEnvironmentsService(
  frameworkProjectPath: string,
  configFile: IProjectConfig,
) {
   
   writeFile(
    path.join(frameworkProjectPath, ".env.local"), 
    SymfonyDotEnvLocal(configFile),
    `Création de .env.local`
   );
 
   writeFile(
     path.join(frameworkProjectPath, ".env.test"), 
     SymfonyDotEnvTest(configFile),
     `Création de .env.test`
   ); 
  updateGitIgnore(frameworkProjectPath, ".env.local\n.env.test");
}
