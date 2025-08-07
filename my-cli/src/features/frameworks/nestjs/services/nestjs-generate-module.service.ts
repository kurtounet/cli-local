import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function nestjsGenerateModule(entity: IEntityJson) {
  console.log(`Génération du module NestJS pour: ${entity.namePascalCase}`);
}
