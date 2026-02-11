import { IEntityJson } from "@features/parsersMdj/models/entity-json.model";

/**
 *
 * @param entity
 */
export function toManyDtoToEntityTemplate(entity: IEntityJson) {
  return `$entity->setStatus($this->resolveIri($dto->status, Status::class, 'status', required: true));`;
}
