import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function generateVueComponent(entity: IEntityJson) {
  console.log(`Génération du composant Vue.js pour: ${entity.namePascalCase}`);
}
