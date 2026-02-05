import { IEntityJson } from "@features/parsersMdj/models/entity-json.model";

/**
 *
 * @param entity
 */
export function toManyEntityToDtoTemplate(entity: IEntityJson) {
  return `$dto->sprintInstances = $this->toIriList($entity->getSprintInstances(), SprintInstanceResource::class);`;
}
