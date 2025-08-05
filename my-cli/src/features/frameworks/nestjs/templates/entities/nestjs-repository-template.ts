import { IEntityJson } from "@features/parsersMdj/interfaces/entity-json.model";

export function nestjsRepositoryTemplate(entity: IEntityJson) {
  return `import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { ${entity.namePascalCase} } from '../entity/${entity.nameKebabCase}.entity';

@Injectable()
export class ${entity.namePascalCase}Repository extends Repository<${entity.namePascalCase}> {
  constructor(private dataSource: DataSource) {
    super(${entity.namePascalCase}, dataSource.createEntityManager());
  }
  /*
  async findByName(name: string): Promise<${entity.namePascalCase} | null> {
    return this.findOne({ where: { name } });
  }
  
  async updateStock(productId: number, quantity: number): Promise<void> {
    await this.createQueryBuilder()
      .update(Product)
      .set({ stock: () => \`stock - \${quantity}\` })
      .where("id = :id", { id: productId })
      .execute();
  }
  */    
}
`;
}
