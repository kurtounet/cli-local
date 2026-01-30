import { snakeToCamel, snakeToPascal } from "@utils/convert";

export function symfonySetAccessorTemplate(propName: string, type: string) {
  return `public function set${snakeToPascal(propName)}(${type} $${snakeToCamel(propName)}): static
    {
        $this->${snakeToCamel(propName)} = $${snakeToCamel(propName)};
        return $this;
    }`;
}
