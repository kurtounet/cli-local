export function getModuleTemplate(name: string): string {
  return `import { Module } from '@nestjs/common';
import { User } from './user.entity';
import { ${name}Controller } from './${name}.controller';
import { ${name}Service } from './${name}.service';

@Module({
  controllers: [${name}Controller],
  providers: [${name}Service],
})
export class ${name}Module {}
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
