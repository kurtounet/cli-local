import { IEntityJson } from "@features/parsersMdj/models/entity-json.model";
import { writeFile } from "@utils/file-utils";
import { logSuccess } from "@utils/logger";

import { apiPlatformEntityCollectionDtoTemplate } from "../../templates/api-platform/dtos/api-platform-entity-collection-dto.template";
import { apiPlatformEntityCreateDtoTemplate } from "../../templates/api-platform/dtos/api-platform-entity-create-dto.template";
import { apiPlatformEntityItemDtoTemplate } from "../../templates/api-platform/dtos/api-platform-entity-item-dto.template";
import { apiPlatformEntityRessourceDtoTemplate } from "../../templates/api-platform/dtos/api-platform-entity-ressource-dto.template";
import { apiPlatformEntityUpdateDtoTemplate } from "../../templates/api-platform/dtos/api-platform-entity-update-dto.template";

/**
 *
 * @param frameworkPath
 * @param entity
 */
export function apiPlatformEntityDtoService(
  frameworkPath: string,
  entity: IEntityJson,
) {
  // Collection
  writeFile(
    `${frameworkPath}/Dtos/${entity.namePascalCase}/${entity.namePascalCase}CollectionItemDto.php`,
    apiPlatformEntityCollectionDtoTemplate(entity),
  );
  logSuccess(`Génération des dtos pour: ${entity.namePascalCase}`);
  // Item
  writeFile(
    `${frameworkPath}/Dtos/${entity.namePascalCase}/${entity.namePascalCase}ItemDto.php`,
    apiPlatformEntityItemDtoTemplate(entity),
  );
  logSuccess(`Génération des dtos pour: ${entity.namePascalCase}`);
  // Create
  writeFile(
    `${frameworkPath}/Dtos/${entity.namePascalCase}/${entity.namePascalCase}CreateDto.php`,
    apiPlatformEntityCreateDtoTemplate(entity),
  );
  logSuccess(`Génération des dtos pour: ${entity.namePascalCase}`);
  // Update
  writeFile(
    `${frameworkPath}/Dtos/${entity.namePascalCase}/${entity.namePascalCase}UpdateDto.php`,
    apiPlatformEntityUpdateDtoTemplate(entity),
  );
  logSuccess(`Génération des dtos pour: ${entity.namePascalCase}`);
  // Ressource
  writeFile(
    `${frameworkPath}/Resources/${entity.namePascalCase}/${entity.namePascalCase}Resource.php`,
    apiPlatformEntityRessourceDtoTemplate(entity),
  );
  logSuccess(`Génération des dtos pour: ${entity.namePascalCase}`);
}
