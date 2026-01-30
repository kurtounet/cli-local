import { snakeToCamel, snakeToPascal } from "@utils/convert";
import { DtoProperty } from "../../models/nestjs-dto-property.model";
import { IRelation } from "@parsersMdj/models/entity-json.model";
import { nestjsGetRelationDecorators } from "./nestjs-get-relation-decorators.service";

/**
 * Traite une relation pour un DTO (principalement pour les réponses).
 */
export function nestjsProcessRelationForDto(
  relation: IRelation,
  currentEntityTableName: string,
  validationImports: Set<string>,
  transformImports: Set<string>,
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
  switch (relation.relationType) {
    case "OneToOne":
      // Une entité a une seule relation vers une autre entité
      propertyName = targetCamel;
      propertyType = `${targetPascal}ResponseDto`;
      isArray = false;
      break;

    case "OneToMany":
      // Une entité a plusieurs relations vers d'autres entités
      propertyName = `${targetCamel}s`;
      propertyType = `${targetPascal}ResponseDto[]`;
      isArray = true;
      break;

    case "ManyToOne":
      // Plusieurs entités ont une relation vers une seule entité
      propertyName = `${targetCamel}s`;
      propertyType = `${targetPascal}ResponseDto`;
      isArray = false;
      break;

    case "ManyToMany":
      // Plusieurs entités ont des relations vers plusieurs autres entités
      propertyName = `${targetCamel}`;
      propertyType = `${targetPascal}ResponseDto[]`;
      isArray = true;
      break;

    default:
      // Type de relation non supporté
      console.warn(`Type de relation non supporté: ${relation.relationType}`);
      return null;
  }

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
// import { snakeToCamel, snakeToPascal } from '@utils/convert';
// import { DtoProperty } from '../../interfaces/nestjs-dto-property.model';
// import { IRelation } from '@parsersMdj/interfaces/entity-json.model';
// import { nestjsGetRelationDecorators } from './nestjs-get-relation-decorators.service';

// /**
//  * Traite une relation pour un DTO (principalement pour les réponses).
//  */
// export function nestjsProcessRelationForDto(
//   relation: IRelation,
//   currentEntityTableName: string,
//   validationImports: Set<string>,
//   transformImports: Set<string>,
// ): DtoProperty | null {
//   const targetEntityTableName =
//     relation.source === currentEntityTableName ? relation.target : relation.source;
//   const targetPascal = snakeToPascal(targetEntityTableName);
//   const targetCamel = snakeToCamel(targetEntityTableName);

//   let propertyName = targetCamel;
//   let propertyType = `${targetPascal}ResponseDto`;
//   let isArray = false;

//   if (relation.relationType === 'OneToMany' || relation.relationType === 'ManyToMany') {
//     propertyName += 's';
//     propertyType += '[]';
//     isArray = true;
//   }
//   if (relation.relationType === 'ManyToOne' || relation.relationType === 'ManyToMany') {
//     propertyName += 's';
//     // propertyType += '[]';
//     // isArray = true;
//   }

//   const decorators = nestjsGetRelationDecorators(
//     targetPascal,
//     isArray,
//     validationImports,
//     transformImports,
//   );

//   return {
//     name: propertyName,
//     isOptional: true,
//     tsType: propertyType,
//     decorators,
//     description: `Relation vers ${targetPascal}`,
//   };
// }
