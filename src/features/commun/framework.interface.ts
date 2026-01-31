import { IDirectory } from "../frameworks/models/framework-commun.model.js";
import { IDatabase } from "./database.interface.js";

export interface IConfigFramework {
  type: string; // Front | Api | Backend
  name: string;
  version?: string;
  host?: string;
  dir?: string;
  port: number;
  app?: string;
  plateform?: string;
  mode: string;
  cliCmd: string;
  gitBranch: string[];
  gitBranchCheckout: string;
  initialCommit: string;
  installOptions: IInstallOptions;
  architecture: IDirectory[];
  dependencies: IDependencies;
  environments: IEnvironment[];
  scripts: Record<string, string>;
  databases?: IDatabase[];
}

export interface IInstallOptions {
  name: string;
  directory?: string;
  skipGit?: boolean;
  strict?: boolean;
  packageManager?: string;
  language?: string;
  commit?: boolean;
  createApplication?: boolean;
  defaults?: boolean;
  dryRun?: boolean;
  experimentalZoneless?: boolean;
  force?: boolean;
  inlineStyle?: boolean;
  inlineTemplate?: boolean;
  interactive?: boolean;
  minimal?: boolean;
  newProjectRoot?: string;
  prefix?: string;
  routing?: boolean;
  serverRouting?: boolean;
  skipInstall?: boolean;
  skipTests?: boolean;
  ssr?: boolean;
  standalone?: boolean;
  style?: string;
  viewEncapsulation?: string;
}

export interface IDependencies {
  packageManager: string; // npm | yarn | pnpm | composer
  prod: string[];
  dev: string[];
  optional?: string[];
}

export interface IScript {
  name: string;
  command: string;
}

export interface IScripts {
  build: "nest build";
  format: 'prettier --write "src/**/*.ts" "test/**/*.ts"';
  start: "nest start";
  startDev: "nest start --watch";
  startDebug: "nest start --debug --watch";
  startProd: "node dist/main";
  lint: 'eslint "{src,apps,libs,test}/**/*.ts" --fix';
  test: "jest";
  testWatch: "jest --watch";
  testCov: "jest --coverage";
  testDebug: "node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand";
  testE2e: "jest --config ./test/jest-e2e.json";
  fixturesLoad: "ts-node src/fixtures/load-fixtures.ts";
}

export interface IEnvironment {
  mode: string;
  debug?: boolean;
  logLevel?: string;
  variables?: IVariables;
  baseUrlApi?: string;
  dataUrl?: string;
}

export interface IVariables {
  appPort: number;
  corsOrigine: string;
  databaseConfig: IDatabase;
  mailer?: any;
  jwt?: any;
}
export interface IApiSchematicOptions {
  name: string;
  directory: string;
  noDryRun: boolean;
  skipGit: boolean;
  strict: boolean;
  packageManager: string;
  language: string;
}
