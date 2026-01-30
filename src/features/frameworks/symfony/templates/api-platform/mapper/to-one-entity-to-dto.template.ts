import { IEntityJson } from "@features/parsersMdj/models/entity-json.model";

export function toOneEntityToDtoTemplate(entity: IEntityJson) {
  return `$dto->status = $entity->getStatus()
            ? ($this->iriFromResource)(StatusResource::class, $entity->getStatus()->getId())
            : null;`;
}
