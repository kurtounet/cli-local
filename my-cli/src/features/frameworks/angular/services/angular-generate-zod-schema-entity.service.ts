import { generateInterfaceService } from "@features/frameworks/commun/services/generate-interface-service";

import { generateZodShemaEntityService } from "@features/frameworks/commun/services/generate-zod-shema-entity.service";

import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { writeFile } from "@utils/file-utils";

/**
 * Generates an Angular interface.
 * @param entity The entity JSON object.
 */
export function angularGenerateZodSchemaEntityService(
  pathDir: string,
  entity: IEntityJson,
) {
  writeFile(
    `${pathDir}/${entity.nameKebabCase}.schema.ts`,
    generateZodShemaEntityService(entity),
  );
}
