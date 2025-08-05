/**
 * Generates an Angular service template string.
 * @param name The name of the service.
 * @returns The Angular service template string.
 */
export function angularServiceTemplate(name: string): string {
  return `import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ${name}Service {
  constructor() { }
}
`;
}
