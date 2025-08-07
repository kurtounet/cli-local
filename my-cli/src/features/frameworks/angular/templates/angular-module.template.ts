// Template pour un module Angular
import { IEntityJson } from "@parsersMdj/models/entity-json.model";

/**
 * Generates an Angular module template.
 * @param entity The entity JSON object.
 * @returns The Angular module template string.
 */
export function angularModuleTemplate(entity: IEntityJson) {
  return `import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\n\n@NgModule({\n  declarations: [],\n  imports: [\n    CommonModule\n  ]\n})\nexport class ${entity.namePascalCase}Module {}\n`;
}
