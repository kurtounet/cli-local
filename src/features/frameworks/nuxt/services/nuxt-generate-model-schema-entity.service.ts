import { generateZodShemaEntityService } from "@features/frameworks/commun/services/generate-zod-shema-entity.service";
import { modelEntityTemplate } from "@features/frameworks/commun/templates/model-entity.template";
import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { writeFile } from "@utils/file-utils";
import { logInfo } from "@utils/logger";

/**
 *
 * @param rootPathProjectFramework
 * @param entity
 */
export function nuxtGenerateModelSchemaEntityService(
  rootPathProjectFramework: string,
  entity: IEntityJson,
) {
  writeFile(
    `${rootPathProjectFramework}/shared/models/entities/${entity.nameKebabCase}.model.ts`,
    modelEntityTemplate(entity),
  );
  logInfo(`Génération du model pour: ${entity.namePascalCase}`);
  writeFile(
    `${rootPathProjectFramework}/shared/schemas/${entity.nameKebabCase}.schema.ts`,
    generateZodShemaEntityService(entity),
  );
  logInfo(`Génération des schemas zod pour: ${entity.namePascalCase}`);
}
