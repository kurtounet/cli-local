import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function generateVueService(entity: IEntityJson) {
  console.log(`Génération du service Vue.js pour: ${entity.namePascalCase}`);
}
