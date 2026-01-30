import { IEntityJson } from "@parsersMdj/models/entity-json.model";

import { logSuccess } from "@utils/logger";
import { writeFile } from "@utils/file-utils";
import { apiPlatformEntityCollectionProviderTemplate } from "../../templates/api-platform/states/providers/api-platform-entity-collection-provider.template";
import { apiPlatformEntityItemProviderTemplate } from "../../templates/api-platform/states/providers/api-platform-entity-item-provider.template";

export function apiPlatformEntityProviderService(
  frameworkPath: string,
  entity: IEntityJson,
) {
  // Collection
  writeFile(
    `${frameworkPath}/${entity.namePascalCase}/${entity.namePascalCase}CollectionProvider.php`,
    apiPlatformEntityCollectionProviderTemplate(entity),
  );
  logSuccess(`Génération du ${entity.namePascalCase}CollectionProvider.php`);
  // Item
  writeFile(
    `${frameworkPath}/${entity.namePascalCase}/${entity.namePascalCase}ItemProvider.php`,
    apiPlatformEntityItemProviderTemplate(entity),
  );
  logSuccess(`Génération du ${entity.namePascalCase}ItemProvider.php`);
}
