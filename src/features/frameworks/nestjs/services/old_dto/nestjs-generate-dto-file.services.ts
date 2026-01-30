import { IEntityJson } from "@parsersMdj/models/entity-json.model";

import {
  DtoType,
  INDENT,
  NEWLINE,
} from "../../constant/nestjs-constants.constant";
import { nestjsGetDtoSuffix } from "./nestjs-get-dto-suffix.service";
import { DtoProperty } from "../../models/nestjs-dto-property.model";

/**
 * Génère le contenu final du fichier DTO.
 */
export function nestjsGenerateDtoFile(
  entity: IEntityJson,
  properties: DtoProperty[],
  imports: string[],
  dtoType: DtoType,
): string {
  const className = `${entity.namePascalCase}${nestjsGetDtoSuffix(dtoType)}`;

  if (dtoType === DtoType.RESPONSE) {
    imports.push(
      `import { transformToISOString } from 'src/utils/date-transformer';`,
    );
  }

  const propertiesString = properties
    .map((property) => {
      const decoratorsString = property.decorators.join(`${NEWLINE}${INDENT}`);
      const optionalMarker = property.isOptional ? "?" : "";
      return `${INDENT}${decoratorsString}${NEWLINE}${INDENT}${property.name}${optionalMarker}: ${property.tsType};`;
    })
    .join(`${NEWLINE}${NEWLINE}`);

  return `${imports.join(NEWLINE)}${NEWLINE}${NEWLINE}export class ${className} {
${propertiesString}
}
`;
}
