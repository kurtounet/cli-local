import { IProjectConfig } from "@features/frameworks/models/framework-commun.model";
import { writeFile } from "@utils/file-utils";

import { dotEnvTemplate } from "../templates/utils/dot.env.template";
/**
 *
 * @param projectPath
 * @param configFile
 */
export function dotEnvGenerateService(
  projectPath: string,
  configFile: IProjectConfig,
) {
  writeFile(
    `${projectPath}/.env`,
    dotEnvTemplate(projectPath, configFile),
    `Création de .env`,
  );
}
