import {
  IColumnJson,
  IEntityJson,
  IRelation,
} from "@parsersMdj/models/entity-json.model";
import { snakeToCamel, snakeToKebab, snakeToPascal } from "@utils/convert";

const n = "\n";
const indent = "  ";

type TProperty = {
  name: string;
  nullable: string;
  tsType: string;
  decorators: string[];
};

/**
 * Generates the full NestJS entity file content as a string.
 * @param entity - The JSON representation of the entity.
 * @returns The complete entity file content.
 */
export function nestjsEntityTemplate(entity: IEntityJson): string {
  const typeormImports = new Set<string>(["Entity", "PrimaryGeneratedColumn"]);
  const entityImports = new Set<string>();
  let dtoProperties: TProperty[] = [];

  // Process columns
  entity.columns?.forEach((column: IColumnJson) => {
    const { decorators, typeormImports: colImports } =
      getColumnsDecorators(column);
    colImports.forEach((imp) => {
      typeormImports.add(imp);
    });
    const property: TProperty = {
      name: column.name,
      nullable: column.nullable ? "?" : "!",
      tsType: column.typeTypeScript,
      decorators: decorators,
    };
    dtoProperties.push(property);
  });

  // Process relationships
  const {
    relations: relationStrings,
    entityImports: relEntityImports,
    typeormImports: relTypeormImports,
  } = getRelationShips(entity);

  relEntityImports.forEach((imp) => entityImports.add(imp));
  relTypeormImports.forEach((imp) => {
    if (imp != "Unknown Relation") {
      typeormImports.add(imp);
    }
  });

  // Build import statements
  const allImports = [
    `import { ApiProperty } from '@nestjs/swagger';`,
    `import {${n}${indent}${[...typeormImports].sort().join(`,${n}${indent}`)},${n}} from 'typeorm';`,
    ...[...entityImports].sort(),
  ];

  return `${allImports.join("\n")}\n\n@Entity('${entity.tableName}')
export class ${entity.namePascalCase} {
${dtoProperties
  .map(
    (property: TProperty) =>
      `${indent}${property.decorators.join(`\n${indent}`)}\n${indent}${property.name}${property.nullable}: ${property.tsType};`,
  )
  .join("\n\n")}
${relationStrings.length > 0 ? "\n" + relationStrings.join("\n\n") : ""}
}
`;
}

/**
 * Builds an import statement for a related entity.
 * @param entityName - The snake_case name of the entity to import.
 * @returns A full import statement string.
 */
export function buildImportEntity(entityName: string): string {
  const pascalName = snakeToPascal(entityName);
  const kebabName = snakeToKebab(entityName);
  return `import { ${pascalName} } from 'src/modules/${kebabName}/entity/${kebabName}.entity';`;
}

/**
 * Processes all relationships for an entity.
 * @param entity - The JSON representation of the entity.
 * @returns An object containing relation strings and required imports.
 */
export function getRelationShips(entity: IEntityJson): {
  relations: string[];
  entityImports: Set<string>;
  typeormImports: Set<string>;
} {
  const relations: string[] = [];
  const entityImports = new Set<string>();
  const typeormImports = new Set<string>();

  entity.relationships?.forEach((relationship: IRelation) => {
    // Add relation type decorator (e.g., 'OneToMany') to imports
    typeormImports.add(relationship.relationType);

    // Import related entities, avoiding self-imports
    if (relationship.source !== entity.tableName) {
      entityImports.add(buildImportEntity(relationship.source));
    }
    if (relationship.target !== entity.tableName) {
      entityImports.add(buildImportEntity(relationship.target));
    }

    // Handle JoinColumn for owning sides of relationships
    if (
      relationship.relationType === "ManyToOne" ||
      (relationship.relationType === "OneToOne" && relationship.owner)
    ) {
      typeormImports.add("JoinColumn");
    }

    relations.push(buildRelation(relationship, entity.tableName));
  });

  return { relations, entityImports, typeormImports };
}

/**
 * Generates decorators for a given database column.
 * @param column - The JSON representation of the column.
 * @returns An object with decorator strings and required TypeORM imports.
 */
