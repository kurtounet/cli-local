import { snakeToCamel, snakeToPascal } from "@utils/convert";
import { symfonyGetPropertyType } from "../utils/mapping";

export function symfonyGetAccessorTemplate(propName: string, type: string) {
  const propertyType = symfonyGetPropertyType(type);
  return `
    public function get${snakeToPascal(propName)}(): ?${propertyType}
    {
        return $this->${snakeToCamel(propName)};
    }
 `;
}
