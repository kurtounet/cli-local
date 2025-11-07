// types d'entree
/*
type ColumnJson = {
  id: string
  name: string
  typeSql: string
  typeTypeScript?: string
  typeDoctrine?: string
  parent?: string
  primaryKey?: boolean
  foreignKey?: boolean
  length?: number | null
  unique?: boolean
  nullable?: boolean
  referenceTo?: string // "other_table.other_column"
}

type TableJson = Record<string, ColumnJson>

// helpers drizzle
import {
  mysqlTable, serial, int, tinyint, smallint, mediumint, bigint,
  decimal, double, float, char, varchar, text, mysqlEnum,
  binary, varbinary, blob, bit, boolean, json, date, datetime,
  timestamp, time, index, uniqueIndex, primaryKey, mysqlSet
} from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"

// map SQL -> builder drizzle
export function colBuilder(c: ColumnJson): string {
  const t = c.typeSql?.toLowerCase() ?? "varchar"
  const len = c.length ?? undefined

  switch (t) {
    case "int": return `int('${c.name}')`
    case "tinyint": return `tinyint('${c.name}')`
    case "smallint": return `smallint('${c.name}')`
    case "mediumint": return `mediumint('${c.name}')`
    case "bigint":
      // si TS number, on met mode:'number' pour eviter bigint JS
      return `bigint('${c.name}', { mode: '${(c.typeTypeScript ?? '').toLowerCase() === 'number' ? 'number' : 'bigint'}' })`
    case "decimal": return `decimal('${c.name}', { precision: ${len ?? 10}, scale: 2 })`
    case "double": return `double('${c.name}')`
    case "float": return `float('${c.name}')`

    case "char": return `char('${c.name}', { length: ${len ?? 1} })`
    case "varchar": return `varchar('${c.name}', { length: ${len ?? 255} })`
    case "text": return `text('${c.name}')`
    case "tinytext": return `text('${c.name}', { size: 'tiny' })`
    case "mediumtext": return `text('${c.name}', { size: 'medium' })`
    case "longtext": return `text('${c.name}', { size: 'long' })`

    case "binary": return `binary('${c.name}', { length: ${len ?? 1} })`
    case "varbinary": return `varbinary('${c.name}', { length: ${len ?? 255} })`
    case "blob": return `blob('${c.name}')`
    case "tinyblob": return `blob('${c.name}', { size: 'tiny' })`
    case "mediumblob": return `blob('${c.name}', { size: 'medium' })`
    case "longblob": return `blob('${c.name}', { size: 'long' })`

    case "bit": return `bit('${c.name}', { length: ${len ?? 1} })`
    case "boolean": return `boolean('${c.name}')`
    case "enum": return `mysqlEnum('${c.name}', []) // renseigner les valeurs`
    case "set": return `mysqlSet ? mysqlSet('${c.name}', []) : varchar('${c.name}', { length: ${len ?? 255} })`

    case "date": return `date('${c.name}')`
    case "datetime": return `datetime('${c.name}', { mode: 'date' })`
    case "timestamp": return `timestamp('${c.name}', { mode: 'date' })`
    case "time": return `time('${c.name}')`

    case "json": return `json('${c.name}')`
    default: return `varchar('${c.name}', { length: ${len ?? 255} }) // fallback`
  }
}

function applyModifiers(c: ColumnJson, base: string): string {
  let x = base
  if (c.nullable === false) x += `.notNull()`
  if (c.unique) x += `.unique()`
  if (c.primaryKey) x += `.primaryKey()`
  return x
}

// genere le code TS drizzle pour une table
export function generateDrizzleTable(tableName: string, cols: TableJson): string {
  const columns = Object.values(cols)

  // detecte PK multiples
  const pkCols = columns.filter(c => c.primaryKey)
  const hasCompositePk = pkCols.length > 1

  const fields = columns.map(c => {
    const base = colBuilder(c)
    return `  ${camel(c.name)}: ${applyModifiers(c, base)},`
  }).join("\n")

  // indexes uniques nommes optionnels (ex: si tu preferes au niveau table)
  // const uniqs = columns.filter(c => c.unique && !c.primaryKey)

  // FKs
  const fks: string[] = []
  for (const c of columns) {
    if (c.foreignKey && c.referenceTo) {
      const [refTable, refCol] = c.referenceTo.split(".")
      if (refTable && refCol) {
        fks.push(
`  fk_${c.name}: foreignKey({
    columns: [t.${camel(c.name)}],
    foreignColumns: [${camel(refTable)}.${camel(refCol)}],
  }),`
        )
      }
    }
  }

  // composite PK si besoin
  const tableLevel = []
  if (hasCompositePk) {
    const pkList = pkCols.map(c => `t.${camel(c.name)}`).join(", ")
    tableLevel.push(`  ${camel(tableName)}Pk: primaryKey({ columns: [${pkList}] }),`)
  }

  const tableExtras = [...fks, ...tableLevel].join("\n")

  return `export const ${camel(tableName)} = mysqlTable('${tableName}', {
${fields}
}${
  tableExtras
    ? `,
(t) => ({
${tableExtras}
}))`
    : `)`
};`
}

// util
function camel(s: string) {
  return s.replace(/[_-](.)/g, (_, g1) => g1.toUpperCase())
}
*/