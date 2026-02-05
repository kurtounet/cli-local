import { CONFIG_INIT_ANGULAR } from "../../angular/config/angular-config-ini.mock.js";
import { CONFIG_INIT_ELECTRON } from "../../electron/config/config-ini.mock.js";
import { CONFIG_INIT_NESTJS } from "../../nestjs/config/nestjs-config-ini.mock.js";
import { CONFIG_INIT_NITRO } from "../../nitro/config/nitro-config-ini.mock.js";
import { CONFIG_INIT_NUXT } from "../../nuxt/config/nuxt-config-ini.mock.js";
import { CONFIG_INIT_SYMFONY } from "../../symfony/config/symfony-config-ini.mock.js";

export const FRAMEWORK_MAP: Record<string, any> = {
  nuxtjs: CONFIG_INIT_NUXT,
  // vuejs: CONFIG_INIT_VUE,
  nitro: CONFIG_INIT_NITRO,
  nestjs: CONFIG_INIT_NESTJS,
  symfony: CONFIG_INIT_SYMFONY,
  angular: CONFIG_INIT_ANGULAR,
  electron: CONFIG_INIT_ELECTRON,
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
