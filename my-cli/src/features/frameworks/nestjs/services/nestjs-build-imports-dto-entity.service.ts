import { INDENT, NEWLINE } from "../constant/nestjs-constants.constant";

/**
 * Construit les instructions d'import pour les DTOs.
 */
export function nestjsBuildDtoEntityImports(
  validationImports: Set<string>,
  transformImports: Set<string>,
): string[] {
  const imports: string[] = [];

  // Import Swagger
  imports.push(`import { ApiProperty } from '@nestjs/swagger';`);

  // Imports de validation
  if (validationImports.size > 0) {
    imports.push(
      `import {${NEWLINE}${INDENT}${[...validationImports].sort().join(`,${NEWLINE}${INDENT}`)},${NEWLINE}} from 'class-validator';`,
    );
  }

  // Imports de transformation
  if (transformImports.size > 0) {
    imports.push(
      `import {${NEWLINE}${INDENT}${[...transformImports].sort().join(`,${NEWLINE}${INDENT}`)},${NEWLINE}} from 'class-transformer';`,
    );
  }

  return imports;
}
