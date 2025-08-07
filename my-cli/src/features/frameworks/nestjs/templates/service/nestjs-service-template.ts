import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function nestjsServiceTemplate(entity: IEntityJson): string {
  return `import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { ${entity.namePascalCase} } from '../entity/${entity.nameKebabCase}.entity';
import { Create${entity.namePascalCase}Dto } from '../dto/create-${entity.nameKebabCase}.dto';
import { Update${entity.namePascalCase}Dto } from '../dto/update-${entity.nameKebabCase}.dto';
import { Response${entity.namePascalCase}Dto } from '../dto/response-${entity.nameKebabCase}.dto';

@Injectable()
export class ${entity.namePascalCase}Service {
  constructor(
    @InjectRepository(${entity.namePascalCase})
    private readonly ${entity.nameCamelCase}Repository: Repository<${entity.namePascalCase}>,
  ) {}

  async create(create${entity.namePascalCase}Dto: Create${entity.namePascalCase}Dto): Promise<${entity.namePascalCase}> {
    const ${entity.nameCamelCase} = this.${entity.nameCamelCase}Repository.create(create${entity.namePascalCase}Dto);
    return await this.${entity.nameCamelCase}Repository.save(${entity.nameCamelCase});
  }

  async findAll(): Promise<${entity.namePascalCase}[]> {
    return await this.${entity.nameCamelCase}Repository.find();
  }

  async findOne(id: number): Promise<Response${entity.namePascalCase}Dto> {
    const ${entity.nameCamelCase} = await this.${entity.nameCamelCase}Repository.findOne({ where: { id } });
    if (!${entity.nameCamelCase}) {
      throw new NotFoundException(\`${entity.namePascalCase} with ID \${id} not found\`);
    }
    return plainToInstance(Response${entity.namePascalCase}Dto, ${entity.nameCamelCase}, {
      excludeExtraneousValues: true,
    });
  }

  async update(
    id: number,
    update${entity.namePascalCase}Dto: Update${entity.namePascalCase}Dto,
  ): Promise<Response${entity.namePascalCase}Dto> {
    const ${entity.nameCamelCase} = await this.${entity.nameCamelCase}Repository.findOne({ where: { id } });

    if (!${entity.nameCamelCase}) {
      throw new NotFoundException(\`${entity.namePascalCase} with ID \${id} not found\`);
    }

    const updated${entity.namePascalCase} = this.${entity.nameCamelCase}Repository.merge(
      ${entity.nameCamelCase},
      update${entity.namePascalCase}Dto,
    );

    const saved${entity.namePascalCase} = await this.${entity.nameCamelCase}Repository.save(updated${entity.namePascalCase});
    return plainToInstance(Response${entity.namePascalCase}Dto, saved${entity.namePascalCase}, {
      excludeExtraneousValues: true,
    });
  }

  async remove(id: number): Promise<void> {
    const result = await this.${entity.nameCamelCase}Repository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(\`${entity.namePascalCase} with ID \${id} not found\`);
    }
  }
}
`;
}
