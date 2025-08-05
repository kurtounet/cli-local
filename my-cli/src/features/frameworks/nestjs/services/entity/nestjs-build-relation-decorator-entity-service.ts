import { INDENT, NEWLINE } from "../../constant/nestjs-constants.constant";

/**
 * Construit le décorateur de relation.
 * @param relationType - Le type de relation
 * @param targetPascal - Le nom de l'entité cible en PascalCase
 * @param targetCamel - Le nom de l'entité cible en camelCase
 * @param inverseSideProperty - La propriété du côté inverse de la relation
 * @param isOwningSide - Si c'est le côté propriétaire de la relation
 * @returns Le décorateur de relation formaté
 */
export function nestjsBuildRelationDecoratorEntity(
  relationType: string,
  targetPascal: string,
  targetCamel: string,
  inverseSideProperty: string,
  isOwningSide: boolean,
): string {
  let decorator = `@${relationType}(() => ${targetPascal}, (${targetCamel}) => ${targetCamel}.${inverseSideProperty})`;

  if (relationType === "OneToOne" && isOwningSide) {
    decorator += `${NEWLINE}${INDENT}@JoinColumn()`;
  } else if (relationType === "ManyToOne") {
    decorator += `${NEWLINE}${INDENT}@JoinColumn({ name: '${targetCamel}_id' })`;
  }

  return decorator;
}
/* 
function buildRelationDecorator(
  relationType: string,
  targetPascal: string,
  targetCamel: string,
  inverseSideProperty: string,
  isOwningSide: boolean
): string {
  let decorator = `@${relationType}(() => ${targetPascal}, (${targetCamel}) => ${targetCamel}.${inverseSideProperty})`;

  if (relationType === 'OneToOne' && isOwningSide) {
    decorator += `${NEWLINE}${INDENT}@JoinColumn()`;
  } else if (relationType === 'ManyToOne') {
    decorator += `${NEWLINE}${INDENT}@JoinColumn({ name: '${targetCamel}_id' })`;
  }

  return decorator;
}
*/
