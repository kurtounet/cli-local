import { IEntityJson } from "@features/parsersMdj/models/entity-json.model";

export function toManyDtoToEntityTemplate(entity: IEntityJson) {
  return `$entity->setStatus($this->resolveIri($dto->status, Status::class, 'status', required: true));`;
}
