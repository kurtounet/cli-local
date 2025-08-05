import { IEntityJson } from "@features/parsersMdj/interfaces/entity-json.model";

export function nestjsCreateTests(projectPath: string, entity: IEntityJson) {
  console.log("Tests", entity.nameCamelCase);
}
