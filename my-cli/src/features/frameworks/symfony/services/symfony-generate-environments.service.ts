import * as fs from "fs";
import * as path from "path";

import {
  IDatabase,
  IFramework,
} from "@features/frameworks/_global/interface/framework-commun.model";
import { updateGitIgnore } from "@features/frameworks/_global/service/git.service";
import { envLocal, envTest } from "../templates/symfony-environment.template";
import { buildAndsaveFile } from "@utils/file-utils";
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
