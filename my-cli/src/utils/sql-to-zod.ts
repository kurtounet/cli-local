// // sql-to-zod.ts
// import { z } from "zod";

// // ---- Types utilitaires ----
// export type SqlType =
//   | "varchar" | "char" | "text" | "tinytext" | "mediumtext" | "longtext"
//   | "int" | "tinyint" | "smallint" | "mediumint" | "bigint"
//   | "decimal" | "numeric" | "float" | "double"
//   | "boolean" // alias
//   | "date" | "datetime" | "timestamp" | "time" | "year"
//   | "json"
//   | "enum"
//   | "set"
//   | "binary" | "varbinary" | "blob" | "tinyblob" | "mediumblob" | "longblob";

// export interface ColumnMeta {
//   name: string;
//   sqlType: SqlType | string;     // "int", "int(11) unsigned", "varchar(255)", "enum('A','B')", etc.
//   nullable?: boolean;            // NULL autorise ?
//   default?: unknown;             // valeur par defaut
//   length?: number | null;        // pour char/varchar
//   precision?: number | null;     // pour decimal/float/double
//   scale?: number | null;         // pour decimal
//   unsigned?: boolean;            // pour entiers non signes
//   enumValues?: string[] | null;  // pour enum
//   setValues?: string[] | null;   // pour set
// }

// // ---- Parsing simple du type SQL ----
// const typeRx = /^(?<base>[a-z]+)(?:\((?<args>[^)]+)\))?(?:\s+(?<attrs>.*))?$/i;
// function parseSqlType(input: string) {
//   const m = input.trim().match(typeRx);
//   const base = (m?.groups?.base ?? input).toLowerCase();
//   const args = (m?.groups?.args ?? "").split(",").map(s => s.trim()).filter(Boolean);
//   const attrs = (m?.groups?.attrs ?? "").toLowerCase();
//   const unsigned = attrs.includes("unsigned");
//   return { base, args, unsigned };
// }

// // ---- Mapping SQL -> Zod ----
// export function sqlToZod(col: ColumnMeta): z.ZodTypeAny {
//   const parsed = parseSqlType(col.sqlType);
//   const base = parsed.base as SqlType;

//   let schema: z.ZodTypeAny;

//   switch (base) {
//     // chaines
//     case "char":
//     case "varchar":
//     case "text":
//     case "tinytext":
//     case "mediumtext":
//     case "longtext": {
//       schema = z.string();
//       const len = col.length ?? (parsed.args[0] ? Number(parsed.args[0]) : undefined);
//       if (len && (base === "char" || base === "varchar")) {
//         schema = schema.max(len);
//       }
//       break;
//     }

//     // booleen (tinyint(1) ou boolean)
//     case "boolean":
//       schema = z.boolean();
//       break;
//     case "tinyint": {
//       const size = parsed.args[0] ? Number(parsed.args[0]) : undefined;
//       if (size === 1) {
//         schema = z.boolean();
//       } else {
//         schema = parsed.unsigned ? z.number().int().min(0) : z.number().int();
//       }
//       break;
//     }

//     // entiers
//     case "smallint":
//     case "mediumint":
//     case "int":
//     case "bigint": {
//       const unsigned = col.unsigned ?? parsed.unsigned;
//       // bigint -> preferer string ou bigint selon usage
//       if (base === "bigint") {
//         // souvent on transporte bigint en string
//         schema = z.union([z.string().regex(/^-?\d+$/), z.bigint()]).transform(v =>
//           typeof v === "bigint" ? v : BigInt(v)
//         );
//       } else {
//         schema = z.number().int();
//       }
//       if (unsigned && base !== "bigint") schema = schema.min(0);
//       break;
//     }

//     // numeriques a virgule
//     case "decimal":
//     case "numeric": {
//       // garder string pour precision exacte, sinon transformer en number
//       const p = col.precision ?? (parsed.args[0] ? Number(parsed.args[0]) : undefined);
//       const s = col.scale ?? (parsed.args[1] ? Number(parsed.args[1]) : undefined);
//       schema = z.string().regex(/^-?\d+(\.\d+)?$/); // "123.45"
//       // optionnel: valider longueur/scale
//       if (p && s !== undefined) {
//         const maxIntDigits = p - s;
//         const rx = new RegExp(`^-?\\d{1,${maxIntDigits}}(\\.\\d{1,${s}})?$`);
//         schema = z.string().regex(rx);
//       }
//       break;
//     }
//     case "float":
//     case "double": {
//       schema = z.number();
//       break;
//     }

//     // dates / temps
//     case "date":
//       schema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/); // YYYY-MM-DD
//       break;
//     case "datetime":
//     case "timestamp":
//       schema = z.string().datetime(); // ISO 8601
//       break;
//     case "time":
//       schema = z.string().regex(/^\d{2}:\d{2}(:\d{2})?$/);
//       break;
//     case "year":
//       schema = z.number().int().min(1901).max(2155);
//       break;

//     // json
//     case "json":
//       schema = z.unknown(); // ou z.record(z.any())
//       break;

//     // enum / set
//     case "enum": {
//       const values =
//         col.enumValues ??
//         (parsed.args.length
//           ? parsed.args.map(a => a.replace(/^'(.*)'$/,"$1"))
//           : []);
//       schema = values.length ? z.enum(values as [string, ...string[]]) : z.string();
//       break;
//     }
//     case "set": {
//       const values =
//         col.setValues ??
//         (parsed.args.length
//           ? parsed.args.map(a => a.replace(/^'(.*)'$/,"$1"))
//           : []);
//       schema = values.length ? z.array(z.enum(values as [string, ...string[]])).nonempty().or(z.array(z.string())) : z.array(z.string());
//       break;
//     }

//     // binaire / blob
//     case "binary":
//     case "varbinary":
//     case "blob":
//     case "tinyblob":
//     case "mediumblob":
//     case "longblob":
//       schema = z.instanceof(Uint8Array).or(z.string().base64());
//       break;

//     default:
//       // fallback: string
//       schema = z.any();
//   }

//   // nullabilite / optionnalite
//   if (col.nullable) schema = schema.nullable();
//   if (col.default !== undefined || col.nullable) schema = schema.optional();

//   return schema;
// }

// // ---- Construction d'un schema d'objet ----
// export function buildZodObject(columns: ColumnMeta[]) {
//   const shape: Record<string, z.ZodTypeAny> = {};
//   for (const col of columns) {
//     shape[col.name] = sqlToZod(col);
//   }
//   return z.object(shape);
// }

// // ---- Exemples ----
// const userColumns: ColumnMeta[] = [
//   { name: "id", sqlType: "int(11) unsigned", nullable: false },
//   { name: "email", sqlType: "varchar(255)", length: 255, nullable: false },
//   { name: "name", sqlType: "varchar(120)", length: 120, nullable: false },
//   { name: "bio", sqlType: "text", nullable: true },
//   { name: "is_active", sqlType: "tinyint(1)", nullable: false, default: 1 },
//   { name: "role", sqlType: "enum('user','admin')", enumValues: ["user","admin"], nullable: false, default: "user" },
//   { name: "balance", sqlType: "decimal(12,2)", precision: 12, scale: 2, nullable: false, default: "0.00" },
//   { name: "created_at", sqlType: "datetime", nullable: false },
// ];

// export const UserInsertSchema = buildZodObject(userColumns);

// // Validation
// // const parsed = UserInsertSchema.safeParse(payload);
