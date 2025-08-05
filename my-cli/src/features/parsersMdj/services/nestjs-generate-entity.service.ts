import {
  IEntityJson,
  IColumnJson,
  IRelation,
} from "../interfaces/entity-json.model";

function pluralize(name: string): string {
  if (name.endsWith("y")) {
    return name.slice(0, -1) + "ies";
  }
  if (name.endsWith("s")) {
    return name + "es";
  }
  return name + "s";
}

function getImports(entity: IEntityJson, allEntities: IEntityJson[]): string {
  const imports = new Set<string>();

  imports.add(
    "import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany } from 'typeorm';",
  );

  if (entity.relationships) {
    const processedTargets = new Set<string>();
    for (const rel of entity.relationships) {
      if (processedTargets.has(rel.target)) continue;

      const targetEntity = allEntities.find((e) => e.tableName === rel.target);
      if (
        targetEntity &&
        targetEntity.namePascalCase !== entity.namePascalCase
      ) {
        imports.add(
          `import { ${targetEntity.namePascalCase} } from './${targetEntity.nameKebabCase}.entity';`,
        );
        processedTargets.add(rel.target);
      }
    }
  }

  return Array.from(imports).join("\n");
}

function getColumnDecorators(column: IColumnJson): string {
  if (column.primaryKey) {
    return "@PrimaryGeneratedColumn()";
  }

  const options: string[] = [];
  if (column.typeSql) options.push(`type: '${column.typeSql}'`);
  if (column.length) options.push(`length: ${column.length}`);
  if (column.nullable) options.push("nullable: true");
  if (column.unique) options.push("unique: true");

  return `@Column({ ${options.join(", ")} })`;
}

function getRelationDecorators(
  relation: IRelation,
  currentEntity: IEntityJson,
  allEntities: IEntityJson[],
): string {
  const targetEntity = allEntities.find((e) => e.tableName === relation.target);
  if (!targetEntity) {
    return `// Relation to ${relation.target} could not be resolved`;
  }

  const targetEntityPascal = targetEntity.namePascalCase;
  const targetEntityCamel = targetEntity.nameCamelCase;

  switch (relation.relationType) {
    case "ManyToOne": {
      const inversePropertyName = pluralize(currentEntity.nameCamelCase);
      return `@ManyToOne(() => ${targetEntityPascal}, ${targetEntityCamel} => ${targetEntityCamel}.${inversePropertyName})`;
    }
    case "OneToMany": {
      const inversePropertyName = currentEntity.nameCamelCase;
      return `@OneToMany(() => ${targetEntityPascal}, ${targetEntityCamel} => ${targetEntityCamel}.${inversePropertyName})`;
    }
    default:
      return "";
  }
}

export function generateEntityFileContent(
  entity: IEntityJson,
  allEntities: IEntityJson[],
): string {
  const { namePascalCase, tableName, columns, relationships } = entity;

  const classProperties = columns
    ?.map(
      (column) =>
        `  ${getColumnDecorators(column)}\n  ${column.name}: ${column.typeTypeScript};`,
    )
    .join("\n\n");

  const processedRelations = new Set<string>();
  const relationProperties = relationships
    ?.map((rel) => {
      const key = rel.target + rel.relationType;
      if (processedRelations.has(key)) return null;
      processedRelations.add(key);

      const targetEntity = allEntities.find((e) => e.tableName === rel.target);
      if (!targetEntity) return "";

      const propertyName =
        rel.relationType === "OneToMany"
          ? pluralize(targetEntity.nameCamelCase)
          : targetEntity.nameCamelCase;
      const propertyType =
        rel.relationType === "OneToMany"
          ? `${targetEntity.namePascalCase}[]`
          : targetEntity.namePascalCase;

      return `  ${getRelationDecorators(rel, entity, allEntities)}\n  ${propertyName}: ${propertyType};`;
    })
    .filter(Boolean)
    .join("\n\n");

  return `\n${getImports(entity, allEntities)}\n\n@Entity({ name: '${tableName}' })\nexport class ${namePascalCase} extends BaseEntity {\n\n${classProperties}\n\n${relationProperties}\n\n}\n`;
}
