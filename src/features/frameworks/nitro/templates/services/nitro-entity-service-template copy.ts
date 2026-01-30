// import { IEntityJson } from "@parsersMdj/interfaces/entity-json.model";

// export function nitroEntityServiceTemplate(entity: IEntityJson): string {
//   return `// file: server/api/${entity.nameCamelCase}/${entity.nameCamelCase}.service.ts

// import { ${entity.nameCamelCase}Repository } from '../${entity.nameCamelCase}/${entity.nameCamelCase}.repository';

// export const ${entity.nameCamelCase}Service = {
//   // ... Le reste du code du service est identique à l'exemple précédent ...

//   // Il suffit d'importer ${entity.nameCamelCase}Repository et d'appeler ses méthodes
//   async create${entity.nameCamelCase}(email: string, name?: string) {
//     if (!email) throw new Error('Email is required.');
//     const existing${entity.nameCamelCase} = await ${entity.nameCamelCase}Repository.findByEmail(email);
//     if (existing${entity.nameCamelCase}) throw new Error('Email already exists.');
//     return ${entity.nameCamelCase}Repository.create({ email, name });
//   },

//   async getAll${entity.namePascalCase}s() {
//   return ${entity.nameCamelCase}Repository.findAll();
//   },
//   async get${entity.namePascalCase}ById(id: number) {
//   return ${entity.nameCamelCase}Repository.findById(id);
//   },
//   async update${entity.namePascalCase}(id: number, data: { name?: string; email?: string }) {
//     if (data.email) {
//       const existing${entity.nameCamelCase} = await ${entity.nameCamelCase}Repository.findByEmail(data.email);
//       if (existing${entity.nameCamelCase} && existing${entity.nameCamelCase}.id !== id) throw new Error('Email already exists.');
//     }
//     return ${entity.nameCamelCase}Repository.update(id, data);
//   },
//   async delete${entity.nameCamelCase}(id: number) { return ${entity.nameCamelCase}Repository.delete(id); },
// };`;
// }
// types/base-entity.types.ts - Fichier à créer une seule fois
export interface BaseEntity {
  id: number;
  email: string;
  name?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CreateEntityData {
  email: string;
  name?: string;
  [key: string]: any;
}

export interface UpdateEntityData {
  name?: string;
  email?: string;
  [key: string]: any;
}

export interface GenericRepository<T extends BaseEntity> {
  findByEmail(email: string): Promise<T | null>;
  create(data: CreateEntityData): Promise<T>;
  findAll(): Promise<T[]>;
  findById(id: number): Promise<T | null>;
  update(id: number, data: UpdateEntityData): Promise<T>;
  delete(id: number): Promise<boolean>;
}

// template/nitro-entity-service.template.ts
import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function nitroEntityServiceTemplate(entity: IEntityJson): string {
  return `// file: server/api/${entity.nameCamelCase}/${entity.nameCamelCase}.service.ts
import { ${entity.nameCamelCase}Repository } from './${entity.nameCamelCase}.repository';
import { BaseEntity, CreateEntityData, UpdateEntityData } from '~/types/base-entity.types';

// Interface pour l'entité ${entity.namePascalCase}
export interface ${entity.namePascalCase} extends BaseEntity {
  id: number;
  email: string;
  name?: string;
  // TODO: Ajoutez ici les propriétés spécifiques à ${entity.namePascalCase}
}

// Interface pour la création
export interface Create${entity.namePascalCase}Data extends CreateEntityData {
  email: string;
  name?: string;
  // TODO: Ajoutez ici les champs spécifiques pour la création
}

// Interface pour la mise à jour
export interface Update${entity.namePascalCase}Data extends UpdateEntityData {
  name?: string;
  email?: string;
  // TODO: Ajoutez ici les champs spécifiques pour la mise à jour
}

export const ${entity.nameCamelCase}Service = {
  /**
   * Crée un nouveau ${entity.nameCamelCase}
   */
  async create${entity.namePascalCase}(email: string, name?: string): Promise<${entity.namePascalCase}> {
    if (!email?.trim()) {
      throw new Error('Email is required and cannot be empty.');
    }

    // Validation de l'email
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('Invalid email format.');
    }

    const existing${entity.namePascalCase} = await ${entity.nameCamelCase}Repository.findByEmail(email);
    if (existing${entity.namePascalCase}) {
      throw new Error('Email already exists.');
    }

    return ${entity.nameCamelCase}Repository.create({ 
      email: email.trim(), 
      name: name?.trim() 
    });
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
  async get${entity.namePascalCase}ById(id: number): Promise<${entity.namePascalCase} | null> {
    if (!id || id <= 0) {
      throw new Error('Valid ID is required.');
    }
    return ${entity.nameCamelCase}Repository.findById(id);
  },

  /**
   * Met à jour un ${entity.nameCamelCase}
   */
  async update${entity.namePascalCase}(id: number, data: Update${entity.namePascalCase}Data): Promise<${entity.namePascalCase}> {
    if (!id || id <= 0) {
      throw new Error('Valid ID is required.');
    }

    if (!data || Object.keys(data).length === 0) {
      throw new Error('Update data is required.');
    }

    // Validation de l'email s'il est fourni
    if (data.email) {
      const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
      if (!emailRegex.test(data.email)) {
        throw new Error('Invalid email format.');
      }

      const existing${entity.namePascalCase} = await ${entity.nameCamelCase}Repository.findByEmail(data.email);
      if (existing${entity.namePascalCase} && existing${entity.namePascalCase}.id !== id) {
        throw new Error('Email already exists.');
      }
    }

    // Nettoyer les données
    const cleanData = {
      ...data,
      email: data.email?.trim(),
      name: data.name?.trim()
    };

    return ${entity.nameCamelCase}Repository.update(id, cleanData);
  },

  /**
   * Supprime un ${entity.nameCamelCase}
   */
  async delete${entity.namePascalCase}(id: number): Promise<boolean> {
    if (!id || id <= 0) {
      throw new Error('Valid ID is required.');
    }
    return ${entity.nameCamelCase}Repository.delete(id);
  }
};

export default ${entity.nameCamelCase}Service;`;
}

// Exemple d'utilisation du template
/*
// Pour générer le service User
const userEntity = {
  nameCamelCase: 'user',
  namePascalCase: 'User'
};

const userServiceCode = nitroEntityServiceTemplate(userEntity);
// Écrire userServiceCode dans server/api/user/user.service.ts

// Pour générer le service Product
const productEntity = {
  nameCamelCase: 'product',
  namePascalCase: 'Product'
};

const productServiceCode = nitroEntityServiceTemplate(productEntity);
// Écrire productServiceCode dans server/api/product/product.service.ts
*/
