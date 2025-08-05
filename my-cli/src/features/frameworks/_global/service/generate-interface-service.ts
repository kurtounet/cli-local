import { IEntityJson } from "@features/parsersMdj/interfaces/entity-json.model";

export async function generateInterfaceService(pathMdjFile: string) {}

function getInterfaceImports(
  entity: IEntityJson,
  allEntities: IEntityJson[],
): string {
  const imports = new Set<string>();

  if (entity.relationships) {
    for (const rel of entity.relationships) {
      const targetEntity = allEntities.find((e) => e.tableName === rel.target);
      if (
        targetEntity &&
        targetEntity.namePascalCase !== entity.namePascalCase
      ) {
        imports.add(
          `import { I${targetEntity.namePascalCase} } from './${targetEntity.nameKebabCase}.interface';`,
        );
      }
    }
  }

  return Array.from(imports).join("\n");
}

export function generateInterfaceFileContent(
  entity: IEntityJson,
  allEntities: IEntityJson[],
): string {
  const { namePascalCase, columns, relationships } = entity;

  const properties = columns
    ?.map(
      (column) =>
        `  ${column.name}${column.nullable ? "?" : ""}: ${column.typeTypeScript};`,
    )
    .join("\n");

  const relationProperties = relationships
    ?.map((rel) => {
      const targetEntity = allEntities.find((e) => e.tableName === rel.target);
      if (!targetEntity) return "";

      const propertyName =
        rel.relationType === "OneToMany"
          ? `${targetEntity.nameCamelCase}s`
          : targetEntity.nameCamelCase;
      const propertyType =
        rel.relationType === "OneToMany"
          ? `I${targetEntity.namePascalCase}[]`
          : `I${targetEntity.namePascalCase}`;

      return `  ${propertyName}?: ${propertyType};`;
    })
    .join("\n");

  return `\n${getInterfaceImports(entity, allEntities)}
 
 export interface I${namePascalCase} {
 ${properties}
 
 ${relationProperties}
 }
 `;
}
