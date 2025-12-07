import { camelToKebab } from "@utils/convert";
import { writeFile } from "@utils/file-utils";

export function drizzleGenerateIndexSchemasService(
  rootServer: string,
  entities: string[],
) {
  writeFile(
    `${rootServer}/database/schemas/index.ts`,
    `${entities.map((entityName: string) => `export * from "./${camelToKebab(entityName)}.schema"`).join("\n")}`,
    `Création de ./server/database/schemas/index.ts`,
  );
}
