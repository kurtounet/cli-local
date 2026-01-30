import { snakeToCamel, snakeToPascal } from "@utils/convert";

export function symfonyGetAccessorTemplate(propName: string, type: string) {
  return `public function get${snakeToPascal(propName)}(): ?${type}
    {
        return $this->${snakeToCamel(propName)};
    }
 `;
}
