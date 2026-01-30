import { IColumnJson, IEntityJson } from "@parsersMdj/models/entity-json.model";
import { generateValue, item } from "../utils/generate-value.utils";
import { snakeToCamel } from "@utils/convert";

// export function item(entity: IEntityJson): Record<string, unknown> {
//   return Object.fromEntries(
//     (entity.columns ?? []).map((column: IColumnJson) => [
//       column.name,
//       generateValue(column),
//     ])
//   );
// }

function indentBlock(str: string, spaces = 2) {
  const pad = " ".repeat(spaces);
  return str
    .split("\n")
    .map((l) => (l.length ? pad + l : l))
    .join("\n");
}

/**
 * Génère un fichier de seed Drizzle pour une entité
 * @param entity Définition d'entité
 * @param count  Nombre de lignes à générer (par défaut 10)
 */
export function drizzleSeedEntityTemplate(entity: IEntityJson) {
  const count = 10;
  let properties: string = "";
  const exclude = ["id", "created_at", "updated_at"];

  /* const seeds = Array.from({ length: count }, () => item(entity, exclude));

  // Transforme chaque seed en objet littéral formaté
  const seedsTs = seeds
    .map((o) => JSON.stringify(o, null, 2)) // clés entre guillemets ok en TS
    .join(",\n");

  const arrayLiteral = `[\n${indentBlock(seedsTs, 2)}\n]`;
  */

  if (entity.columns !== undefined) {
    properties = entity.columns
      .filter((column: IColumnJson) => !exclude.includes(column.name))
      .map(
        (column: IColumnJson) =>
          `${snakeToCamel(column.name)}: ${generateValue(column)}`,
      )
      .join(",\n");
  }
  return `import { Z${entity.namePascalCase}Insert } from '../../../shared/schemas/${entity.nameKebabCase}.schema'
import { db } from '../../database/db'
import { ${entity.nameCamelCase} } from '../../../server/database/schemas/${entity.nameKebabCase}.schema'

export async function seed${entity.namePascalCase}() {
  const ${entity.nameCamelCase}s: Z${entity.namePascalCase}Insert[] = []
  for (let i = 0; i < 10; i++) {
    ${entity.nameCamelCase}s.push({
      ${properties}
      }
    )
  }
  for (const ${entity.nameCamelCase}Data of ${entity.nameCamelCase}s) {
    await db.insert(${entity.nameCamelCase}).values(${entity.nameCamelCase}Data)
  }
}
`;
}
