import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function nestjsGenerateEntity(entity: IEntityJson) {
  console.log(`Génération de l'entité NestJS pour: ${entity.namePascalCase}`);
}
