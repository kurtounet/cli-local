import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { writeFile } from "@utils/file-utils";
import { logInfo } from "@utils/logger";
import { angularCrudServiceTemplate } from "../templates/angular-crud-service.template";

/**
 * Generates an Angular service.
 * @param entity The entity JSON object.
 */
export function angularGenerateEnvironmentsService(componentDir: string) {
  writeFile(
    `${componentDir}/environments/environment.ts`,
    `export const environment = {
      production: true,
      baseUrl: 'http://localhost:3000',
      baseApiUrl: 'http://localhost:3000/api',
    };`,
  );
  writeFile(
    `${componentDir}/environments/environment.development.ts`,
    `export const environment = {
      production: false,
      baseUrl: 'http://localhost:3000',
      baseApiUrl: 'http://localhost:3000/api',
    };`,
  );
}
