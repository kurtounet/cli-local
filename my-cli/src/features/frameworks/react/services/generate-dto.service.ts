import { IEntityJson } from "@interfaces/entity-json.model";

export function generateReactDto(entity: IEntityJson) {
  console.log(`Génération du DTO React pour: ${entity.namePascalCase}`);
}
