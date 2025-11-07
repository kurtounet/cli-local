import { defineNitroConfig } from 'nitropack';
import { resolve } from 'path';
import { ALIASES } from './aliases.generated';

const alias = Object.fromEntries(
  Object.entries(ALIASES ?? {}).map(([key, p]) => [key, resolve(p)])
);
export default defineNitroConfig({
  compatibilityDate: '2025-08-08',
  preset: 'node-server',   
  runtimeConfig: {
    DATABASE_URL: '', // lu via process.env en prod
  },

  srcDir: '.',
  routesDir: 'server/routes',
  alias,
  // alias: {
  //   '#db': resolve('./server/db'),
  //   '#core': resolve('./server/core'),
  //   '#users': resolve('./server/features/users'),
  // },
});