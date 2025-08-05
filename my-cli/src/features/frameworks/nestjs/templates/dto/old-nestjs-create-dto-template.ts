import {
  IColumnJson,
  IEntityJson,
} from "@features/parsersMdj/interfaces/entity-json.model";

const n = "\n";
const indent = "  ";
type ValidatorMapping = {
  importDecorators: string[];
  validators: Validators;
};
type Validators = {
  name: string;
  nullable: string;
  typeSql: string;
  tsType: string;
  decorators: string[];
};
export function nestjsCreateDtoTemplate(entity: IEntityJson): string {
  let dtoProperties: Validators[] = [];
  const importClassValidators = new Set<string>();

  entity.columns?.map((column: IColumnJson) => {
    let result = mapSqlTypeToValidators(column);

    result.importDecorators.map((importLine: string) =>
      importClassValidators.add(`${importLine}`),
    );
    dtoProperties.push(result.validators);
  });
  let dtoImports = [
    // `import { Type } from 'class-transformer';`,
    `import { ApiProperty } from '@nestjs/swagger';`,
    `import { ${[...importClassValidators].map((importLine: string) => importLine).join(", ")} } from 'class-validator';`,
  ];

  return `${dtoImports.map((importLine: string) => importLine).join("\n")}
export class Create${entity.namePascalCase}Dto {
${dtoProperties.map((property: Validators) => `${property.decorators.join("\n")}${n}${indent}${property.name}${property.nullable}: ${property.tsType};`).join("\n\n")}${n}}${n}`;
}

