/**
 *
 */
export function DATABASE_CONFIG_MYSQL_MOCK() {
  return [
    {
      type: "mysql",
      host: "localhost",
      port: 3306,
      user: "root",
      password: "",
      database: "my_database",
    },
    {
      type: "postgres",
      host: "localhost",
      port: 3306,
      user: "root",
      password: "",
      database: "my_database",
    },
    {
      type: "mongodb",
      host: "localhost",
      port: 3306,
      user: "root",
      password: "",
      database: "my_database",
    },
    {
      type: "sqlite",
      host: "localhost",
      port: 3306,
      user: "root",
      password: "",
      database: "my_database",
    },
  ];
}
