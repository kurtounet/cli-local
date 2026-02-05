// Function to convert snake_case to camelCase
export function snakeToCamel(str) {
  if (str === null || str === undefined) {
    return "";
  }
  return str
    .toLowerCase()
    .replace(/([-_][a-z])/g, (group) =>
      group.toUpperCase().replace("-", "").replace("_", ""),
    );
}

// Function to convert snake_case to PascalCase
export function snakeToPascal(str) {
  if (str === null || str === undefined) {
    return "";
  }
  const camelCase = snakeToCamel(str);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
}
