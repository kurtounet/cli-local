// Template pour un composant React
import { IEntityJson } from "@interfaces/entity-json.model";

export function getReactComponentTemplate(entity: IEntityJson) {
  return `import React from 'react';\n\ninterface ${entity.namePascalCase}Props {\n  // Définir les props ici\n}\n\nconst ${entity.namePascalCase}Component: React.FC<${entity.namePascalCase}Props> = (props) => {\n  return (\n    <div>\n      <h1>${entity.namePascalCase} Component</h1>\n    </div>\n  );\n};\n\nexport default ${entity.namePascalCase}Component;\n`;
}
