import { IEntityJson } from "@features/parsersMdj/interfaces/entity-json.model";
import { RelationshipResult } from "../../interfaces/nestjs-relationship-result.model";
import { nestjsProcessRelationshipEntity } from "./nestjs-process-relationship-entity-service";

/**
 * Traite toutes les relations d'une entité.
 * @param entity - La représentation JSON de l'entité.
 * @returns Un objet contenant les chaînes de relation et les imports requis.
 */
export function nestjsGetRelationshipsEntity(
  entity: IEntityJson,
): RelationshipResult {
  const relations: string[] = [];
  const entityImports = new Set<string>();
  const typeormImports = new Set<string>();

  if (!entity.relationships) {
    return { relations, entityImports, typeormImports };
  }

  for (const relationship of entity.relationships) {
    nestjsProcessRelationshipEntity(
      relationship,
      entity.tableName,
      relations,
      entityImports,
      typeormImports,
    );
  }

  return { relations, entityImports, typeormImports };
}