function mapSqlTypeToValidators(column: IColumnJson): ValidatorMapping {
  const type = column.typeSql.toUpperCase();
  const length = Number(column.length);
  const precision = Number(column.precision) || 2;
  let arrayImports: string[] = [];
  if (
    ["INT", "INTEGER", "SMALLINT", "TINYINT", "MEDIUMINT", "BIGINT"].includes(
      type,
    )
  ) {
    arrayImports.push("IsInt");
    return {
      importDecorators: arrayImports,
      validators: {
        name: column.name,
        nullable: column.nullable ? "?" : "!",
        typeSql: type,
        tsType: "number",
        decorators: [`${indent}@ApiProperty()`, `${indent}@IsInt()`],
      },
    };
  }
  if (["NUMERIC"].includes(type)) {
    const decorators = [
      `${indent}@IsNumber({ allowInfinity: false, allowNaN: false`,
    ];
    if (typeof precision === "number") {
      decorators[0] += `, maxDecimalPlaces: ${precision}`;
    }
    decorators[0] += " })";
    arrayImports.push("IsNumber");
    return {
      importDecorators: arrayImports,
      validators: {
        name: column.name,
        nullable: column.nullable ? "?" : "!",
        typeSql: type,
        tsType: "number",
        decorators: decorators,
      },
    };
  }
  if (["DECIMAL"].includes(type)) {
    const decorators = [
      `${indent}@IsNumber({ allowInfinity: false, allowNaN: false`,
    ];
    if (typeof precision === "number") {
      decorators[0] += `, maxDecimalPlaces: ${precision}`;
    }
    decorators[0] += " })";
    arrayImports.push("IsNumber");
    return {
      importDecorators: arrayImports,
      validators: {
        name: column.name,
        nullable: column.nullable ? "?" : "!",
        typeSql: type,
        tsType: "number",
        decorators: decorators,
      },
    };
  }

  if (["FLOAT", "REAL", "DOUBLE"].includes(type)) {
    arrayImports.push("IsNumber");
    return {
      importDecorators: arrayImports,
      validators: {
        name: column.name,
        nullable: column.nullable ? "?" : "!",
        typeSql: type,
        tsType: "number",
        decorators: [`${indent}@ApiProperty()`, `${indent}@IsNumber()`],
      },
    };
  }
  if (type.startsWith("VARCHAR")) {
    if (length) {
      arrayImports.push("IsString", "MaxLength");
    } else {
      arrayImports.push("IsString");
    }
    return {
      importDecorators: arrayImports,
      validators: {
        name: column.name,
        nullable: column.nullable ? "?" : "!",
        typeSql: type,
        tsType: "string",
        decorators: length
          ? [
              `${indent}@ApiProperty()`,
              `${indent}@IsString()`,
              `${indent}@MaxLength(${length})`,
            ]
          : [`${indent}@ApiProperty()`, `${indent}@IsString()`],
      },
    };
  }

  if (type.startsWith("CHAR")) {
    arrayImports.push("IsString");
    return {
      importDecorators: arrayImports,
      validators: {
        name: column.name,
        nullable: column.nullable ? "?" : "!",
        typeSql: type,
        tsType: "string",
        decorators: length
          ? [
              `${indent}@ApiProperty()`,
              `${indent}@IsString()`,
              `${indent}@Length(${length}, ${length})`,
            ]
          : [`${indent}@ApiProperty()`, `${indent}@IsString()`],
      },
    };
  }

  if (["TEXT", "TINYTEXT", "MEDIUMTEXT", "LONGTEXT"].includes(type)) {
    arrayImports.push("IsString");
    return {
      importDecorators: arrayImports,
      validators: {
        name: column.name,
        nullable: column.nullable ? "?" : "!",
        typeSql: type,
        tsType: "string",
        decorators: [`${indent}@ApiProperty()`, `${indent}@IsString()`],
      },
    };
  }

  if (["BOOLEAN", "BIT"].includes(type)) {
    arrayImports.push("IsBoolean");
    return {
      importDecorators: arrayImports,
      validators: {
        name: column.name,
        nullable: column.nullable ? "?" : "!",
        typeSql: type,
        tsType: "boolean",
        decorators: [`${indent}@ApiProperty()`, `${indent}@IsBoolean()`],
      },
    };
  }

  if (["DATE", "DATETIME", "TIMESTAMP"].includes(type)) {
    arrayImports.push("IsISO8601");
    return {
      importDecorators: arrayImports,
      validators: {
        name: column.name,
        nullable: column.nullable ? "?" : "!",
        typeSql: type,
        tsType: "string", // ou Date si tu fais du parsing
        decorators: [`${indent}@ApiProperty()`, `${indent}@IsISO8601()`],
      },
    };
  }

  // Valeur par défaut
  return {
    importDecorators: arrayImports,
    validators: {
      name: column.name,
      nullable: column.nullable ? "?" : "!",
      typeSql: type,
      tsType: "any",
      decorators: [],
    },
  };
}
function propertyNameToValidators(column: IColumnJson): ValidatorMapping {
  const type = column.typeSql.toUpperCase();
  const length = Number(column.length);
  const precision = Number(column.precision);
  let arrayImports: string[] = [];
  if (
    ["INT", "INTEGER", "SMALLINT", "TINYINT", "MEDIUMINT", "BIGINT"].includes(
      type,
    )
  ) {
    arrayImports.push("IsInt");
    return {
      importDecorators: arrayImports,
      validators: {
        name: column.name,
        nullable: column.nullable ? "?" : "!",
        typeSql: type,
        tsType: "number",
        decorators: [`${indent}@ApiProperty()`, `${indent}@IsInt()`],
      },
    };
  }
  if (["DECIMAL", "NUMERIC"].includes(type)) {
    const decorators = [
      `${indent}@IsNumber({ allowInfinity: false, allowNaN: false`,
    ];
    if (typeof precision === "number") {
      decorators[0] += `, maxDecimalPlaces: ${precision}`;
    }
    decorators[0] += " })";
    arrayImports.push("IsNumber");
    return {
      importDecorators: arrayImports,
      validators: {
        name: column.name,
        nullable: column.nullable ? "?" : "!",
        typeSql: type,
        tsType: "number",
        decorators: decorators,
      },
    };
  }

  if (["FLOAT", "REAL", "DOUBLE"].includes(type)) {
    arrayImports.push("IsNumber");
    return {
      importDecorators: arrayImports,
      validators: {
        name: column.name,
        nullable: column.nullable ? "?" : "!",
        typeSql: type,
        tsType: "number",
        decorators: [`${indent}@IsNumber()`],
      },
    };
  }
  if (type.startsWith("VARCHAR")) {
    if (length) {
      arrayImports.push("IsString", "MaxLength");
    } else {
      arrayImports.push("IsString");
    }
    return {
      importDecorators: arrayImports,
      validators: {
        name: column.name,
        nullable: column.nullable ? "?" : "!",
        typeSql: type,
        tsType: "string",
        decorators: length
          ? [`${indent}@IsString()`, `${indent}@MaxLength(${length})`]
          : [`${indent}@IsString()`],
      },
    };
  }

  if (type.startsWith("CHAR")) {
    arrayImports.push("IsString");
    return {
      importDecorators: arrayImports,
      validators: {
        name: column.name,
        nullable: column.nullable ? "?" : "!",
        typeSql: type,
        tsType: "string",
        decorators: length
          ? [`${indent}@IsString()`, `${indent}@Length(${length}, ${length})`]
          : [`${indent}@IsString()`],
      },
    };
  }

  if (["TEXT", "TINYTEXT", "MEDIUMTEXT", "LONGTEXT"].includes(type)) {
    arrayImports.push("IsString");
    return {
      importDecorators: arrayImports,
      validators: {
        name: column.name,
        nullable: column.nullable ? "?" : "!",
        typeSql: type,
        tsType: "string",
        decorators: [`${indent}@IsString()`],
      },
    };
  }

  if (["BOOLEAN", "BIT"].includes(type)) {
    arrayImports.push("IsBoolean");
    return {
      importDecorators: arrayImports,
      validators: {
        name: column.name,
        nullable: column.nullable ? "?" : "!",
        typeSql: type,
        tsType: "boolean",
        decorators: [`${indent}@IsBoolean()`],
      },
    };
  }

  if (["DATE", "DATETIME", "TIMESTAMP"].includes(type)) {
    arrayImports.push("IsISO8601");
    return {
      importDecorators: arrayImports,
      validators: {
        name: column.name,
        nullable: column.nullable ? "?" : "!",
        typeSql: type,
        tsType: "string", // ou Date si tu fais du parsing
        decorators: [`${indent}@IsISO8601()`],
      },
    };
  }

  // Valeur par défaut
  return {
    importDecorators: arrayImports,
    validators: {
      name: column.name,
      nullable: column.nullable ? "?" : "!",
      typeSql: type,
      tsType: "any",
      decorators: [],
    },
  };
}

