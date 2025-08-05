import { IEntityJson } from "@interfaces/entity-json.model";

export function nestjsGenerateEntity(entity: IEntityJson) {
  console.log(`Génération de l'entité NestJS pour: ${entity.namePascalCase}`);
}
