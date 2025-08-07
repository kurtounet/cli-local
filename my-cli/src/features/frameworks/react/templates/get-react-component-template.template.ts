// Template pour un composantreact
import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function getReactComponentTemplate(entity: IEntityJson) {
  return `importreact from 'react';\n\ninterface ${entity.namePascalCase}Props {\n  // Définir les props ici\n}\n\nconst ${entity.namePascalCase}Component:react.FC<${entity.namePascalCase}Props> = (props) => {\n  return (\n    <div>\n      <h1>${entity.namePascalCase} Component</h1>\n    </div>\n  );\n};\n\nexport default ${entity.namePascalCase}Component;\n`;
}
