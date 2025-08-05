/**
 * Construit la propriété API pour Swagger.
 * @param targetPascal - Le nom de l'entité cible en PascalCase
 * @param isArray - Si la propriété est un tableau
 * @returns La propriété API formatée
 */
function nestjsBuildApiPropertyEntity(
  targetPascal: string,
  isArray: boolean,
): string {
  const options = [`type: () => ${targetPascal}`];

  if (isArray) {
    options.push("isArray: true");
  }

  return `@ApiProperty({ ${options.join(", ")} })`;
}
