import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { writeFile } from "@utils/file-utils";

import { logInfo, logStep } from "@utils/logger";
import { apiPlatformEntityTemplate } from "../../templates/api-platform/api-platform-entity.template";
import { symfonyEntityRepositoryTemplate } from "../../templates/symfony-repository.template";

export function apiPlatformEntityService(
  frameworkPath: string,
  entity: IEntityJson,
) {
  writeFile(
    `${frameworkPath}/Entity/${entity.namePascalCase}.php`,
    apiPlatformEntityTemplate(entity),
  );
  writeFile(
    `${frameworkPath}/Repository/${entity.namePascalCase}.php`,
    symfonyEntityRepositoryTemplate(entity),
  );
  logInfo("Génération de fichiers symfony");
}
