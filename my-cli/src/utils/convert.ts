// export export function snackCaseToCamelCase(str: string) {
//     return str.replace(/([-_][a-z])/gi, ($1) => $1.toUpperCase().replace("-", "").replace("_", ""));
// }
// export export function snackCaseToKebabCase(str: string) {
//     return str.replace("_","-");
// }

// camelCase → snake_case

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

// 🔥 Exemples d'utilisation

// console.log(snakeToCamel("snake_case_example")); // "snakeCaseExample"
// console.log(snakeToKebab("snake_case_example")); // "snake-case-example"
// console.log(snakeToPascal("snake_case_example")); // "SnakeCaseExample"

// console.log(camelToSnake("camelCaseExample")); // "camel_case_example"
// console.log(camelToKebab("camelCaseExample")); // "camel-case-example"

// console.log(kebabToCamel("kebab-case-example")); // "kebabCaseExample"
// console.log(kebabToPascal("kebab-case-example")); // "KebabCaseExample"

// console.log(pascalToSnake("PascalCaseExample")); // "pascal_case_example"
// console.log(pascalToKebab("PascalCaseExample")); // "pascal-case-example"
