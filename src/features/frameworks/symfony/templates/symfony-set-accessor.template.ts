import { snakeToCamel, snakeToPascal } from "@utils/convert";

/**
 *
 * @param propName
 * @param type
 */
export function symfonySetAccessorTemplate(propName: string, type: string) {
  return `public function set${snakeToPascal(propName)}(${type} $${snakeToCamel(propName)}): static
    {
        $this->${snakeToCamel(propName)} = $${snakeToCamel(propName)};
        return $this;
    }`;
}
