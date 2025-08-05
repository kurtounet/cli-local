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

export function camelCase(str: string): string {
  return str.replace(/[-_\s](.)/g, (_, c) => c.toUpperCase());
}

export function pascalCase(str: string): string {
  return capitalize(camelCase(str));
}
