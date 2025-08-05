// Template pour un service NestJS
import { IEntityJson } from "@interfaces/entity-json.model";

export function getNestjsServiceTemplate(entity: IEntityJson) {
  return `import { Injectable } from '@nestjs/common';

@Injectable()
export class NameService {}
`;
}
