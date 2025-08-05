// Template pour un service React (souvent un hook ou une fonction utilitaire)
import { IEntityJson } from "@interfaces/entity-json.model";

export function getReactServiceTemplate(entity: IEntityJson) {
  return `const ${entity.namePascalCase}Service = () => {\n  // Logique du service React\n};\n\nexport default ${entity.namePascalCase}Service;\n`;
}
