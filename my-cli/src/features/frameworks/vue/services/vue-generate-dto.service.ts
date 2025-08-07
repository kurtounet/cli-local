import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function generateVueDto(entity: IEntityJson) {
  console.log(`Génération du DTO Vue.js pour: ${entity.namePascalCase}`);
}
