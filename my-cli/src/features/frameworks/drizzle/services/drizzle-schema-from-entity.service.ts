import type { IColumnJson, IEntityJson } from "@features/parsersMdj/models/entity-json.model";

// utils
const toCamel = (s: string) => s.replace(/[_-](.)/g, (_, g1) => g1.toUpperCase());
const toPascal = (s: string) => { const c = toCamel(s); return c.charAt(0).toUpperCase() + c.slice(1); };
const toKebab = (s: string) =>
  toCamel(s)                 // "customer_addresse" -> "customerAddresse"
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2") // "customerAddresse" -> "customer-Addresse"
    .toLowerCase();          // -> "customer-addresse"

const q = (s: string) => s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
const asNum = (v: string | number | null | undefined): number | undefined => v == null ? undefined : Number(v);

// options
export type GenOptions = {
  importResolver?: (tableName: string) => string; // default: "./<table>.schema"
};

type FkActions = { onDelete?: "cascade" | "restrict" | "no action" | "set null" | "set default"; onUpdate?: FkActions["onDelete"] };
function parseFkActions(validations?: string[] | null): FkActions | undefined {
  if (!Array.isArray(validations)) return undefined;
  const pick = (k: "onDelete" | "onUpdate") => {
    const item = validations.find(v => v.toLowerCase().startsWith(k.toLowerCase() + ":"));
    if (!item) return undefined;
    return item.split(":")[1]?.trim().toLowerCase() as FkActions["onDelete"];
  };
  const onDelete = pick("onDelete");
  const onUpdate = pick("onUpdate");
  return onDelete || onUpdate ? { onDelete, onUpdate } : undefined;
}

// imports tracking
type ImportsBag = {
  mysqlCore: Set<string>;
  drizzle: Set<string>;
  // exportName -> path
  extraTables: Map<string, string>;
  opt: GenOptions;
};

// public api
export function drizzleSchemaFromEntityService(e: IEntityJson, opt: GenOptions = {}): string {
  if (!e.tableName) throw new Error("tableName is required");
  const cols = e.columns ?? [];
  const rels = e.relationships ?? [];

  const imports: ImportsBag = {
    mysqlCore: new Set<string>(["mysqlTable"]),
    drizzle: new Set<string>(["InferInsertModel", "InferSelectModel"]),
    extraTables: new Map<string, string>(),
    opt,
  };

  const pkCount = cols.filter(c => c.primaryKey).length;

  const columnLines: string[] = cols.map((c) => {
   const tsProp = toCamel(c.name);
   
    const base = mapColumnBuilder(c, imports);
    return `  ${tsProp}: ${applyModifiers(c, base, { pkCount, imports, ownerTable: e.tableName })},`;
  });

  // PK composite
  const tableLevel: string[] = [];
  if (pkCount > 1) {
    imports.mysqlCore.add("primaryKey");
    tableLevel.push(
      `  ${toCamel(e.tableName)}Pk: primaryKey({ columns: [${cols.filter(c => c.primaryKey).map(c => `t.${toCamel(c.name)}`).join(", ")}] }),`
    );
  }

  // relations
  let relationsBlock = "";
  if (rels.length > 0) {
    imports.drizzle.add("relations");
    const manyItems: string[] = [];
    const oneItems: string[] = [];

    for (const r of rels) {
      const kind = r.relationType.toLowerCase();
      const relName = r.relationName || (kind === "onetomany" ? `${toCamel(r.target)}s` : toCamel(r.target));
      const targetIdent = toCamel(r.target);
      // import auto (skip self-ref import)
      if (r.target !== e.tableName) {
        const path = imports.opt.importResolver?.(r.target) ?? `./${toKebab(r.target)}.schema`;
        imports.extraTables.set(targetIdent, path);
      }

      if (kind === "onetomany") {
        manyItems.push(`  ${relName}: many(${targetIdent}),`);
      } else if (kind === "manytoone" || kind === "onetoone") {
        const fkCol = findFkColumnReferencing(e, r.target);
        if (fkCol) {
          oneItems.push(
            `  ${relName}: one(${targetIdent}, { fields: [${toCamel(e.tableName)}.${toCamel(fkCol.name)}], references: [${targetIdent}.id] }),`
          );
        } else {
          oneItems.push(`  ${relName}: one(${targetIdent}),`);
          // oneItems.push(`  ${relName}: one(${targetIdent}) /* TODO add fields/references */,`);
          /* TODO add fields/references */ 
          /* TODO add fields/references */ 
          /*
          oneItems.push(`  ${relName}: one(${targetIdent})
          fields: [${toCamel(e.tableName)}.${toCamel(fkCol.name)}], 
          references: [${targetIdent}.id],`);
          */
        }
      } else if (kind === "manytomany") {
        manyItems.push(`  ${relName}: many(${targetIdent}),`);
      }
    }

    const items = [...oneItems, ...manyItems].join("\n");
    relationsBlock = `
export const ${toCamel(e.tableName)}Relations = relations(${toCamel(e.tableName)}, ({ one, many }) => ({
/* 
${items}
*/
}));`;
  }

  // imports code
  const mysqlCoreImports = Array.from(imports.mysqlCore).sort().join(", ");
  const drizzleImports = Array.from(imports.drizzle).sort().join(", ");
  const extraImportsLines =
    Array.from(imports.extraTables.entries())
      .map(([name, p]) => `import { ${name} } from "${p}";`)
      .join("\n");

  const TableNameCamel = toCamel(e.tableName);
  const TableNamePascal = toPascal(e.tableName);

  return `/* Auto-generated from IEntityJson */
import { ${mysqlCoreImports} } from "drizzle-orm/mysql-core";
import { ${drizzleImports} } from "drizzle-orm";
${extraImportsLines ? extraImportsLines + "\n" : ""}export const ${TableNameCamel} = mysqlTable("${e.tableName}", {
${columnLines.join("\n")}
}${tableLevel.length ? `,
(t) => ({
${tableLevel.join("\n")}
})` : ``});
${relationsBlock}

export type ${TableNamePascal} = InferSelectModel<typeof ${TableNameCamel}>;
export type ${TableNamePascal}Insert = InferInsertModel<typeof ${TableNameCamel}>;`;
}

