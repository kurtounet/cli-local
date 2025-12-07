import { IEntityJson } from "@features/parsersMdj/models/entity-json.model";
import { writeFile } from "@utils/file-utils";
import { drizzleSchemaFromEntityService } from "./drizzle-schema-from-entity.service";

// ---------- table generator ----------
export function drizzleGenerateSchemaEntityService(
  rootServer: string,
  entity: IEntityJson,
) {
  writeFile(
    `${rootServer}/database/schemas/${entity.nameKebabCase}.schema.ts`,
    drizzleSchemaFromEntityService(entity),
    `Création de ./server/database/schemas/${entity.nameKebabCase}.schema.ts`,
  );
}
