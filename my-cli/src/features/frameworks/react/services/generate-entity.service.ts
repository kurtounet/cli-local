import { IEntityJson } from "@interfaces/entity-json.model";

export function generateReactEntity(entity: IEntityJson) {
  console.log(`Génération de l'entité React pour: ${entity.namePascalCase}`);
}
