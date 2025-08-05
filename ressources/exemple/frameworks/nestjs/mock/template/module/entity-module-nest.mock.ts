import { IEntityJson } from '@interfaces/entityJson.interface';

export function entityModuleNestMock(entity: IEntityJson): string {
    return `import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ${entity.namePascalCase} } from './entity/${entity.nameKebabCase}.entity';
import { ${entity.namePascalCase}Controller } from './controller/${entity.nameKebabCase}.controller';
import { ${entity.namePascalCase}Service } from './service/${entity.nameKebabCase}.service';

@Module({
  imports: [TypeOrmModule.forFeature([${entity.namePascalCase}])],
  providers: [${entity.namePascalCase}Service],
  controllers: [${entity.namePascalCase}Controller],
  exports: [${entity.namePascalCase}Service],
})
export class ${entity.namePascalCase}Module {}
`;
}
/*
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
*/
