// import { IColumnJson, IEntityJson } from "@features/parsersMdj/models/entity-json.model";

// // ---------- utils ----------
// const toCamel = (s: string) => s.replace(/[_-](.)/g, (_, g1) => g1.toUpperCase());
// const toPascal = (s: string) => { const c = toCamel(s); return c.charAt(0).toUpperCase() + c.slice(1); };
// const q = (s: string) => s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
// const asNum = (v: string | number | null | undefined): number | undefined => v == null ? undefined : Number(v);

// type ImportsBag = { mysqlCore: Set<string>; drizzle: Set<string>; extraImports: Set<string> };

// // ---------- table generator ----------
// export function drizzleSchemaFromEntityService(e: IEntityJson): string {
//   if (!e.tableName) throw new Error("tableName is required");
//   const cols = e.columns ?? [];
//   const rels = e.relationships ?? [];

//   const imports: ImportsBag = {
//     mysqlCore: new Set<string>(["mysqlTable"]),
//     drizzle: new Set<string>(["InferInsertModel", "InferSelectModel"]),
//     extraImports: new Set<string>(), // pour futurs imports de tables referees
//   };

//   // columns code
//   const columnLines: string[] = cols.map((c) => {
//     const tsProp = toCamel(c.name);
//     const base = mapColumnBuilder(c, imports);
//     return `  ${tsProp}: ${applyModifiers(c, base)},`;
//   });

//   // foreign keys au niveau table (si referenceTo = "table.col")
//   const fkLines: string[] = [];
//   for (const c of cols) {
//     if (c.foreignKey && c.referenceTo) {
//       const [refTable, refCol] = c.referenceTo.split(".");
//       if (refTable && refCol) {
//         imports.mysqlCore.add("foreignKey");
//         const refIdent = toCamel(refTable);
//         const refColIdent = toCamel(refCol);
//         // NOTE: pense a importer la table cible: import { xxx } from "./xxx.schema"
//         imports.extraImports.add(refIdent);
//         fkLines.push(
// `  fk_${toCamel(c.name)}: foreignKey({
//     columns: [t.${toCamel(c.name)}],
//     foreignColumns: [${refIdent}.${refColIdent}],
//   }),`
//         );
//       }
//     }
//   }

//   // composite PK si plusieurs PK
//   const pkCols = cols.filter(c => c.primaryKey);
//   const tableLevel: string[] = [];
//   if (pkCols.length > 1) {
//     imports.mysqlCore.add("primaryKey");
//     tableLevel.push(
//       `  ${toCamel(e.tableName)}Pk: primaryKey({ columns: [${pkCols.map(c => `t.${toCamel(c.name)}`).join(", ")}] }),`
//     );
//   }

//   const tableExtras = [...fkLines, ...tableLevel];

//   // relations
//   let relationsBlock = "";
//   if (rels.length > 0) {
//     imports.drizzle.add("relations");
//     const manyItems: string[] = [];
//     const oneItems: string[] = [];

//     for (const r of rels) {
//       const kind = r.relationType.toLowerCase();
//       const relName = r.relationName || (kind === "onetomany" ? `${toCamel(r.target)}s` : toCamel(r.target));
//       const targetIdent = toCamel(r.target);
//       // NOTE: il faudra importer ces tables (voir TODO ci-dessous)
//       imports.extraImports.add(targetIdent);

//       if (kind === "onetomany") manyItems.push(`  ${relName}: many(${targetIdent}),`);
//       else if (kind === "manytoone") oneItems.push(`  ${relName}: one(${targetIdent}),`);
//       else if (kind === "onetoone") oneItems.push(`  ${relName}: one(${targetIdent}),`);
//       else if (kind === "manytomany") manyItems.push(`  ${relName}: many(${targetIdent}),`);
//     }

//     const items = [...oneItems, ...manyItems].join("\n");
//     relationsBlock = `
// export const ${toCamel(e.tableName)}Relations = relations(${toCamel(e.tableName)}, ({ one, many }) => ({
// ${items}
// }));`;
//   }

//   // imports
//   const mysqlCoreImports = Array.from(imports.mysqlCore).sort().join(", ");
//   const drizzleImports = Array.from(imports.drizzle).sort().join(", ");
//   const extraImportsComment = Array.from(imports.extraImports).length
//     ? `// TODO import related tables used below:\n// import { ${Array.from(imports.extraImports).join(", ")} } from "./<path>";\n`
//     : "";

