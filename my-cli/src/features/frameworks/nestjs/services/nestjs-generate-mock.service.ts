import { writeFile } from "@utils/file-utils";
import { pascalCase } from "@utils/stringUtils";
import { IEntityJson } from "@features/parsersMdj/interfaces/entity-json.model";

export function nestjsGenerateMock(entity: IEntityJson) {
  console.log(`Génération de mock NestJS pour: ${entity.namePascalCase}`);
}
