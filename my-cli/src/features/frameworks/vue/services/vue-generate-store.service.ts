import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { logInfo } from "@utils/logger";

export function generateVueStore(entity: IEntityJson) {
  logInfo(`Génération du store Vue.js pour: ${entity.namePascalCase}`);
}
