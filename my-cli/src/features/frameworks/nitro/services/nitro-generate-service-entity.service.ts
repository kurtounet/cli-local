import { IEntityJson } from "@parsersMdj/models/entity-json.model";

import { writeFile } from "@utils/file-utils";
import { nitroEntityServiceTemplate } from "../templates/services/nitro-entity-service-template";

export function nitroGenerateServiceEntityService(
  rootServerApi: string,
  entity: IEntityJson,
) {
  writeFile(
    `${rootServerApi}/${entity.nameKebabCase}s/${entity.nameKebabCase}.service.ts`,
    nitroEntityServiceTemplate(entity),
  );

  return `Génération du service nitro pour: ${entity.namePascalCase}`;
}
