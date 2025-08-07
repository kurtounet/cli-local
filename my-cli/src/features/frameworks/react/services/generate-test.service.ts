import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function generateReactTest(entity: IEntityJson) {
  console.log(`Génération des testsreact pour: ${entity.namePascalCase}`);
}
