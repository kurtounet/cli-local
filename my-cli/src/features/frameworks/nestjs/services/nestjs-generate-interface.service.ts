import { IEntityJson } from "@interfaces/entity-json.model";

export function generateNestjsInterface(entity: IEntityJson) {
  console.log(
    `Génération de l'interface NestJS pour: ${entity.namePascalCase}`,
  );
}
