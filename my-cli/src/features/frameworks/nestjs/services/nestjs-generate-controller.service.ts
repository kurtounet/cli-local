import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function generateNestjsController(entity: IEntityJson) {
  console.log(`Génération du contrôleur NestJS pour: ${entity.namePascalCase}`);
}
