import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { writeFile } from "@utils/file-utils";
import { logSuccess } from "@utils/logger";

import { drizzleEntityRepositoryTemplate } from "../templates/repositories/drizzle-entity-repository-template";

/**
 *
 * @param rootServerApi
 * @param entity
 * @param mode
 */
export function nitroGenerateRepositoryEntityService(
  rootServerApi: string,
  entity: IEntityJson,
  mode: string,
) {
  writeFile(
    `${rootServerApi}/${entity.nameKebabCase}s/${entity.nameKebabCase}.repository.ts`,
    drizzleEntityRepositoryTemplate(entity),
  );
  logSuccess(`Génération du repository pour: ${entity.namePascalCase}`);
}
