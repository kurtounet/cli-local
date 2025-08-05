import { IEntityJson } from "@features/parsersMdj/interfaces/entity-json.model";
import {
  DtoType,
  INDENT,
  NEWLINE,
} from "../../constant/nestjs-constants.constant";
import { nestjsGetDtoSuffix } from "./nestjs-get-dto-suffix.service";
import { DtoProperty } from "../../interfaces/nestjs-dto-property.model";
import { pascalToKebab, snakeToKebab } from "@utils/convert";

/**
 * Génère le contenu final du fichier DTO.
 */
export function nestjsGenerateDtoFile(
  entity: IEntityJson,
  properties: DtoProperty[],
  imports: string[],
  dtoType: DtoType,
  responseDtoImports?: Set<string>,
): string {
  const className = `${nestjsGetDtoSuffix(dtoType)}${entity.namePascalCase}Dto`;

  if (dtoType === DtoType.RESPONSE) {
    imports.push(
      `import { transformToISOString } from 'src/utils/date-transformer';`,
    );
  }

  if (responseDtoImports) {
    for (const dto of responseDtoImports) {
      const kebabCaseDto = pascalToKebab(
        dto.replace("Response", "").replace("Dto", ""),
      ).toLowerCase();
      imports.push(
        `import { ${dto} } from 'src/modules/${kebabCaseDto}/dto/${pascalToKebab(dto)}.dto';`,
      );
    }
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