export function getColumnsDecorators(column: IColumnJson): {
  decorators: string[];
  typeormImports: Set<string>;
} {
  const decorators: string[] = [];
  const typeormImports = new Set<string>();

  if (column.primaryKey) {
    decorators.push("@PrimaryGeneratedColumn()");
    return { decorators, typeormImports };
  }

  let decorateurColumn = "@Column";
  if (column.name.toLowerCase().includes("created_at")) {
    decorateurColumn = "@CreateDateColumn";
    typeormImports.add("CreateDateColumn");
  } else if (column.name.toLowerCase().includes("updated_at")) {
    decorateurColumn = "@UpdateDateColumn";
    typeormImports.add("UpdateDateColumn");
  } else {
    typeormImports.add("Column");
  }

  const columnOptions: string[] = [];
  const typeSqlLower = column.typeSql.toLowerCase();

  // Map SQL types to TypeORM options
  const typeMapping: { [key: string]: string } = {
    varchar: `'varchar'`,
    text: `'text'`,
    longtext: `'text'`,
    int: `'int'`,
    integer: `'integer'`,
    smallint: `'smallint'`,
    bigint: `'bigint'`,
    decimal: `'decimal'`,
    float: `'float'`,
    double: `'double'`,
    boolean: `'boolean'`,
    datetime: `'timestamp'`,
    timestamp: `'timestamp'`,
    "array<string>": `'simple-array'`,
    json: `'simple-json'`, // Use simple-json for json type
  };

  if (typeMapping[typeSqlLower]) {
    columnOptions.push(`type: ${typeMapping[typeSqlLower]}`);
  }

  if (typeSqlLower === "varchar" && column.length) {
    columnOptions.push(`length: ${column.length}`);
  }

  if (column.nullable) {
    columnOptions.push(`nullable: true`);
  }
  if (column.unique) {
    columnOptions.push(`unique: true`);
  }

  const optionsString =
    columnOptions.length > 0 ? `{ ${columnOptions.join(", ")} }` : "";
  decorators.push(`${decorateurColumn}(${optionsString})`);

  return { decorators, typeormImports };
}

/**
 * Builds the string for a single relationship decorator and property.
 * @param relation - The relation object.
 * @param currentEntityTableName - The table name of the current entity being generated.
 * @returns A formatted string representing the entity relationship.
 */
export function buildRelation(
  relation: IRelation,
  currentEntityTableName: string,
): string {
  const { relationType, source, target, owner } = relation;
  const isOwningSide = owner === true;

  // Determine the target entity for the relation from the perspective of the current entity
  const targetEntityTableName =
    source === currentEntityTableName ? target : source;
  const targetPascal = snakeToPascal(targetEntityTableName);
  const targetCamel = snakeToCamel(targetEntityTableName);

  let relationString = "";
  let apiPropertyOptions = `type: () => ${targetPascal}`;
  let propertyType = targetPascal;
  let propertyName = targetCamel;

  // Determine the inverse side property name on the target entity
  let inverseSideProperty: string;

  switch (relationType) {
    case "OneToOne":
    case "OneToMany":
      // For OneToOne and OneToMany, the inverse side property on the target entity
      // is the camelCase version of the *current entity's table name*.
      inverseSideProperty = snakeToCamel(currentEntityTableName);
      // If the inverse side is a OneToMany, it should be plural on the target entity.
      if (relationType === "OneToMany") {
        propertyName += "s";
        propertyType += "[]";
        apiPropertyOptions += ", isArray: true";
      }
      break;
    case "ManyToOne":
    case "ManyToMany":
      // For ManyToOne and ManyToMany, the inverse side property on the target entity
      // is the camelCase version of the *source entity's table name*.
      inverseSideProperty = snakeToCamel(source);
      // If the inverse side is a ManyToMany, it should be plural on the target entity.
      if (relationType === "ManyToMany") {
        propertyName += "s";
        propertyType += "[]";
        apiPropertyOptions += ", isArray: true";
      }
      break;
    default:
      inverseSideProperty = "unknownRelation"; // Fallback
  }

  switch (relationType) {
    case "OneToOne":
      relationString = `@OneToOne(() => ${targetPascal}, (${targetCamel}) => ${targetCamel}.${inverseSideProperty})`;
      if (isOwningSide) {
        relationString += `\n${indent}@JoinColumn()`;
      }
      break;
    case "OneToMany":
      relationString = `@OneToMany(() => ${targetPascal}, (${targetCamel}) => ${targetCamel}.${inverseSideProperty})`;
      break;

    case "ManyToOne":
      relationString = `@ManyToOne(() => ${targetPascal}, (${targetCamel}) => ${targetCamel}.${inverseSideProperty})`;
      relationString += `\n${indent}@JoinColumn({ name: '${targetCamel}_id' })`;
      break;

    case "ManyToMany":
      relationString = `@ManyToMany(() => ${targetPascal}, (${targetCamel}) => ${targetCamel}.${inverseSideProperty})`;
      break;
  }

  return `${indent}${relationString}\n${indent}@ApiProperty({ ${apiPropertyOptions} })\n${indent}${propertyName}: ${propertyType};`;
}
