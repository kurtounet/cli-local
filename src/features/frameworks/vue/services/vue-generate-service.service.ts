import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { logInfo } from "@utils/logger";

export function generateVueService(entity: IEntityJson) {
  logInfo(`Génération du service Vue.js pour: ${entity.namePascalCase}`);
}
