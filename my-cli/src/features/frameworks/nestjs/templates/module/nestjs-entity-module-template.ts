import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function nestjsEntityModuleTemplate(entity: IEntityJson): string {
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
