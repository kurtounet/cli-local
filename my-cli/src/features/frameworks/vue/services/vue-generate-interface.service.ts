import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { logInfo } from "@utils/logger";

export function generateVueInterface(entity: IEntityJson) {
  logInfo(`Génération de l'interface Vue.js pour: ${entity.namePascalCase}`);
}
