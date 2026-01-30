import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function nestjsUpdateDtoTemplate(entity: IEntityJson): string {
  return `import { PartialType } from '@nestjs/swagger';
import { Create${entity.namePascalCase}Dto } from './create-${entity.nameKebabCase}.dto';

export class Update${entity.namePascalCase}Dto extends PartialType(Create${entity.namePascalCase}Dto) {};`;
}
