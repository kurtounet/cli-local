/**
 * Generates an Angular module template string.
 * @param name The name of the module.
 * @returns The Angular module template string.
 */
export function angularFeautureTemplate(name: string): string {
  return `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ${name}Module { }
`;
}
