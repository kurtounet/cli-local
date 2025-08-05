import { snakeToCamel, snakeToPascal } from "@utils/convert";
import { symfonyGetPropertyType } from "../utils/mapping";

export function symfonySetAccessorTemplate(propName: string, type: string) {
  const propertyType = symfonyGetPropertyType(type);
  return `
  public function set${snakeToPascal(propName)}(${propertyType} $${snakeToCamel(propName)}): static
    {
        $this->${snakeToCamel(propName)} = $${snakeToCamel(propName)};
        return $this;
    }`;
}