//   const TableNameCamel = toCamel(e.tableName);
//   const TableNamePascal = toPascal(e.tableName);

//   return `/* Auto-generated from IEntityJson */
// import { ${mysqlCoreImports} } from "drizzle-orm/mysql-core";
// import { ${drizzleImports} } from "drizzle-orm";
// ${extraImportsComment}
// export const ${TableNameCamel} = mysqlTable("${e.tableName}", {
// ${columnLines.join("\n")}
// }${tableExtras.length ? `,
// (t) => ({
// ${tableExtras.join("\n")}
// })` : ``});
// ${relationsBlock}

// export type ${TableNamePascal} = InferSelectModel<typeof ${TableNameCamel}>;
// export type ${TableNamePascal}Insert = InferInsertModel<typeof ${TableNameCamel}>;`;
// }

// // ---------- multi-entities helper ----------
// export function drizzleSchemaFromEntitiesService(entities: IEntityJson[]): Record<string, string> {
//   const out: Record<string, string> = {};
//   for (const e of entities) {
//     const fileName = `${e.tableName}.schema.ts`;
//     out[fileName] = drizzleSchemaFromEntityService(e);
//   }
//   return out;
// }

// // ---------- mapping SQL -> drizzle builder ----------
// function mapColumnBuilder(c: IColumnJson, imports: ImportsBag): string {
//   const t = (c.typeSql || "varchar").toLowerCase();
//   const len = asNum(c.length);
//   const tsType = (c.typeTypeScript || "").toLowerCase();

//   // tinyint(1) -> boolean
//   const isTinyInt1 = t === "tinyint" && (c.length === "1");// || c.length === 1);

//   const add = (name: string, mod?: string) => {
//     imports.mysqlCore.add(name);
//     return `${name}(\`${q(c.name)}\`${mod || ""})`;
//   };

//   // decimal precision/scale
//   const parseDecimal = () => {
//     // length "12,2" prioritaire
//     if (typeof c.length === "string" && c.length.includes(",")) {
//       const [p, s] = c.length.split(",").map(n => Number(n.trim()));
//       return { precision: isFinite(p) ? p : 10, scale: isFinite(s) ? s : 2 };
//     }
//     const precision = typeof c.precision === "number" ? c.precision : (len ?? 10);
//     // on deduit scale depuis validations "scale:x" ou fallback 2
//     let scale = 2;
//     if (Array.isArray(c.validations)) {
//       const v = c.validations.find(v => /^scale:\d+$/i.test(v));
//       if (v) scale = Number(v.split(":")[1]) || 2;
//     }
//     return { precision, scale };
//   };

//   switch (true) {
//     // booleans
//     case isTinyInt1: return add("boolean");
//   }

//   switch (t) {
//     // numbers
//     case "int": return add("int");
//     case "tinyint": return add("tinyint");
//     case "smallint": return add("smallint");
//     case "mediumint": return add("mediumint");
//     case "bigint":
//       return add("bigint", `, { mode: "${tsType === "number" ? "number" : "bigint"}" }`);
//     case "decimal":
//     case "numeric": {
//       const { precision, scale } = parseDecimal();
//       return add("decimal", `, { precision: ${precision}, scale: ${scale} }`);
//     }
//     case "double": return add("double");
//     case "float": return add("float");

//     // strings
//     case "char": return add("char", `, { length: ${len ?? 1} }`);
//     case "varchar": return add("varchar", `, { length: ${len ?? 255} }`);
//     case "text": return add("text");
//     case "tinytext": return add("text", `, { size: 'tiny' }`);
//     case "mediumtext": return add("text", `, { size: 'medium' }`);
//     case "longtext": return add("text", `, { size: 'long' }`);

//     // binary
//     case "binary": return add("binary", `, { length: ${len ?? 1} }`);
//     case "varbinary": return add("varbinary", `, { length: ${len ?? 255} }`);
//     case "blob": return add("blob");
//     case "tinyblob": return add("blob", `, { size: 'tiny' }`);
//     case "mediumblob": return add("blob", `, { size: 'medium' }`);
//     case "longblob": return add("blob", `, { size: 'long' }`);

//     // bits / bool (boolean deja gere plus haut)
//     case "bit": return add("bit", `, { length: ${len ?? 1} }`);
//     case "boolean": return add("boolean");

