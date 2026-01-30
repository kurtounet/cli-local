import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function nestjsServiceTemplate(entity: IEntityJson): string {
  return `import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ${entity.namePascalCase} } from '../entity/${entity.nameKebabCase}.entity';
import { Create${entity.namePascalCase}Dto } from '../dto/create-${entity.nameKebabCase}.dto';
import { Update${entity.namePascalCase}Dto } from '../dto/update-${entity.nameKebabCase}.dto';
import { Response${entity.namePascalCase}Dto } from '../dto/response-${entity.nameKebabCase}.dto';

@Injectable()
export class ${entity.namePascalCase}Service {
  constructor(
    @InjectRepository(${entity.namePascalCase})
    private ${entity.nameCamelCase}Repository: Repository<${entity.namePascalCase}>,
  ) {}

  create(create${entity.namePascalCase}Dto: Create${entity.namePascalCase}Dto) {
    return 'This action adds a new test';
  }

  findAll() {
    return \`This action returns all ${entity.namePascalCase}\`;
  }

  findOne(id: number) {
    return \`This action returns a #\${id} ${entity.namePascalCase}\`;
  }

  update(id: number, update${entity.namePascalCase}Dto: Update${entity.namePascalCase}Dto) {
    return \`This action updates a #\${id} ${entity.namePascalCase}\`;
  }

  remove(id: number) {
    return \`This action removes a #\${id} ${entity.namePascalCase}\`;
  }
}
`;
}
