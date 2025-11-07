import { I } from "@faker-js/faker/dist/airline-CHFQMWko";
import { IEntityJson } from "@features/parsersMdj/models/entity-json.model";
import { camelToKebab } from "@utils/convert";
import { writeFile } from "@utils/file-utils";
import { logInfo } from "@utils/logger";
import { capitalize } from "@utils/string-utils";
 
export function drizzleGenerateIndexSchemasService(
  rootServer: string,
  entities: string[],
) {
  writeFile(
    `${rootServer}/database/schemas/index.ts`,
    `${entities.map((entityName:  string) => `export * from "./${camelToKebab(entityName)}.schema"`).join("\n")}`,
    `Création de ./server/database/schemas/index.ts`
  )
}
