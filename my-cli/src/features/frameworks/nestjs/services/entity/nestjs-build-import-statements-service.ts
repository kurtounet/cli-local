import { INDENT, NEWLINE } from "../../constant/nestjs-constants.constant";

/**
 * Construit les instructions d'import pour l'entité.
 */
export function buildImportStatements(
  typeormImports: Set<string>,
  entityImports: Set<string>,
): string[] {
  const imports = [
    `import { ApiProperty } from '@nestjs/swagger';`,
    `import {${NEWLINE}${INDENT}${[...typeormImports].sort().join(`,${NEWLINE}${INDENT}`)},${NEWLINE}} from 'typeorm';`,
  ];

  if (entityImports.size > 0) {
    imports.push(...[...entityImports].sort());
  }

  return imports;
}
