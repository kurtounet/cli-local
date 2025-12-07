import { writeFile } from "@utils/file-utils";
import { IEntityJson } from "@parsersMdj/models/entity-json.model";

import { logInfo } from "@utils/logger";
import { generateZodShemaEntityService } from "@features/frameworks/commun/services/generate-zod-shema-entity.service";
import { modelEntityTemplate } from "@features/frameworks/commun/templates/model-entity.template";

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
