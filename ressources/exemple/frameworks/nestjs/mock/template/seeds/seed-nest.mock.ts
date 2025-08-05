import { IEntityJson } from '@interfaces/entityJson.interface';

export function seedNestjsMock(entities: IEntityJson[]): string {
    let awaitSeeder: string[] = [];
    let importEntitiesSeeder: string[] = [];
    let constSeeder: string[] = [];
    entities.map((entity: IEntityJson) => {
        importEntitiesSeeder.push(
            `import { ${entity.namePascalCase}Seeder } from './${entity.nameKebabCase}.seeder';`,
        );
        constSeeder.push(
            ` const ${entity.nameCamelCase}Seeder = app.get<${entity.namePascalCase}Seeder>(${entity.namePascalCase}Seeder);`,
        );
        awaitSeeder.push(` await ${entity.nameCamelCase}Seeder.seed();`);
    });

    return `import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';

// Dynamic imports
${importEntitiesSeeder.join('\n')}

// Importez d'autres seeders si nécessaire

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);

  // Récupérer les seeders
  ${constSeeder.join('\n ')}

  // Exécutez vos seeders
  //await userSeeder.seed();
  ${awaitSeeder.join('\n ')}
  // Ajoutez d'autres seeders ici

  console.log('Seeds completed!');
  await app.close();
}
bootstrap();
`;
}

/* 
import { IEntityJson } from "@interfaces/entityJson.interface";

export function seedModuleNestjsMock(entities: IEntityJson[]): string {
let importEntities: string[] = [];
let importEntitiesSeeder: string[] = [];
let entitiesSeeder: string[] = [];
  entities.map((entity: IEntityJson) => {
    importEntities.push(`import { ${entity.namePascalCase} } from 'src/modules/${entity.nameKebabCase}/entity/${entity.nameKebabCase}.entity';`);
    importEntitiesSeeder.push(`import { ${entity.namePascalCase}Seeder } from './${entity.nameKebabCase}.seeder';`);
    entitiesSeeder.push(`${entity.namePascalCase}Seeder`);
  });

  return `import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/modules/user/entity/user.entity';
import { UserSeeder } from './user.seeder';
${importEntities.join(',\n ')}
${importEntitiesSeeder.join(',\n ')}

// Importez d'autres entités et seeders

@Module({
  imports: [
    TypeOrmModule.forFeature([${importEntities.join(',\n ')}]), // Ajoutez d'autres entités
  ],
  providers: [${entitiesSeeder.join(',\n ')}], // Ajoutez d'autres seeders
  exports: [${entitiesSeeder.join(',\n ')}], // Exportez vos seeders
})
export class SeedModule {}`;
}
*/
