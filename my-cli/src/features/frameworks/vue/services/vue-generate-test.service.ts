import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function generateVueTest(entity: IEntityJson) {
  console.log(`Génération des tests Vue.js pour: ${entity.namePascalCase}`);
}
