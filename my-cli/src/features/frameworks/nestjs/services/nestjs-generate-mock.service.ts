import { writeFile } from "@utils/file-utils";
import { pascalCase } from "@utils/stringUtils";
import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { logInfo } from "@utils/logger";

export function nestjsGenerateMock(entity: IEntityJson) {
  logInfo(`Génération de mock NestJS pour: ${entity.namePascalCase}`);
}
