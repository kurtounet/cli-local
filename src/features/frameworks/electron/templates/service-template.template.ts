export function getServiceTemplate(name: string): string {
  return `import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ${name}Service {
  constructor() { }
}
`;
}
