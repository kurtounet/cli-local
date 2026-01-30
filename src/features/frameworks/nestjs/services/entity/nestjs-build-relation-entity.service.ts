import { snakeToCamel, snakeToPascal } from "@utils/convert";
import { INDENT, NEWLINE } from "../../constant/nestjs-constants.constant";
import { IRelation } from "@parsersMdj/models/entity-json.model";
import { nestjsBuildRelationDecoratorEntity } from "./nestjs-build-relation-decorator-entity-service";
import { nestjsGetRelationConfigEntity } from "./nestjs-get-relation-config-entity-service";
/**
 * Construit la chaîne pour un décorateur et une propriété de relation unique.
 * @param relation - L'objet relation.
 * @param currentEntityTableName - Le nom de table de l'entité actuelle générée.
 * @returns Une chaîne formatée représentant la relation d'entité.
 */

export function nestjsBuildRelationEntity(
  relation: IRelation,
  currentEntityTableName: string,
): string {
  const { relationType, source, target, owner } = relation;
  const isOwningSide = owner === true;

  // Déterminer l'entité cible pour la relation du point de vue de l'entité actuelle
  const targetEntityTableName =
    source === currentEntityTableName ? target : source;
  const targetPascal = snakeToPascal(targetEntityTableName);
  const targetCamel = snakeToCamel(targetEntityTableName);

  const relationConfig = nestjsGetRelationConfigEntity(
    relationType,
    source,
    target,
    currentEntityTableName,
  );

  const relationDecorator = nestjsBuildRelationDecoratorEntity(
    relationType,
    targetPascal,
    targetCamel,
    relationConfig.inverseSideProperty,
    isOwningSide,
  );

  const apiProperty = nestjsBuildApiPropertyEntity(
    targetPascal,
    relationConfig.isArray,
  );

  return `${INDENT}${relationDecorator}${NEWLINE}${INDENT}${apiProperty}${NEWLINE}${INDENT}${relationConfig.propertyName}: ${relationConfig.propertyType};`;
}

/*
export function buildRelation(relation: IRelation, currentEntityTableName: string): string {
  const { relationType, source, target, owner } = relation;
  const isOwningSide = owner === true;

  // Déterminer l'entité cible pour la relation du point de vue de l'entité actuelle
  const targetEntityTableName = source === currentEntityTableName ? target : source;
  const targetPascal = snakeToPascal(targetEntityTableName);
  const targetCamel = snakeToCamel(targetEntityTableName);

  const relationConfig = getRelationConfig(relationType, source, target, currentEntityTableName);
  const relationDecorator = buildRelationDecorator(relationType, targetPascal, targetCamel, relationConfig.inverseSideProperty, isOwningSide);
  const apiProperty = buildApiProperty(targetPascal, relationConfig.isArray);

  return `${INDENT}${relationDecorator}${NEWLINE}${INDENT}${apiProperty}${NEWLINE}${INDENT}${relationConfig.propertyName}: ${relationConfig.propertyType};`;
}
*/
