import { IColumnJson, IEntityJson } from "../models/entity-json.model";

/**
 * Generates the content for a CreateDTO file.
 * @param entity - The entity definition.
 * @returns The content of the create-dto.ts file.
 */
function generateCreateDto(entity: IEntityJson): string {
  const { namePascalCase, nameKebabCase, columns } = entity;
  const properties = columns
    ?.filter((c) => !c.primaryKey) // Exclude primary key from create DTO
    .map((column) => {
      const decorators = [
        `@ApiProperty({ description: '${column.documentation || ""}', required: ${!column.nullable}, example: '' })`,
        `@Is${column.typeTypeScript.charAt(0).toUpperCase() + column.typeTypeScript.slice(1)}()`,
      ];
      if (column.nullable) {
        decorators.push("@IsOptional()");
      }
      return `  ${decorators.join("\n  ")}\n  ${column.name}: ${column.typeTypeScript};\n`;
    })
    .join("\n");

  return `
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsDate, IsBoolean, IsOptional, IsNumber } from 'class-validator';

export class Create${namePascalCase}Dto {
${properties}
}
`;
}

/**
 * Generates the content for an UpdateDTO file.
 * @param entity - The entity definition.
 * @returns The content of the update-dto.ts file.
 */
function generateUpdateDto(entity: IEntityJson): string {
  const { namePascalCase, nameKebabCase } = entity;
  return `
import { PartialType } from '@nestjs/swagger';
import { Create${namePascalCase}Dto } from './create-${nameKebabCase}.dto';

export class Update${namePascalCase}Dto extends PartialType(Create${namePascalCase}Dto) {}
`;
}

/**
 * Generates the content for both Create and Update DTO files.
 * @param entity - The entity definition.
 * @returns An object containing the content for both DTO files.
 */
export function generateDtoFileContent(entity: IEntityJson): {
  createDto: string;
  updateDto: string;
} {
  return {
    createDto: generateCreateDto(entity),
    updateDto: generateUpdateDto(entity),
  };
}
