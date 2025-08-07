import { IColumnJson, IEntityJson } from "../models/entity-json.model";
import { getPhpType } from "./symfony-mapping";

function getValidationAssertions(column: IColumnJson): string {
  const assertions: string[] = [];
  if (!column.nullable) {
    assertions.push("new Assert\\NotBlank()");
  }

  switch (getPhpType(column.typeTypeScript)) {
    case "string":
      assertions.push('new Assert\\Type("string")');
      if (column.length) {
        assertions.push(`new Assert\\Length(max: ${column.length})`);
      }
      break;
    case "int":
      assertions.push('new Assert\\Type("integer")');
      break;
    case "float":
      assertions.push('new Assert\\Type("float")');
      break;
    case "\\DateTimeImmutable":
      assertions.push("new Assert\\Type(\\DateTimeInterface::class)");
      break;
    case "bool":
      assertions.push('new Assert\\Type("bool")');
      break;
  }

  return assertions.map((a) => `    #[${a}]`).join("\n");
}

function generateCreateDto(entity: IEntityJson): string {
  const { namePascalCase, columns } = entity;
  const properties = columns
    ?.filter((c) => !c.primaryKey && !c.foreignKey)
    .map((column) => {
      const phpType = getPhpType(column.typeTypeScript);
      const nullable = column.nullable ? "?" : "";
      return `
${getValidationAssertions(column)}
    public ${nullable}${phpType} $${column.name};
`;
    })
    .join("");

  return `<?php

namespace App\\Dto\\Request\\${namePascalCase};

use Symfony\\Component\\Validator\\Constraints as Assert;

class Create${namePascalCase}Dto
{
${properties}
}
`;
}

function generateUpdateDto(entity: IEntityJson): string {
  const { namePascalCase, columns } = entity;
  const properties = columns
    ?.filter((c) => !c.primaryKey && !c.foreignKey)
    .map((column) => {
      const phpType = getPhpType(column.typeTypeScript);
      return `
    public ?${phpType} $${column.name} = null;
`;
    })
    .join("");

  return `<?php

namespace App\\Dto\\Request\\${namePascalCase};

class Update${namePascalCase}Dto
{
${properties}
}
`;
}

export function generateDtoFileContent(entity: IEntityJson): {
  createDto: string;
  updateDto: string;
} {
  return {
    createDto: generateCreateDto(entity),
    updateDto: generateUpdateDto(entity),
  };
}
