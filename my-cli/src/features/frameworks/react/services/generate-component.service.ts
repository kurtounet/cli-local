import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function generateReactComponent(entity: IEntityJson) {
  console.log(`Génération du composantreact pour: ${entity.namePascalCase}`);
}
