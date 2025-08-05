import { IEntityJson } from "@features/parsersMdj/interfaces/entity-json.model";

export function nestjsUserServiceTemplate(entity: IEntityJson): string {
  return `import { Injectable } from '@nestjs/common';
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
    const user = this.${entity.nameCamelCase}Repository.create(create${entity.namePascalCase}Dto);
    return await this.${entity.nameCamelCase}Repository.save(${entity.nameCamelCase});
  }  

  async findAll(): Promise<${entity.namePascalCase}[]> {
    return await this.${entity.nameCamelCase}Repository.find();
  }  

  async findOne(id: number): Promise<Response<${entity.namePascalCase}Dto> {
    const <${entity.nameCamelCase} = await this.<${entity.nameCamelCase}Repository.findOne({ where: { id } });
    if (!<${entity.nameCamelCase}) {
      throw new NotFoundException(\`${entity.namePascalCase} with ID \${id} not found\`);
    }

    return plainToInstance(Response${entity.namePascalCase}Dto, <${entity.nameCamelCase}, {
      excludeExtraneousValues: true,
    });
  }

  async update(id: number, update${entity.namePascalCase}Dto: Update${entity.namePascalCase}Dto): Promise<${entity.namePascalCase}> {
    const user = await this.findOne(id);

    // Merge the update${entity.namePascalCase}Dto with the existing ${entity.nameCamelCase}
    const updated${entity.namePascalCase} = this.${entity.nameCamelCase}Repository.merge(${entity.nameCamelCase}, update${entity.namePascalCase}Dto);

    return await this.${entity.nameCamelCase}Repository.save(updated${entity.namePascalCase});
  }

  async remove(id: number): Promise<void> {
    const result = await this.${entity.nameCamelCase}Repository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(\`User with ID \${id} not found\`);
    }
  }
}
`;
}
/*
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { ResponseUserDto } from '../dto/response-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import { plainToInstance } from 'class-transformer';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(createUserDto);
    return await this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: number): Promise<ResponseUserDto> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    // Transformer l'entité User en ResponseUserDto
    // Version corrigée avec la bonne option orthographiée
    return plainToInstance(ResponseUserDto, user, {
      excludeExtraneousValues: true,
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);

    // Merge the updateUserDto with the existing user
    const updatedUser = this.userRepository.merge(user, updateUserDto);

    return await this.userRepository.save(updatedUser);
  }

  async remove(id: number): Promise<void> {
    const result = await this.userRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.userRepository.findOne({ where: { email } });
  }

  async count(): Promise<number> {
    return await this.userRepository.count();
  }

  // Additional useful methods
  async findWithPagination(
    page: number = 1,
    limit: number = 10,
  ): Promise<{ users: User[]; total: number }> {
    const [users, total] = await this.userRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });
    return {
      users,
      total,
    };
  }
}

*/
