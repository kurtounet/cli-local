import { IDirectory } from "@features/project/interfaces/project.models";

export interface IArchitecture {
  directory: IDirectory[];
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

export interface IApiSchematicOptions {
  name: string;
  directory: string;
  noDryRun: boolean;
  skipGit: boolean;
  strict: boolean;
  packageManager: string;
  language: string;
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

export interface IFramework {
  type: string; // Front | Api
  name: string;
  version?: string;
  port: number;
  app?: string;
  cliCmd: string;
  gitBranch: string[];
  gitBranchCheckout: string;
  initialCommit: string;
  installOptions: IInstallOptions;
  architecture: IDirectory[];
  dependencies: IDependencies;
  environments: IEnvironment[];
  script: string;
  databases?: IDatabase[];
}

export interface IEnvironment {
  mode: string;
  debug?: boolean;
  logLevel?: string;
  variables?: IVariables;
  baseUrlApi?: string;
  dataUrl?: string;
}

export interface IProjectConfig {
  projectName: string;
  description?: string;
  path: string;
  starUml?: string;
  version?: string;
  frameWorks: IFramework[];
  databases?: IDatabase[];
  // environments: IEnvironment[];
}
export interface INewProjectCommand {
  name: string;
  path: string;
  starUml: string;
  framework?: string;
  frontends: Array<string>;
  backends: Array<string>;
  databases: Array<string>;
}

export interface IDatabase {
  type: string;
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
  entities?: string;
  synchronize?: boolean;
}
export interface IVariables {
  appPort: number;
  corsOrigine: string;
  databaseConfig: IDatabase;
  mailer?: any;
  jwt?: any;
}

// APP_PORT=<% appPort %>
// CORS_ORIGIN=<% corsOrigine %>  #  http://localhost:4200  Remplace par le domaine de ton frontend si nécessaire

// DB_TYPE=<% dbType %>  # Remplace par POSTGRES si besoin
// DB_HOST=<% dbHost %> # localhost
// DB_PORT=<% dbPort %> # 3306 Msql ou  5432 pour PostgreSQL
// DB_USERNAME=<% dbUserName %>root  # Ton utilisateur MySQL/PostgreSQL
// DB_PASSWORD=<% dbPassword %>  # Ton mot de passe
// DB_NAME=<% dbName %>  # Nom de la base de données MySQL/PostgreSQL
// DB_ENTITIES=<% dbEnities ? dbEnities : '["dist/**/*.entity{.ts,.js}"]' %> # ["dist/**/*.entity{.ts,.js}"]
// DB_SYNCHRONIZE=true  # true ⚠️ Active la synchro automatique des entités (à désactiver en prod)
