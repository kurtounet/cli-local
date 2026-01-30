import { snakeToKebab, snakeToPascal } from "@utils/convert";

/**
 * Construit une instruction d'import pour une entité liée.
 * @param entityName - Le nom en snake_case de l'entité à importer.
 * @returns Une instruction d'import complète.
 */
export function nestjsBuildImportEntity(entityName: string): string {
  const pascalName = snakeToPascal(entityName);
  const kebabName = snakeToKebab(entityName);
  return `import { ${pascalName} } from 'src/modules/${kebabName}/entity/${kebabName}.entity';`;
}
