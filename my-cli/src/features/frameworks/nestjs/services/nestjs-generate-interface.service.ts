import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function generateNestjsInterface(entity: IEntityJson) {
  console.log(
    `Génération de l'interface NestJS pour: ${entity.namePascalCase}`,
  );
}
