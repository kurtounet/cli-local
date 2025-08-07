// Template pour un contrôleurreact (souvent un composant ou un hook)
import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function getReactControllerTemplate(entity: IEntityJson) {
  return `importreact from 'react';\n\nconst ${entity.namePascalCase}Controller = () => {\n  // Logique du contrôleurreact\n  return (\n    <div>\n      <h1>${entity.namePascalCase} Controller</h1>\n    </div>\n  );\n};\n\nexport default ${entity.namePascalCase}Controller;\n`;
}
