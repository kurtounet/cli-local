import { IEntityJson } from '@interfaces/entityJson.interface';

export function seedModuleNestjsMock(entities: IEntityJson[]): string {
    let importEntities: string[] = [];
    let entitiesOrm: string[] = [];
    let importEntitiesSeeder: string[] = [];
    let entitiesSeeder: string[] = [];
    entities.map((entity: IEntityJson) => {
        importEntities.push(
            `import { ${entity.namePascalCase} } from 'src/modules/${entity.nameKebabCase}/entity/${entity.nameKebabCase}.entity';`,
        );
        importEntitiesSeeder.push(
            `import { ${entity.namePascalCase}Seeder } from './${entity.nameKebabCase}.seeder';`,
        );
        entitiesSeeder.push(`${entity.namePascalCase}Seeder,`);
        entitiesOrm.push(`${entity.namePascalCase},`);
    });

    return `import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
${importEntities.join('\n')}
${importEntitiesSeeder.join('\n')}

// Importez d'autres entités et seeders

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ${entitiesOrm.join('\n      ')}
    ]), // Ajoutez d'autres entités
  ],
  providers: [
    ${entitiesSeeder.join('\n    ')}
  ], // Ajoutez d'autres seeders
  exports: [
    ${entitiesSeeder.join('\n    ')}
  ], // Exportez vos seeders
})
export class SeedModule {}
`;
}
