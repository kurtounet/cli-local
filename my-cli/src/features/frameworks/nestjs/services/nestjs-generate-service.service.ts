import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function nestjsGenerateService(entity: IEntityJson) {
  console.log(`Génération du service NestJS pour: ${entity.namePascalCase}`);
}
