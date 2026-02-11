// Template pour un contrôleur NestJS

/**
 *
 * @param name
 */
export function nestjsGenericControllerTemplate(name: string) {
  return `import { Controller } from '@nestjs/common';

@Controller('${name}')
export class ${name}Controller {}
`;
}
