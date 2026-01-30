import { IEntityJson } from "@features/parsersMdj/models/entity-json.model";

export function scalarEntityToDtoTemplate(entity: IEntityJson) {
  return `$dto->id = $entity->getId();`;
}
