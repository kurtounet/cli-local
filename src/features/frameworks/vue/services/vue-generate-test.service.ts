import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { logInfo } from "@utils/logger";

export function generateVueTest(entity: IEntityJson) {
  logInfo(`Génération des tests Vue.js pour: ${entity.namePascalCase}`);
}
