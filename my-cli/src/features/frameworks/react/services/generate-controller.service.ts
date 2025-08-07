import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function generateReactController(entity: IEntityJson) {
  console.log(`Génération du contrôleurreact pour: ${entity.namePascalCase}`);
}