//     // enums / set (enum values non fournis: a completer en amont)
//     case "enum":
//       imports.mysqlCore.add("mysqlEnum");
//       return `mysqlEnum(\`${q(c.name)}\`, []) /* TODO fill enum values */`;
//     case "set":
//       // selon versions: mysqlSet sinon fallback
//       imports.mysqlCore.add("varchar");
//       return `varchar(\`${q(c.name)}\`, { length: ${len ?? 255} }) /* SET fallback */`;

//     // dates
//     case "date": return add("date");
//     case "datetime": return add("datetime", `, { mode: 'date' }`);
//     case "timestamp": return add("timestamp", `, { mode: 'date' }`);
//     case "time": return add("time");

//     // json
//     case "json": return add("json");

//     default:
//       return add("varchar", `, { length: ${len ?? 255} }) /* fallback from ${t} */`);
//   }
// }

// // function applyModifiers(c: IColumnJson, expr: string): string {
// //   let x = expr;

// //   // contraintes
// //   if (c.nullable === false) x += ".notNull()";
// //   if (c.unique) x += ".unique()";
// //   if (c.primaryKey) x += ".primaryKey()";

// //   // defaults speciaux via validations
// //   if (Array.isArray(c.validations)) {
// //     if (c.validations.includes("defaultNow")) x += ".defaultNow()";
// //     if (c.validations.includes("onUpdateNow")) x += ".onUpdateNow()";
// //   }

// //   // autoincrement pour PK numeriques
// //   const t = (c.typeSql || "").toLowerCase();
// //   const isNumericPk = c.primaryKey && (t === "int" || t === "bigint");
// //   const noAuto = Array.isArray(c.validations) && c.validations.includes("noAuto");
// //   if (isNumericPk && !noAuto) x += ".autoincrement()";

// //   return x;
// // }
// type FkActions = { onDelete?: string; onUpdate?: string };

// function parseFkActions(validations?: string[] | null): FkActions | undefined {
//   if (!Array.isArray(validations)) return undefined;
//   const get = (k: "onDelete" | "onUpdate") => {
//     const item = validations.find(v => v.toLowerCase().startsWith(k.toLowerCase() + ":"));
//     if (!item) return undefined;
//     const val = item.split(":")[1]?.trim().toLowerCase();
//     // drizzle accepte: 'cascade' | 'restrict' | 'no action' | 'set null' | 'set default'
//     if (!val) return undefined;
//     return val as any;
//   };
//   const onDelete = get("onDelete");
//   const onUpdate = get("onUpdate");
//   return onDelete || onUpdate ? { onDelete, onUpdate } : undefined;
// }
// function applyModifiers(
//   c: IColumnJson,
//   expr: string,
//   ctx: { pkCount?: number } = {}
// ): string {
//   let x = expr;

//   // NOT NULL / UNIQUE / PK
//   if (c.nullable === false) x += ".notNull()";
//   if (c.unique) x += ".unique()";
//   if (c.primaryKey) x += ".primaryKey()";

//   // defaults optionnels
//   if (Array.isArray(c.validations)) {
//     if (c.validations.includes("defaultNow")) x += ".defaultNow()";
//     if (c.validations.includes("onUpdateNow")) x += ".onUpdateNow()";
//   }

//   // AUTOINCREMENT: uniquement si une seule PK, numerique, nom == "id", pas FK, pas "noAuto"
//   const t = (c.typeSql || "").toLowerCase();
//   const isNumeric = ["int", "bigint", "smallint", "mediumint", "tinyint"].includes(t);
//   const noAuto = Array.isArray(c.validations) && c.validations.includes("noAuto");
//   if (
//     c.primaryKey &&
//     (ctx.pkCount ?? 0) === 1 &&
//     isNumeric &&
//     !c.foreignKey &&
//     c.name === "id" &&
//     !noAuto
//   ) {
//     x += ".autoincrement()";
//   }

//   // REFERENCES inline (au niveau colonne)
//   if (c.foreignKey && c.referenceTo) {
//     const [refTable, refCol] = c.referenceTo.split(".");
//     if (refTable && refCol) {
//       const actions = parseFkActions(c.validations);
//       const refIdent = toCamel(refTable);
//       const refColIdent = toCamel(refCol);
//       // NOTE: pense a importer la table cible
//       x += actions
//         ? `.references(() => ${refIdent}.${refColIdent}, ${JSON.stringify(actions)})`
//         : `.references(() => ${refIdent}.${refColIdent})`;
//     }
//   }

//   return x;
// }
