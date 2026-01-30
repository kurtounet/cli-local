import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { logInfo } from "@utils/logger";

export function generateReactController(entity: IEntityJson) {
  logInfo(`Génération du contrôleurreact pour: ${entity.namePascalCase}`);
}
