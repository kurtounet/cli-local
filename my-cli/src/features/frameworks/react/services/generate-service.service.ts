import { IEntityJson } from "@interfaces/entity-json.model";

export function generateReactService(entity: IEntityJson) {
  console.log(`Génération du service React pour: ${entity.namePascalCase}`);
}
