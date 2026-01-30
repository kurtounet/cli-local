// Template pour un contrôleur NestJS

export function nestjsGenericControllerTemplate(name: string) {
  return `import { Controller } from '@nestjs/common';

@Controller('${name}')
export class ${name}Controller {}
`;
}
