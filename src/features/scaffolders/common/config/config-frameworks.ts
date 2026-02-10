import { CONFIG_INIT_ANGULAR } from "../../frameworks/angular/config/angular-config-ini.mock.js";
import { CONFIG_INIT_SYMFONY } from "../../frameworks/symfony/config/index.js";

export const FRAMEWORK_MAP: Record<string, any> = {
  symfony: CONFIG_INIT_SYMFONY,
  angular: CONFIG_INIT_ANGULAR,
  // nuxtjs: CONFIG_INIT_NUXT,
  // vuejs: CONFIG_INIT_VUE,
  // nitro: CONFIG_INIT_NITRO,
  // nestjs: CONFIG_INIT_NESTJS,
  // electron: CONFIG_INIT_ELECTRON,
};

export const DATABASE_MAP: Record<string, any> = {
  mysql: {
    type: "mysql",
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "my_database",
  },
  postgres: {
    type: "postgres",
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "my_database",
  },
  mongodb: {
    type: "mongodb",
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "my_database",
  },
  sqlite: {
    type: "sqlite",
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "my_database",
  },
};

export const FRAMEWORKS_FRONTEND = ["Angular", "Nuxtjs", "no"];
export const DATABASES = ["Mysql", "Postgres", "Mongodb", "Sqlite", "no"];
export const FRAMEWORKS_BACKEND = [
  "Nitro",
  "Nestjs",
  "Symfony",
  "Electron",
  "no",
];

export const FRAMEWORKS = {
  databases: DATABASES,
  backend: FRAMEWORKS_BACKEND,
  frontend: FRAMEWORKS_FRONTEND,
};

export const FRAMEWORKS_CONFIG = {
  backend: FRAMEWORK_MAP,
  databases: DATABASE_MAP,
  frontend: FRAMEWORK_MAP,
};
