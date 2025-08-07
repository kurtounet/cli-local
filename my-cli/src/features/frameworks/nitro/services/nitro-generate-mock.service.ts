import { writeFile } from "@utils/file-utils";
import { pascalCase } from "@utils/stringUtils";
import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function nitroGenerateMockEntityDrizzleService(entity: IEntityJson) {
  console.log(`Génération de mock Drizzle pour: ${entity.namePascalCase}`);
}
