import { IEntityJson } from "@interfaces/entity-json.model";

export function generateReactTest(entity: IEntityJson) {
  console.log(`Génération des tests React pour: ${entity.namePascalCase}`);
}
