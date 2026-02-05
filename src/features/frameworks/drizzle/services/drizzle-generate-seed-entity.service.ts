import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { writeFile } from "@utils/file-utils";
import { logSuccess } from "@utils/logger";

import { drizzleSeedEntityTemplate } from "../templates/drizzle-seed-entity.template";

/**
 *
 * @param rootServer
 * @param entity
 */
export function drizzleGenerateSeedEntityService(
  rootServer: string,
  entity: IEntityJson,
) {
  writeFile(
    `${rootServer}/database/seed/${entity.nameKebabCase}.seed.ts`,
    drizzleSeedEntityTemplate(entity),
  );
  logSuccess(`./server/database/seed/${entity.nameCamelCase}.seed.ts created`);
}
