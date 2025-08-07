import { IFramework } from "@frameworks-models/framework-commun.model";
import { nitroDrizzleConfigTemplate } from "../templates/db/nitro-drizzle-config-template";
import { writeFile } from "@utils/file-utils";

export function nitroGenerateDrizzleSchemasService(
  projectPath: string,
  framework: IFramework,
) {
  writeFile(
    `${projectPath}/drizzle.config.ts`,
    nitroDrizzleConfigTemplate(framework),
  );
  return "generate Config Drizzle fileService";
}
