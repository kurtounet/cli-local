import {
  IEntityJson,
  IColumnJson,
  IRelation,
} from "../interfaces/entity-json.model";
import { snakeToPascal, snakeToCamel } from "@utils/convert";
import { getPhpType, getDoctrineColumnType } from "./symfony-mapping";

function getEntityImports(entity: IEntityJson): string {
  const imports = new Set<string>();
  imports.add("use Doctrine\\ORM\\Mapping as ORM;");
  imports.add(`use App\\Repository\\${entity.namePascalCase}Repository;`);

  if (
    entity.relationships &&
    entity.relationships.some(
      (r) => r.relationType === "OneToMany" || r.relationType === "ManyToMany",
    )
  ) {
    imports.add("use Doctrine\\Common\\Collections\\ArrayCollection;");
    imports.add("use Doctrine\\Common\\Collections\\Collection;");
  }

  return Array.from(imports).join("\n");
}

function getColumnAttributes(column: IColumnJson): string {
  if (column.primaryKey) {
    return `    #[ORM\\Id]
    #[ORM\\GeneratedValue]
    #[ORM\\Column]`;
  }

  const options: string[] = [];
  const doctrineType = getDoctrineColumnType(column.typeSql);

  if (doctrineType !== "string") {
    options.push(`type: '${doctrineType}'`);
  }

  if (doctrineType === "string" && column.length) {
    options.push(`length: ${column.length}`);
  }

  if (column.nullable) {
    options.push("nullable: true");
  }
  if (column.unique) {
    options.push("unique: true");
  }

  return `    #[ORM\\Column(${options.join(", ")})]`;
}

function getRelationAttributes(
  relation: IRelation,
  currentEntity: IEntityJson,
  allEntities: IEntityJson[],
): string {
  const targetEntity = allEntities.find((e) => e.tableName === relation.target);
  if (!targetEntity) return "";

  const targetEntityName = targetEntity.namePascalCase;
  const inverseSide = currentEntity.nameCamelCase;
  const owningSide = targetEntity.nameCamelCase;

  switch (relation.relationType) {
    case "ManyToOne":
      return `    #[ORM\ManyToOne(targetEntity: ${targetEntityName}::class, inversedBy: '${currentEntity.tableName}s')]`;
    case "OneToMany":
      return `    #[ORM\\OneToMany(mappedBy: '${owningSide}', targetEntity: ${targetEntityName}::class, cascade: ['persist', 'remove'])]`;
    case "OneToOne":
      return `    #[ORM\\OneToOne(inversedBy: '${inverseSide}', cascade: ['persist', 'remove'])]`;
    case "ManyToMany":
      const owning = relation.owner ? "inversedBy" : "mappedBy";
      const joinTable = relation.owner
        ? `#[ORM\\JoinTable(name: '${currentEntity.tableName}_${targetEntity.tableName}')]`
        : "";
      return `    #[ORM\\ManyToMany(targetEntity: ${targetEntityName}::class, ${owning}: '${inverseSide}s')]
    ${joinTable}`;
    default:
      return `    // Relation ${relation.relationType} not handled yet`;
  }
}

export function generateEntityFileContent(
  entity: IEntityJson,
  allEntities: IEntityJson[],
): string {
  const { namePascalCase, tableName, columns, relationships } = entity;

  const classProperties = columns
    ?.map((column) => {
      const phpType = getPhpType(column.typeTypeScript);
      const nullable = column.nullable || column.primaryKey ? "?" : "";
      return `
${getColumnAttributes(column)}
    private ${nullable}${phpType} $${snakeToCamel(column.name)};`;
    })
    .join("\n");

  const relationProperties = relationships
    ?.map((rel) => {
      const targetEntity = allEntities.find((e) => e.tableName === rel.target);
      if (!targetEntity) return "";

      const propertyName =
        rel.relationType === "OneToMany" || rel.relationType === "ManyToMany"
          ? `${targetEntity.nameCamelCase}s`
          : targetEntity.nameCamelCase;
      const propertyType =
        rel.relationType === "OneToMany" || rel.relationType === "ManyToMany"
          ? `Collection`
          : `?${targetEntity.namePascalCase}`;

      return `
${getRelationAttributes(rel, entity, allEntities)}
    private ${propertyType} $${propertyName};`;
    })
    .join("\n");

  const constructorRelations = relationships
    ?.filter(
      (r) => r.relationType === "OneToMany" || r.relationType === "ManyToMany",
    )
    .map((rel) => {
      const targetEntity = allEntities.find((e) => e.tableName === rel.target);
      if (!targetEntity) return "";
      return `        $this->${targetEntity.nameCamelCase}s = new ArrayCollection();`;
    })
    .join("\n");

  const constructor = constructorRelations
    ? `
    public function __construct()
    {
${constructorRelations}
    }
`
    : "";

  return `<?php

namespace App\\Entity;

${getEntityImports(entity)}

#[ORM\Entity(repositoryClass: ${namePascalCase}Repository::class)]
[ORM\Table(name: '${tableName}')]
class ${namePascalCase}
{
${classProperties}
${relationProperties}
${constructor}

    // TODO: Add getters and setters
}
`;
}
