import {
  IColumnJson,
  IEntityJson,
  IRelation,
} from "@parsersMdj/models/entity-json.model";
import { snakeToCamel, snakeToKebab, snakeToPascal } from "@utils/convert";

const n = "\n";
const indent = "  ";

export function nestjsResponseDtoTemplate(entity: IEntityJson): string {
  const entityImports = new Set<string>();
  const properties: string[] = [];

  // Add properties for columns
  entity.columns?.forEach((column: IColumnJson) => {
    if (!column.primaryKey) {
      // Primary key is usually not part of Create/Update DTOs
      properties.push(
        `${indent}@ApiProperty({ description: "${column.documentation || column.name}"${column.nullable ? ", required: false" : ""} })\n${indent}${column.name}${column.nullable ? "?" : "!"}: ${column.typeTypeScript};`,
      );
    }
  });

  // Add properties for relations
  entity.relationships?.forEach((relationship: IRelation) => {
    const targetPascal = snakeToPascal(relationship.target);
    const targetKebab = snakeToKebab(relationship.target);
    const propertyName = snakeToCamel(relationship.target);
    let propertyType = targetPascal;
    let apiPropertyOptions = `type: () => ${targetPascal}`;

    // Import related entity
    entityImports.add(
      `import { ${targetPascal} } from 'src/modules/${targetKebab}/entity/${targetKebab}.entity';`,
    );

    if (
      relationship.relationType === "OneToMany" ||
      relationship.relationType === "ManyToMany"
    ) {
      propertyType += "[]";
      apiPropertyOptions += ", isArray: true";
    }

    properties.push(
      `${indent}@ApiProperty({ ${apiPropertyOptions} })\n${indent}${propertyName}: ${propertyType};`,
    );
  });

  const allImports = [
    `import { ApiProperty } from '@nestjs/swagger';`,
    ...[...entityImports].sort(),
  ];

  return `${allImports.join("\n")}\n\nexport class Response${entity.namePascalCase}Dto {
  @ApiProperty()
  id!: number; // Assuming all entities have an 'id' primary key

${properties.join("\n\n")}
}
`;
}
