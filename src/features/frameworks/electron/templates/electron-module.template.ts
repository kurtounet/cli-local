export function getModuleTemplate(name: string): string {
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
