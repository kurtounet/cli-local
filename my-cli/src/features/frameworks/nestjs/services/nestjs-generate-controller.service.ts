import { IEntityJson } from "@interfaces/entity-json.model";

export function generateNestjsController(entity: IEntityJson) {
  console.log(`Génération du contrôleur NestJS pour: ${entity.namePascalCase}`);
}
