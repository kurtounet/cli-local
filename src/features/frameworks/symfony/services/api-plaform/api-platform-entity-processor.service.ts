import { IEntityJson } from "@features/parsersMdj/models/entity-json.model";
import { writeFile } from "@utils/file-utils";
import { apiPlatformEntityPostProcessorTemplate } from "../../templates/api-platform/states/processors/api-platform-entity-post-processor.template";
import { apiPlatformEntityUpdateProcessorTemplate } from "../../templates/api-platform/states/processors/api-platform-entity-update-processor.template";
import { logSuccess } from "@utils/logger";
import { apiPlatformEntityDeleteProcessorTemplate } from "../../templates/api-platform/states/processors/api-platform-entity-delete-processor.template";

export function apiPlatformEntityProcessorService(
  frameworkPath: string,
  entity: IEntityJson,
) {
  // Post
  writeFile(
    `${frameworkPath}/${entity.namePascalCase}/${entity.namePascalCase}CreateProcessor.php`,
    apiPlatformEntityPostProcessorTemplate(entity),
  );
  logSuccess(`Génération du ${entity.namePascalCase}CreateProcessor.php`);
  // update
  writeFile(
    `${frameworkPath}/${entity.namePascalCase}/${entity.namePascalCase}UpdateProcessor.php`,
    apiPlatformEntityUpdateProcessorTemplate(entity),
  );
  logSuccess(`Génération du ${entity.namePascalCase}UpdateProcessor.php`);
  //  delete
  writeFile(
    `${frameworkPath}/${entity.namePascalCase}/${entity.namePascalCase}DeleteProcessor.php`,
    apiPlatformEntityDeleteProcessorTemplate(entity),
  );
  logSuccess(`Génération du ${entity.namePascalCase}DeleteProcessor.php`);
}
