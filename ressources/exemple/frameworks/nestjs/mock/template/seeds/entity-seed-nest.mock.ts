import { IColumnJson, IEntityJson } from '@interfaces/entityJson.interface';

export function seederEntityNestjsMock(entity: IEntityJson): string {
   const seeder = generateSeeder(entity);
    const entities = '';
    return `import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ${entity.namePascalCase} } from 'src/modules/${entity.nameKebabCase}/entity/${entity.nameKebabCase}.entity';

@Injectable()
export class ${entity.namePascalCase}Seeder {
  constructor(
    @InjectRepository(${entity.namePascalCase})
    private readonly ${entity.nameCamelCase}Repository: Repository<${entity.namePascalCase}>,
  ) {}

  async seed() {
    // Vérifiez s'il y a déjà des données
    const count = await this.${entity.nameCamelCase}Repository.count();
    if (count > 0) {
      console.log('${entity.namePascalCase}s table already has data, skipping seeding');
      return;
    }

    const ${entity.nameCamelCase}s: any[] = [${seeder}];

    await this.${entity.nameCamelCase}Repository.save(${entity.nameCamelCase}s);
    console.log(\`Seeded ${entities} ${entity.nameCamelCase}s\`);
  }
}
`;
}
function generateValue(col: IColumnJson): string {
  switch (col.typeTypeScript) {
    case 'string':   return 'foo';
    case 'number':   return '42';
    case 'boolean':  return 'true';
    default:         return '';
  }
}


export function generateSeeder(entity: IEntityJson): string {
    const seed: Record<string, string> = {};  
    entity.columns?.map((column: IColumnJson) => {
        seed[column.name] = generateValue(column);
    })    
    return JSON.stringify(seed);
}
