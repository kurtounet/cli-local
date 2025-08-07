import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function nestjsUpdateDtoTemplate(entity: IEntityJson): string {
  console.log("updateDto", entity.namePascalCase);
  return `import { PartialType } from '@nestjs/mapped-types';
import { Create${entity.namePascalCase}Dto } from './create-${entity.nameKebabCase}.dto';

export class Update${entity.namePascalCase}Dto extends PartialType(Create${entity.namePascalCase}Dto) {}`;
}
