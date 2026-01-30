import { writeFile } from "@utils/file-utils";
import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { logSuccess } from "@utils/logger";
import { drizzleSeedEntityTemplate } from "../templates/drizzle-seed-entity.template";

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
