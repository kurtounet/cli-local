import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { writeFile } from "@utils/file-utils";
import { logInfo } from "@utils/logger";
import { angularCrudServiceTemplate } from "../templates/angular-crud-service.template";

/**
 * Generates an Angular service.
 * @param entity The entity JSON object.
 */
export function angularGenerateMockEntityService(
  componentDir: string,
  entity: IEntityJson,
) {
  writeFile(
    `${componentDir}/${entity.nameKebabCase}.service.ts`,
    `Mock service for ${entity.namePascalCase}`,

    // angularMockServiceTemplate(entity),
  );
}