// multi-entities
export function drizzleSchemaFromEntitiesService(entities: IEntityJson[], opt: GenOptions = {}): Record<string, string> {
  const out: Record<string, string> = {};
  for (const e of entities) {
    const fileName = `${e.tableName}.schema.ts`;
    out[fileName] = drizzleSchemaFromEntityService(e, opt);
  }
  return out;
}

// helpers
function findFkColumnReferencing(e: IEntityJson, targetTable: string): IColumnJson | undefined {
  return (e.columns ?? []).find(c => c.referenceTo?.split(".")[0] === targetTable);
}

function mapColumnBuilder(c: IColumnJson, imports: ImportsBag): string {
  const t = (c.typeSql || "varchar").toLowerCase();
  const len = asNum(c.length);
  const tsType = (c.typeTypeScript || "").toLowerCase();

  const isTinyInt1 = t === "tinyint" && (c.length === "1")// || c.length === 1);

  const add = (name: string, mod?: string) => {
    imports.mysqlCore.add(name);
    return `${name}(\`${q(c.name)}\`${mod || ""})`;
  };

  const parseDecimal = () => {
    if (typeof c.length === "string" && c.length.includes(",")) {
      const [p, s] = c.length.split(",").map(n => Number(n.trim()));
      return { precision: Number.isFinite(p) ? p : 10, scale: Number.isFinite(s) ? s : 2 };
    }
    const precision = typeof c.precision === "number" ? c.precision : (len ?? 10);
    let scale = 2;
    if (Array.isArray(c.validations)) {
      const v = c.validations.find(v => /^scale:\d+$/i.test(v));
      if (v) scale = Number(v.split(":")[1]) || 2;
    }
    return { precision, scale };
  };

  if (isTinyInt1) return add("boolean");

  switch (t) {
    case "int": return add("int");
    case "integer": return add("int");
    case "tinyint": return add("tinyint");
    case "smallint": return add("smallint");
    case "mediumint": return add("mediumint");
    case "bigint": return add("bigint", `, { mode: "${tsType === "number" ? "number" : "bigint"}" }`);
    case "decimal":
    case "numeric": { const { precision, scale } = parseDecimal(); return add("decimal", `, { precision: ${precision}, scale: ${scale} }`); }
    case "double": return add("double");
    case "float": return add("float");

    case "char": return add("char", `, { length: ${len ?? 1} }`);
    case "varchar": return add("varchar", `, { length: ${len ?? 255} }`);
    case "text": return add("text");
    case "tinytext": return add("text");
    case "mediumtext": return add("text");
    case "longtext": return add("text");
    // case "mediumtext": return add("text", `, { size: 'medium' }`);
    // case "longtext": return add("text", `, { size: 'long' }`);
    // case "longtext": return add("text", `, { size: 'long' }`);

    case "binary": return add("binary", `, { length: ${len ?? 1} }`);
    case "varbinary": return add("varbinary", `, { length: ${len ?? 255} }`);
    case "blob": return add("blob");
    case "tinyblob": return add("blob", `, { size: 'tiny' }`);
    case "mediumblob": return add("blob", `, { size: 'medium' }`);
    case "longblob": return add("blob", `, { size: 'long' }`);

    case "bit": return add("bit", `, { length: ${len ?? 1} }`);
    case "boolean": return add("boolean");

    case "enum": imports.mysqlCore.add("mysqlEnum"); return `mysqlEnum(\`${q(c.name)}\`, []) /* TODO fill enum values */`;
    case "set": imports.mysqlCore.add("varchar"); return `varchar(\`${q(c.name)}\`, { length: ${len ?? 255} }) /* SET fallback */`;

    case "date": return add("date");
    case "datetime": return add("datetime", `, { mode: 'date' }`);
    case "timestamp": return add("timestamp", `, { mode: 'date' }`);
    case "time": return add("time");

    case "json": return add("json");

    default: return add("varchar", `, { length: ${len ?? 255} }) /* fallback from ${t} */`);
  }
}

