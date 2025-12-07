import { IProjectConfig } from "@features/frameworks/models/framework-commun.model";
import { dotEnvTemplate } from "../templates/utils/dot.env.template";
import { writeFile } from "@utils/file-utils";
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
