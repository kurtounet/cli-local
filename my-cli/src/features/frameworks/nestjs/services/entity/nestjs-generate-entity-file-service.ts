import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { INDENT, NEWLINE } from "../../constant/nestjs-constants.constant";
import { EntityProperty } from "../../models/nestjs-entity-property.model";

/**
 * Génère le contenu final du fichier d'entité.
 */
export function nestjsGenerateEntityFile(
  entity: IEntityJson,
  properties: EntityProperty[],
  relations: string[],
  imports: string[],
): string {
  const propertiesString = properties
    .map(
      (property) =>
        `${INDENT}${property.decorators.join(`${NEWLINE}${INDENT}`)}${NEWLINE}${INDENT}${property.name}${property.nullable}: ${property.tsType};`,
    )
    .join(`${NEWLINE}${NEWLINE}`);

  const relationsString =
    relations.length > 0
      ? `${NEWLINE}${relations.join(`${NEWLINE}${NEWLINE}`)}`
      : "";

  return `${imports.join(NEWLINE)}${NEWLINE}${NEWLINE}@Entity('${entity.tableName}')
export class ${entity.namePascalCase} {
${propertiesString}${relationsString}
}
`;
}
