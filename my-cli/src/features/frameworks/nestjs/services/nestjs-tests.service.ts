import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function nestjsCreateTests(projectPath: string, entity: IEntityJson) {
  console.log("Tests", entity.nameCamelCase);
}
