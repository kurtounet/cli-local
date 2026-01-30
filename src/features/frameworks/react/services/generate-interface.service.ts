import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { logInfo } from "@utils/logger";

export function generateReactInterface(entity: IEntityJson) {
  logInfo(`Génération de l'interfacereact pour: ${entity.namePascalCase}`);
}
