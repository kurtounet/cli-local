import { writeFile } from "@utils/file-utils";
import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { ZodEntityTemplate } from "@features/frameworks/templates/zod-entity.template";
import { modelEntityTemplate } from "@features/frameworks/templates/model-entity.template";
import { logInfo } from "@utils/logger";

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
    ZodEntityTemplate(entity),
  );
  logInfo(`Génération des schemas zod pour: ${entity.namePascalCase}`);
}
