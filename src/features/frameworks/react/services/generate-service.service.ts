import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { logInfo } from "@utils/logger";

export function generateReactService(entity: IEntityJson) {
  logInfo(`Génération du servicereact pour: ${entity.namePascalCase}`);
}
