import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { logInfo } from "@utils/logger";

export function generateReactDto(entity: IEntityJson) {
  logInfo(`Génération du DTOreact pour: ${entity.namePascalCase}`);
}