function applyModifiers(
  c: IColumnJson,
  expr: string,
  ctx: { pkCount: number; imports: ImportsBag; ownerTable: string }
): string {
  let x = expr;
  const t = (c.typeSql || "").toLowerCase();

  // unsigned optionnel via validations
  const unsignedAllowed = ["int", "smallint", "mediumint", "bigint", "tinyint"].includes(t);
  if (unsignedAllowed && Array.isArray(c.validations) && c.validations.includes("unsigned")) x += ".unsigned()";

  if (c.primaryKey) x += ".primaryKey()";
  if (c.unique) x += ".unique()";
  if (c.nullable === false) x += ".notNull()";

  // if (Array.isArray(c.validations)) {
    const defaultNow = ["created_at","updated_at"];
    if (defaultNow.includes(c.name)) x += ".defaultNow()";
    if (c.name.includes("updated_at")) x += ".onUpdateNow()";
  // }

  const isNumeric = ["int","integer", "bigint", "smallint", "mediumint", "tinyint"].includes(t);
  const noAuto = Array.isArray(c.validations) && c.validations.includes("noAuto");
  if (c.primaryKey && ctx.pkCount === 1 && isNumeric && !c.foreignKey && c.name === "id" && !noAuto) {
    x += ".autoincrement()";
  }

  // FK inline
  if (c.foreignKey && c.referenceTo) {
    const [refTable, refCol] = c.referenceTo.split(".");
    if (refTable && refCol) {
      const actions = parseFkActions(c.validations);
      const refIdent = toCamel(refTable);
      const refColIdent = toCamel(refCol);
      if (refTable !== ctx.ownerTable) {
        const path = ctx.imports.opt.importResolver?.(refTable) ?? `./${toKebab(refTable)}.schema`;
        ctx.imports.extraTables.set(refIdent, path);
      }
      x += actions
        ? `.references(() => ${refIdent}.${refColIdent}, ${JSON.stringify(actions)})`
        : `.references(() => ${refIdent}.${refColIdent})`;
    }
  }

  return x;
}

