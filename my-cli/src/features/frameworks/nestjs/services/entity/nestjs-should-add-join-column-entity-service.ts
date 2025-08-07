import { IRelation } from "@parsersMdj/models/entity-json.model";

/**
 * Détermine si un JoinColumn doit être ajouté pour une relation.
 */
export function nestjsShouldAddJoinColumnEntity(
  relationship: IRelation,
): boolean {
  return (
    relationship.relationType === "ManyToOne" ||
    (relationship.relationType === "OneToOne" && relationship.owner)
  );
}
