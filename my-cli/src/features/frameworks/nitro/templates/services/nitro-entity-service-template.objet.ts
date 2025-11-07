import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function nitroEntityServiceTemplate(entity: IEntityJson): string {
  return `import type {
  ICreate${entity.namePascalCase}Data,
  IUpdate${entity.namePascalCase}Data,
  I${entity.namePascalCase},
} from './${entity.nameKebabCase}.repository'
import ${entity.namePascalCase}Repository from './${entity.nameKebabCase}.repository'

export const ${entity.namePascalCase}Service = {
  async create(data: ICreate${entity.namePascalCase}Data): Promise<I${entity.namePascalCase}> {
    if (!data || Object.keys(data).length === 0) {
      throw new Error('${entity.namePascalCase} data is required.')
    }
    // TODO: Add validation logic here
    return ${entity.namePascalCase}Repository.create(data)
  },

  async findAll(): Promise<I${entity.namePascalCase}[]> {
    return ${entity.namePascalCase}Repository.findAll()
  },

  async getById(id: number): Promise<I${entity.namePascalCase} | null> {
    if (!id || id <= 0) {
      throw new Error('Valid ID is required.')
    }
    return ${entity.namePascalCase}Repository.findById(id)
  },

  async update(id: number, data: IUpdate${entity.namePascalCase}Data): Promise<I${entity.namePascalCase}> {
    if (!id || id <= 0) {
      throw new Error('Valid ID is required.')
    }
    if (!data || Object.keys(data).length === 0) {
      throw new Error('Update data is required.')
    }
    // TODO: Add validation logic here
    return ${entity.namePascalCase}Repository.update(id, data)
  },

  async delete(id: number): Promise<boolean> {
    if (!id || id <= 0) {
      throw new Error('Valid ID is required.')
    }
    return ${entity.namePascalCase}Repository.delete(id)
  },

  async search(criteria: Partial<I${entity.namePascalCase}>): Promise<I${entity.namePascalCase}[]> {
    if (!criteria || Object.keys(criteria).length === 0) {
      return this.getAll()
    }
    return ${entity.namePascalCase}Repository.findByCriteria(criteria)
  },
}
export default ${entity.namePascalCase}Service
}`;
}
