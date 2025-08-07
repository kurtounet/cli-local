import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function generateReactService(entity: IEntityJson) {
  console.log(`Génération du servicereact pour: ${entity.namePascalCase}`);
}
