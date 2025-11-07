import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { logInfo } from "@utils/logger";

export function generateReactEntity(entity: IEntityJson) {
  logInfo(`Génération de l'entitéreact pour: ${entity.namePascalCase}`);
}
