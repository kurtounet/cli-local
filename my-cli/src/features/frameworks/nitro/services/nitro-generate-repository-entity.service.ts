import { writeFile } from "@utils/file-utils";
import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { logSuccess } from "@utils/logger";
import { drizzleEntityRepositoryTemplate } from "../templates/repositories/drizzle-entity-repository-template";

export function nitroGenerateRepositoryEntityService(
  rootServerApi: string,
  entity: IEntityJson,
) {
  writeFile(
    `${rootServerApi}/${entity.nameKebabCase}s/${entity.nameKebabCase}.repository.ts`,
    drizzleEntityRepositoryTemplate(entity),
  );
  logSuccess(`Génération du repository pour: ${entity.namePascalCase}`);
}
