import { IEntityJson } from "@interfaces/entity-json.model";

export function nestjsGenerateTest(entity: IEntityJson) {
  console.log(`Génération des tests NestJS pour: ${entity.namePascalCase}`);
}
