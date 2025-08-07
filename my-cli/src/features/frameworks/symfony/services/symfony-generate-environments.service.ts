import * as fs from "fs";
import * as path from "path";

import {   
  IFramework,
} from "@frameworks-models/framework-commun.model";
import { updateGitIgnore } from "@features/frameworks/services/git.service";
import { envLocal, envTest } from "../templates/symfony-environment.template";
import { buildAndsaveFile } from "@utils/file-utils";
import { IDatabase } from "@frameworks-models/database.model";
export function symfonyGenerateEnvironmentsService(
  framework: IFramework,
  frameworkProjectPath: string,
) {
  let db!: IDatabase;
  if (framework?.databases) {
    db = framework?.databases[0];
  }

  buildAndsaveFile(path.join(frameworkProjectPath, ".env.local"), envLocal(db));
  console.log(".env.local créer");
  buildAndsaveFile(path.join(frameworkProjectPath, ".env.test"), envTest(db));
  console.log(".env.test créer");
  updateGitIgnore(frameworkProjectPath, ".env.local\n.env.test");
}
