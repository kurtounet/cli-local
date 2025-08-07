import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function nestjsControlleTemplate(entity: IEntityJson): string {
  return `import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { ${entity.namePascalCase}Service } from '../service/${entity.nameKebabCase}.service';
import { Create${entity.namePascalCase}Dto } from '../dto/create-${entity.nameKebabCase}.dto';
import { Update${entity.namePascalCase}Dto } from '../dto/update-${entity.nameKebabCase}.dto';

@Controller('${entity.tableName}')
export class ${entity.namePascalCase}Controller {
  constructor(private readonly ${entity.nameCamelCase}Service: ${entity.namePascalCase}Service) {}

  @Post()
  create(@Body() create${entity.namePascalCase}Dto: Create${entity.namePascalCase}Dto) {
    return this.${entity.nameCamelCase}Service.create(create${entity.namePascalCase}Dto);
  }

  @Get()
  findAll() {
    return this.${entity.nameCamelCase}Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.${entity.nameCamelCase}Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() update${entity.namePascalCase}Dto: Update${entity.namePascalCase}Dto) {
    return this.${entity.nameCamelCase}Service.update(+id, update${entity.namePascalCase}Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.${entity.nameCamelCase}Service.remove(+id);
  }
}`;
}
