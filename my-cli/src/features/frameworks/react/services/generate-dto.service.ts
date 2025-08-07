import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function generateReactDto(entity: IEntityJson) {
  console.log(`Génération du DTOreact pour: ${entity.namePascalCase}`);
}
