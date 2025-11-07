import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function drizzleEntityRepositoryTemplate(entity: IEntityJson): string {
  return `//server/api/${entity.nameKebabCase}/${entity.nameKebabCase}.repository.ts
import { db } from '../../database/db';
import * as schemas from '../../database/schemas/${entity.nameKebabCase}.schema';
import { BaseRepository } from '../../repository/base-repository.repository';

// Créez des types spécifiques pour les DTO (Data Transfer Objects)
export type ${entity.namePascalCase} = typeof schemas.${entity.nameCamelCase}.$inferSelect;
export type ${entity.namePascalCase}Insert = typeof schemas.${entity.nameCamelCase}.$inferInsert;
export type ${entity.namePascalCase}Update = Partial<${entity.namePascalCase}Insert>;

// Étendez la classe de base en passant la table et les types correspondants
export class ${entity.namePascalCase}Repository extends BaseRepository<typeof schemas.${entity.nameCamelCase}, ${entity.namePascalCase}, ${entity.namePascalCase}Insert> {
    constructor() {
        super(db, schemas.${entity.nameCamelCase});
    }
}`;
}
