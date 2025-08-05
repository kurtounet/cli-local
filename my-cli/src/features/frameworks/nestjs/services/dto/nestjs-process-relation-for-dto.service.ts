import { snakeToCamel, snakeToPascal } from "@utils/convert";
import { DtoProperty } from "../../interfaces/nestjs-dto-property.model";
import { IRelation } from "@features/parsersMdj/interfaces/entity-json.model";
import { nestjsGetRelationDecorators } from "./nestjs-get-relation-decorators.service";

/**
 * Traite une relation pour un DTO (principalement pour les réponses).
 */
export function nestjsProcessRelationForDto(
  relation: IRelation,
  currentEntityTableName: string,
  validationImports: Set<string>,
  transformImports: Set<string>,
  responseDtoImports: Set<string>,
): DtoProperty | null {
  const targetEntityTableName =
    relation.source === currentEntityTableName
      ? relation.target
      : relation.source;
  const targetPascal = snakeToPascal(targetEntityTableName);
  const targetCamel = snakeToCamel(targetEntityTableName);

  let propertyName: string;
  let propertyType: string;
  let isArray: boolean;

  // Traitement spécifique pour chaque type de relation
  if (
    relation.relationType === "OneToOne" ||
    relation.relationType === "ManyToOne"
  ) {
    propertyName = targetCamel;
    propertyType = `Response${targetPascal}Dto`;
    isArray = false;
  } else if (
    relation.relationType === "OneToMany" ||
    relation.relationType === "ManyToMany"
  ) {
    propertyName = `${targetCamel}s`;
    propertyType = `Response${targetPascal}Dto[]`;
    isArray = true;
  } else {
    console.warn(`Type de relation non supporté: ${relation.relationType}`);
    return null;
  }

  responseDtoImports.add(`Response${targetPascal}Dto`);

  const decorators = nestjsGetRelationDecorators(
    targetPascal,
    isArray,
    validationImports,
    transformImports,
  );

  return {
    name: propertyName,
    isOptional: true,
    tsType: propertyType,
    decorators,
    description: `Relation ${relation.relationType} vers ${targetPascal}`,
  };
}
