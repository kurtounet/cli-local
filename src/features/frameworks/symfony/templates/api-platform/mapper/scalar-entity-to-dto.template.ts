import { IEntityJson } from "@features/parsersMdj/models/entity-json.model";

/**
 *
 * @param entity
 */
export function scalarEntityToDtoTemplate(entity: IEntityJson) {
  return `$dto->id = $entity->getId();`;
}
