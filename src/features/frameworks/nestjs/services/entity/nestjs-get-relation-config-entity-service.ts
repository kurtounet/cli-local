import { snakeToCamel, snakeToPascal } from "@utils/convert";
import { RelationConfig } from "../../models/nestjs-relation-config.model";

/**
 * Obtient la configuration pour une relation.
 * @param relationType - Le type de relation (OneToOne, OneToMany, etc.)
 * @param source - L'entité source de la relation
 * @param target - L'entité cible de la relation
 * @param currentEntityTableName - Le nom de l'entité actuelle
 * @returns La configuration de la relation
 */
export function nestjsGetRelationConfigEntity(
  relationType: string,
  source: string,
  target: string,
  currentEntityTableName: string,
): RelationConfig {
  const targetEntityTableName =
    source === currentEntityTableName ? target : source;
  const targetPascal = snakeToPascal(targetEntityTableName);
  const targetCamel = snakeToCamel(targetEntityTableName);

  let inverseSideProperty: string;
  let propertyName = targetCamel;
  let propertyType = targetPascal;
  let isArray = false;

  switch (relationType) {
    case "OneToOne":
      inverseSideProperty = snakeToCamel(currentEntityTableName);
      break;
    case "OneToMany":
      inverseSideProperty = snakeToCamel(currentEntityTableName);
      propertyName += "s";
      propertyType += "[]";
      isArray = true;
      break;
    case "ManyToOne":
      inverseSideProperty = snakeToCamel(source);
      break;
    case "ManyToMany":
      inverseSideProperty = snakeToCamel(source);
      propertyName += "s";
      propertyType += "[]";
      isArray = true;
      break;
    default:
      inverseSideProperty = "unknownRelation";
  }

  return { propertyName, propertyType, inverseSideProperty, isArray };
}
/*
function getRelationConfig(
  relationType: string,
  source: string,
  target: string,
  currentEntityTableName: string
): RelationConfig {
  const targetEntityTableName = source === currentEntityTableName ? target : source;
  const targetPascal = snakeToPascal(targetEntityTableName);
  const targetCamel = snakeToCamel(targetEntityTableName);

  let inverseSideProperty: string;
  let propertyName = targetCamel;
  let propertyType = targetPascal;
  let isArray = false;

  switch (relationType) {
    case 'OneToOne':
      inverseSideProperty = snakeToCamel(currentEntityTableName);
      break;
    case 'OneToMany':
      inverseSideProperty = snakeToCamel(currentEntityTableName);
      propertyName += 's';
      propertyType += '[]';
      isArray = true;
      break;
    case 'ManyToOne':
      inverseSideProperty = snakeToCamel(source);
      break;
    case 'ManyToMany':
      inverseSideProperty = snakeToCamel(source);
      propertyName += 's';
      propertyType += '[]';
      isArray = true;
      break;
    default:
      inverseSideProperty = 'unknownRelation';
      break;
  }

  return { propertyName, propertyType, inverseSideProperty, isArray };
}*/
