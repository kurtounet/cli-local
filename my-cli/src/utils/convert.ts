// export export function snackCaseToCamelCase(str: string) {
//     return str.replace(/([-_][a-z])/gi, ($1) => $1.toUpperCase().replace("-", "").replace("_", ""));
// }
// export export function snackCaseToKebabCase(str: string) {
//     return str.replace("_","-");
// }

// camelCase → snake_case
export function camelCase(str: string): string {
  return str.replace(/[-_\s](.)/g, (_, c) => c.toUpperCase());
}

export function pascalCase(str: string): string {
  return capitalize(camelCase(str));
}
export function camelToSnake(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();
}

// snake_case → camelCase
export function snakeToCamel(str: string): string {
  // return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
  return str.replace(/(_\w)/g, (match) => match[1].toUpperCase());
}

// camelCase → kebab-case
export function camelToKebab(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

// kebab-case → camelCase
export function kebabToCamel(str: string): string {
  return str.replace(/(-\w)/g, (match) => match[1].toUpperCase());
}

// snake_case → PascalCase
export function snakeToPascal(str: string): string {
  return str
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

// PascalCase → snake_case
export function pascalToSnake(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();
}

// kebab-case → PascalCase
export function kebabToPascal(str: string): string {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

// PascalCase → kebab-case
export function pascalToKebab(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

// snake_case → kebab-case
export function snakeToKebab(str: string): string {
  return str.replace(/_/g, "-");
}

export function pascalToCamel(str: string): string {
  if (!str) return str;
  return str.charAt(0).toLowerCase() + str.slice(1);
}
export function camelToPascal(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[\s_-]+/g, "-")
    .replace(/[^\w-]+/g, "");
}
// 🔥 Exemples d'utilisation

// logInfo(snakeToCamel("snake_case_example")); // "snakeCaseExample"
// logInfo(snakeToKebab("snake_case_example")); // "snake-case-example"
// logInfo(snakeToPascal("snake_case_example")); // "SnakeCaseExample"

// logInfo(camelToSnake("camelCaseExample")); // "camel_case_example"
// logInfo(camelToKebab("camelCaseExample")); // "camel-case-example"

// logInfo(kebabToCamel("kebab-case-example")); // "kebabCaseExample"
// logInfo(kebabToPascal("kebab-case-example")); // "KebabCaseExample"

// logInfo(pascalToSnake("PascalCaseExample")); // "pascal_case_example"
// logInfo(pascalToKebab("PascalCaseExample")); // "pascal-case-example"
