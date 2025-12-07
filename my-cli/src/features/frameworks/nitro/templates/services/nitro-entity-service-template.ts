import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function nitroEntityServiceTemplate(entity: IEntityJson): string {
  return `import { createError } from "h3";
import { ${entity.namePascalCase}Repository } from "./${entity.nameKebabCase}.repository";
import type { ${entity.namePascalCase}Insert, ${entity.namePascalCase}Update } from "./${entity.nameKebabCase}.repository";

export class ${entity.namePascalCase}Service {
  private readonly ${entity.nameCamelCase}Repository = new ${entity.namePascalCase}Repository();
  
  async findAll() {
    return await this.${entity.nameCamelCase}Repository.findAll();
  }

  async findById(id: number) {
    const ${entity.nameCamelCase} = await this.${entity.nameCamelCase}Repository.findById(id); 
    if (!${entity.nameCamelCase}) {
      throw createError({
        statusCode: 404,
        statusMessage: 'findById failed, ${entity.namePascalCase} not found.',
      })
    }       
    return ${entity.nameCamelCase};
  }

  async create(data: ${entity.namePascalCase}Insert) {
    /*
      if (!data.name || !data.email) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Le nom et l’email sont obligatoires.',
      });
    }
    */
    return await this.${entity.nameCamelCase}Repository.create(data);
  }


  async update(id: number, data: ${entity.namePascalCase}Update) {
    const ${entity.nameCamelCase} = await this.${entity.nameCamelCase}Repository.findById(id);
    if (!${entity.nameCamelCase}) {
      throw createError({
        statusCode: 404, 
        statusMessage: "Update failed: ${entity.namePascalCase} not found"
      });
    }
    return await this.${entity.nameCamelCase}Repository.update(id, data);
  }

  async delete(id: number) {
    const ${entity.nameCamelCase} = await this.${entity.nameCamelCase}Repository.findById(id);
     if (!${entity.nameCamelCase}) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Delete failed: ${entity.namePascalCase} not found.',
      })
    }
    return await this.${entity.nameCamelCase}Repository.delete(id);
  }
}
`;
}
