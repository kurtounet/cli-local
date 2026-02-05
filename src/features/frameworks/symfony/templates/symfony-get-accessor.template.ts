import { snakeToCamel, snakeToPascal } from "@utils/convert";

/**
 *
 * @param propName
 * @param type
 */
export function symfonyGetAccessorTemplate(propName: string, type: string) {
  return `public function get${snakeToPascal(propName)}(): ?${type}
    {
        return $this->${snakeToCamel(propName)};
    }
 `;
}
// public function getStatus(): ?Status
//     {
//         return $this->status;
//     }

//     public function setStatus(?Status $status): static
//     {
//         $this->status = $status;
//         return $this;
//     }
