import { IEntityJson } from "@interfaces/entity-json.model";

export function generateReactInterface(entity: IEntityJson) {
  console.log(`Génération de l'interface React pour: ${entity.namePascalCase}`);
}
