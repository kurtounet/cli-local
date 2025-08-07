import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function nitroEntityServiceTemplate(entity: IEntityJson): string {
  return `// file: server/api/${entity.nameCamelCase}/${entity.nameCamelCase}.service.ts
import { ${entity.nameCamelCase}Repository } from './${entity.nameCamelCase}.repository';

// Interface pour l'entité ${entity.namePascalCase}
export interface I${entity.namePascalCase} {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
  // TODO: Ajoutez ici les propriétés spécifiques à ${entity.namePascalCase}
}

// Interface pour la création
export interface ICreate${entity.namePascalCase}Data {
  // TODO: Ajoutez ici les champs spécifiques pour la création
  [key: string]: any;
}

// Interface pour la mise à jour
export interface IUpdate${entity.namePascalCase}Data {
  // TODO: Ajoutez ici les champs spécifiques pour la mise à jour
  [key: string]: any;
}

export const ${entity.nameCamelCase}Service = {
  /**
   * Crée un nouveau ${entity.nameCamelCase}
   */
  async create${entity.namePascalCase}(data: ICreate${entity.namePascalCase}Data): Promise<I${entity.namePascalCase}> {
    if (!data || Object.keys(data).length === 0) {
      throw new Error('${entity.namePascalCase} data is required.');
    }

    // TODO: Ajoutez ici les validations spécifiques à votre entité
    // Exemple: if (!data.email) throw new Error('Email is required.');

    return ${entity.nameCamelCase}Repository.create(data);
  },

  /**
   * Récupère tous les ${entity.nameCamelCase}s
   */
  async getAll${entity.namePascalCase}s(): Promise<I${entity.namePascalCase}[]> {
    return ${entity.nameCamelCase}Repository.findAll();
  },

  /**
   * Récupère un ${entity.nameCamelCase} par son ID
   */
  async get${entity.namePascalCase}ById(id: number): Promise<I${entity.namePascalCase} | null> {
    if (!id || id <= 0) {
      throw new Error('Valid ID is required.');
    }
    return ${entity.nameCamelCase}Repository.findById(id);
  },

  /**
   * Met à jour un ${entity.nameCamelCase}
   */
  async update${entity.namePascalCase}(id: number, data: IUpdate${entity.namePascalCase}Data): Promise<I${entity.namePascalCase}> {
    if (!id || id <= 0) {
      throw new Error('Valid ID is required.');
    }

    if (!data || Object.keys(data).length === 0) {
      throw new Error('Update data is required.');
    }

    // TODO: Ajoutez ici les validations spécifiques à votre entité
    // Exemple: validation d'unicité, format, etc.

    return ${entity.nameCamelCase}Repository.update(id, data);
  },

  /**
   * Supprime un ${entity.nameCamelCase}
   */
  async delete${entity.namePascalCase}(id: number): Promise<boolean> {
    if (!id || id <= 0) {
      throw new Error('Valid ID is required.');
    }
    return ${entity.nameCamelCase}Repository.delete(id);
  },

  /**
   * Recherche des ${entity.nameCamelCase}s selon des critères
   */
  async search${entity.namePascalCase}s(criteria: Partial<I${entity.namePascalCase}>): Promise<I${entity.namePascalCase}[]> {
    if (!criteria || Object.keys(criteria).length === 0) {
      return this.getAll${entity.namePascalCase}s();
    }
    return ${entity.nameCamelCase}Repository.findByCriteria(criteria);
  }
};

export default ${entity.nameCamelCase}Service;`;
}