import { IEntityJson } from "@features/parsersMdj/models/entity-json.model";

export function toManyEntityToDtoTemplate(entity: IEntityJson) {
  return `$dto->sprintInstances = $this->toIriList($entity->getSprintInstances(), SprintInstanceResource::class);`;
}
