export interface ICaseService {
  slugify(input: string): string;
  capitalize(input: string): string;
  toCamelCase(input: string): string;
  toKebabCase(input: string): string;
  toSnakeCase(input: string): string;
  toPascalCase(input: string): string;
}
