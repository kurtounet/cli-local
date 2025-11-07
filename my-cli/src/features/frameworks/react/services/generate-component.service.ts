import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { logInfo } from "@utils/logger";

export function generateReactComponent(entity: IEntityJson) {
  logInfo(`Génération du composantreact pour: ${entity.namePascalCase}`);
}
