type MySqlType =
  | "int"
  | "tinyint"
  | "smallint"
  | "mediumint"
  | "bigint"
  | "decimal"
  | "numeric"
  | "float"
  | "double"
  | "char"
  | "varchar"
  | "text"
  | "tinytext"
  | "mediumtext"
  | "longtext"
  | "binary"
  | "varbinary"
  | "blob"
  | "tinyblob"
  | "mediumblob"
  | "longblob"
  | "bit"
  | "boolean"
  | "enum"
  | "set"
  | "date"
  | "datetime"
  | "timestamp"
  | "time"
  | "year"
  | "json";

export function mapMySqlToDrizzle(
  t: MySqlType,
  opts: Record<string, any> = {},
): string {
  switch (t) {
    case "int":
      return `int(name)${opts.unsigned ? ".unsigned()" : ""}`;
    case "tinyint":
      return `tinyint(name)`;
    case "smallint":
      return `smallint(name)`;
    case "mediumint":
      return `mediumint(name)`;
    case "bigint":
      return `bigint(name, { mode: '${opts.mode ?? "bigint"}' })${opts.unsigned ? ".unsigned()" : ""}`;
    case "decimal":
    case "numeric":
      return `decimal(name, { precision: ${opts.p ?? 10}, scale: ${opts.s ?? 0} })`;
    case "float":
      return `float(name)`;
    case "double":
      return `double(name)`;

    case "char":
      return `char(name, { length: ${opts.len ?? 1} })`;
    case "varchar":
      return `varchar(name, { length: ${opts.len ?? 255} })`;
    case "text":
      return `text(name)`;
    case "tinytext":
      return `text(name, { size: 'tiny' })`;
    case "mediumtext":
      return `text(name, { size: 'medium' })`;
    case "longtext":
      return `text(name, { size: 'long' })`;

    case "binary":
      return `binary(name, { length: ${opts.len ?? 1} })`;
    case "varbinary":
      return `varbinary(name, { length: ${opts.len ?? 255} })`;
    case "blob":
      return `blob(name)`;
    case "tinyblob":
      return `blob(name, { size: 'tiny' })`;
    case "mediumblob":
      return `blob(name, { size: 'medium' })`;
    case "longblob":
      return `blob(name, { size: 'long' })`;

    case "bit":
      return `bit(name, { length: ${opts.len ?? 1} })`;
    case "boolean":
      return `boolean(name)`;

    case "enum":
      return `mysqlEnum(name, ${JSON.stringify(opts.values ?? [])})`;
    case "set":
      return `mysqlSet ? mysqlSet(name, ${JSON.stringify(opts.values ?? [])}) : varchar(name, { length: ${opts.len ?? 255} })`;

    case "date":
      return `date(name)`;
    case "datetime":
      return `datetime(name, { mode: 'date' })`;
    case "timestamp":
      return `timestamp(name, { mode: 'date' })`;
    case "time":
      return `time(name)`;
    case "year":
      return `smallint(name) // YEAR non natif`;

    case "json":
      return `json(name)`;

    default:
      return `varchar(name, { length: 255 }) // fallback`;
  }
}
