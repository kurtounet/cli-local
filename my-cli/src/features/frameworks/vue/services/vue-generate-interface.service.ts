import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function generateVueInterface(entity: IEntityJson) {
  console.log(
    `Génération de l'interface Vue.js pour: ${entity.namePascalCase}`,
  );
}