// export function getValidationDecorators(column: IColumnJson): string[] {
//     const decorators: string[] = [];
//     let importDto = [];
//     let validatorMapping: ValidatorMapping;
//     decorators.push(`${indent}@ApiProperty()`);

//     // Récupérer la documentation de la colonne
//     let validationDocumentation = JSON.stringify(column.documentation);
//     if (
//         column.name.toLowerCase().includes('created_at') ||
//         column.name.toLowerCase().includes('updated_at')
//     ) {
//         return [];
//     }
//     // Ajouter les contraintes nullable / obligatoire
//     if (column.primaryKey) {
//         return [];
//     } else {
//         // if (column.foreignKey) {
//         //     decorators.push('//@ForeignKey()');
//         // }
//         // Déterminer le type de validation
//         // switch (column.typeSql.toLowerCase()) {
//         //     case 'int':
//         //     case 'integer':
//         //     case 'smallint':
//         //     case 'bigint':
//         //         decorators.push(`${indent}@IsInt()`);
//         //         break;
//         //     case 'decimal':
//         //     case 'float':
//         //     case 'double':
//         //         decorators.push(`${indent}@IsNumber()`);
//         //         break;
//         //     case 'varchar':
//         //     case 'char':
//         //         decorators.push(`${indent}@IsString()`);
//         //         if (column.length) {
//         //             decorators.push(`${indent}@MinLength(2)`); // ⚠️
//         //             decorators.push(`${indent}@MaxLength(${column.length})`);
//         //         }
//         //         break;
//         //     case 'text':
//         //     case 'longtext':
//         //         decorators.push(`${indent}@IsString()`);
//         //         break;
//         //     case 'boolean':
//         //     case 'tinyint':
//         //         decorators.push(`${indent}@IsBoolean()`);
//         //         break;
//         //     // case 'datetime':
//         //     // case 'timestamp':
//         //     //      if (column.name.toLowerCase().includes('create')) {
//         //     //         decorators.push('@Type(() => Date)');
//         //     //         } else if (column.name.toLowerCase().includes('update')) {
//         //     //         decorators.push('@UpdateDateColumn()');
//         //     //         } else {
//         //     //         decorators.push('@IsDate()');
//         //     //         }
//         //     //     break;
//         // }

//         // Ajouter les contraintes nullable / obligatoire
//         if (column.nullable) {
//             decorators.push(`${indent}@IsOptional()`);
//         } else {
//             decorators.push(`${indent}@IsNotEmpty()`);
//         }

//         // Ajouter la contrainte unique
//         // if (column.unique) {
//         //     decorators.push('@IsUnique()');
//         // }
//     }
//     return decorators;
// }

/*
const result = mapSqlTypeToValidators('DECIMAL', undefined, 2);
{
  tsType: 'number',
  validators: ['@IsNumber({ allowInfinity: false, allowNaN: false, maxDecimalPlaces: 2 })']
}
*/
