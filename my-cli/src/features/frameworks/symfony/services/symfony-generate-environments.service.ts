import * as fs from "fs";
import * as path from "path";

import {
  SymfonyDotEnvLocal,
  SymfonyDotEnvTest,
} from "../templates/symfony-environment.template";
import { writeFile } from "@utils/file-utils";

import { updateGitIgnore } from "@features/frameworks/commun/services/git.service";
import { IProjectConfig } from "@features/frameworks/models/framework-commun.model";
export function symfonyGenerateEnvironmentsService(
  frameworkProjectPath: string,
  configFile: IProjectConfig,
) {
  writeFile(
    path.join(frameworkProjectPath, ".env.local"),
    SymfonyDotEnvLocal(configFile),
    `Création de .env.local`,
  );

  writeFile(
    path.join(frameworkProjectPath, ".env.test"),
    SymfonyDotEnvTest(configFile),
    `Création de .env.test`,
  );
  updateGitIgnore(frameworkProjectPath, ".env.local\n.env.test");
}
