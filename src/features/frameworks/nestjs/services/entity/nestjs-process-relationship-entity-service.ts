import { IRelation } from "@parsersMdj/models/entity-json.model";
import { TYPEORM_DECORATORS } from "../../constant/nestjs-constants.constant";
import { nestjsBuildImportEntity } from "./nestjs-build-import-entity-service";
import { nestjsBuildRelationEntity } from "./nestjs-build-relation-entity.service";
import { nestjsShouldAddJoinColumnEntity } from "./nestjs-should-add-join-column-entity-service";

/**
 * Traite une relation individuelle.
 */
export function nestjsProcessRelationshipEntity(
  relationship: IRelation,
  currentEntityTableName: string,
  relations: string[],
  entityImports: Set<string>,
  typeormImports: Set<string>,
): void {
  // Ajouter le décorateur de type de relation aux imports
  typeormImports.add(relationship.relationType);

  // Importer les entités liées, en évitant les auto-imports
  if (relationship.source !== currentEntityTableName) {
    entityImports.add(nestjsBuildImportEntity(relationship.source));
  }
  if (relationship.target !== currentEntityTableName) {
    entityImports.add(nestjsBuildImportEntity(relationship.target));
  }

  // Gérer JoinColumn pour les côtés propriétaires des relations
  if (nestjsShouldAddJoinColumnEntity(relationship)) {
    typeormImports.add(TYPEORM_DECORATORS.JOIN_COLUMN);
  }

  relations.push(
    nestjsBuildRelationEntity(relationship, currentEntityTableName),
  );
}
