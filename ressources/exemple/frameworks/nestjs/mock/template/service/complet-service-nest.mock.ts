import { IEntityJson } from '@interfaces/entityJson.interface';

export function serviceCompletNestMock(entity: IEntityJson): string {
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
    private ${entity.nameCamelCase}Repository: Repository<${entity.namePascalCase}>,
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
  ): Promise<${entity.namePascalCase}> {
    const ${entity.nameCamelCase} = await this.findOne(id);

    // Merge the update${entity.namePascalCase}Dto with the existing ${entity.nameCamelCase}
    const updated${entity.namePascalCase} = this.${entity.nameCamelCase}Repository.merge(
      ${entity.nameCamelCase},
      update${entity.namePascalCase}Dto,
    );

    return await this.${entity.nameCamelCase}Repository.save(updated${entity.namePascalCase});
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
/*
import { Injectable, NotFoundException } from '@nestjs/common';
import { Create${entity.namePascalCase}Dto } from '../dto/create-${entity.namePascalCase}.dto';
import { Update${entity.namePascalCase}Dto } from '../dto/update-${entity.namePascalCase}.dto';
import { Response${entity.namePascalCase}Dto } from '../dto/response-${entity.namePascalCase}.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ${entity.namePascalCase} } from '../entity/${entity.namePascalCase}.entity';
import { plainToInstance } from 'class-transformer';
@Injectable()
export class ${entity.namePascalCase}Service {
  constructor(
    @InjectRepository(${entity.namePascalCase})
    private ${entity.namePascalCase}Repository: Repository<${entity.namePascalCase}>,
  ) {}

  async create(create${entity.namePascalCase}Dto: Create${entity.namePascalCase}Dto): Promise<${entity.namePascalCase}> {
    const ${entity.namePascalCase} = this.${entity.namePascalCase}Repository.create(create${entity.namePascalCase}Dto);
    return await this.${entity.namePascalCase}Repository.save(${entity.namePascalCase});
  }

  async findAll(): Promise<${entity.namePascalCase}[]> {
    return await this.${entity.namePascalCase}Repository.find();
  }

  async findOne(id: number): Promise<Response${entity.namePascalCase}Dto> {
    const ${entity.namePascalCase} = await this.${entity.namePascalCase}Repository.findOne({ where: { id } });
    if (!${entity.namePascalCase}) {
      throw new NotFoundException(`${entity.namePascalCase} with ID ${id} not found`);
    }
    // Transformer l'entité ${entity.namePascalCase} en Response${entity.namePascalCase}Dto
    // Version corrigée avec la bonne option orthographiée
    return plainToInstance(Response${entity.namePascalCase}Dto, ${entity.namePascalCase}, {
      excludeExtraneousValues: true,
    });
  }

  async update(id: number, update${entity.namePascalCase}Dto: Update${entity.namePascalCase}Dto): Promise<${entity.namePascalCase}> {
    const ${entity.namePascalCase} = await this.findOne(id);

    // Merge the update${entity.namePascalCase}Dto with the existing ${entity.namePascalCase}
    const updated${entity.namePascalCase} = this.${entity.namePascalCase}Repository.merge(${entity.namePascalCase}, update${entity.namePascalCase}Dto);

    return await this.${entity.namePascalCase}Repository.save(updated${entity.namePascalCase});
  }

  async remove(id: number): Promise<void> {
    const result = await this.${entity.namePascalCase}Repository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`${entity.namePascalCase} with ID ${id} not found`);
    }
  }

  async findByEmail(email: string): Promise<${entity.namePascalCase} | null> {
    return await this.${entity.namePascalCase}Repository.findOne({ where: { email } });
  }

  async count(): Promise<number> {
    return await this.${entity.namePascalCase}Repository.count();
  }

  // Additional useful methods
  async findWithPagination(
    page: number = 1,
    limit: number = 10,
  ): Promise<{ ${entity.namePascalCase}s: ${entity.namePascalCase}[]; total: number }> {
    const [${entity.namePascalCase}s, total] = await this.${entity.namePascalCase}Repository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });
    return {
      ${entity.namePascalCase}s,
      total,
    };
  }
}

*/
