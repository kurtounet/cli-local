import { generateInterfaceService } from "@features/frameworks/commun/services/generate-interface-service";
import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { writeFile } from "@utils/file-utils";

/**
 * Generates an Angular interface.
 * @param entity The entity JSON object.
 */
export function angularGenerateInterfaceEntityService(
  pathDir: string,
  entity: IEntityJson,
) {
  writeFile(
    `${pathDir}/${entity.nameKebabCase}.model.ts`,
    generateInterfaceService(entity),
  );
}
