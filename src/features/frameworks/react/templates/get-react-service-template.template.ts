// Template pour un servicereact (souvent un hook ou une fonction utilitaire)
import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function getReactServiceTemplate(entity: IEntityJson) {
  return `const ${entity.namePascalCase}Service = () => {\n  // Logique du servicereact\n};\n\nexport default ${entity.namePascalCase}Service;\n`;
}
