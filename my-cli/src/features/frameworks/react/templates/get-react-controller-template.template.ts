// Template pour un contrôleur React (souvent un composant ou un hook)
import { IEntityJson } from "@interfaces/entity-json.model";

export function getReactControllerTemplate(entity: IEntityJson) {
  return `import React from 'react';\n\nconst ${entity.namePascalCase}Controller = () => {\n  // Logique du contrôleur React\n  return (\n    <div>\n      <h1>${entity.namePascalCase} Controller</h1>\n    </div>\n  );\n};\n\nexport default ${entity.namePascalCase}Controller;\n`;
}
