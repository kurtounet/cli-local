import { IEntityJson } from "@features/parsersMdj/models/entity-json.model";

export function toOneDtoToEntityTemplate(entity: IEntityJson) {
  return `$entity->setStatus($this->resolveIri($data->status, Status::class, 'status', required: true));`;
}
