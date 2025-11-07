import { IColumnJson, IEntityJson } from "@parsersMdj/models/entity-json.model";
import { snakeToCamel, snakeToKebab, snakeToPascal } from "@utils/convert";

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

  entity.columns?.forEach((column: IColumnJson) => {
    const result = mapSqlTypeToValidators(column);
    result.importDecorators.forEach((importLine: string) =>
      importClassValidators.add(importLine),
    );
    dtoProperties.push(result.validators);
  });

  const dtoImports = [
    `import { ApiProperty } from '@nestjs/swagger';`,
    `import { ${[...importClassValidators].sort().join(", ")} } from 'class-validator';`,
  ];

  return `${dtoImports.join("\n")}

export class Create${entity.namePascalCase}Dto {
${dtoProperties
  .map(
    (property: Validators) =>
      `${property.decorators.join("\n")}${n}${indent}${property.name}${property.nullable}: ${property.tsType};`,
  )
  .join("\n\n")}
}
`;
}

export function mapSqlTypeToValidators(column: IColumnJson): ValidatorMapping {
  const type = column.typeSql.toUpperCase();
  const length = Number(column.length);
  const precision = Number(column.precision) || 2;
  let arrayImports: string[] = [];
  const decorators: string[] = [];

  // Add ApiProperty decorator
  decorators.push(
    `${indent}@ApiProperty({ description: "${column.documentation || column.name}"${column.nullable ? ", required: false" : ""} })`,
  );

  // Add IsOptional if nullable
  if (column.nullable) {
    arrayImports.push("IsOptional");
    decorators.push(`${indent}@IsOptional()`);
  } else {
    // Add IsNotEmpty if not nullable and not primary key
    if (!column.primaryKey) {
      arrayImports.push("IsNotEmpty");
      decorators.push(`${indent}@IsNotEmpty()`);
    }
  }

  if (
    ["INT", "INTEGER", "SMALLINT", "TINYINT", "MEDIUMINT", "BIGINT"].includes(
      type,
    )
  ) {
    arrayImports.push("IsInt");
    decorators.push(`${indent}@IsInt()`);
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
  if (["NUMERIC", "DECIMAL", "FLOAT", "REAL", "DOUBLE"].includes(type)) {
    arrayImports.push("IsNumber");
    let isNumberOptions = "{ allowInfinity: false, allowNaN: false }";
    if (typeof precision === "number") {
      isNumberOptions = `{ allowInfinity: false, allowNaN: false, maxDecimalPlaces: ${precision} }`;
    }
    decorators.push(`${indent}@IsNumber(${isNumberOptions})`);
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

  if (
    type.startsWith("VARCHAR") ||
    type.startsWith("CHAR") ||
    ["TEXT", "TINYTEXT", "MEDIUMTEXT", "LONGTEXT"].includes(type)
  ) {
    arrayImports.push("IsString");
    decorators.push(`${indent}@IsString()`);
    if (length) {
      arrayImports.push("MaxLength");
      decorators.push(`${indent}@MaxLength(${length})`);
    }
    return {
      importDecorators: arrayImports,
      validators: {
        name: column.name,
        nullable: column.nullable ? "?" : "!",
        typeSql: type,
        tsType: "string",
        decorators: decorators,
      },
    };
  }

  if (["BOOLEAN", "BIT"].includes(type)) {
    arrayImports.push("IsBoolean");
    decorators.push(`${indent}@IsBoolean()`);
    return {
      importDecorators: arrayImports,
      validators: {
        name: column.name,
        nullable: column.nullable ? "?" : "!",
        typeSql: type,
        tsType: "boolean",
        decorators: decorators,
      },
    };
  }

  if (["DATE", "DATETIME", "TIMESTAMP"].includes(type)) {
    arrayImports.push("IsDateString");
    decorators.push(`${indent}@IsDateString()`);
    return {
      importDecorators: arrayImports,
      validators: {
        name: column.name,
        nullable: column.nullable ? "?" : "!",
        typeSql: type,
        tsType: "Date",
        decorators: decorators,
      },
    };
  }

  // Default case
  return {
    importDecorators: arrayImports,
    validators: {
      name: column.name,
      nullable: column.nullable ? "?" : "!",
      typeSql: type,
      tsType: "any",
      decorators: decorators,
    },
  };
}
