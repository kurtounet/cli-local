import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { writeFile } from "@utils/file-utils";
import { logInfo, logStep, logSuccess } from "@utils/logger";

import { apiPlatformEntityMapperTemplate } from "../../templates/api-platform/api-platform-entity-mapper.template";

/**
 *
 * @param frameworkPath
 * @param entity
 */
export function apiPlatformEntityMapperService(
  frameworkPath: string,
  entity: IEntityJson,
) {
  writeFile(
    `${frameworkPath}/${entity.namePascalCase}Mapper.php`,
    apiPlatformEntityMapperTemplate(entity),
  );
  logSuccess(`Génération du mapper pour: ${entity.namePascalCase}`);
}
