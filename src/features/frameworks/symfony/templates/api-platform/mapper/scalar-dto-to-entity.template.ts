import { IEntityJson } from "@features/parsersMdj/models/entity-json.model";

export function scalarDtoToEntityTemplate(entity: IEntityJson) {
  return `$entity->setId($dto->id);`;
}
