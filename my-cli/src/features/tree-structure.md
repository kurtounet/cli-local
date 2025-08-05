# Directory Tree: features

**Generated on:** 2025-07-12T13:41:08.853Z  
**Directory:** `I:\cli\cli-local\my-cli\src\features`  
**Max Depth:** Unlimited  
**File Extensions Analyzed:** .ts  
**Show Hidden Files:** No  
**Include File Sizes:** No  

---

├── 📁 **frameworks/**
│   ├── 📁 **_global/**
│   │   ├── 📁 **interface/**
│   │   │   ├── 📘 database.interface.ts
│   │   │   └── 📘 framework-commun.model.ts
│   │   ├── 📁 **mocks/**
│   │   │   ├── 📘 config-init-commun.mock.ts
│   │   │   ├── 📘 environments-commun.mock.ts
│   │   │   └── 📘 install-options-commun.mock.ts
│   │   ├── 📁 **service/**
│   │   │   ├── 📘 create-architecture.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **createFolder**(pathFolder: string) *(line 6)*
│   │   │   │       ```typescript
│   │   │   │       export function createFolder(pathFolder: string) {
│   │   │   │         if (!fs.existsSync(pathFolder)) {
│   │   │   │           console.log(`📌 Dossier créer : ${pathFolder}`);
│   │   │   │           fs.mkdirSync(pathFolder);
│   │   │   │         }
│   │   │   │       }
│   │   │   │       /**
│   │   │   │        * Creates the directory structure for a given framework based on its defined architecture.
│   │   │   │        * @param framework The framework object containing the architecture definition.
│   │   │   │        * @param frameworkPath The base path where the framework's architecture should be created.
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createArchitecture**(framework: IFramework, frameworkPath: string) *(line 18)*
│   │   │   │       ```typescript
│   │   │   │       export function createArchitecture(framework: IFramework, frameworkPath: string) {
│   │   │   │         if (framework.architecture.length > 0) {
│   │   │   │           try {
│   │   │   │             framework.architecture.map((item: IDirectory) => {
│   │   │   │               let pathFolder = path.join(frameworkPath, item.name);
│   │   │   │               createFolder(pathFolder);
│   │   │   │               if (item.children.length > 0) {
│   │   │   │                 item.children.map((child: IDirectory) => {
│   │   │   │                   let pathFolder = path.join(frameworkPath, item.name, child.name);
│   │   │   │                   createFolder(pathFolder);
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createFolder**(pathFolder: string) *(line 6)*
│   │   │   │       ```typescript
│   │   │   │       createFolder(pathFolder: string) {
│   │   │   │         if (!fs.existsSync(pathFolder)) {
│   │   │   │           console.log(`📌 Dossier créer : ${pathFolder}`);
│   │   │   │           fs.mkdirSync(pathFolder);
│   │   │   │         }
│   │   │   │       }
│   │   │   │       /**
│   │   │   │        * Creates the directory structure for a given framework based on its defined architecture.
│   │   │   │        * @param framework The framework object containing the architecture definition.
│   │   │   │        * @param frameworkPath The base path where the framework's architecture should be created.
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createArchitecture**(framework: IFramework, frameworkPath: string) *(line 18)*
│   │   │   │       ```typescript
│   │   │   │       createArchitecture(framework: IFramework, frameworkPath: string) {
│   │   │   │         if (framework.architecture.length > 0) {
│   │   │   │           try {
│   │   │   │             framework.architecture.map((item: IDirectory) => {
│   │   │   │               let pathFolder = path.join(frameworkPath, item.name);
│   │   │   │               createFolder(pathFolder);
│   │   │   │               if (item.children.length > 0) {
│   │   │   │                 item.children.map((child: IDirectory) => {
│   │   │   │                   let pathFolder = path.join(frameworkPath, item.name, child.name);
│   │   │   │                   createFolder(pathFolder);
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **if**(framework.architecture.length > 0) *(line 19)*
│   │   │   │       ```typescript
│   │   │   │       if (framework.architecture.length > 0) {
│   │   │   │           try {
│   │   │   │             framework.architecture.map((item: IDirectory) => {
│   │   │   │               let pathFolder = path.join(frameworkPath, item.name);
│   │   │   │               createFolder(pathFolder);
│   │   │   │               if (item.children.length > 0) {
│   │   │   │                 item.children.map((child: IDirectory) => {
│   │   │   │                   let pathFolder = path.join(frameworkPath, item.name, child.name);
│   │   │   │                   createFolder(pathFolder);
│   │   │   │                 });
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **if**(item.children.length > 0) *(line 24)*
│   │   │   │       ```typescript
│   │   │   │       if (item.children.length > 0) {
│   │   │   │                 item.children.map((child: IDirectory) => {
│   │   │   │                   let pathFolder = path.join(frameworkPath, item.name, child.name);
│   │   │   │                   createFolder(pathFolder);
│   │   │   │                 });
│   │   │   │               }
│   │   │   │             });
│   │   │   │           } catch (error) {
│   │   │   │             return `❌ Erreur lors de la création de l'architecture !`;
│   │   │   │           }
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **catch**(error) *(line 31)*
│   │   │   │       ```typescript
│   │   │   │       catch (error) {
│   │   │   │             return `❌ Erreur lors de la création de l'architecture !`;
│   │   │   │           }
│   │   │   │         } else {
│   │   │   │           return `✅ Aucune architecture à créer !`;
│   │   │   │         }
│   │   │   │       
│   │   │   │         return `✅ Architecture créée avec succès !`;
│   │   │   │       }
│   │   │   │       ```
│   │   │   ├── 📘 entity.service.ts
│   │   │   ├── 📘 generate-interface-service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **generateInterfaceService**(pathMdjFile: string) *(line 7)*
│   │   │   │       ```typescript
│   │   │   │       export async function generateInterfaceService(pathMdjFile: string) {
│   │   │   │       }│   │   │   │       
│   │   │   │        function getInterfaceImports(entity: IEntityJson, allEntities: IEntityJson[]): string {
│   │   │   │            const imports = new Set<string>();
│   │   │   │        
│   │   │   │            if (entity.relationships) {
│   │   │   │                for (const rel of entity.relationships) {
│   │   │   │                    const targetEntity = allEntities.find(e => e.tableName === rel.target);
│   │   │   │                    if (targetEntity && targetEntity.namePascalCase !== entity.namePascalCase) {
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **generateInterfaceService**(pathMdjFile: string) *(line 7)*
│   │   │   │       ```typescript
│   │   │   │       generateInterfaceService(pathMdjFile: string) {
│   │   │   │       }
│   │   │   │       
│   │   │   │        function getInterfaceImports(entity: IEntityJson, allEntities: IEntityJson[]): string {
│   │   │   │            const imports = new Set<string>();
│   │   │   │        
│   │   │   │            if (entity.relationships) {
│   │   │   │                for (const rel of entity.relationships) {
│   │   │   │                    const targetEntity = allEntities.find(e => e.tableName === rel.target);
│   │   │   │                    if (targetEntity && targetEntity.namePascalCase !== entity.namePascalCase) {
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **if**(entity.relationships) *(line 13)*
│   │   │   │       ```typescript
│   │   │   │       if (entity.relationships) {
│   │   │   │                for (const rel of entity.relationships) {
│   │   │   │                    const targetEntity = allEntities.find(e => e.tableName === rel.target);
│   │   │   │                    if (targetEntity && targetEntity.namePascalCase !== entity.namePascalCase) {
│   │   │   │                        imports.add(`import { I${targetEntity.namePascalCase} } from './${targetEntity.nameKebabCase}.interface';`);
│   │   │   │                    }
│   │   │   │                }
│   │   │   │            }
│   │   │   │            
│   │   │   │            return Array.from(imports).join('\n');
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **for**(const rel of entity.relationships) *(line 14)*
│   │   │   │       ```typescript
│   │   │   │       for (const rel of entity.relationships) {
│   │   │   │                    const targetEntity = allEntities.find(e => e.tableName === rel.target);
│   │   │   │                    if (targetEntity && targetEntity.namePascalCase !== entity.namePascalCase) {
│   │   │   │                        imports.add(`import { I${targetEntity.namePascalCase} } from './${targetEntity.nameKebabCase}.interface';`);
│   │   │   │                    }
│   │   │   │                }
│   │   │   │            }
│   │   │   │            
│   │   │   │            return Array.from(imports).join('\n');
│   │   │   │        }
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **if**(targetEntity && targetEntity.namePascalCase !== entity.namePascalCase) *(line 16)*
│   │   │   │       ```typescript
│   │   │   │       if (targetEntity && targetEntity.namePascalCase !== entity.namePascalCase) {
│   │   │   │                        imports.add(`import { I${targetEntity.namePascalCase} } from './${targetEntity.nameKebabCase}.interface';`);
│   │   │   │                    }
│   │   │   │                }
│   │   │   │            }
│   │   │   │            
│   │   │   │            return Array.from(imports).join('\n');
│   │   │   │        }
│   │   │   │        
│   │   │   │        export function generateInterfaceFileContent(entity: IEntityJson, allEntities: IEntityJson[]): string {
│   │   │   │       ...
│   │   │   │       ```
│   │   │   ├── 📘 get-command.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **getCommandFramework**(frameWork: IFramework, projectName: string) *(line 16)*
│   │   │   │       ```typescript
│   │   │   │       export function getCommandFramework(frameWork: IFramework, projectName: string) {
│   │   │   │         let options = ``;
│   │   │   │         if (!frameWork) {
│   │   │   │           console.error('❌ Framework non renseigné.');
│   │   │   │           process.exit(1);
│   │   │   │         }
│   │   │   │         if (COMMAND_NESTJS.some((cmd) => frameWork.name.toLowerCase().includes(cmd))) {
│   │   │   │           return `nest new ${projectName} --package-manager npm ${options}`;
│   │   │   │         } else if (COMMAND_SYMFONY.some((cmd) => frameWork.name.toLowerCase().includes(cmd))) {
│   │   │   │           return `symfony new ${projectName} --version=${frameWork.version} ${frameWork.app}`;
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **getCommandFramework**(frameWork: IFramework, projectName: string) *(line 16)*
│   │   │   │       ```typescript
│   │   │   │       getCommandFramework(frameWork: IFramework, projectName: string) {
│   │   │   │         let options = ``;
│   │   │   │         if (!frameWork) {
│   │   │   │           console.error('❌ Framework non renseigné.');
│   │   │   │           process.exit(1);
│   │   │   │         }
│   │   │   │         if (COMMAND_NESTJS.some((cmd) => frameWork.name.toLowerCase().includes(cmd))) {
│   │   │   │           return `nest new ${projectName} --package-manager npm ${options}`;
│   │   │   │         } else if (COMMAND_SYMFONY.some((cmd) => frameWork.name.toLowerCase().includes(cmd))) {
│   │   │   │           return `symfony new ${projectName} --version=${frameWork.version} ${frameWork.app}`;
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **if**(!frameWork) *(line 18)*
│   │   │   │       ```typescript
│   │   │   │       if (!frameWork) {
│   │   │   │           console.error('❌ Framework non renseigné.');
│   │   │   │           process.exit(1);
│   │   │   │         }
│   │   │   │         if (COMMAND_NESTJS.some((cmd) => frameWork.name.toLowerCase().includes(cmd))) {
│   │   │   │           return `nest new ${projectName} --package-manager npm ${options}`;
│   │   │   │         } else if (COMMAND_SYMFONY.some((cmd) => frameWork.name.toLowerCase().includes(cmd))) {
│   │   │   │           return `symfony new ${projectName} --version=${frameWork.version} ${frameWork.app}`;
│   │   │   │         } else if (COMMAND_ANGULAR.some((cmd) => frameWork.name.toLowerCase().includes(cmd))) {
│   │   │   │           return `ng new ${projectName} --style=scss --ssr=false ${options}`;
│   │   │   │       ...
│   │   │   │       ```
│   │   │   ├── 📘 get-config-frameworks.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **getConfigFrameworkMock**(name: string) *(line 20)*
│   │   │   │       ```typescript
│   │   │   │       export function getConfigFrameworkMock(name: string) {
│   │   │   │         let framework!: IFramework;
│   │   │   │       
│   │   │   │         if (FRAMEWORKS_LIST.includes(name.toLowerCase())) {
│   │   │   │           if (name.toLowerCase().includes('angular')) {
│   │   │   │             framework = CONFIG_INIT_ANGULAR;
│   │   │   │           } else if (name.toLowerCase().includes('nestjs')) {
│   │   │   │             framework = CONFIG_INIT_NESTJS;
│   │   │   │           } else if (name.toLowerCase().includes('symfony')) {
│   │   │   │             framework = CONFIG_INIT_SYMFONY;
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **getConfigDatabaseMock**(name: string) *(line 37)*
│   │   │   │       ```typescript
│   │   │   │       export function getConfigDatabaseMock(name: string) {
│   │   │   │         const FrameworksList = ['mysql', 'postgres', 'mongodb', 'sqlite'];
│   │   │   │         let pathFile = '';
│   │   │   │         let database!: IDatabase;
│   │   │   │       
│   │   │   │         if (FrameworksList.includes(name.toLowerCase())) {
│   │   │   │           if (name.toLowerCase().includes('mysql')) {
│   │   │   │             database = {
│   │   │   │               type: 'mysql',
│   │   │   │               host: 'localhost',
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createConfigProject**(project: IProjectCommand) *(line 114)*
│   │   │   │       ```typescript
│   │   │   │       export function createConfigProject(project: IProjectCommand) {
│   │   │   │         const frameworksList = [...project.frontends, ...project.backends];
│   │   │   │         const config: IProjectConfig = {
│   │   │   │           projectName: project.name,
│   │   │   │           path: project.path,
│   │   │   │           starUml: project.starUml,
│   │   │   │           version: '1.0.0',
│   │   │   │           frameWorks: getConfigFrameworks(frameworksList),
│   │   │   │           databases: getConfigDatabases(project.databases),
│   │   │   │         };
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **getConfigFrameworkMock**(name: string) *(line 20)*
│   │   │   │       ```typescript
│   │   │   │       getConfigFrameworkMock(name: string) {
│   │   │   │         let framework!: IFramework;
│   │   │   │       
│   │   │   │         if (FRAMEWORKS_LIST.includes(name.toLowerCase())) {
│   │   │   │           if (name.toLowerCase().includes('angular')) {
│   │   │   │             framework = CONFIG_INIT_ANGULAR;
│   │   │   │           } else if (name.toLowerCase().includes('nestjs')) {
│   │   │   │             framework = CONFIG_INIT_NESTJS;
│   │   │   │           } else if (name.toLowerCase().includes('symfony')) {
│   │   │   │             framework = CONFIG_INIT_SYMFONY;
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **getConfigDatabaseMock**(name: string) *(line 37)*
│   │   │   │       ```typescript
│   │   │   │       getConfigDatabaseMock(name: string) {
│   │   │   │         const FrameworksList = ['mysql', 'postgres', 'mongodb', 'sqlite'];
│   │   │   │         let pathFile = '';
│   │   │   │         let database!: IDatabase;
│   │   │   │       
│   │   │   │         if (FrameworksList.includes(name.toLowerCase())) {
│   │   │   │           if (name.toLowerCase().includes('mysql')) {
│   │   │   │             database = {
│   │   │   │               type: 'mysql',
│   │   │   │               host: 'localhost',
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **if**(element != 'no') *(line 87)*
│   │   │   │       ```typescript
│   │   │   │       if (element != 'no') {
│   │   │   │             let config = getConfigFrameworkMock(element);
│   │   │   │             if (config != null) {
│   │   │   │               configFramework.push(config);
│   │   │   │             }
│   │   │   │           }
│   │   │   │         });
│   │   │   │       
│   │   │   │         return configFramework;
│   │   │   │       }
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **if**(config != null) *(line 89)*
│   │   │   │       ```typescript
│   │   │   │       if (config != null) {
│   │   │   │               configFramework.push(config);
│   │   │   │             }
│   │   │   │           }
│   │   │   │         });
│   │   │   │       
│   │   │   │         return configFramework;
│   │   │   │       }
│   │   │   │       
│   │   │   │       export function getConfigDatabases(database: Array<string>): Array<IDatabase> {
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **if**(config != null) *(line 102)*
│   │   │   │       ```typescript
│   │   │   │       if (config != null) {
│   │   │   │             configDatabase.push(config);
│   │   │   │           }
│   │   │   │         });
│   │   │   │         return configDatabase;
│   │   │   │       }
│   │   │   │       
│   │   │   │       /**
│   │   │   │        * Creates a project configuration object based on the provided project command.
│   │   │   │        * @param project The project command object.
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createConfigProject**(project: IProjectCommand) *(line 114)*
│   │   │   │       ```typescript
│   │   │   │       createConfigProject(project: IProjectCommand) {
│   │   │   │         const frameworksList = [...project.frontends, ...project.backends];
│   │   │   │         const config: IProjectConfig = {
│   │   │   │           projectName: project.name,
│   │   │   │           path: project.path,
│   │   │   │           starUml: project.starUml,
│   │   │   │           version: '1.0.0',
│   │   │   │           frameWorks: getConfigFrameworks(frameworksList),
│   │   │   │           databases: getConfigDatabases(project.databases),
│   │   │   │         };
│   │   │   │       ...
│   │   │   │       ```
│   │   │   ├── 📘 git.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **for**(const line of lines) *(line 61)*
│   │   │   │       ```typescript
│   │   │   │       for (const line of lines) {
│   │   │   │           if (line.trim().includes(dir)) {
│   │   │   │             return true;
│   │   │   │           }
│   │   │   │         }
│   │   │   │         return false;
│   │   │   │       }
│   │   │   │       ```
│   │   │   └── 📘 install-dependencies.service.ts
│   │   │       *Functions found:*
│   │   │         - 🔧 **installTSDependencies**(framework: IFramework, path: string) *(line 4)*
│   │   │           ```typescript
│   │   │           export async function installTSDependencies(framework: IFramework, path: string) {
│   │   │             const dependencies: IDependencies = framework.dependencies;
│   │   │             console.log(dependencies);
│   │   │             console.log("📦 Début de l'installation des dépendances...");
│   │   │             framework.dependencies.prod.forEach((dep: string) => {
│   │   │               console.log(`npm install ${dep}`);
│   │   │               executeCommand(
│   │   │                 `npm install ${dep}`,
│   │   │                 { cwd: path, stdio: 'inherit' },
│   │   │                 `📦 Installation de ${dep}`,
│   │   │           ...
│   │   │           ```
│   │   │         - 🔧 **installComposerDependencies**(framework: IFramework, path: string) *(line 103)*
│   │   │           ```typescript
│   │   │           export function installComposerDependencies(framework: IFramework, path: string) {
│   │   │             framework.dependencies.prod.forEach((dep: string) => {
│   │   │               console.log(`composer require ${dep}`);
│   │   │               executeCommand(
│   │   │                 `composer require ${dep}`,
│   │   │                 { cwd: path, stdio: 'inherit' },
│   │   │                 `📦 Installation de ${dep}`,
│   │   │                 `✅ Dépendances de production installées avec succès !`,
│   │   │                 `❌ Erreur lors de l'installation des dépendances de production !`,
│   │   │               );
│   │   │           ...
│   │   │           ```
│   │   │         - 🔧 **installTSDependencies**(framework: IFramework, path: string) *(line 4)*
│   │   │           ```typescript
│   │   │           installTSDependencies(framework: IFramework, path: string) {
│   │   │             const dependencies: IDependencies = framework.dependencies;
│   │   │             console.log(dependencies);
│   │   │             console.log("📦 Début de l'installation des dépendances...");
│   │   │             framework.dependencies.prod.forEach((dep: string) => {
│   │   │               console.log(`npm install ${dep}`);
│   │   │               executeCommand(
│   │   │                 `npm install ${dep}`,
│   │   │                 { cwd: path, stdio: 'inherit' },
│   │   │                 `📦 Installation de ${dep}`,
│   │   │           ...
│   │   │           ```
│   │   │         - 🔧 **switch**(packageManager) *(line 31)*
│   │   │           ```typescript
│   │   │           switch (packageManager) {
│   │   │                   case "npm" || "npx" || "yarn" || "pnpm":
│   │   │                       installDependencies(dependencies: IDependencies, path: string)
│   │   │                       break;
│   │   │                   case "composer ":
│   │   │                       console.log("Composer n'est pas supporté pour l'installation des dépendances.");
│   │   │                       installComposerDependencies(dependencies: IDependencies, path: string)
│   │   │                       break;
│   │   │           
│   │   │               }
│   │   │           ...
│   │   │           ```
│   │   │         - 🔧 **if**(installProdCommand) *(line 46)*
│   │   │           ```typescript
│   │   │           if (installProdCommand) {
│   │   │                   installPromises.push(
│   │   │                       executeCommand(
│   │   │                           installProdCommand,
│   │   │                           { cwd: path, stdio: "inherit" },
│   │   │                           "📦 Installation des dépendances de production...",
│   │   │                           "✅ Dépendances de production installées avec succès !",
│   │   │                           "❌ Erreur lors de l'installation des dépendances de production !"
│   │   │                       )
│   │   │                   );
│   │   │           ...
│   │   │           ```
│   │   │         - 🔧 **if**(installDevCommand) *(line 58)*
│   │   │           ```typescript
│   │   │           if (installDevCommand) {
│   │   │                   installPromises.push(
│   │   │                       executeCommand(
│   │   │                           installDevCommand,
│   │   │                           { cwd: path, stdio: "inherit" },
│   │   │                           "📦 Installation des dépendances de développement...",
│   │   │                           "✅ Dépendances de développement installées avec succès !",
│   │   │                           "❌ Erreur lors de l'installation des dépendances de développement !"
│   │   │                       )
│   │   │                   );
│   │   │           ...
│   │   │           ```
│   │   │         - 🔧 **if**(dependencies.prod.length) *(line 74)*
│   │   │           ```typescript
│   │   │           if (dependencies.prod.length) {
│   │   │                   await executeCommand(
│   │   │                       `git add . && git commit -m "install: ${dependencies.prod.join(", ")}"`,
│   │   │                       { cwd: path, stdio: "inherit" },
│   │   │                       "📌 Commit des dépendances de production...",
│   │   │                       "✅ Commit des dépendances de production créé avec succès !",
│   │   │                       "❌ Erreur lors du commit des dépendances de production !"
│   │   │                   );
│   │   │               }
│   │   │           ...
│   │   │           ```
│   │   │         - 🔧 **if**(dependencies.dev.length) *(line 84)*
│   │   │           ```typescript
│   │   │           if (dependencies.dev.length) {
│   │   │                   await executeCommand(
│   │   │                       `git add . && git commit -m "install: ${dependencies.dev.join(", ")} (dev)"`,
│   │   │                       { cwd: path, stdio: "inherit" },
│   │   │                       "📌 Commit des dépendances de développement...",
│   │   │                       "✅ Commit des dépendances de développement créé avec succès !",
│   │   │                       "❌ Erreur lors du commit des dépendances de développement !"
│   │   │                   );
│   │   │               }
│   │   │           ...
│   │   │           ```
│   │   │         - 🔧 **installComposerDependencies**(framework: IFramework, path: string) *(line 103)*
│   │   │           ```typescript
│   │   │           installComposerDependencies(framework: IFramework, path: string) {
│   │   │             framework.dependencies.prod.forEach((dep: string) => {
│   │   │               console.log(`composer require ${dep}`);
│   │   │               executeCommand(
│   │   │                 `composer require ${dep}`,
│   │   │                 { cwd: path, stdio: 'inherit' },
│   │   │                 `📦 Installation de ${dep}`,
│   │   │                 `✅ Dépendances de production installées avec succès !`,
│   │   │                 `❌ Erreur lors de l'installation des dépendances de production !`,
│   │   │               );
│   │   │           ...
│   │   │           ```
│   │   └── 📘 utils.ts
│   │       *Functions found:*
│   │         - 🔧 **getConfigFile**(pathFile: string) *(line 4)*
│   │           ```typescript
│   │           export function getConfigFile(pathFile: string) {
│   │             return JSON.parse(fs.readFileSync(pathFile, 'utf8'));
│   │           }
│   │           
│   │           export function getRandomInt(min: number, max: number) {
│   │             return Math.floor(Math.random() * (max - min + 1)) + min;
│   │           }
│   │           
│   │           export function updateTsConfig(frameworkProjectPath: string): string {
│   │             const tsConfigPath = path.join(frameworkProjectPath, 'tsconfig.json');
│   │           ...
│   │           ```
│   │         - 🔧 **getRandomInt**(min: number, max: number) *(line 8)*
│   │           ```typescript
│   │           export function getRandomInt(min: number, max: number) {
│   │             return Math.floor(Math.random() * (max - min + 1)) + min;
│   │           }
│   │           
│   │           export function updateTsConfig(frameworkProjectPath: string): string {
│   │             const tsConfigPath = path.join(frameworkProjectPath, 'tsconfig.json');
│   │           
│   │             if (!fs.existsSync(tsConfigPath)) {
│   │               return `Erreur : Aucun fichier tsconfig.json trouvé dans ${frameworkProjectPath}`;
│   │             }
│   │           ...
│   │           ```
│   │         - 🔧 **getConfigFile**(pathFile: string) *(line 4)*
│   │           ```typescript
│   │           getConfigFile(pathFile: string) {
│   │             return JSON.parse(fs.readFileSync(pathFile, 'utf8'));
│   │           }
│   │           
│   │           export function getRandomInt(min: number, max: number) {
│   │             return Math.floor(Math.random() * (max - min + 1)) + min;
│   │           }
│   │           
│   │           export function updateTsConfig(frameworkProjectPath: string): string {
│   │             const tsConfigPath = path.join(frameworkProjectPath, 'tsconfig.json');
│   │           ...
│   │           ```
│   │         - 🔧 **getRandomInt**(min: number, max: number) *(line 8)*
│   │           ```typescript
│   │           getRandomInt(min: number, max: number) {
│   │             return Math.floor(Math.random() * (max - min + 1)) + min;
│   │           }
│   │           
│   │           export function updateTsConfig(frameworkProjectPath: string): string {
│   │             const tsConfigPath = path.join(frameworkProjectPath, 'tsconfig.json');
│   │           
│   │             if (!fs.existsSync(tsConfigPath)) {
│   │               return `Erreur : Aucun fichier tsconfig.json trouvé dans ${frameworkProjectPath}`;
│   │             }
│   │           ...
│   │           ```
│   │         - 🔧 **catch**(error) *(line 35)*
│   │           ```typescript
│   │           catch (error) {
│   │               return `Erreur lors de la mise à jour de tsconfig.json : ${error}`;
│   │             }
│   │           }
│   │           
│   │           export function updatePackageJson(frameworkProjectPath: string): string {
│   │             const packageJsonPath = path.join(frameworkProjectPath, 'package.json');
│   │           
│   │             if (!fs.existsSync(packageJsonPath)) {
│   │               return `Erreur: Aucun fichier package.json trouvé dans ${frameworkProjectPath}`;
│   │           ...
│   │           ```
│   │         - 🔧 **if**(!packageJson.scripts['start:custom']) *(line 52)*
│   │           ```typescript
│   │           if (!packageJson.scripts['start:custom']) {
│   │                 packageJson.scripts['start:custom'] = "echo 'Custom start script'";
│   │               }
│   │           
│   │               fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8');
│   │           
│   │               return `${frameworkProjectPath} : package.json mis à jour ✅`;
│   │             } catch (error) {
│   │               return `Erreur lors de la mise à jour de package.json : ${error}`;
│   │             }
│   │           ...
│   │           ```
│   │         - 🔧 **catch**(error) *(line 59)*
│   │           ```typescript
│   │           catch (error) {
│   │               return `Erreur lors de la mise à jour de package.json : ${error}`;
│   │             }
│   │           }
│   │           
│   │           /**
│   │            * Adds or modifies a property in a JSON file.
│   │            * @param filePath The path to the JSON file.
│   │            * @param keyPath The dot-separated path to the property (e.g., "compilerOptions.paths").
│   │            * @param value The value to set for the property.
│   │           ...
│   │           ```
│   │         - 🔧 **if**(index === keys.length - 1) *(line 84)*
│   │           ```typescript
│   │           if (index === keys.length - 1) {
│   │                   // Dernière clé : on assigne la valeur
│   │                   current[key] = value;
│   │                 } else {
│   │                   // On descend dans l'objet
│   │                   if (!current[key] || typeof current[key] !== 'object') {
│   │                     current[key] = {};
│   │                   }
│   │                   current = current[key];
│   │                 }
│   │           ...
│   │           ```
│   │         - 🔧 **if**(!current[key] || typeof current[key] !== 'object') *(line 89)*
│   │           ```typescript
│   │           if (!current[key] || typeof current[key] !== 'object') {
│   │                     current[key] = {};
│   │                   }
│   │                   current = current[key];
│   │                 }
│   │               });
│   │           
│   │               // Réécriture du fichier
│   │               fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2), 'utf8');
│   │           ...
│   │           ```
│   │         - 🔧 **catch**(error) *(line 100)*
│   │           ```typescript
│   │           catch (error) {
│   │               return `Erreur lors de la modification de ${filePath} : ${error}`;
│   │             }
│   │           }
│   │           ```
│   ├── 📁 **angular/**
│   │   ├── 📁 **config/**
│   │   │   ├── 📘 angular-architecture.mock.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **ARCHITECTURE_ANGULAR_MOCK**() *(line 1)*
│   │   │   │       ```typescript
│   │   │   │       export function ARCHITECTURE_ANGULAR_MOCK() {
│   │   │   │         return [
│   │   │   │           {
│   │   │   │             _type: 'directory',
│   │   │   │             name: '.doc',
│   │   │   │             gitIgnore: true,
│   │   │   │             pathInProject: './',
│   │   │   │             children: [],
│   │   │   │           },
│   │   │   │           {
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **ARCHITECTURE_ANGULAR_MOCK**() *(line 1)*
│   │   │   │       ```typescript
│   │   │   │       ARCHITECTURE_ANGULAR_MOCK() {
│   │   │   │         return [
│   │   │   │           {
│   │   │   │             _type: 'directory',
│   │   │   │             name: '.doc',
│   │   │   │             gitIgnore: true,
│   │   │   │             pathInProject: './',
│   │   │   │             children: [],
│   │   │   │           },
│   │   │   │           {
│   │   │   │       ...
│   │   │   │       ```
│   │   │   ├── 📘 angular-config-ini.mock.ts
│   │   │   ├── 📘 angular-dependencies.mock.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **DEPENDENCIES_ANGULAR_MOCK**() *(line 1)*
│   │   │   │       ```typescript
│   │   │   │       export function DEPENDENCIES_ANGULAR_MOCK() {
│   │   │   │         return {
│   │   │   │           packageManager: 'composer',
│   │   │   │           prod: [],
│   │   │   │           dev: [],
│   │   │   │         };
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **DEPENDENCIES_ANGULAR_MOCK**() *(line 1)*
│   │   │   │       ```typescript
│   │   │   │       DEPENDENCIES_ANGULAR_MOCK() {
│   │   │   │         return {
│   │   │   │           packageManager: 'composer',
│   │   │   │           prod: [],
│   │   │   │           dev: [],
│   │   │   │         };
│   │   │   │       }
│   │   │   │       ```
│   │   │   ├── 📘 angular-environments.mock.ts
│   │   │   ├── 📘 angular-initiale-architecture-project.mock.ts
│   │   │   ├── 📘 angular-install-options.mock.ts
│   │   │   └── 📘 angular-scripts.mock.ts
│   │   │       *Functions found:*
│   │   │         - 🔧 **SCRIPTS_ANGULAR_MOCK**() *(line 1)*
│   │   │           ```typescript
│   │   │           export function SCRIPTS_ANGULAR_MOCK() {
│   │   │             return ` 
│   │   │               "modules": "clinode nest:mdj:all gest-project .docs/mcd.mdj --force",
│   │   │               "fixtures": "clinode create:mdj:fixtures gest-project .docs/mcd.mdj src/fixtures --force",
│   │   │               "seed": "ts-node -r tsconfig-paths/register src/seeds/main.seed.ts",
│   │   │               "plan": "clinode create:plan gest-project"
│   │   │             }`;
│   │   │           }
│   │   │           ```
│   │   │         - 🔧 **SCRIPTS_ANGULAR_MOCK**() *(line 1)*
│   │   │           ```typescript
│   │   │           SCRIPTS_ANGULAR_MOCK() {
│   │   │             return ` 
│   │   │               "modules": "clinode nest:mdj:all gest-project .docs/mcd.mdj --force",
│   │   │               "fixtures": "clinode create:mdj:fixtures gest-project .docs/mcd.mdj src/fixtures --force",
│   │   │               "seed": "ts-node -r tsconfig-paths/register src/seeds/main.seed.ts",
│   │   │               "plan": "clinode create:plan gest-project"
│   │   │             }`;
│   │   │           }
│   │   │           ```
│   │   ├── 📁 **interfaces/**
│   │   │   └── 📘 angular-model.ts
│   │   ├── 📁 **mock/**
│   │   │   └── 📋 angular-sample-config.json
│   │   ├── 📁 **services/**
│   │   │   ├── 📘 angular-generate-component.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **angularGenerateComponent**(targetPath: string, name: string) *(line 10)*
│   │   │   │       ```typescript
│   │   │   │       export const angularGenerateComponent = async (targetPath: string, name: string) => {
│   │   │   │         const kebabName = slugify(name);
│   │   │   │         const content = angularComponentTemplate(kebabName, pascalCase(name));
│   │   │   │         const componentDir = `${targetPath}/${kebabName}`;
│   │   │   │         await writeFile(`${componentDir}/${kebabName}.component.ts`, content);
│   │   │   │         await writeFile(`${componentDir}/${kebabName}.component.html`, `<p>${kebabName} works!</p>`);
│   │   │   │         await writeFile(`${componentDir}/${kebabName}.component.css`, `/* ${kebabName}.component.css */`);
│   │   │   │       };
│   │   │   │       ```
│   │   │   ├── 📘 angular-generate-controller.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **angularGenerateController**(entity: IEntityJson) *(line 7)*
│   │   │   │       ```typescript
│   │   │   │       export function angularGenerateController(entity: IEntityJson) {
│   │   │   │         console.log(`Génération du contrôleur Angular pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **angularGenerateController**(entity: IEntityJson) *(line 7)*
│   │   │   │       ```typescript
│   │   │   │       angularGenerateController(entity: IEntityJson) {
│   │   │   │         console.log(`Génération du contrôleur Angular pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   ├── 📘 angular-generate-dto.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **angularGenerateDto**(entity: IEntityJson) *(line 7)*
│   │   │   │       ```typescript
│   │   │   │       export function angularGenerateDto(entity: IEntityJson) {
│   │   │   │         // Logique de génération de DTO Angular ici
│   │   │   │         console.log(`Génération du DTO Angular pour: ${entity.namePascalCase}`);
│   │   │   │         // Exemple: Écrire le contenu du DTO dans un fichier
│   │   │   │         //
│   │   │   │         //
│   │   │   │         const content = `export class Create${entity.namePascalCase}Dto {\n  //   // ... propriétés basées sur entity.columns\n  // }`;
│   │   │   │         saveFileSync(`path/to/angular/dtos/create-${entity.nameKebabCase}.dto.ts`, content);
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **angularGenerateDto**(entity: IEntityJson) *(line 7)*
│   │   │   │       ```typescript
│   │   │   │       angularGenerateDto(entity: IEntityJson) {
│   │   │   │         // Logique de génération de DTO Angular ici
│   │   │   │         console.log(`Génération du DTO Angular pour: ${entity.namePascalCase}`);
│   │   │   │         // Exemple: Écrire le contenu du DTO dans un fichier
│   │   │   │         //
│   │   │   │         //
│   │   │   │         const content = `export class Create${entity.namePascalCase}Dto {\n  //   // ... propriétés basées sur entity.columns\n  // }`;
│   │   │   │         saveFileSync(`path/to/angular/dtos/create-${entity.nameKebabCase}.dto.ts`, content);
│   │   │   │       }
│   │   │   │       ```
│   │   │   ├── 📘 angular-generate-entity.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **angularGenerateEntity**(entity: IEntityJson) *(line 7)*
│   │   │   │       ```typescript
│   │   │   │       export function angularGenerateEntity(entity: IEntityJson) {
│   │   │   │         // Logique de génération d'entité Angular ici
│   │   │   │         console.log(`Génération de l'entité Angular pour: ${entity.namePascalCase}`);
│   │   │   │         // Exemple: Écrire le contenu de l'entité dans un fichier
│   │   │   │         // const content = `export class ${entity.namePascalCase} {\n  //   // ... propriétés basées sur entity.columns\n  // }`;
│   │   │   │         // saveFileSync(`path/to/angular/entities/${entity.nameKebabCase}.ts`, content);
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **angularGenerateEntity**(entity: IEntityJson) *(line 7)*
│   │   │   │       ```typescript
│   │   │   │       angularGenerateEntity(entity: IEntityJson) {
│   │   │   │         // Logique de génération d'entité Angular ici
│   │   │   │         console.log(`Génération de l'entité Angular pour: ${entity.namePascalCase}`);
│   │   │   │         // Exemple: Écrire le contenu de l'entité dans un fichier
│   │   │   │         // const content = `export class ${entity.namePascalCase} {\n  //   // ... propriétés basées sur entity.columns\n  // }`;
│   │   │   │         // saveFileSync(`path/to/angular/entities/${entity.nameKebabCase}.ts`, content);
│   │   │   │       }
│   │   │   │       ```
│   │   │   ├── 📘 angular-generate-files-framework.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **angularGenerateFilesFramework**(
  framework: IFramework,
  frameworkProjectPath: string,
  entitiesJsonFile: object,
) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       export function angularGenerateFilesFramework(
│   │   │   │         framework: IFramework,
│   │   │   │         frameworkProjectPath: string,
│   │   │   │         entitiesJsonFile: object,
│   │   │   │       ) {
│   │   │   │         // Logique de génération de fichiers Angular ici
│   │   │   │         // createDependencies(framework, frameworkProjectPath)
│   │   │   │         console.log('Génération de fichiers Angular');
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **angularGenerateFilesFramework**(
  framework: IFramework,
  frameworkProjectPath: string,
  entitiesJsonFile: object,
) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       angularGenerateFilesFramework(
│   │   │   │         framework: IFramework,
│   │   │   │         frameworkProjectPath: string,
│   │   │   │         entitiesJsonFile: object,
│   │   │   │       ) {
│   │   │   │         // Logique de génération de fichiers Angular ici
│   │   │   │         // createDependencies(framework, frameworkProjectPath)
│   │   │   │         console.log('Génération de fichiers Angular');
│   │   │   │       }
│   │   │   │       ```
│   │   │   ├── 📘 angular-generate-interface.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **angularGenerateInterface**(entity: IEntityJson) *(line 7)*
│   │   │   │       ```typescript
│   │   │   │       export function angularGenerateInterface(entity: IEntityJson) {
│   │   │   │         console.log(`Génération de l'interface Angular pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **angularGenerateInterface**(entity: IEntityJson) *(line 7)*
│   │   │   │       ```typescript
│   │   │   │       angularGenerateInterface(entity: IEntityJson) {
│   │   │   │         console.log(`Génération de l'interface Angular pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   ├── 📘 angular-generate-module.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **angularGenerateModule**(entity: IEntityJson) *(line 7)*
│   │   │   │       ```typescript
│   │   │   │       export function angularGenerateModule(entity: IEntityJson) {
│   │   │   │         console.log(`Génération du module Angular pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **angularGenerateModule**(entity: IEntityJson) *(line 7)*
│   │   │   │       ```typescript
│   │   │   │       angularGenerateModule(entity: IEntityJson) {
│   │   │   │         console.log(`Génération du module Angular pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   ├── 📘 angular-generate-service.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **angularGenerateService**(entity: IEntityJson) *(line 7)*
│   │   │   │       ```typescript
│   │   │   │       export function angularGenerateService(entity: IEntityJson) {
│   │   │   │         console.log(`Génération du service Angular pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **angularGenerateService**(entity: IEntityJson) *(line 7)*
│   │   │   │       ```typescript
│   │   │   │       angularGenerateService(entity: IEntityJson) {
│   │   │   │         console.log(`Génération du service Angular pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   └── 📘 angular-generate-test.service.ts
│   │   │       *Functions found:*
│   │   │         - 🔧 **angularGenerateTest**(entity: IEntityJson) *(line 7)*
│   │   │           ```typescript
│   │   │           export function angularGenerateTest(entity: IEntityJson) {
│   │   │             console.log(`Génération des tests Angular pour: ${entity.namePascalCase}`);
│   │   │           }
│   │   │           ```
│   │   │         - 🔧 **angularGenerateTest**(entity: IEntityJson) *(line 7)*
│   │   │           ```typescript
│   │   │           angularGenerateTest(entity: IEntityJson) {
│   │   │             console.log(`Génération des tests Angular pour: ${entity.namePascalCase}`);
│   │   │           }
│   │   │           ```
│   │   └── 📁 **templates/**
│   │       ├── 📘 angular-component.template.ts
│   │       ├── 📘 angular-controller.template.ts
│   │       │   *Functions found:*
│   │       │     - 🔧 **angularControllerTemplate**(entity: IEntityJson) *(line 9)*
│   │       │       ```typescript
│   │       │       export function angularControllerTemplate(entity: IEntityJson) {
│   │       │         return `import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-${entity.nameKebabCase}',\n  templateUrl: './${entity.nameKebabCase}.component.html',\n  styleUrls: ['./${entity.nameKebabCase}.component.css']\n})\nexport class ${entity.namePascalCase}Component {}\n`;
│   │       │       }
│   │       │       ```
│   │       │     - 🔧 **angularControllerTemplate**(entity: IEntityJson) *(line 9)*
│   │       │       ```typescript
│   │       │       angularControllerTemplate(entity: IEntityJson) {
│   │       │         return `import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-${entity.nameKebabCase}',\n  templateUrl: './${entity.nameKebabCase}.component.html',\n  styleUrls: ['./${entity.nameKebabCase}.component.css']\n})\nexport class ${entity.namePascalCase}Component {}\n`;
│   │       │       }
│   │       │       ```
│   │       ├── 📘 angular-crud-service.template.ts
│   │       │   *Functions found:*
│   │       │     - 🔧 **angularCrudServiceTemplate**(entity: IEntityJson) *(line 3)*
│   │       │       ```typescript
│   │       │       export function angularCrudServiceTemplate(entity: IEntityJson) {
│   │       │         const entityName = entity.namePascalCase;
│   │       │         const entityNamePlural = entity.namePascalCase || `${entityName}s`;
│   │       │         const entityNamePluralLower = entityNamePlural.toLowerCase();
│   │       │       
│   │       │         return `import { Injectable, inject } from '@angular/core';
│   │       │       import { HttpClient, HttpHeaders } from '@angular/common/http';
│   │       │       import { Observable } from 'rxjs';
│   │       │       import { map } from 'rxjs/operators';
│   │       │       import { environment } from '../environments/environment';
│   │       │       ...
│   │       │       ```
│   │       │     - 🔧 **angularCrudServiceTemplate**(entity: IEntityJson) *(line 3)*
│   │       │       ```typescript
│   │       │       angularCrudServiceTemplate(entity: IEntityJson) {
│   │       │         const entityName = entity.namePascalCase;
│   │       │         const entityNamePlural = entity.namePascalCase || `${entityName}s`;
│   │       │         const entityNamePluralLower = entityNamePlural.toLowerCase();
│   │       │       
│   │       │         return `import { Injectable, inject } from '@angular/core';
│   │       │       import { HttpClient, HttpHeaders } from '@angular/common/http';
│   │       │       import { Observable } from 'rxjs';
│   │       │       import { map } from 'rxjs/operators';
│   │       │       import { environment } from '../environments/environment';
│   │       │       ...
│   │       │       ```
│   │       │     - 🔧 **constructor**() *(line 26)*
│   │       │       ```typescript
│   │       │       constructor() { }
│   │       │           
│   │       │           // Get all ${entityNamePlural}
│   │       │           getAll${entityNamePlural}(): Observable<I${entityName}[]> {
│   │       │               return this.httpClient.get<IHydraCollection<I${entityName}>>(this.routeApi).pipe(
│   │       │                   map(response => {
│   │       │                       return response['hydra:member'];
│   │       │                   })
│   │       │               );
│   │       │           }
│   │       │       ...
│   │       │       ```
│   │       ├── 📘 angular-dto.template.ts
│   │       │   *Functions found:*
│   │       │     - 🔧 **angularDtoTemplate**(entity: IEntityJson) *(line 9)*
│   │       │       ```typescript
│   │       │       export function angularDtoTemplate(entity: IEntityJson) {
│   │       │         const properties =
│   │       │           entity.columns?.map((col: any) => `  ${col.name}?: ${col.typeTypeScript};`).join('\n') || '';
│   │       │         return `export class Create${entity.namePascalCase}Dto {\n${properties}\n}\n`;
│   │       │       }
│   │       │       ```
│   │       │     - 🔧 **angularDtoTemplate**(entity: IEntityJson) *(line 9)*
│   │       │       ```typescript
│   │       │       angularDtoTemplate(entity: IEntityJson) {
│   │       │         const properties =
│   │       │           entity.columns?.map((col: any) => `  ${col.name}?: ${col.typeTypeScript};`).join('\n') || '';
│   │       │         return `export class Create${entity.namePascalCase}Dto {\n${properties}\n}\n`;
│   │       │       }
│   │       │       ```
│   │       ├── 📘 angular-entity.template.ts
│   │       │   *Functions found:*
│   │       │     - 🔧 **angularEntityTemplate**(entity: IEntityJson) *(line 9)*
│   │       │       ```typescript
│   │       │       export function angularEntityTemplate(entity: IEntityJson) {
│   │       │         const properties =
│   │       │           entity.columns?.map((col: any) => `  ${col.name}: ${col.typeTypeScript};`).join('\n') || '';
│   │       │         return `export class ${entity.namePascalCase} {\n${properties}\n}\n`;
│   │       │       }
│   │       │       ```
│   │       │     - 🔧 **angularEntityTemplate**(entity: IEntityJson) *(line 9)*
│   │       │       ```typescript
│   │       │       angularEntityTemplate(entity: IEntityJson) {
│   │       │         const properties =
│   │       │           entity.columns?.map((col: any) => `  ${col.name}: ${col.typeTypeScript};`).join('\n') || '';
│   │       │         return `export class ${entity.namePascalCase} {\n${properties}\n}\n`;
│   │       │       }
│   │       │       ```
│   │       ├── 📘 angular-feature.template.ts
│   │       ├── 📘 angular-interface.template.ts
│   │       │   *Functions found:*
│   │       │     - 🔧 **angularInterfaceTemplate**(entity: IEntityJson) *(line 9)*
│   │       │       ```typescript
│   │       │       export function angularInterfaceTemplate(entity: IEntityJson) {
│   │       │         const properties =
│   │       │           entity.columns?.map((col: any) => `  ${col.name}: ${col.typeTypeScript};`).join('\n') || '';
│   │       │         return `export interface I${entity.namePascalCase} {\n${properties}\n}\n`;
│   │       │       }
│   │       │       ```
│   │       │     - 🔧 **angularInterfaceTemplate**(entity: IEntityJson) *(line 9)*
│   │       │       ```typescript
│   │       │       angularInterfaceTemplate(entity: IEntityJson) {
│   │       │         const properties =
│   │       │           entity.columns?.map((col: any) => `  ${col.name}: ${col.typeTypeScript};`).join('\n') || '';
│   │       │         return `export interface I${entity.namePascalCase} {\n${properties}\n}\n`;
│   │       │       }
│   │       │       ```
│   │       ├── 📘 angular-module.template.ts
│   │       │   *Functions found:*
│   │       │     - 🔧 **angularModuleTemplate**(entity: IEntityJson) *(line 9)*
│   │       │       ```typescript
│   │       │       export function angularModuleTemplate(entity: IEntityJson) {
│   │       │         return `import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\n\n@NgModule({\n  declarations: [],\n  imports: [\n    CommonModule\n  ]\n})\nexport class ${entity.namePascalCase}Module {}\n`;
│   │       │       }
│   │       │       ```
│   │       │     - 🔧 **angularModuleTemplate**(entity: IEntityJson) *(line 9)*
│   │       │       ```typescript
│   │       │       angularModuleTemplate(entity: IEntityJson) {
│   │       │         return `import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\n\n@NgModule({\n  declarations: [],\n  imports: [\n    CommonModule\n  ]\n})\nexport class ${entity.namePascalCase}Module {}\n`;
│   │       │       }
│   │       │       ```
│   │       ├── 📘 angular-service-template.template.ts
│   │       │   *Functions found:*
│   │       │     - 🔧 **angularServiceTemplate**(entity: IEntityJson) *(line 9)*
│   │       │       ```typescript
│   │       │       export function angularServiceTemplate(entity: IEntityJson) {
│   │       │         return `import { Injectable } from '@angular/core';\n\n@Injectable({\n  providedIn: 'root'\n})\nexport class ${entity.namePascalCase}Service {}\n`;
│   │       │       }
│   │       │       ```
│   │       │     - 🔧 **angularServiceTemplate**(entity: IEntityJson) *(line 9)*
│   │       │       ```typescript
│   │       │       angularServiceTemplate(entity: IEntityJson) {
│   │       │         return `import { Injectable } from '@angular/core';\n\n@Injectable({\n  providedIn: 'root'\n})\nexport class ${entity.namePascalCase}Service {}\n`;
│   │       │       }
│   │       │       ```
│   │       ├── 📘 angular-service.template.ts
│   │       │   *Functions found:*
│   │       │     - 🔧 **constructor**() *(line 13)*
│   │       │       ```typescript
│   │       │       constructor() { }
│   │       │       }
│   │       │       `;
│   │       │       }
│   │       │       ```
│   │       └── 📘 angular-test.template.ts
│   │           *Functions found:*
│   │             - 🔧 **angularTestTemplate**(entity: IEntityJson) *(line 9)*
│   │               ```typescript
│   │               export function angularTestTemplate(entity: IEntityJson) {
│   │                 return `import { TestBed } from '@angular/core/testing';\n\ndescribe('${entity.namePascalCase}Component', () => {\n  beforeEach(async () => {\n    await TestBed.configureTestingModule({\n      declarations: [ ${entity.namePascalCase}Component ]\n    })\n    .compileComponents();\n  });\n\n  it('should create', () => {\n    const fixture = TestBed.createComponent(${entity.namePascalCase}Component);\n    const app = fixture.componentInstance;\n    expect(app).toBeTruthy();\n  });\n});\n`;
│   │               }
│   │               ```
│   │             - 🔧 **angularTestTemplate**(entity: IEntityJson) *(line 9)*
│   │               ```typescript
│   │               angularTestTemplate(entity: IEntityJson) {
│   │                 return `import { TestBed } from '@angular/core/testing';\n\ndescribe('${entity.namePascalCase}Component', () => {\n  beforeEach(async () => {\n    await TestBed.configureTestingModule({\n      declarations: [ ${entity.namePascalCase}Component ]\n    })\n    .compileComponents();\n  });\n\n  it('should create', () => {\n    const fixture = TestBed.createComponent(${entity.namePascalCase}Component);\n    const app = fixture.componentInstance;\n    expect(app).toBeTruthy();\n  });\n});\n`;
│   │               }
│   │               ```
│   ├── 📁 **electron/**
│   │   ├── 📁 **config/**
│   │   │   ├── 📘 architecture.mock.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **ARCHITECTURE_ELECTRON_MOCK**() *(line 1)*
│   │   │   │       ```typescript
│   │   │   │       export function ARCHITECTURE_ELECTRON_MOCK() {
│   │   │   │         return [
│   │   │   │           {
│   │   │   │             _type: 'directory',
│   │   │   │             name: '.doc',
│   │   │   │             gitIgnore: true,
│   │   │   │             pathInProject: './',
│   │   │   │             children: [],
│   │   │   │           },
│   │   │   │           {
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **ARCHITECTURE_ELECTRON_MOCK**() *(line 1)*
│   │   │   │       ```typescript
│   │   │   │       ARCHITECTURE_ELECTRON_MOCK() {
│   │   │   │         return [
│   │   │   │           {
│   │   │   │             _type: 'directory',
│   │   │   │             name: '.doc',
│   │   │   │             gitIgnore: true,
│   │   │   │             pathInProject: './',
│   │   │   │             children: [],
│   │   │   │           },
│   │   │   │           {
│   │   │   │       ...
│   │   │   │       ```
│   │   │   ├── 📘 config-ini.mock.ts
│   │   │   ├── 📘 dependencies.mock.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **DEPENDENCIES_ELECTRON_MOCK**() *(line 1)*
│   │   │   │       ```typescript
│   │   │   │       export function DEPENDENCIES_ELECTRON_MOCK() {
│   │   │   │         return {
│   │   │   │           packageManager: 'composer',
│   │   │   │           prod: [],
│   │   │   │           dev: [],
│   │   │   │         };
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **DEPENDENCIES_ELECTRON_MOCK**() *(line 1)*
│   │   │   │       ```typescript
│   │   │   │       DEPENDENCIES_ELECTRON_MOCK() {
│   │   │   │         return {
│   │   │   │           packageManager: 'composer',
│   │   │   │           prod: [],
│   │   │   │           dev: [],
│   │   │   │         };
│   │   │   │       }
│   │   │   │       ```
│   │   │   ├── 📘 environments.mock.ts
│   │   │   ├── 📘 initiale-architecture-project.mock.ts
│   │   │   ├── 📘 install-options.mock.ts
│   │   │   └── 📘 scripts.mock.ts
│   │   │       *Functions found:*
│   │   │         - 🔧 **SCRIPTS_ELECTRON_MOCK**() *(line 1)*
│   │   │           ```typescript
│   │   │           export function SCRIPTS_ELECTRON_MOCK() {
│   │   │             return ` 
│   │   │               "modules": "clinode nest:mdj:all gest-project .docs/mcd.mdj --force",
│   │   │               "fixtures": "clinode create:mdj:fixtures gest-project .docs/mcd.mdj src/fixtures --force",
│   │   │               "seed": "ts-node -r tsconfig-paths/register src/seeds/main.seed.ts",
│   │   │               "plan": "clinode create:plan gest-project"
│   │   │             }`;
│   │   │           }
│   │   │           ```
│   │   │         - 🔧 **SCRIPTS_ELECTRON_MOCK**() *(line 1)*
│   │   │           ```typescript
│   │   │           SCRIPTS_ELECTRON_MOCK() {
│   │   │             return ` 
│   │   │               "modules": "clinode nest:mdj:all gest-project .docs/mcd.mdj --force",
│   │   │               "fixtures": "clinode create:mdj:fixtures gest-project .docs/mcd.mdj src/fixtures --force",
│   │   │               "seed": "ts-node -r tsconfig-paths/register src/seeds/main.seed.ts",
│   │   │               "plan": "clinode create:plan gest-project"
│   │   │             }`;
│   │   │           }
│   │   │           ```
│   │   ├── 📁 **interfaces/**
│   │   │   └── 📘 electron-model.ts
│   │   ├── 📁 **mock/**
│   │   │   └── 📋 sample-angular-config.json
│   │   ├── 📁 **services/**
│   │   │   ├── 📘 electron-generate-controller.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **generateElectronController**(entity: IEntityJson) *(line 7)*
│   │   │   │       ```typescript
│   │   │   │       export function generateElectronController(entity: IEntityJson) {
│   │   │   │         console.log(`Génération du contrôleur Electron pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **generateElectronController**(entity: IEntityJson) *(line 7)*
│   │   │   │       ```typescript
│   │   │   │       generateElectronController(entity: IEntityJson) {
│   │   │   │         console.log(`Génération du contrôleur Electron pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   ├── 📘 electron-generate-dto.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **generateElectronDto**(entity: IEntityJson) *(line 7)*
│   │   │   │       ```typescript
│   │   │   │       export function generateElectronDto(entity: IEntityJson) {
│   │   │   │         console.log(`Génération du DTO Electron pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **generateElectronDto**(entity: IEntityJson) *(line 7)*
│   │   │   │       ```typescript
│   │   │   │       generateElectronDto(entity: IEntityJson) {
│   │   │   │         console.log(`Génération du DTO Electron pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   ├── 📘 electron-generate-entity.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **generateElectronEntity**(entity: IEntityJson) *(line 7)*
│   │   │   │       ```typescript
│   │   │   │       export function generateElectronEntity(entity: IEntityJson) {
│   │   │   │         console.log(`Génération de l'entité Electron pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **generateElectronEntity**(entity: IEntityJson) *(line 7)*
│   │   │   │       ```typescript
│   │   │   │       generateElectronEntity(entity: IEntityJson) {
│   │   │   │         console.log(`Génération de l'entité Electron pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   ├── 📘 electron-generate-files-framework.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **electronGenerateFilesFramework**(
  framework: IFramework,
  frameworkProjectPath: string,
  entitiesJsonFile: object,
) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       export function electronGenerateFilesFramework(
│   │   │   │         framework: IFramework,
│   │   │   │         frameworkProjectPath: string,
│   │   │   │         entitiesJsonFile: object,
│   │   │   │       ) {
│   │   │   │         // Logique de génération de fichiers Electron ici
│   │   │   │         // createDependencies(framework, frameworkProjectPath)
│   │   │   │         console.log('Génération de fichiers Electron');
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **electronGenerateFilesFramework**(
  framework: IFramework,
  frameworkProjectPath: string,
  entitiesJsonFile: object,
) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       electronGenerateFilesFramework(
│   │   │   │         framework: IFramework,
│   │   │   │         frameworkProjectPath: string,
│   │   │   │         entitiesJsonFile: object,
│   │   │   │       ) {
│   │   │   │         // Logique de génération de fichiers Electron ici
│   │   │   │         // createDependencies(framework, frameworkProjectPath)
│   │   │   │         console.log('Génération de fichiers Electron');
│   │   │   │       }
│   │   │   │       ```
│   │   │   ├── 📘 electron-generate-interface.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **generateElectronInterface**(entity: IEntityJson) *(line 7)*
│   │   │   │       ```typescript
│   │   │   │       export function generateElectronInterface(entity: IEntityJson) {
│   │   │   │         console.log(`Génération de l'interface Electron pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **generateElectronInterface**(entity: IEntityJson) *(line 7)*
│   │   │   │       ```typescript
│   │   │   │       generateElectronInterface(entity: IEntityJson) {
│   │   │   │         console.log(`Génération de l'interface Electron pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   ├── 📘 electron-generate-ipcRenderer.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **electronGenerateIpcRendererService**(entity: IEntityJson) *(line 12)*
│   │   │   │       ```typescript
│   │   │   │       export function electronGenerateIpcRendererService(entity: IEntityJson) {  
│   │   │   │         const content = electronIpcRendererTemplate(entity);
│   │   │   │         writeFile(`${entity.nameKebabCase}/${entity.nameKebabCase}.ipc-renderer.ts`, content);  
│   │   │   │       };
│   │   │   │       ```
│   │   │   │     - 🔧 **electronGenerateIpcRendererService**(entity: IEntityJson) *(line 12)*
│   │   │   │       ```typescript
│   │   │   │       electronGenerateIpcRendererService(entity: IEntityJson) {  
│   │   │   │         const content = electronIpcRendererTemplate(entity);
│   │   │   │         writeFile(`${entity.nameKebabCase}/${entity.nameKebabCase}.ipc-renderer.ts`, content);  
│   │   │   │       };
│   │   │   │       ```
│   │   │   ├── 📘 electron-generate-module.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **generateElectronModule**(entity: IEntityJson) *(line 7)*
│   │   │   │       ```typescript
│   │   │   │       export function generateElectronModule(entity: IEntityJson) {
│   │   │   │         console.log(`Génération du module Electron pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **generateElectronModule**(entity: IEntityJson) *(line 7)*
│   │   │   │       ```typescript
│   │   │   │       generateElectronModule(entity: IEntityJson) {
│   │   │   │         console.log(`Génération du module Electron pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   ├── 📘 electron-generate-service.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **generateElectronService**(entity: IEntityJson) *(line 7)*
│   │   │   │       ```typescript
│   │   │   │       export function generateElectronService(entity: IEntityJson) {
│   │   │   │         console.log(`Génération du service Electron pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **generateElectronService**(entity: IEntityJson) *(line 7)*
│   │   │   │       ```typescript
│   │   │   │       generateElectronService(entity: IEntityJson) {
│   │   │   │         console.log(`Génération du service Electron pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   └── 📘 electron-generate-test.service.ts
│   │   │       *Functions found:*
│   │   │         - 🔧 **generateElectronTest**(entity: IEntityJson) *(line 7)*
│   │   │           ```typescript
│   │   │           export function generateElectronTest(entity: IEntityJson) {
│   │   │             console.log(`Génération des tests Electron pour: ${entity.namePascalCase}`);
│   │   │           }
│   │   │           ```
│   │   │         - 🔧 **generateElectronTest**(entity: IEntityJson) *(line 7)*
│   │   │           ```typescript
│   │   │           generateElectronTest(entity: IEntityJson) {
│   │   │             console.log(`Génération des tests Electron pour: ${entity.namePascalCase}`);
│   │   │           }
│   │   │           ```
│   │   └── 📁 **templates/**
│   │       ├── 📘 electron-controller-template.template.ts
│   │       │   *Functions found:*
│   │       │     - 🔧 **getElectronControllerTemplate**(entity: IEntityJson) *(line 9)*
│   │       │       ```typescript
│   │       │       export function getElectronControllerTemplate(entity: IEntityJson) {
│   │       │         return `// Electron Controller for ${entity.namePascalCase}\n`;
│   │       │       }
│   │       │       ```
│   │       │     - 🔧 **getElectronControllerTemplate**(entity: IEntityJson) *(line 9)*
│   │       │       ```typescript
│   │       │       getElectronControllerTemplate(entity: IEntityJson) {
│   │       │         return `// Electron Controller for ${entity.namePascalCase}\n`;
│   │       │       }
│   │       │       ```
│   │       ├── 📘 electron-dto-template.template.ts
│   │       │   *Functions found:*
│   │       │     - 🔧 **getElectronDtoTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       export function getElectronDtoTemplate(entity: IEntityJson) {
│   │       │         const properties =
│   │       │           entity.columns?.map((col: any) => `  ${col.name}?: ${col.typeTypeScript};`).join('\n') || '';
│   │       │         return `export class Create${entity.namePascalCase}Dto {\n${properties}\n}\n`;
│   │       │       }
│   │       │       ```
│   │       │     - 🔧 **getElectronDtoTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       getElectronDtoTemplate(entity: IEntityJson) {
│   │       │         const properties =
│   │       │           entity.columns?.map((col: any) => `  ${col.name}?: ${col.typeTypeScript};`).join('\n') || '';
│   │       │         return `export class Create${entity.namePascalCase}Dto {\n${properties}\n}\n`;
│   │       │       }
│   │       │       ```
│   │       ├── 📘 electron-entity-template.template.ts
│   │       │   *Functions found:*
│   │       │     - 🔧 **getElectronEntityTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       export function getElectronEntityTemplate(entity: IEntityJson) {
│   │       │         const properties =
│   │       │           entity.columns?.map((col: any) => `  ${col.name}: ${col.typeTypeScript};`).join('\n') || '';
│   │       │         return `export class ${entity.namePascalCase} {\n${properties}\n}\n`;
│   │       │       }
│   │       │       ```
│   │       │     - 🔧 **getElectronEntityTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       getElectronEntityTemplate(entity: IEntityJson) {
│   │       │         const properties =
│   │       │           entity.columns?.map((col: any) => `  ${col.name}: ${col.typeTypeScript};`).join('\n') || '';
│   │       │         return `export class ${entity.namePascalCase} {\n${properties}\n}\n`;
│   │       │       }
│   │       │       ```
│   │       ├── 📘 electron-interface-template.template.ts
│   │       │   *Functions found:*
│   │       │     - 🔧 **getElectronInterfaceTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       export function getElectronInterfaceTemplate(entity: IEntityJson) {
│   │       │         const properties =
│   │       │           entity.columns?.map((col: any) => `  ${col.name}: ${col.typeTypeScript};`).join('\n') || '';
│   │       │         return `export interface I${entity.namePascalCase} {\n${properties}\n}\n`;
│   │       │       }
│   │       │       ```
│   │       │     - 🔧 **getElectronInterfaceTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       getElectronInterfaceTemplate(entity: IEntityJson) {
│   │       │         const properties =
│   │       │           entity.columns?.map((col: any) => `  ${col.name}: ${col.typeTypeScript};`).join('\n') || '';
│   │       │         return `export interface I${entity.namePascalCase} {\n${properties}\n}\n`;
│   │       │       }
│   │       │       ```
│   │       ├── 📘 electron-ipc-renderer.template.ts
│   │       │   *Functions found:*
│   │       │     - 🔧 **electronIpcRendererTemplate**(entity: IEntityJson) *(line 9)*
│   │       │       ```typescript
│   │       │       export function electronIpcRendererTemplate(entity: IEntityJson) {
│   │       │         return `
│   │       │       // Electron IpcRenderer for ${entity.namePascalCase}
│   │       │       import { ipcRenderer } from 'electron';
│   │       │       
│   │       │       export async function fetch${entity.namePascalCase}Data() {
│   │       │         return await ipcRenderer.invoke('get-${entity.nameKebabCase}-data');
│   │       │       }
│   │       │       `;
│   │       │       }
│   │       │       ...
│   │       │       ```
│   │       │     - 🔧 **electronIpcRendererTemplate**(entity: IEntityJson) *(line 9)*
│   │       │       ```typescript
│   │       │       electronIpcRendererTemplate(entity: IEntityJson) {
│   │       │         return `
│   │       │       // Electron IpcRenderer for ${entity.namePascalCase}
│   │       │       import { ipcRenderer } from 'electron';
│   │       │       
│   │       │       export async function fetch${entity.namePascalCase}Data() {
│   │       │         return await ipcRenderer.invoke('get-${entity.nameKebabCase}-data');
│   │       │       }
│   │       │       `;
│   │       │       }
│   │       │       ...
│   │       │       ```
│   │       │     - 🔧 **Data**() *(line 14)*
│   │       │       ```typescript
│   │       │       Data() {
│   │       │         return await ipcRenderer.invoke('get-${entity.nameKebabCase}-data');
│   │       │       }
│   │       │       `;
│   │       │       }
│   │       │       ```
│   │       ├── 📘 electron-module-template.template.ts
│   │       │   *Functions found:*
│   │       │     - 🔧 **getElectronModuleTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       export function getElectronModuleTemplate(entity: IEntityJson) {
│   │       │         return `// Electron Module for ${entity.namePascalCase}\n`;
│   │       │       }
│   │       │       ```
│   │       │     - 🔧 **getElectronModuleTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       getElectronModuleTemplate(entity: IEntityJson) {
│   │       │         return `// Electron Module for ${entity.namePascalCase}\n`;
│   │       │       }
│   │       │       ```
│   │       ├── 📘 electron-module.template.ts
│   │       ├── 📘 electron-service-template.template.ts
│   │       │   *Functions found:*
│   │       │     - 🔧 **getElectronServiceTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       export function getElectronServiceTemplate(entity: IEntityJson) {
│   │       │         return '// Electron Service for ${entity.namePascalCase}\n';
│   │       │       }
│   │       │       ```
│   │       │     - 🔧 **getElectronServiceTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       getElectronServiceTemplate(entity: IEntityJson) {
│   │       │         return '// Electron Service for ${entity.namePascalCase}\n';
│   │       │       }
│   │       │       ```
│   │       ├── 📘 electron-test-template.template.ts
│   │       │   *Functions found:*
│   │       │     - 🔧 **getElectronTestTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       export function getElectronTestTemplate(entity: IEntityJson) {
│   │       │         return `// Electron Test for ${entity.namePascalCase}\n`;
│   │       │       }
│   │       │       ```
│   │       │     - 🔧 **getElectronTestTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       getElectronTestTemplate(entity: IEntityJson) {
│   │       │         return `// Electron Test for ${entity.namePascalCase}\n`;
│   │       │       }
│   │       │       ```
│   │       └── 📘 service-template.template.ts
│   │           *Functions found:*
│   │             - 🔧 **constructor**() *(line 8)*
│   │               ```typescript
│   │               constructor() { }
│   │               }
│   │               `;
│   │               }
│   │               ```
│   ├── 📁 **nestjs/**
│   │   ├── 📁 **config/**
│   │   │   ├── 📘 nestjs-architecture.mock.ts
│   │   │   ├── 📘 nestjs-categories-validators-array.ts
│   │   │   ├── 📘 nestjs-config-ini.mock.ts
│   │   │   ├── 📘 nestjs-current-validators.ts
│   │   │   ├── 📘 nestjs-dependencies.mock.ts
│   │   │   ├── 📘 nestjs-environments.mock.ts
│   │   │   ├── 📘 nestjs-initiale-architecture-project.mock.ts
│   │   │   ├── 📘 nestjs-install-options.mock.ts
│   │   │   ├── 📘 nestjs-scripts.mock.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **SCRIPTS_NESTJS_MOCK**() *(line 1)*
│   │   │   │       ```typescript
│   │   │   │       export function SCRIPTS_NESTJS_MOCK() {
│   │   │   │         return ` 
│   │   │   │           "modules": "clinode nest:mdj:all gest-project .docs/mcd.mdj --force",
│   │   │   │           "fixtures": "clinode create:mdj:fixtures gest-project .docs/mcd.mdj src/fixtures --force",
│   │   │   │           "seed": "ts-node -r tsconfig-paths/register src/seeds/main.seed.ts",
│   │   │   │           "plan": "clinode create:plan gest-project"
│   │   │   │         }`;
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **SCRIPTS_NESTJS_MOCK**() *(line 1)*
│   │   │   │       ```typescript
│   │   │   │       SCRIPTS_NESTJS_MOCK() {
│   │   │   │         return ` 
│   │   │   │           "modules": "clinode nest:mdj:all gest-project .docs/mcd.mdj --force",
│   │   │   │           "fixtures": "clinode create:mdj:fixtures gest-project .docs/mcd.mdj src/fixtures --force",
│   │   │   │           "seed": "ts-node -r tsconfig-paths/register src/seeds/main.seed.ts",
│   │   │   │           "plan": "clinode create:plan gest-project"
│   │   │   │         }`;
│   │   │   │       }
│   │   │   │       ```
│   │   │   ├── 📘 nestjs-type-validator.mock.ts
│   │   │   ├── 📘 nestjs-validators-array.ts
│   │   │   ├── 📘 nestjs-validators-by-category.ts
│   │   │   └── 📄 nestjs-validators-with-options.ts.txt
│   │   ├── 📁 **interfaces/**
│   │   │   └── 📘 nestjs-model.ts
│   │   ├── 📁 **mock/**
│   │   │   └── 📋 nestjs-sample-orm-config.json
│   │   ├── 📁 **services/**
│   │   │   ├── 📘 nestjs-account-service.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **nestjsCreateAccountModule**(projectPath: string) *(line 12)*
│   │   │   │       ```typescript
│   │   │   │       export function nestjsCreateAccountModule(projectPath: string) {
│   │   │   │         const rootAccount = path.join(projectPath, 'src', 'modules', 'account');
│   │   │   │         const rootaccountDtos = path.join(rootAccount, 'dto');
│   │   │   │         const rootaccountEntity = path.join(rootAccount, 'entity');
│   │   │   │         const rootaccountInterface = path.join(rootAccount, 'interface');
│   │   │   │       
│   │   │   │         buildAndsaveFile(rootAccount + `/account.module.ts`, nestjsAccountModuleTemplate());
│   │   │   │         buildAndsaveFile(rootAccount + `/account.service.ts`, nestjsAccountServiceTemplate());
│   │   │   │         buildAndsaveFile(rootAccount + `/account.controller.ts`, nestjsAccountControllerTemplate());
│   │   │   │         buildAndsaveFile(rootaccountEntity + `/account.entity.ts`, nestjsAccountEntityTemplate());
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **nestjsCreateAccountModule**(projectPath: string) *(line 12)*
│   │   │   │       ```typescript
│   │   │   │       nestjsCreateAccountModule(projectPath: string) {
│   │   │   │         const rootAccount = path.join(projectPath, 'src', 'modules', 'account');
│   │   │   │         const rootaccountDtos = path.join(rootAccount, 'dto');
│   │   │   │         const rootaccountEntity = path.join(rootAccount, 'entity');
│   │   │   │         const rootaccountInterface = path.join(rootAccount, 'interface');
│   │   │   │       
│   │   │   │         buildAndsaveFile(rootAccount + `/account.module.ts`, nestjsAccountModuleTemplate());
│   │   │   │         buildAndsaveFile(rootAccount + `/account.service.ts`, nestjsAccountServiceTemplate());
│   │   │   │         buildAndsaveFile(rootAccount + `/account.controller.ts`, nestjsAccountControllerTemplate());
│   │   │   │         buildAndsaveFile(rootaccountEntity + `/account.entity.ts`, nestjsAccountEntityTemplate());
│   │   │   │       ...
│   │   │   │       ```
│   │   │   ├── 📘 nestjs-auth.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **createAuthNestjs**(projectPath: string) *(line 16)*
│   │   │   │       ```typescript
│   │   │   │       export function createAuthNestjs(projectPath: string) {
│   │   │   │         const rootAuth = path.join(projectPath, 'src', 'auth');
│   │   │   │         const rootDecorators = path.join(rootAuth, 'decorators');
│   │   │   │         const rootDtos = path.join(rootAuth, 'dto');
│   │   │   │         const rootGuards = path.join(rootAuth, 'guards');
│   │   │   │         const rootTnterfaces = path.join(rootAuth, 'interfaces');
│   │   │   │         const rootStrategies = path.join(rootAuth, 'strategies');
│   │   │   │       
│   │   │   │         createAuthServiceNestjs(projectPath);
│   │   │   │         createAuthModuleNestjs(projectPath);
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createAuthDecoratorsNestjs**(projectPath: string) *(line 33)*
│   │   │   │       ```typescript
│   │   │   │       export function createAuthDecoratorsNestjs(projectPath: string) {
│   │   │   │         const rootPath = path.join(projectPath, 'src', 'auth', 'decorators');
│   │   │   │       
│   │   │   │         buildAndsaveFile(rootPath + `/roles.decorator.ts`, nestjsAuthRolesDecoratorTemplate());
│   │   │   │         buildAndsaveFile(
│   │   │   │           rootPath + `/permissions.decorator.ts`,
│   │   │   │           nestjsAuthPermissionsDecoratorTemplate(),
│   │   │   │         );
│   │   │   │       }
│   │   │   │       export function createAuthDtosNestjs(projectPath: string) {
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createAuthDtosNestjs**(projectPath: string) *(line 42)*
│   │   │   │       ```typescript
│   │   │   │       export function createAuthDtosNestjs(projectPath: string) {
│   │   │   │         const rootPath = path.join(projectPath, 'src', 'auth', 'dto');
│   │   │   │       
│   │   │   │         buildAndsaveFile(rootPath + `/login.dto.ts`, nestjsloginDtoTemplate());
│   │   │   │       }
│   │   │   │       export function createAuthGuardsNestjs(projectPath: string) {
│   │   │   │         const rootPath = path.join(projectPath, 'src', 'auth', 'guards');
│   │   │   │       
│   │   │   │         buildAndsaveFile(rootPath + `/jwt-auth.guard.ts`, nestjsJwtAuthGuardTemplate());
│   │   │   │         buildAndsaveFile(rootPath + `/permissions.guard.ts`, nestjsPermissionsGuardTemplate());
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createAuthGuardsNestjs**(projectPath: string) *(line 47)*
│   │   │   │       ```typescript
│   │   │   │       export function createAuthGuardsNestjs(projectPath: string) {
│   │   │   │         const rootPath = path.join(projectPath, 'src', 'auth', 'guards');
│   │   │   │       
│   │   │   │         buildAndsaveFile(rootPath + `/jwt-auth.guard.ts`, nestjsJwtAuthGuardTemplate());
│   │   │   │         buildAndsaveFile(rootPath + `/permissions.guard.ts`, nestjsPermissionsGuardTemplate());
│   │   │   │         buildAndsaveFile(rootPath + `/roles.guard.ts`, nestjsRolesGuardTemplate());
│   │   │   │       }
│   │   │   │       export function createAuthInterfacesNestjs(projectPath: string) {
│   │   │   │         const rootPath = path.join(projectPath, 'src', 'auth', 'interfaces');
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createAuthInterfacesNestjs**(projectPath: string) *(line 54)*
│   │   │   │       ```typescript
│   │   │   │       export function createAuthInterfacesNestjs(projectPath: string) {
│   │   │   │         const rootPath = path.join(projectPath, 'src', 'auth', 'interfaces');
│   │   │   │       
│   │   │   │         buildAndsaveFile(rootPath + `/jwt-payload.interface.ts`, nestjsJwtPayloadInterfaceTemplate());
│   │   │   │       }
│   │   │   │       export function createJwtStrategyNestjs(projectPath: string) {
│   │   │   │         const rootPath = path.join(projectPath, 'src', 'auth', 'strategies');
│   │   │   │       
│   │   │   │         buildAndsaveFile(rootPath + `/jwt.strategies.ts`, nestjsJwtStrategyTemplate());
│   │   │   │       }
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createJwtStrategyNestjs**(projectPath: string) *(line 59)*
│   │   │   │       ```typescript
│   │   │   │       export function createJwtStrategyNestjs(projectPath: string) {
│   │   │   │         const rootPath = path.join(projectPath, 'src', 'auth', 'strategies');
│   │   │   │       
│   │   │   │         buildAndsaveFile(rootPath + `/jwt.strategies.ts`, nestjsJwtStrategyTemplate());
│   │   │   │       }
│   │   │   │       
│   │   │   │       export function createAuthServiceNestjs(projectPath: string) {
│   │   │   │         const rootPath = path.join(projectPath, 'src', 'auth');
│   │   │   │       
│   │   │   │         buildAndsaveFile(rootPath + `/auth.service.ts`, nestjsAuthServiceTemplate());
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createAuthServiceNestjs**(projectPath: string) *(line 65)*
│   │   │   │       ```typescript
│   │   │   │       export function createAuthServiceNestjs(projectPath: string) {
│   │   │   │         const rootPath = path.join(projectPath, 'src', 'auth');
│   │   │   │       
│   │   │   │         buildAndsaveFile(rootPath + `/auth.service.ts`, nestjsAuthServiceTemplate());
│   │   │   │       }
│   │   │   │       export function createAuthModuleNestjs(projectPath: string) {
│   │   │   │         const rootPath = path.join(projectPath, 'src', 'auth');
│   │   │   │       
│   │   │   │         buildAndsaveFile(rootPath + `/auth.module.ts`, nestjsAuthModuleTemplate());
│   │   │   │       }
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createAuthModuleNestjs**(projectPath: string) *(line 70)*
│   │   │   │       ```typescript
│   │   │   │       export function createAuthModuleNestjs(projectPath: string) {
│   │   │   │         const rootPath = path.join(projectPath, 'src', 'auth');
│   │   │   │       
│   │   │   │         buildAndsaveFile(rootPath + `/auth.module.ts`, nestjsAuthModuleTemplate());
│   │   │   │       }
│   │   │   │       export function createAuthControllerNestjs(projectPath: string) {
│   │   │   │         const rootPath = path.join(projectPath, 'src', 'auth');
│   │   │   │       
│   │   │   │         buildAndsaveFile(rootPath + `/auth.controller.ts`, nestjsAuthControllerTemplate());
│   │   │   │       }
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createAuthControllerNestjs**(projectPath: string) *(line 75)*
│   │   │   │       ```typescript
│   │   │   │       export function createAuthControllerNestjs(projectPath: string) {
│   │   │   │         const rootPath = path.join(projectPath, 'src', 'auth');
│   │   │   │       
│   │   │   │         buildAndsaveFile(rootPath + `/auth.controller.ts`, nestjsAuthControllerTemplate());
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **createAuthNestjs**(projectPath: string) *(line 16)*
│   │   │   │       ```typescript
│   │   │   │       createAuthNestjs(projectPath: string) {
│   │   │   │         const rootAuth = path.join(projectPath, 'src', 'auth');
│   │   │   │         const rootDecorators = path.join(rootAuth, 'decorators');
│   │   │   │         const rootDtos = path.join(rootAuth, 'dto');
│   │   │   │         const rootGuards = path.join(rootAuth, 'guards');
│   │   │   │         const rootTnterfaces = path.join(rootAuth, 'interfaces');
│   │   │   │         const rootStrategies = path.join(rootAuth, 'strategies');
│   │   │   │       
│   │   │   │         createAuthServiceNestjs(projectPath);
│   │   │   │         createAuthModuleNestjs(projectPath);
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createAuthDecoratorsNestjs**(projectPath: string) *(line 33)*
│   │   │   │       ```typescript
│   │   │   │       createAuthDecoratorsNestjs(projectPath: string) {
│   │   │   │         const rootPath = path.join(projectPath, 'src', 'auth', 'decorators');
│   │   │   │       
│   │   │   │         buildAndsaveFile(rootPath + `/roles.decorator.ts`, nestjsAuthRolesDecoratorTemplate());
│   │   │   │         buildAndsaveFile(
│   │   │   │           rootPath + `/permissions.decorator.ts`,
│   │   │   │           nestjsAuthPermissionsDecoratorTemplate(),
│   │   │   │         );
│   │   │   │       }
│   │   │   │       export function createAuthDtosNestjs(projectPath: string) {
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createAuthDtosNestjs**(projectPath: string) *(line 42)*
│   │   │   │       ```typescript
│   │   │   │       createAuthDtosNestjs(projectPath: string) {
│   │   │   │         const rootPath = path.join(projectPath, 'src', 'auth', 'dto');
│   │   │   │       
│   │   │   │         buildAndsaveFile(rootPath + `/login.dto.ts`, nestjsloginDtoTemplate());
│   │   │   │       }
│   │   │   │       export function createAuthGuardsNestjs(projectPath: string) {
│   │   │   │         const rootPath = path.join(projectPath, 'src', 'auth', 'guards');
│   │   │   │       
│   │   │   │         buildAndsaveFile(rootPath + `/jwt-auth.guard.ts`, nestjsJwtAuthGuardTemplate());
│   │   │   │         buildAndsaveFile(rootPath + `/permissions.guard.ts`, nestjsPermissionsGuardTemplate());
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createAuthGuardsNestjs**(projectPath: string) *(line 47)*
│   │   │   │       ```typescript
│   │   │   │       createAuthGuardsNestjs(projectPath: string) {
│   │   │   │         const rootPath = path.join(projectPath, 'src', 'auth', 'guards');
│   │   │   │       
│   │   │   │         buildAndsaveFile(rootPath + `/jwt-auth.guard.ts`, nestjsJwtAuthGuardTemplate());
│   │   │   │         buildAndsaveFile(rootPath + `/permissions.guard.ts`, nestjsPermissionsGuardTemplate());
│   │   │   │         buildAndsaveFile(rootPath + `/roles.guard.ts`, nestjsRolesGuardTemplate());
│   │   │   │       }
│   │   │   │       export function createAuthInterfacesNestjs(projectPath: string) {
│   │   │   │         const rootPath = path.join(projectPath, 'src', 'auth', 'interfaces');
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createAuthInterfacesNestjs**(projectPath: string) *(line 54)*
│   │   │   │       ```typescript
│   │   │   │       createAuthInterfacesNestjs(projectPath: string) {
│   │   │   │         const rootPath = path.join(projectPath, 'src', 'auth', 'interfaces');
│   │   │   │       
│   │   │   │         buildAndsaveFile(rootPath + `/jwt-payload.interface.ts`, nestjsJwtPayloadInterfaceTemplate());
│   │   │   │       }
│   │   │   │       export function createJwtStrategyNestjs(projectPath: string) {
│   │   │   │         const rootPath = path.join(projectPath, 'src', 'auth', 'strategies');
│   │   │   │       
│   │   │   │         buildAndsaveFile(rootPath + `/jwt.strategies.ts`, nestjsJwtStrategyTemplate());
│   │   │   │       }
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createJwtStrategyNestjs**(projectPath: string) *(line 59)*
│   │   │   │       ```typescript
│   │   │   │       createJwtStrategyNestjs(projectPath: string) {
│   │   │   │         const rootPath = path.join(projectPath, 'src', 'auth', 'strategies');
│   │   │   │       
│   │   │   │         buildAndsaveFile(rootPath + `/jwt.strategies.ts`, nestjsJwtStrategyTemplate());
│   │   │   │       }
│   │   │   │       
│   │   │   │       export function createAuthServiceNestjs(projectPath: string) {
│   │   │   │         const rootPath = path.join(projectPath, 'src', 'auth');
│   │   │   │       
│   │   │   │         buildAndsaveFile(rootPath + `/auth.service.ts`, nestjsAuthServiceTemplate());
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createAuthServiceNestjs**(projectPath: string) *(line 65)*
│   │   │   │       ```typescript
│   │   │   │       createAuthServiceNestjs(projectPath: string) {
│   │   │   │         const rootPath = path.join(projectPath, 'src', 'auth');
│   │   │   │       
│   │   │   │         buildAndsaveFile(rootPath + `/auth.service.ts`, nestjsAuthServiceTemplate());
│   │   │   │       }
│   │   │   │       export function createAuthModuleNestjs(projectPath: string) {
│   │   │   │         const rootPath = path.join(projectPath, 'src', 'auth');
│   │   │   │       
│   │   │   │         buildAndsaveFile(rootPath + `/auth.module.ts`, nestjsAuthModuleTemplate());
│   │   │   │       }
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createAuthModuleNestjs**(projectPath: string) *(line 70)*
│   │   │   │       ```typescript
│   │   │   │       createAuthModuleNestjs(projectPath: string) {
│   │   │   │         const rootPath = path.join(projectPath, 'src', 'auth');
│   │   │   │       
│   │   │   │         buildAndsaveFile(rootPath + `/auth.module.ts`, nestjsAuthModuleTemplate());
│   │   │   │       }
│   │   │   │       export function createAuthControllerNestjs(projectPath: string) {
│   │   │   │         const rootPath = path.join(projectPath, 'src', 'auth');
│   │   │   │       
│   │   │   │         buildAndsaveFile(rootPath + `/auth.controller.ts`, nestjsAuthControllerTemplate());
│   │   │   │       }
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createAuthControllerNestjs**(projectPath: string) *(line 75)*
│   │   │   │       ```typescript
│   │   │   │       createAuthControllerNestjs(projectPath: string) {
│   │   │   │         const rootPath = path.join(projectPath, 'src', 'auth');
│   │   │   │       
│   │   │   │         buildAndsaveFile(rootPath + `/auth.controller.ts`, nestjsAuthControllerTemplate());
│   │   │   │       }
│   │   │   │       ```
│   │   │   ├── 📘 nestjs-command.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **registerNestCommand**(program: Command) *(line 20)*
│   │   │   │       ```typescript
│   │   │   │       export function registerNestCommand(program: Command) {
│   │   │   │       //   program
│   │   │   │       //     .command('nest <type> <name>')
│   │   │   │       //     .description(
│   │   │   │       //       'Gère la génération de modules, contrôleurs, services, entités, etc., spécifiques à NestJS.',
│   │   │   │       //     )
│   │   │   │       //     .option('-p, --path <path>', 'Spécifie le répertoire de destination.')
│   │   │   │       //     .action(async (type: string, name: string, options: { path?: string }) => {
│   │   │   │       //       info(`Génération d'un ${type} NestJS nommé ${name}...`);
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **registerNestCommand**(program: Command) *(line 20)*
│   │   │   │       ```typescript
│   │   │   │       registerNestCommand(program: Command) {
│   │   │   │       //   program
│   │   │   │       //     .command('nest <type> <name>')
│   │   │   │       //     .description(
│   │   │   │       //       'Gère la génération de modules, contrôleurs, services, entités, etc., spécifiques à NestJS.',
│   │   │   │       //     )
│   │   │   │       //     .option('-p, --path <path>', 'Spécifie le répertoire de destination.')
│   │   │   │       //     .action(async (type: string, name: string, options: { path?: string }) => {
│   │   │   │       //       info(`Génération d'un ${type} NestJS nommé ${name}...`);
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **if**(option === 'Account/Anthentication') *(line 68)*
│   │   │   │       ```typescript
│   │   │   │       if (option === 'Account/Anthentication') {
│   │   │   │       //                 createAccountModuleNestjs(frameworkPath);
│   │   │   │       //                 createAuthNestjs(frameworkPath);
│   │   │   │       //             }
│   │   │   │       //             if (option === 'Anthentication') {
│   │   │   │       //                 createAuthNestjs(frameworkPath);
│   │   │   │       //             }
│   │   │   │       //             if (option === 'Account') {
│   │   │   │       //                 createAccountModuleNestjs(frameworkPath);
│   │   │   │       //             }
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **if**(option === 'Anthentication') *(line 72)*
│   │   │   │       ```typescript
│   │   │   │       if (option === 'Anthentication') {
│   │   │   │       //                 createAuthNestjs(frameworkPath);
│   │   │   │       //             }
│   │   │   │       //             if (option === 'Account') {
│   │   │   │       //                 createAccountModuleNestjs(frameworkPath);
│   │   │   │       //             }
│   │   │   │       //             if (option === 'Anthentication') {
│   │   │   │       //                 createAuthNestjs(frameworkPath);
│   │   │   │       //             }
│   │   │   │       //             if (option === 'Bdd') {
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **if**(option === 'Account') *(line 75)*
│   │   │   │       ```typescript
│   │   │   │       if (option === 'Account') {
│   │   │   │       //                 createAccountModuleNestjs(frameworkPath);
│   │   │   │       //             }
│   │   │   │       //             if (option === 'Anthentication') {
│   │   │   │       //                 createAuthNestjs(frameworkPath);
│   │   │   │       //             }
│   │   │   │       //             if (option === 'Bdd') {
│   │   │   │       //                 databaseConfigNestjs(frameworkPath, thisProjectConfig);
│   │   │   │       //             }
│   │   │   │       //             if (option === 'Environments') {
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **if**(option === 'Anthentication') *(line 78)*
│   │   │   │       ```typescript
│   │   │   │       if (option === 'Anthentication') {
│   │   │   │       //                 createAuthNestjs(frameworkPath);
│   │   │   │       //             }
│   │   │   │       //             if (option === 'Bdd') {
│   │   │   │       //                 databaseConfigNestjs(frameworkPath, thisProjectConfig);
│   │   │   │       //             }
│   │   │   │       //             if (option === 'Environments') {
│   │   │   │       //                 createEnvironmentsNestjs(frameworkPath, thisProjectConfig);
│   │   │   │       //             }
│   │   │   │       //             if (option === 'Config') {
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **if**(option === 'Bdd') *(line 81)*
│   │   │   │       ```typescript
│   │   │   │       if (option === 'Bdd') {
│   │   │   │       //                 databaseConfigNestjs(frameworkPath, thisProjectConfig);
│   │   │   │       //             }
│   │   │   │       //             if (option === 'Environments') {
│   │   │   │       //                 createEnvironmentsNestjs(frameworkPath, thisProjectConfig);
│   │   │   │       //             }
│   │   │   │       //             if (option === 'Config') {
│   │   │   │       //                 createConfigProjectNestjs(frameworkPath);
│   │   │   │       //             }
│   │   │   │       //             if (option === 'Dependencies') {
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **if**(option === 'Environments') *(line 84)*
│   │   │   │       ```typescript
│   │   │   │       if (option === 'Environments') {
│   │   │   │       //                 createEnvironmentsNestjs(frameworkPath, thisProjectConfig);
│   │   │   │       //             }
│   │   │   │       //             if (option === 'Config') {
│   │   │   │       //                 createConfigProjectNestjs(frameworkPath);
│   │   │   │       //             }
│   │   │   │       //             if (option === 'Dependencies') {
│   │   │   │       //             }
│   │   │   │       //             if (option === 'Entity') {
│   │   │   │       //                 if (Array.isArray(entitiesJsonFile)) {
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **if**(option === 'Config') *(line 87)*
│   │   │   │       ```typescript
│   │   │   │       if (option === 'Config') {
│   │   │   │       //                 createConfigProjectNestjs(frameworkPath);
│   │   │   │       //             }
│   │   │   │       //             if (option === 'Dependencies') {
│   │   │   │       //             }
│   │   │   │       //             if (option === 'Entity') {
│   │   │   │       //                 if (Array.isArray(entitiesJsonFile)) {
│   │   │   │       //                     entitiesJsonFile.map((entity: IEntityJson) => {
│   │   │   │       //                         createEntityNestjs(frameworkPath, entity);
│   │   │   │       //                     });
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **if**(option === 'Dependencies') *(line 90)*
│   │   │   │       ```typescript
│   │   │   │       if (option === 'Dependencies') {
│   │   │   │       //             }
│   │   │   │       //             if (option === 'Entity') {
│   │   │   │       //                 if (Array.isArray(entitiesJsonFile)) {
│   │   │   │       //                     entitiesJsonFile.map((entity: IEntityJson) => {
│   │   │   │       //                         createEntityNestjs(frameworkPath, entity);
│   │   │   │       //                     });
│   │   │   │       //                 }
│   │   │   │       //             }
│   │   │   │       //             if (option === 'Dto') {
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **if**(option === 'Entity') *(line 92)*
│   │   │   │       ```typescript
│   │   │   │       if (option === 'Entity') {
│   │   │   │       //                 if (Array.isArray(entitiesJsonFile)) {
│   │   │   │       //                     entitiesJsonFile.map((entity: IEntityJson) => {
│   │   │   │       //                         createEntityNestjs(frameworkPath, entity);
│   │   │   │       //                     });
│   │   │   │       //                 }
│   │   │   │       //             }
│   │   │   │       //             if (option === 'Dto') {
│   │   │   │       //                 if (Array.isArray(entitiesJsonFile)) {
│   │   │   │       //                     entitiesJsonFile.map((entity: IEntityJson) => {
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **if**(option === 'Dto') *(line 99)*
│   │   │   │       ```typescript
│   │   │   │       if (option === 'Dto') {
│   │   │   │       //                 if (Array.isArray(entitiesJsonFile)) {
│   │   │   │       //                     entitiesJsonFile.map((entity: IEntityJson) => {
│   │   │   │       //                         createDtoNestjs(frameworkPath, entity);
│   │   │   │       //                     });
│   │   │   │       //                 }
│   │   │   │       //             }
│   │   │   │       //             if (option === 'Controller') {
│   │   │   │       //                 if (Array.isArray(entitiesJsonFile)) {
│   │   │   │       //                     entitiesJsonFile.map((entity: IEntityJson) => {
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **if**(option === 'Controller') *(line 106)*
│   │   │   │       ```typescript
│   │   │   │       if (option === 'Controller') {
│   │   │   │       //                 if (Array.isArray(entitiesJsonFile)) {
│   │   │   │       //                     entitiesJsonFile.map((entity: IEntityJson) => {
│   │   │   │       //                         createControllerNestjs(frameworkPath, entity);
│   │   │   │       //                     });
│   │   │   │       //                 }
│   │   │   │       //             }
│   │   │   │       //             if (option === 'Service') {
│   │   │   │       //                 if (Array.isArray(entitiesJsonFile)) {
│   │   │   │       //                     entitiesJsonFile.map((entity: IEntityJson) => {
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **if**(option === 'Service') *(line 113)*
│   │   │   │       ```typescript
│   │   │   │       if (option === 'Service') {
│   │   │   │       //                 if (Array.isArray(entitiesJsonFile)) {
│   │   │   │       //                     entitiesJsonFile.map((entity: IEntityJson) => {
│   │   │   │       //                         createServiceNestjs(frameworkPath, entity);
│   │   │   │       //                     });
│   │   │   │       //                 }
│   │   │   │       //             }
│   │   │   │       //             if (option === 'Seeder') {
│   │   │   │       //                 if (Array.isArray(entitiesJsonFile)) {
│   │   │   │       //                     createSeederNestjs(frameworkPath, entitiesJsonFile);
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **if**(option === 'Seeder') *(line 120)*
│   │   │   │       ```typescript
│   │   │   │       if (option === 'Seeder') {
│   │   │   │       //                 if (Array.isArray(entitiesJsonFile)) {
│   │   │   │       //                     createSeederNestjs(frameworkPath, entitiesJsonFile);
│   │   │   │       //                 }
│   │   │   │       //             }
│   │   │   │       //             if (option === 'ALL') {
│   │   │   │       //                 createEnvironmentsNestjs(frameworkPath, thisProjectConfig);
│   │   │   │       //                 let entitiesModule: Array<{
│   │   │   │       //                     entityNamePascalCase: string;
│   │   │   │       //                     entityNameKebabCase: string;
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **if**(option === 'ALL') *(line 125)*
│   │   │   │       ```typescript
│   │   │   │       if (option === 'ALL') {
│   │   │   │       //                 createEnvironmentsNestjs(frameworkPath, thisProjectConfig);
│   │   │   │       //                 let entitiesModule: Array<{
│   │   │   │       //                     entityNamePascalCase: string;
│   │   │   │       //                     entityNameKebabCase: string;
│   │   │   │       //                 }> = [];
│   │   │   │       //                 if (Array.isArray(entitiesJsonFile)) {
│   │   │   │       //                     entitiesJsonFile.map((entity: IEntityJson) => {
│   │   │   │       //                         let entityModule = {
│   │   │   │       //                             entityNamePascalCase: `${entity.namePascalCase}`,
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **switch**(type) *(line 162)*
│   │   │   │       ```typescript
│   │   │   │       switch (type) {
│   │   │   │       //       //     case 'module':
│   │   │   │       //       //       await generateModule(targetPath, pascalName);
│   │   │   │       //       //       break;
│   │   │   │       //       //     case 'controller':
│   │   │   │       //       //       await generateController(targetPath, pascalName);
│   │   │   │       //       //       break;
│   │   │   │       //       //     case 'service':
│   │   │   │       //       //       await generateService(targetPath, pascalName);
│   │   │   │       //       //       break;
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **catch**(err: unknown) *(line 183)*
│   │   │   │       ```typescript
│   │   │   │       catch (err: unknown) {
│   │   │   │       //       //   console.error(`Error generating NestJS module: ${(err as Error).message}`);
│   │   │   │       //       // }
│   │   │   │       //     });
│   │   │   │       // }
│   │   │   │       ```
│   │   │   ├── 📘 nestjs-config-project.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **createConfigProjectNestjs**(projectPath: string) *(line 10)*
│   │   │   │       ```typescript
│   │   │   │       export function createConfigProjectNestjs(projectPath: string) {
│   │   │   │         // console.log('Config du projet');
│   │   │   │         // databaseConfigNestjs(projectPath);
│   │   │   │         // appModuleNestjs(projectPath);
│   │   │   │         // mainFileNestjs(projectPath);
│   │   │   │       }
│   │   │   │       export function databaseConfigNestjs(projectPath: string, thisProjectConfig: IFramework) {
│   │   │   │         const rootPath = path.join(projectPath, 'src', 'config');
│   │   │   │       
│   │   │   │         buildAndsaveFile(
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **databaseConfigNestjs**(projectPath: string, thisProjectConfig: IFramework) *(line 16)*
│   │   │   │       ```typescript
│   │   │   │       export function databaseConfigNestjs(projectPath: string, thisProjectConfig: IFramework) {
│   │   │   │         const rootPath = path.join(projectPath, 'src', 'config');
│   │   │   │       
│   │   │   │         buildAndsaveFile(
│   │   │   │           rootPath + `/database.config.ts`,
│   │   │   │           nestjsDatabaseSourceTemplate(thisProjectConfig),
│   │   │   │         );
│   │   │   │       }
│   │   │   │       export function appModuleNestjs(
│   │   │   │         projectPath: string,
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **appModuleNestjs**(
  projectPath: string,
  entities: Array<{
    entityNamePascalCase: string;
    entityNameKebabCase: string;
  }>,
) *(line 24)*
│   │   │   │       ```typescript
│   │   │   │       export function appModuleNestjs(
│   │   │   │         projectPath: string,
│   │   │   │         entities: Array<{
│   │   │   │           entityNamePascalCase: string;
│   │   │   │           entityNameKebabCase: string;
│   │   │   │         }>,
│   │   │   │       ) {
│   │   │   │         const rootPath = path.join(projectPath, 'src');
│   │   │   │       
│   │   │   │         buildAndsaveFile(rootPath + `/app.module.ts`, nestjsAppModuleTemplate(entities));
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **mainFileNestjs**(projectPath: string) *(line 35)*
│   │   │   │       ```typescript
│   │   │   │       export function mainFileNestjs(projectPath: string) {
│   │   │   │         const rootPath = path.join(projectPath, 'src');
│   │   │   │       
│   │   │   │         buildAndsaveFile(rootPath + `/main.ts`, nestjsMainTemplate());
│   │   │   │       }
│   │   │   │       export function createEnvironmentsNestjs(projectPath: string, framework: IFramework) {
│   │   │   │         const rootPath = path.join(projectPath, 'src');
│   │   │   │         let content: string = '';
│   │   │   │         framework.environments.forEach((environment) => {
│   │   │   │           let envPath = '';
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createEnvironmentsNestjs**(projectPath: string, framework: IFramework) *(line 40)*
│   │   │   │       ```typescript
│   │   │   │       export function createEnvironmentsNestjs(projectPath: string, framework: IFramework) {
│   │   │   │         const rootPath = path.join(projectPath, 'src');
│   │   │   │         let content: string = '';
│   │   │   │         framework.environments.forEach((environment) => {
│   │   │   │           let envPath = '';
│   │   │   │           content = nestjsEnvironmentsTemplate(environment);
│   │   │   │           if (environment.mode === 'env') {
│   │   │   │             envPath = path.join(rootPath, '.env');
│   │   │   │           } else {
│   │   │   │             envPath = path.join(rootPath, '.env.' + environment.mode);
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createConfigProjectNestjs**(projectPath: string) *(line 10)*
│   │   │   │       ```typescript
│   │   │   │       createConfigProjectNestjs(projectPath: string) {
│   │   │   │         // console.log('Config du projet');
│   │   │   │         // databaseConfigNestjs(projectPath);
│   │   │   │         // appModuleNestjs(projectPath);
│   │   │   │         // mainFileNestjs(projectPath);
│   │   │   │       }
│   │   │   │       export function databaseConfigNestjs(projectPath: string, thisProjectConfig: IFramework) {
│   │   │   │         const rootPath = path.join(projectPath, 'src', 'config');
│   │   │   │       
│   │   │   │         buildAndsaveFile(
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **databaseConfigNestjs**(projectPath: string, thisProjectConfig: IFramework) *(line 16)*
│   │   │   │       ```typescript
│   │   │   │       databaseConfigNestjs(projectPath: string, thisProjectConfig: IFramework) {
│   │   │   │         const rootPath = path.join(projectPath, 'src', 'config');
│   │   │   │       
│   │   │   │         buildAndsaveFile(
│   │   │   │           rootPath + `/database.config.ts`,
│   │   │   │           nestjsDatabaseSourceTemplate(thisProjectConfig),
│   │   │   │         );
│   │   │   │       }
│   │   │   │       export function appModuleNestjs(
│   │   │   │         projectPath: string,
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **appModuleNestjs**(
  projectPath: string,
  entities: Array<{
    entityNamePascalCase: string;
    entityNameKebabCase: string;
  }>,
) *(line 24)*
│   │   │   │       ```typescript
│   │   │   │       appModuleNestjs(
│   │   │   │         projectPath: string,
│   │   │   │         entities: Array<{
│   │   │   │           entityNamePascalCase: string;
│   │   │   │           entityNameKebabCase: string;
│   │   │   │         }>,
│   │   │   │       ) {
│   │   │   │         const rootPath = path.join(projectPath, 'src');
│   │   │   │       
│   │   │   │         buildAndsaveFile(rootPath + `/app.module.ts`, nestjsAppModuleTemplate(entities));
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **mainFileNestjs**(projectPath: string) *(line 35)*
│   │   │   │       ```typescript
│   │   │   │       mainFileNestjs(projectPath: string) {
│   │   │   │         const rootPath = path.join(projectPath, 'src');
│   │   │   │       
│   │   │   │         buildAndsaveFile(rootPath + `/main.ts`, nestjsMainTemplate());
│   │   │   │       }
│   │   │   │       export function createEnvironmentsNestjs(projectPath: string, framework: IFramework) {
│   │   │   │         const rootPath = path.join(projectPath, 'src');
│   │   │   │         let content: string = '';
│   │   │   │         framework.environments.forEach((environment) => {
│   │   │   │           let envPath = '';
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createEnvironmentsNestjs**(projectPath: string, framework: IFramework) *(line 40)*
│   │   │   │       ```typescript
│   │   │   │       createEnvironmentsNestjs(projectPath: string, framework: IFramework) {
│   │   │   │         const rootPath = path.join(projectPath, 'src');
│   │   │   │         let content: string = '';
│   │   │   │         framework.environments.forEach((environment) => {
│   │   │   │           let envPath = '';
│   │   │   │           content = nestjsEnvironmentsTemplate(environment);
│   │   │   │           if (environment.mode === 'env') {
│   │   │   │             envPath = path.join(rootPath, '.env');
│   │   │   │           } else {
│   │   │   │             envPath = path.join(rootPath, '.env.' + environment.mode);
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **if**(environment.mode === 'env') *(line 46)*
│   │   │   │       ```typescript
│   │   │   │       if (environment.mode === 'env') {
│   │   │   │             envPath = path.join(rootPath, '.env');
│   │   │   │           } else {
│   │   │   │             envPath = path.join(rootPath, '.env.' + environment.mode);
│   │   │   │           }
│   │   │   │           buildAndsaveFile(envPath, content);
│   │   │   │         });
│   │   │   │       }
│   │   │   │       ```
│   │   │   ├── 📘 nestjs-database.service.ts
│   │   │   ├── 📘 nestjs-environment.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **createEnvironmentNestjs**(projectPath: string) *(line 1)*
│   │   │   │       ```typescript
│   │   │   │       export function createEnvironmentNestjs(projectPath: string) {
│   │   │   │         console.log('Environment du projet');
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **createEnvironmentNestjs**(projectPath: string) *(line 1)*
│   │   │   │       ```typescript
│   │   │   │       createEnvironmentNestjs(projectPath: string) {
│   │   │   │         console.log('Environment du projet');
│   │   │   │       }
│   │   │   │       ```
│   │   │   ├── 📘 nestjs-generate-controller.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **generateNestjsController**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       export function generateNestjsController(entity: IEntityJson) {
│   │   │   │         console.log(`Génération du contrôleur NestJS pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **generateNestjsController**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       generateNestjsController(entity: IEntityJson) {
│   │   │   │         console.log(`Génération du contrôleur NestJS pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   ├── 📘 nestjs-generate-dto.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **generateNestjsDto**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       export function generateNestjsDto(entity: IEntityJson) {
│   │   │   │         console.log(`Génération du DTO NestJS pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **generateNestjsDto**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       generateNestjsDto(entity: IEntityJson) {
│   │   │   │         console.log(`Génération du DTO NestJS pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   ├── 📘 nestjs-generate-entity.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **nestjsGenerateEntity**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       export function nestjsGenerateEntity(entity: IEntityJson) {
│   │   │   │         console.log(`Génération de l'entité NestJS pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **nestjsGenerateEntity**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       nestjsGenerateEntity(entity: IEntityJson) {
│   │   │   │         console.log(`Génération de l'entité NestJS pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   ├── 📘 nestjs-generate-feature.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **nestjsGenerateFeature**(frameworkPath: string, entity: IEntityJson) *(line 21)*
│   │   │   │       ```typescript
│   │   │   │       export function nestjsGenerateFeature(frameworkPath: string, entity: IEntityJson) {
│   │   │   │       
│   │   │   │         console.log('Feature', entity.nameCamelCase);
│   │   │   │         const folders = ['dto', 'entity', 'repository', 'controller', 'service', 'fixture'];
│   │   │   │         folders.forEach((folder) => {
│   │   │   │           let pathFolder = path.join(frameworkPath, 'src', 'modules', entity.nameKebabCase, folder);
│   │   │   │           if (!fs.existsSync(pathFolder)) { 
│   │   │   │             console.log(`📌 Dossier créer : ${pathFolder}`);
│   │   │   │             fs.mkdirSync(pathFolder, { recursive: true });
│   │   │   │           }
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createEntityNestjs**(projectPath: string, entity: IEntityJson) *(line 41)*
│   │   │   │       ```typescript
│   │   │   │       export function createEntityNestjs(projectPath: string, entity: IEntityJson) {
│   │   │   │         const rootPath = path.join(projectPath, 'src', 'modules', entity.nameKebabCase, 'entity');
│   │   │   │         const pathRepository = path.join(
│   │   │   │           projectPath,
│   │   │   │           'src',
│   │   │   │           'modules',
│   │   │   │           entity.nameKebabCase,
│   │   │   │           'repository',
│   │   │   │         );
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createDtoNestjs**(projectPath: string, entity: IEntityJson) *(line 58)*
│   │   │   │       ```typescript
│   │   │   │       export function createDtoNestjs(projectPath: string, entity: IEntityJson) {
│   │   │   │         const rootPath = path.join(projectPath, 'src', 'modules', entity.nameKebabCase, 'dto');
│   │   │   │         buildAndsaveFile(rootPath + `/${entity.nameKebabCase}.dto.ts`, nestjsEntityTemplate(entity));
│   │   │   │         buildAndsaveFile(
│   │   │   │           rootPath + `/create-${entity.nameKebabCase}.dto.ts`,
│   │   │   │           nestjsCreateDtoTemplate(entity),
│   │   │   │         );
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createControllerNestjs**(projectPath: string, entity: IEntityJson) *(line 78)*
│   │   │   │       ```typescript
│   │   │   │       export function createControllerNestjs(projectPath: string, entity: IEntityJson) {
│   │   │   │         const rootPath = path.join(projectPath, 'src', 'modules', entity.nameKebabCase, 'controller');
│   │   │   │         buildAndsaveFile(
│   │   │   │           rootPath + `/${entity.nameKebabCase}.controller.ts`,
│   │   │   │           nestjsControlleRestfullTemplate(entity),
│   │   │   │         );
│   │   │   │       }
│   │   │   │       
│   │   │   │       export function createServiceNestjs(projectPath: string, entity: IEntityJson) {
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createServiceNestjs**(projectPath: string, entity: IEntityJson) *(line 87)*
│   │   │   │       ```typescript
│   │   │   │       export function createServiceNestjs(projectPath: string, entity: IEntityJson) {
│   │   │   │         const rootPath = path.join(projectPath, 'src', 'modules', entity.nameKebabCase, 'service');
│   │   │   │       
│   │   │   │         buildAndsaveFile(
│   │   │   │           rootPath + `/${entity.nameKebabCase}.service.ts`,
│   │   │   │           nestjsServiceCrudTemplate(entity),
│   │   │   │         );
│   │   │   │       }
│   │   │   │       export function createSeederNestjs(projectPath: string, entities: IEntityJson[]) {
│   │   │   │         const rootPath = path.join(projectPath, 'src', 'seeds');
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createSeederNestjs**(projectPath: string, entities: IEntityJson[]) *(line 95)*
│   │   │   │       ```typescript
│   │   │   │       export function createSeederNestjs(projectPath: string, entities: IEntityJson[]) {
│   │   │   │         const rootPath = path.join(projectPath, 'src', 'seeds');
│   │   │   │       
│   │   │   │         entities.forEach((entity: IEntityJson) => {
│   │   │   │           buildAndsaveFile(
│   │   │   │             rootPath + `/${entity.nameKebabCase}.seeder.ts`,
│   │   │   │             nestjsSeederEntityTemplate(entity),
│   │   │   │           );
│   │   │   │         });
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createModuleEntityNestjs**(projectPath: string, entity: IEntityJson) *(line 109)*
│   │   │   │       ```typescript
│   │   │   │       export function createModuleEntityNestjs(projectPath: string, entity: IEntityJson) {
│   │   │   │         const rootPath = path.join(projectPath, 'src', 'modules', entity.nameKebabCase);
│   │   │   │       
│   │   │   │         buildAndsaveFile(
│   │   │   │           rootPath + `/${entity.nameKebabCase}.module.ts`,
│   │   │   │           nestjsEntityModuleTemplate(entity),
│   │   │   │         );
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **nestjsGenerateFeature**(frameworkPath: string, entity: IEntityJson) *(line 21)*
│   │   │   │       ```typescript
│   │   │   │       nestjsGenerateFeature(frameworkPath: string, entity: IEntityJson) {
│   │   │   │       
│   │   │   │         console.log('Feature', entity.nameCamelCase);
│   │   │   │         const folders = ['dto', 'entity', 'repository', 'controller', 'service', 'fixture'];
│   │   │   │         folders.forEach((folder) => {
│   │   │   │           let pathFolder = path.join(frameworkPath, 'src', 'modules', entity.nameKebabCase, folder);
│   │   │   │           if (!fs.existsSync(pathFolder)) {
│   │   │   │             console.log(`📌 Dossier créer : ${pathFolder}`);
│   │   │   │             fs.mkdirSync(pathFolder, { recursive: true });
│   │   │   │           }
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createEntityNestjs**(projectPath: string, entity: IEntityJson) *(line 41)*
│   │   │   │       ```typescript
│   │   │   │       createEntityNestjs(projectPath: string, entity: IEntityJson) {
│   │   │   │         const rootPath = path.join(projectPath, 'src', 'modules', entity.nameKebabCase, 'entity');
│   │   │   │         const pathRepository = path.join(
│   │   │   │           projectPath,
│   │   │   │           'src',
│   │   │   │           'modules',
│   │   │   │           entity.nameKebabCase,
│   │   │   │           'repository',
│   │   │   │         );
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createDtoNestjs**(projectPath: string, entity: IEntityJson) *(line 58)*
│   │   │   │       ```typescript
│   │   │   │       createDtoNestjs(projectPath: string, entity: IEntityJson) {
│   │   │   │         const rootPath = path.join(projectPath, 'src', 'modules', entity.nameKebabCase, 'dto');
│   │   │   │       
│   │   │   │         buildAndsaveFile(rootPath + `/${entity.nameKebabCase}.dto.ts`, nestjsEntityTemplate(entity));
│   │   │   │       
│   │   │   │         buildAndsaveFile(
│   │   │   │           rootPath + `/create-${entity.nameKebabCase}.dto.ts`,
│   │   │   │           nestjsCreateDtoTemplate(entity),
│   │   │   │         );
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createControllerNestjs**(projectPath: string, entity: IEntityJson) *(line 78)*
│   │   │   │       ```typescript
│   │   │   │       createControllerNestjs(projectPath: string, entity: IEntityJson) {
│   │   │   │         const rootPath = path.join(projectPath, 'src', 'modules', entity.nameKebabCase, 'controller');
│   │   │   │       
│   │   │   │         buildAndsaveFile(
│   │   │   │           rootPath + `/${entity.nameKebabCase}.controller.ts`,
│   │   │   │           nestjsControlleRestfullTemplate(entity),
│   │   │   │         );
│   │   │   │       }
│   │   │   │       
│   │   │   │       export function createServiceNestjs(projectPath: string, entity: IEntityJson) {
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createServiceNestjs**(projectPath: string, entity: IEntityJson) *(line 87)*
│   │   │   │       ```typescript
│   │   │   │       createServiceNestjs(projectPath: string, entity: IEntityJson) {
│   │   │   │         const rootPath = path.join(projectPath, 'src', 'modules', entity.nameKebabCase, 'service');
│   │   │   │       
│   │   │   │         buildAndsaveFile(
│   │   │   │           rootPath + `/${entity.nameKebabCase}.service.ts`,
│   │   │   │           nestjsServiceCrudTemplate(entity),
│   │   │   │         );
│   │   │   │       }
│   │   │   │       export function createSeederNestjs(projectPath: string, entities: IEntityJson[]) {
│   │   │   │         const rootPath = path.join(projectPath, 'src', 'seeds');
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createSeederNestjs**(projectPath: string, entities: IEntityJson[]) *(line 95)*
│   │   │   │       ```typescript
│   │   │   │       createSeederNestjs(projectPath: string, entities: IEntityJson[]) {
│   │   │   │         const rootPath = path.join(projectPath, 'src', 'seeds');
│   │   │   │       
│   │   │   │         entities.forEach((entity: IEntityJson) => {
│   │   │   │           buildAndsaveFile(
│   │   │   │             rootPath + `/${entity.nameKebabCase}.seeder.ts`,
│   │   │   │             nestjsSeederEntityTemplate(entity),
│   │   │   │           );
│   │   │   │         });
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createModuleEntityNestjs**(projectPath: string, entity: IEntityJson) *(line 109)*
│   │   │   │       ```typescript
│   │   │   │       createModuleEntityNestjs(projectPath: string, entity: IEntityJson) {
│   │   │   │         const rootPath = path.join(projectPath, 'src', 'modules', entity.nameKebabCase);
│   │   │   │       
│   │   │   │         buildAndsaveFile(
│   │   │   │           rootPath + `/${entity.nameKebabCase}.module.ts`,
│   │   │   │           nestjsEntityModuleTemplate(entity),
│   │   │   │         );
│   │   │   │       }
│   │   │   │       ```
│   │   │   ├── 📘 nestjs-generate-files-framework.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **nestjsGenerateFilesFramework**(
  framework: IFramework,
  frameworkProjectPath: string,
  entitiesJsonFile: object,
) *(line 7)*
│   │   │   │       ```typescript
│   │   │   │       export function nestjsGenerateFilesFramework(
│   │   │   │         framework: IFramework,
│   │   │   │         frameworkProjectPath: string,
│   │   │   │         entitiesJsonFile: object,
│   │   │   │       ) {
│   │   │   │         installTSDependencies(framework, frameworkProjectPath);
│   │   │   │         /*
│   │   │   │          executeCommand(
│   │   │   │                  `cl nest new ${frameworkProjectPath} --package-manager=npm`,
│   │   │   │                  { cwd: `${frameworkProjectPath}`, stdio: 'inherit' },
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **nestjsGenerateFilesFramework**(
  framework: IFramework,
  frameworkProjectPath: string,
  entitiesJsonFile: object,
) *(line 7)*
│   │   │   │       ```typescript
│   │   │   │       nestjsGenerateFilesFramework(
│   │   │   │         framework: IFramework,
│   │   │   │         frameworkProjectPath: string,
│   │   │   │         entitiesJsonFile: object,
│   │   │   │       ) {
│   │   │   │         installTSDependencies(framework, frameworkProjectPath);
│   │   │   │         /*
│   │   │   │          executeCommand(
│   │   │   │                  `cl nest new ${frameworkProjectPath} --package-manager=npm`,
│   │   │   │                  { cwd: `${frameworkProjectPath}`, stdio: 'inherit' },
│   │   │   │       ...
│   │   │   │       ```
│   │   │   ├── 📘 nestjs-generate-interface.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **generateNestjsInterface**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       export function generateNestjsInterface(entity: IEntityJson) {
│   │   │   │         console.log(`Génération de l'interface NestJS pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **generateNestjsInterface**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       generateNestjsInterface(entity: IEntityJson) {
│   │   │   │         console.log(`Génération de l'interface NestJS pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   ├── 📘 nestjs-generate-mock.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **nestjsGenerateMock**(entity: IEntityJson) *(line 5)*
│   │   │   │       ```typescript
│   │   │   │       export function nestjsGenerateMock(entity: IEntityJson)  {
│   │   │   │        console.log(`Génération de mock NestJS pour: ${entity.namePascalCase}`);
│   │   │   │       };
│   │   │   │       ```
│   │   │   │     - 🔧 **nestjsGenerateMock**(entity: IEntityJson) *(line 5)*
│   │   │   │       ```typescript
│   │   │   │       nestjsGenerateMock(entity: IEntityJson)  {
│   │   │   │        console.log(`Génération de mock NestJS pour: ${entity.namePascalCase}`);
│   │   │   │       };
│   │   │   │       ```
│   │   │   ├── 📘 nestjs-generate-module.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **nestjsGenerateModule**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       export function nestjsGenerateModule(entity: IEntityJson) {
│   │   │   │         console.log(`Génération du module NestJS pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **nestjsGenerateModule**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       nestjsGenerateModule(entity: IEntityJson) {
│   │   │   │         console.log(`Génération du module NestJS pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   ├── 📘 nestjs-generate-service.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **nestjsGenerateService**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       export function nestjsGenerateService(entity: IEntityJson) {
│   │   │   │         console.log(`Génération du service NestJS pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **nestjsGenerateService**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       nestjsGenerateService(entity: IEntityJson) {
│   │   │   │         console.log(`Génération du service NestJS pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   ├── 📘 nestjs-generate-test.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **nestjsGenerateTest**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       export function nestjsGenerateTest(entity: IEntityJson) {
│   │   │   │         console.log(`Génération des tests NestJS pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **nestjsGenerateTest**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       nestjsGenerateTest(entity: IEntityJson) {
│   │   │   │         console.log(`Génération des tests NestJS pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   ├── 📘 nestjs-relationship-type-orm.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **if**(type === 'OneToMany') *(line 11)*
│   │   │   │       ```typescript
│   │   │   │       if (type === 'OneToMany') {
│   │   │   │           tab = '[]';
│   │   │   │           s = 's';
│   │   │   │           isArray = true;
│   │   │   │         }
│   │   │   │         if (type === 'ManyToOne') {
│   │   │   │           tab = '';
│   │   │   │           ps = 's';
│   │   │   │         }
│   │   │   │         return [
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **if**(type === 'ManyToOne') *(line 16)*
│   │   │   │       ```typescript
│   │   │   │       if (type === 'ManyToOne') {
│   │   │   │           tab = '';
│   │   │   │           ps = 's';
│   │   │   │         }
│   │   │   │         return [
│   │   │   │           `@${type}(() => ${snakeToPascal(toEntity)}, (${snakeToCamel(toEntity)}) => ${snakeToCamel(toEntity)}.${snakeToCamel(inEntity)}${ps})`,
│   │   │   │           `@ApiProperty({ type: () => ${snakeToPascal(toEntity)}, ${isArray ? 'isArray: true' : ''}})`,
│   │   │   │           `${snakeToCamel(toEntity)}${s}: ${snakeToPascal(toEntity)}${tab};`,
│   │   │   │         ];
│   │   │   │       }
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **if**(relation.relationType === "OneToMany") *(line 29)*
│   │   │   │       ```typescript
│   │   │   │       if (relation.relationType === "OneToMany") {
│   │   │   │       //         tab = "[]";
│   │   │   │       //     }
│   │   │   │       //     return [
│   │   │   │       //         `@${relation.relationType}(() => ${snakeToPascal(relation.relatedEntity)}, (${relation.relatedEntityVar}) => ${relation.relatedEntityVar}.${relation.inverseSide}${tab})`,
│   │   │   │       //         `${relation.relationName}: ${snakeToPascal(relation.relatedEntity)}${tab};`
│   │   │   │       //     ];
│   │   │   │       //   }
│   │   │   │       
│   │   │   │       export function getRelationType(source_cardinality: string, target_cardinality: string): string {
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **if**(source_cardinality === undefined) *(line 51)*
│   │   │   │       ```typescript
│   │   │   │       if (source_cardinality === undefined) {
│   │   │   │           source_cardinality = '1..1';
│   │   │   │         }
│   │   │   │         if (target_cardinality === undefined) {
│   │   │   │           target_cardinality = '1..1';
│   │   │   │         }
│   │   │   │         const key = `${source_cardinality}-${target_cardinality}`;
│   │   │   │         return mapping[key] || 'Unknown Relation';
│   │   │   │       }
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **if**(target_cardinality === undefined) *(line 54)*
│   │   │   │       ```typescript
│   │   │   │       if (target_cardinality === undefined) {
│   │   │   │           target_cardinality = '1..1';
│   │   │   │         }
│   │   │   │         const key = `${source_cardinality}-${target_cardinality}`;
│   │   │   │         return mapping[key] || 'Unknown Relation';
│   │   │   │       }
│   │   │   │       
│   │   │   │       export function getInEntity(dictionaryEntitiesJson: Map<string, IEntityJson>, end: Iend): string {
│   │   │   │         if (end.reference) {
│   │   │   │           return dictionaryEntitiesJson.get(end.reference.$ref || '')?.tableName || '';
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **if**(end.reference) *(line 62)*
│   │   │   │       ```typescript
│   │   │   │       if (end.reference) {
│   │   │   │           return dictionaryEntitiesJson.get(end.reference.$ref || '')?.tableName || '';
│   │   │   │         }
│   │   │   │         return '';
│   │   │   │       }
│   │   │   │       
│   │   │   │       export function getinverseSide(): string {
│   │   │   │         return 'inverseSide';
│   │   │   │       }
│   │   │   │       ...
│   │   │   │       ```
│   │   │   └── 📘 nestjs-tests.service.ts
│   │   │       *Functions found:*
│   │   │         - 🔧 **nestjsCreateTests**(projectPath: string, entity: IEntityJson) *(line 3)*
│   │   │           ```typescript
│   │   │           export function nestjsCreateTests(projectPath: string, entity: IEntityJson) {
│   │   │             console.log('Tests', entity.nameCamelCase);
│   │   │           }
│   │   │           ```
│   │   │         - 🔧 **nestjsCreateTests**(projectPath: string, entity: IEntityJson) *(line 3)*
│   │   │           ```typescript
│   │   │           nestjsCreateTests(projectPath: string, entity: IEntityJson) {
│   │   │             console.log('Tests', entity.nameCamelCase);
│   │   │           }
│   │   │           ```
│   │   ├── 📁 **templates/**
│   │   │   ├── 📁 **account/**
│   │   │   │   ├── 📁 **dto/**
│   │   │   │   │   └── 📘 nestjs-create-account.dto.template.ts
│   │   │   │   │       *Functions found:*
│   │   │   │   │         - 🔧 **nestjsCreateAccountDtoTemplate**() *(line 1)*
│   │   │   │   │           ```typescript
│   │   │   │   │           export function nestjsCreateAccountDtoTemplate() {
│   │   │   │   │             return `import { ApiProperty } from '@nestjs/swagger';
│   │   │   │   │           import {
│   │   │   │   │             IsEmail,
│   │   │   │   │             IsString,
│   │   │   │   │             IsNotEmpty,
│   │   │   │   │             IsOptional,
│   │   │   │   │             IsArray,
│   │   │   │   │             IsObject,
│   │   │   │   │           } from 'class-validator';
│   │   │   │   │           ...
│   │   │   │   │           ```
│   │   │   │   │         - 🔧 **nestjsCreateAccountDtoTemplate**() *(line 1)*
│   │   │   │   │           ```typescript
│   │   │   │   │           nestjsCreateAccountDtoTemplate() {
│   │   │   │   │             return `import { ApiProperty } from '@nestjs/swagger';
│   │   │   │   │           import {
│   │   │   │   │             IsEmail,
│   │   │   │   │             IsString,
│   │   │   │   │             IsNotEmpty,
│   │   │   │   │             IsOptional,
│   │   │   │   │             IsArray,
│   │   │   │   │             IsObject,
│   │   │   │   │           } from 'class-validator';
│   │   │   │   │           ...
│   │   │   │   │           ```
│   │   │   │   ├── 📁 **entity/**
│   │   │   │   ├── 📁 **interfaces/**
│   │   │   │   │   └── 📘 nestjs-account.interface.template.ts
│   │   │   │   │       *Functions found:*
│   │   │   │   │         - 🔧 **nestjsAccountInterfaceTemplate**() *(line 2)*
│   │   │   │   │           ```typescript
│   │   │   │   │           export function nestjsAccountInterfaceTemplate() {
│   │   │   │   │             return `export interface AccountInterface {
│   │   │   │   │             id: number;
│   │   │   │   │             email: string;
│   │   │   │   │             password: string;
│   │   │   │   │             roles: string[];
│   │   │   │   │             permissions?: Record<string, boolean>;
│   │   │   │   │           }
│   │   │   │   │           `;
│   │   │   │   │           }
│   │   │   │   │           ...
│   │   │   │   │           ```
│   │   │   │   │         - 🔧 **nestjsAccountInterfaceTemplate**() *(line 2)*
│   │   │   │   │           ```typescript
│   │   │   │   │           nestjsAccountInterfaceTemplate() {
│   │   │   │   │             return `export interface AccountInterface {
│   │   │   │   │             id: number;
│   │   │   │   │             email: string;
│   │   │   │   │             password: string;
│   │   │   │   │             roles: string[];
│   │   │   │   │             permissions?: Record<string, boolean>;
│   │   │   │   │           }
│   │   │   │   │           `;
│   │   │   │   │           }
│   │   │   │   │           ...
│   │   │   │   │           ```
│   │   │   │   ├── 📘 nestjs-account-controller.template.ts
│   │   │   │   │   *Functions found:*
│   │   │   │   │     - 🔧 **nestjsAccountControllerTemplate**() *(line 1)*
│   │   │   │   │       ```typescript
│   │   │   │   │       export function nestjsAccountControllerTemplate() {
│   │   │   │   │         return `// src/account/account.controller.ts
│   │   │   │   │       import {
│   │   │   │   │         Controller,
│   │   │   │   │         Get,
│   │   │   │   │         Post,
│   │   │   │   │         Body,
│   │   │   │   │         Param,
│   │   │   │   │         Put,
│   │   │   │   │         Delete,
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **nestjsAccountControllerTemplate**() *(line 1)*
│   │   │   │   │       ```typescript
│   │   │   │   │       nestjsAccountControllerTemplate() {
│   │   │   │   │         return `// src/account/account.controller.ts
│   │   │   │   │       import {
│   │   │   │   │         Controller,
│   │   │   │   │         Get,
│   │   │   │   │         Post,
│   │   │   │   │         Body,
│   │   │   │   │         Param,
│   │   │   │   │         Put,
│   │   │   │   │         Delete,
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **constructor**(private readonly accountService: AccountService) *(line 21)*
│   │   │   │   │       ```typescript
│   │   │   │   │       constructor(private readonly accountService: AccountService) {}
│   │   │   │   │       
│   │   │   │   │         @UseGuards(JwtAuthGuard, RolesGuard)
│   │   │   │   │         @Roles('admin')
│   │   │   │   │         @Get()
│   │   │   │   │         async findAll() {
│   │   │   │   │           // Cette méthode devrait être implémentée dans le service
│   │   │   │   │           // Elle est montrée ici à titre d'exemple pour démontrer les guards
│   │   │   │   │           return { message: 'Cette route est protégée pour les admins seulement' };
│   │   │   │   │         }
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **findAll**() *(line 26)*
│   │   │   │   │       ```typescript
│   │   │   │   │       async findAll() {
│   │   │   │   │           // Cette méthode devrait être implémentée dans le service
│   │   │   │   │           // Elle est montrée ici à titre d'exemple pour démontrer les guards
│   │   │   │   │           return { message: 'Cette route est protégée pour les admins seulement' };
│   │   │   │   │         }
│   │   │   │   │       }
│   │   │   │   │       `;
│   │   │   │   │       }
│   │   │   │   │       ```
│   │   │   │   ├── 📘 nestjs-account-module.template.ts
│   │   │   │   │   *Functions found:*
│   │   │   │   │     - 🔧 **nestjsAccountModuleTemplate**() *(line 1)*
│   │   │   │   │       ```typescript
│   │   │   │   │       export function nestjsAccountModuleTemplate() {
│   │   │   │   │         return `import { Module } from '@nestjs/common';
│   │   │   │   │       import { AccountService } from './account.service';
│   │   │   │   │       import { AccountController } from './account.controller';
│   │   │   │   │       import { Account } from './entity/account.entity';
│   │   │   │   │       import { TypeOrmModule } from '@nestjs/typeorm';
│   │   │   │   │       
│   │   │   │   │       @Module({
│   │   │   │   │         imports: [TypeOrmModule.forFeature([Account])],
│   │   │   │   │         controllers: [AccountController],
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **nestjsAccountModuleTemplate**() *(line 1)*
│   │   │   │   │       ```typescript
│   │   │   │   │       nestjsAccountModuleTemplate() {
│   │   │   │   │         return `import { Module } from '@nestjs/common';
│   │   │   │   │       import { AccountService } from './account.service';
│   │   │   │   │       import { AccountController } from './account.controller';
│   │   │   │   │       import { Account } from './entity/account.entity';
│   │   │   │   │       import { TypeOrmModule } from '@nestjs/typeorm';
│   │   │   │   │       
│   │   │   │   │       @Module({
│   │   │   │   │         imports: [TypeOrmModule.forFeature([Account])],
│   │   │   │   │         controllers: [AccountController],
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   ├── 📘 nestjs-account-service.template.ts
│   │   │   │   │   *Functions found:*
│   │   │   │   │     - 🔧 **if**(!updatedAccount) *(line 32)*
│   │   │   │   │       ```typescript
│   │   │   │   │       if (!updatedAccount) {
│   │   │   │   │             throw new NotFoundException(\`Account with ID "\${id}" not found\`);
│   │   │   │   │           }
│   │   │   │   │           return updatedAccount;
│   │   │   │   │         }
│   │   │   │   │       }
│   │   │   │   │       
│   │   │   │   │       `;
│   │   │   │   │       }
│   │   │   │   │       ```
│   │   │   │   └── 📘 nestjs-account.entity.template.ts
│   │   │   ├── 📁 **authentification/**
│   │   │   │   ├── 📁 **decorators/**
│   │   │   │   │   ├── 📘 nestjs-permissions.decorator.template.ts
│   │   │   │   │   │   *Functions found:*
│   │   │   │   │   │     - 🔧 **nestjsAuthPermissionsDecoratorTemplate**() *(line 1)*
│   │   │   │   │   │       ```typescript
│   │   │   │   │   │       export function nestjsAuthPermissionsDecoratorTemplate() {
│   │   │   │   │   │          
│   │   │   │   │   │         return `import { SetMetadata } from '@nestjs/common';
│   │   │   │   │   │       
│   │   │   │   │   │       export const PERMISSIONS_KEY = 'permissions';
│   │   │   │   │   │       export const RequirePermissions = (...permissions: string[]) => 
│   │   │   │   │   │         SetMetadata(PERMISSIONS_KEY, permissions);
│   │   │   │   │   │       
│   │   │   │   │   │       // src/auth/guards/permissions.guard.ts
│   │   │   │   │   │       import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
│   │   │   │   │   │       ...
│   │   │   │   │   │       ```
│   │   │   │   │   │     - 🔧 **RequirePermissions**(...permissions: string[]) *(line 6)*
│   │   │   │   │   │       ```typescript
│   │   │   │   │   │       export const RequirePermissions = (...permissions: string[]) => 
│   │   │   │   │   │         SetMetadata(PERMISSIONS_KEY, permissions);
│   │   │   │   │   │       
│   │   │   │   │   │       // src/auth/guards/permissions.guard.ts
│   │   │   │   │   │       import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
│   │   │   │   │   │       import { Reflector } from '@nestjs/core';
│   │   │   │   │   │       import { PERMISSIONS_KEY } from '../decorators/permissions.decorator';
│   │   │   │   │   │       
│   │   │   │   │   │       @Injectable()
│   │   │   │   │   │       export class PermissionsGuard implements CanActivate {
│   │   │   │   │   │       ...
│   │   │   │   │   │       ```
│   │   │   │   │   │     - 🔧 **nestjsAuthPermissionsDecoratorTemplate**() *(line 1)*
│   │   │   │   │   │       ```typescript
│   │   │   │   │   │       nestjsAuthPermissionsDecoratorTemplate() {
│   │   │   │   │   │          
│   │   │   │   │   │         return `import { SetMetadata } from '@nestjs/common';
│   │   │   │   │   │       
│   │   │   │   │   │       export const PERMISSIONS_KEY = 'permissions';
│   │   │   │   │   │       export const RequirePermissions = (...permissions: string[]) => 
│   │   │   │   │   │         SetMetadata(PERMISSIONS_KEY, permissions);
│   │   │   │   │   │       
│   │   │   │   │   │       // src/auth/guards/permissions.guard.ts
│   │   │   │   │   │       import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
│   │   │   │   │   │       ...
│   │   │   │   │   │       ```
│   │   │   │   │   │     - 🔧 **constructor**(private reflector: Reflector) *(line 16)*
│   │   │   │   │   │       ```typescript
│   │   │   │   │   │       constructor(private reflector: Reflector) {}
│   │   │   │   │   │       
│   │   │   │   │   │         canActivate(context: ExecutionContext): boolean {
│   │   │   │   │   │           const requiredPermissions = this.reflector.getAllAndOverride<string[]>(PERMISSIONS_KEY, [
│   │   │   │   │   │             context.getHandler(),
│   │   │   │   │   │             context.getClass(),
│   │   │   │   │   │           ]);
│   │   │   │   │   │           
│   │   │   │   │   │           if (!requiredPermissions) {
│   │   │   │   │   │             return true;
│   │   │   │   │   │       ...
│   │   │   │   │   │       ```
│   │   │   │   │   │     - 🔧 **if**(!requiredPermissions) *(line 24)*
│   │   │   │   │   │       ```typescript
│   │   │   │   │   │       if (!requiredPermissions) {
│   │   │   │   │   │             return true;
│   │   │   │   │   │           }
│   │   │   │   │   │           
│   │   │   │   │   │           const { user } = context.switchToHttp().getRequest();
│   │   │   │   │   │           
│   │   │   │   │   │           // Vérifier si l'utilisateur a les permissions requises
│   │   │   │   │   │           return requiredPermissions.every((permission) => 
│   │   │   │   │   │             user.permissions && user.permissions[permission] === true
│   │   │   │   │   │           );
│   │   │   │   │   │       ...
│   │   │   │   │   │       ```
│   │   │   │   │   ├── 📘 nestjs-permissions.decorator.ts
│   │   │   │   │   │   *Functions found:*
│   │   │   │   │   │     - 🔧 **nestjsAuthPermissionsDecoratorTemplate**() *(line 1)*
│   │   │   │   │   │       ```typescript
│   │   │   │   │   │       export function nestjsAuthPermissionsDecoratorTemplate() {
│   │   │   │   │   │         return `import { SetMetadata } from '@nestjs/common';
│   │   │   │   │   │       
│   │   │   │   │   │       export const PERMISSIONS_KEY = 'permissions';
│   │   │   │   │   │       export const RequirePermissions = (...permissions: string[]) =>
│   │   │   │   │   │         SetMetadata(PERMISSIONS_KEY, permissions);
│   │   │   │   │   │       `;
│   │   │   │   │   │       }
│   │   │   │   │   │       ```
│   │   │   │   │   │     - 🔧 **RequirePermissions**(...permissions: string[]) *(line 5)*
│   │   │   │   │   │       ```typescript
│   │   │   │   │   │       export const RequirePermissions = (...permissions: string[]) =>
│   │   │   │   │   │         SetMetadata(PERMISSIONS_KEY, permissions);
│   │   │   │   │   │       `;
│   │   │   │   │   │       }
│   │   │   │   │   │       ```
│   │   │   │   │   │     - 🔧 **nestjsAuthPermissionsDecoratorTemplate**() *(line 1)*
│   │   │   │   │   │       ```typescript
│   │   │   │   │   │       nestjsAuthPermissionsDecoratorTemplate() {
│   │   │   │   │   │         return `import { SetMetadata } from '@nestjs/common';
│   │   │   │   │   │       
│   │   │   │   │   │       export const PERMISSIONS_KEY = 'permissions';
│   │   │   │   │   │       export const RequirePermissions = (...permissions: string[]) =>
│   │   │   │   │   │         SetMetadata(PERMISSIONS_KEY, permissions);
│   │   │   │   │   │       `;
│   │   │   │   │   │       }
│   │   │   │   │   │       ```
│   │   │   │   │   ├── 📘 nestjs-roles.decorator.template.ts
│   │   │   │   │   │   *Functions found:*
│   │   │   │   │   │     - 🔧 **nestjsAuthRolesDecoratorTemplate**() *(line 1)*
│   │   │   │   │   │       ```typescript
│   │   │   │   │   │       export function nestjsAuthRolesDecoratorTemplate() {
│   │   │   │   │   │         console.log('Auth');
│   │   │   │   │   │         return `import { SetMetadata } from '@nestjs/common';
│   │   │   │   │   │       
│   │   │   │   │   │       export const ROLES_KEY = 'roles';
│   │   │   │   │   │       export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);
│   │   │   │   │   │       }
│   │   │   │   │   │       `;
│   │   │   │   │   │       }
│   │   │   │   │   │       ```
│   │   │   │   │   │     - 🔧 **Roles**(...roles: string[]) *(line 6)*
│   │   │   │   │   │       ```typescript
│   │   │   │   │   │       export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);
│   │   │   │   │   │       }
│   │   │   │   │   │       `;
│   │   │   │   │   │       }
│   │   │   │   │   │       ```
│   │   │   │   │   │     - 🔧 **nestjsAuthRolesDecoratorTemplate**() *(line 1)*
│   │   │   │   │   │       ```typescript
│   │   │   │   │   │       nestjsAuthRolesDecoratorTemplate() {
│   │   │   │   │   │         console.log('Auth');
│   │   │   │   │   │         return `import { SetMetadata } from '@nestjs/common';
│   │   │   │   │   │       
│   │   │   │   │   │       export const ROLES_KEY = 'roles';
│   │   │   │   │   │       export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);
│   │   │   │   │   │       }
│   │   │   │   │   │       `;
│   │   │   │   │   │       }
│   │   │   │   │   │       ```
│   │   │   │   │   └── 📘 nestjs-roles.decorator.ts
│   │   │   │   │       *Functions found:*
│   │   │   │   │         - 🔧 **nestjsAuthRolesDecoratorTemplate**() *(line 1)*
│   │   │   │   │           ```typescript
│   │   │   │   │           export function nestjsAuthRolesDecoratorTemplate() {
│   │   │   │   │             return `import { SetMetadata } from '@nestjs/common';
│   │   │   │   │           
│   │   │   │   │           export const ROLES_KEY = 'roles';
│   │   │   │   │           export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);
│   │   │   │   │           `;
│   │   │   │   │           }
│   │   │   │   │           ```
│   │   │   │   │         - 🔧 **Roles**(...roles: string[]) *(line 5)*
│   │   │   │   │           ```typescript
│   │   │   │   │           export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);
│   │   │   │   │           `;
│   │   │   │   │           }
│   │   │   │   │           ```
│   │   │   │   │         - 🔧 **nestjsAuthRolesDecoratorTemplate**() *(line 1)*
│   │   │   │   │           ```typescript
│   │   │   │   │           nestjsAuthRolesDecoratorTemplate() {
│   │   │   │   │             return `import { SetMetadata } from '@nestjs/common';
│   │   │   │   │           
│   │   │   │   │           export const ROLES_KEY = 'roles';
│   │   │   │   │           export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);
│   │   │   │   │           `;
│   │   │   │   │           }
│   │   │   │   │           ```
│   │   │   │   ├── 📁 **dto/**
│   │   │   │   │   └── 📘 nestjs-login.dto.ts
│   │   │   │   │       *Functions found:*
│   │   │   │   │         - 🔧 **nestjsloginDtoTemplate**() *(line 1)*
│   │   │   │   │           ```typescript
│   │   │   │   │           export function nestjsloginDtoTemplate() {
│   │   │   │   │             return `import { ApiProperty } from '@nestjs/swagger';
│   │   │   │   │           import { IsEmail, IsString, IsNotEmpty } from 'class-validator';
│   │   │   │   │           
│   │   │   │   │           export class LoginDto {
│   │   │   │   │             @ApiProperty()
│   │   │   │   │             @IsEmail()
│   │   │   │   │             @IsNotEmpty()
│   │   │   │   │             email: string;
│   │   │   │   │           ...
│   │   │   │   │           ```
│   │   │   │   │         - 🔧 **nestjsloginDtoTemplate**() *(line 1)*
│   │   │   │   │           ```typescript
│   │   │   │   │           nestjsloginDtoTemplate() {
│   │   │   │   │             return `import { ApiProperty } from '@nestjs/swagger';
│   │   │   │   │           import { IsEmail, IsString, IsNotEmpty } from 'class-validator';
│   │   │   │   │           
│   │   │   │   │           export class LoginDto {
│   │   │   │   │             @ApiProperty()
│   │   │   │   │             @IsEmail()
│   │   │   │   │             @IsNotEmpty()
│   │   │   │   │             email: string;
│   │   │   │   │           ...
│   │   │   │   │           ```
│   │   │   │   ├── 📁 **guards/**
│   │   │   │   │   ├── 📄 nestjs-auth-jwt-guard.mock.ts.txt
│   │   │   │   │   ├── 📘 nestjs-jwt-auth.guard.template.ts
│   │   │   │   │   │   *Functions found:*
│   │   │   │   │   │     - 🔧 **nestjsJwtAuthGuardTemplate**() *(line 1)*
│   │   │   │   │   │       ```typescript
│   │   │   │   │   │       export function nestjsJwtAuthGuardTemplate() {
│   │   │   │   │   │         return `import { Injectable } from '@nestjs/common';
│   │   │   │   │   │       import { AuthGuard } from '@nestjs/passport';
│   │   │   │   │   │       
│   │   │   │   │   │       @Injectable()
│   │   │   │   │   │       export class JwtAuthGuard extends AuthGuard('jwt') {}
│   │   │   │   │   │       `;
│   │   │   │   │   │       }
│   │   │   │   │   │       ```
│   │   │   │   │   │     - 🔧 **nestjsJwtAuthGuardTemplate**() *(line 1)*
│   │   │   │   │   │       ```typescript
│   │   │   │   │   │       nestjsJwtAuthGuardTemplate() {
│   │   │   │   │   │         return `import { Injectable } from '@nestjs/common';
│   │   │   │   │   │       import { AuthGuard } from '@nestjs/passport';
│   │   │   │   │   │       
│   │   │   │   │   │       @Injectable()
│   │   │   │   │   │       export class JwtAuthGuard extends AuthGuard('jwt') {}
│   │   │   │   │   │       `;
│   │   │   │   │   │       }
│   │   │   │   │   │       ```
│   │   │   │   │   │     - 🔧 **AuthGuard**('jwt') *(line 6)*
│   │   │   │   │   │       ```typescript
│   │   │   │   │   │       AuthGuard('jwt') {}
│   │   │   │   │   │       `;
│   │   │   │   │   │       }
│   │   │   │   │   │       ```
│   │   │   │   │   ├── 📘 nestjs-permissions.guard.template.ts
│   │   │   │   │   │   *Functions found:*
│   │   │   │   │   │     - 🔧 **nestjsPermissionsGuardTemplate**() *(line 1)*
│   │   │   │   │   │       ```typescript
│   │   │   │   │   │       export function nestjsPermissionsGuardTemplate() {
│   │   │   │   │   │         return `import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
│   │   │   │   │   │       import { Reflector } from '@nestjs/core';
│   │   │   │   │   │       import { PERMISSIONS_KEY } from '../decorators/permissions.decorator';
│   │   │   │   │   │       
│   │   │   │   │   │       @Injectable()
│   │   │   │   │   │       export class PermissionsGuard implements CanActivate {
│   │   │   │   │   │         constructor(private reflector: Reflector) {}
│   │   │   │   │   │       
│   │   │   │   │   │         canActivate(context: ExecutionContext): boolean {
│   │   │   │   │   │       ...
│   │   │   │   │   │       ```
│   │   │   │   │   │     - 🔧 **nestjsPermissionsGuardTemplate**() *(line 1)*
│   │   │   │   │   │       ```typescript
│   │   │   │   │   │       nestjsPermissionsGuardTemplate() {
│   │   │   │   │   │         return `import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
│   │   │   │   │   │       import { Reflector } from '@nestjs/core';
│   │   │   │   │   │       import { PERMISSIONS_KEY } from '../decorators/permissions.decorator';
│   │   │   │   │   │       
│   │   │   │   │   │       @Injectable()
│   │   │   │   │   │       export class PermissionsGuard implements CanActivate {
│   │   │   │   │   │         constructor(private reflector: Reflector) {}
│   │   │   │   │   │       
│   │   │   │   │   │         canActivate(context: ExecutionContext): boolean {
│   │   │   │   │   │       ...
│   │   │   │   │   │       ```
│   │   │   │   │   │     - 🔧 **constructor**(private reflector: Reflector) *(line 8)*
│   │   │   │   │   │       ```typescript
│   │   │   │   │   │       constructor(private reflector: Reflector) {}
│   │   │   │   │   │       
│   │   │   │   │   │         canActivate(context: ExecutionContext): boolean {
│   │   │   │   │   │           const requiredPermissions = this.reflector.getAllAndOverride<string[]>(
│   │   │   │   │   │             PERMISSIONS_KEY,
│   │   │   │   │   │             [context.getHandler(), context.getClass()],
│   │   │   │   │   │           );
│   │   │   │   │   │       
│   │   │   │   │   │           if (!requiredPermissions) {
│   │   │   │   │   │             return true;
│   │   │   │   │   │       ...
│   │   │   │   │   │       ```
│   │   │   │   │   │     - 🔧 **if**(!requiredPermissions) *(line 16)*
│   │   │   │   │   │       ```typescript
│   │   │   │   │   │       if (!requiredPermissions) {
│   │   │   │   │   │             return true;
│   │   │   │   │   │           }
│   │   │   │   │   │       
│   │   │   │   │   │           const { user } = context.switchToHttp().getRequest();
│   │   │   │   │   │       
│   │   │   │   │   │           // Vérifier si l'utilisateur a les permissions requises
│   │   │   │   │   │           return requiredPermissions.every(
│   │   │   │   │   │             (permission) => user.permissions && user.permissions[permission] === true,
│   │   │   │   │   │           );
│   │   │   │   │   │       ...
│   │   │   │   │   │       ```
│   │   │   │   │   └── 📘 nestjs-roles.guard.template.ts
│   │   │   │   │       *Functions found:*
│   │   │   │   │         - 🔧 **nestjsRolesGuardTemplate**() *(line 1)*
│   │   │   │   │           ```typescript
│   │   │   │   │           export function nestjsRolesGuardTemplate() {
│   │   │   │   │             return `import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
│   │   │   │   │           import { Reflector } from '@nestjs/core';
│   │   │   │   │           import { ROLES_KEY } from '../decorators/roles.decorator';
│   │   │   │   │           
│   │   │   │   │           @Injectable()
│   │   │   │   │           export class RolesGuard implements CanActivate {
│   │   │   │   │             constructor(private reflector: Reflector) {}
│   │   │   │   │           
│   │   │   │   │             canActivate(context: ExecutionContext): boolean {
│   │   │   │   │           ...
│   │   │   │   │           ```
│   │   │   │   │         - 🔧 **nestjsRolesGuardTemplate**() *(line 1)*
│   │   │   │   │           ```typescript
│   │   │   │   │           nestjsRolesGuardTemplate() {
│   │   │   │   │             return `import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
│   │   │   │   │           import { Reflector } from '@nestjs/core';
│   │   │   │   │           import { ROLES_KEY } from '../decorators/roles.decorator';
│   │   │   │   │           
│   │   │   │   │           @Injectable()
│   │   │   │   │           export class RolesGuard implements CanActivate {
│   │   │   │   │             constructor(private reflector: Reflector) {}
│   │   │   │   │           
│   │   │   │   │             canActivate(context: ExecutionContext): boolean {
│   │   │   │   │           ...
│   │   │   │   │           ```
│   │   │   │   │         - 🔧 **constructor**(private reflector: Reflector) *(line 8)*
│   │   │   │   │           ```typescript
│   │   │   │   │           constructor(private reflector: Reflector) {}
│   │   │   │   │           
│   │   │   │   │             canActivate(context: ExecutionContext): boolean {
│   │   │   │   │               const requiredRoles = this.reflector.getAllAndOverride<string[]>(
│   │   │   │   │                 ROLES_KEY,
│   │   │   │   │                 [context.getHandler(), context.getClass()],
│   │   │   │   │               );
│   │   │   │   │           
│   │   │   │   │               if (!requiredRoles) {
│   │   │   │   │                 return true;
│   │   │   │   │           ...
│   │   │   │   │           ```
│   │   │   │   │         - 🔧 **if**(!requiredRoles) *(line 16)*
│   │   │   │   │           ```typescript
│   │   │   │   │           if (!requiredRoles) {
│   │   │   │   │                 return true;
│   │   │   │   │               }
│   │   │   │   │           
│   │   │   │   │               const { user } = context.switchToHttp().getRequest();
│   │   │   │   │               return requiredRoles.some((role) => user.roles?.includes(role));
│   │   │   │   │             }
│   │   │   │   │           }`;
│   │   │   │   │           }
│   │   │   │   │           ```
│   │   │   │   ├── 📁 **interfaces/**
│   │   │   │   │   └── 📘 nestjs-jwt-payload.interface.template.ts
│   │   │   │   │       *Functions found:*
│   │   │   │   │         - 🔧 **nestjsJwtPayloadInterfaceTemplate**() *(line 1)*
│   │   │   │   │           ```typescript
│   │   │   │   │           export function nestjsJwtPayloadInterfaceTemplate() {
│   │   │   │   │             return `export interface JwtPayload {
│   │   │   │   │             email: string;
│   │   │   │   │             sub: number;
│   │   │   │   │             roles: string[];
│   │   │   │   │             permissions?: Record<string, boolean>;
│   │   │   │   │           }`;
│   │   │   │   │           }
│   │   │   │   │           ```
│   │   │   │   │         - 🔧 **nestjsJwtPayloadInterfaceTemplate**() *(line 1)*
│   │   │   │   │           ```typescript
│   │   │   │   │           nestjsJwtPayloadInterfaceTemplate() {
│   │   │   │   │             return `export interface JwtPayload {
│   │   │   │   │             email: string;
│   │   │   │   │             sub: number;
│   │   │   │   │             roles: string[];
│   │   │   │   │             permissions?: Record<string, boolean>;
│   │   │   │   │           }`;
│   │   │   │   │           }
│   │   │   │   │           ```
│   │   │   │   ├── 📁 **strategies/**
│   │   │   │   │   └── 📘 nestjs-jwt-strategy.template.ts
│   │   │   │   │       *Functions found:*
│   │   │   │   │         - 🔧 **nestjsJwtStrategyTemplate**() *(line 1)*
│   │   │   │   │           ```typescript
│   │   │   │   │           export function nestjsJwtStrategyTemplate() {
│   │   │   │   │             return `import { Injectable } from '@nestjs/common';
│   │   │   │   │           import { PassportStrategy } from '@nestjs/passport';
│   │   │   │   │           import { ExtractJwt, Strategy } from 'passport-jwt';
│   │   │   │   │           import { ConfigService } from '@nestjs/config';
│   │   │   │   │           import { JwtPayload } from '../interfaces/jwt-payload.interface';
│   │   │   │   │           
│   │   │   │   │           @Injectable()
│   │   │   │   │           export class JwtStrategy extends PassportStrategy(Strategy) {
│   │   │   │   │             constructor(private configService: ConfigService) {
│   │   │   │   │           ...
│   │   │   │   │           ```
│   │   │   │   │         - 🔧 **nestjsJwtStrategyTemplate**() *(line 1)*
│   │   │   │   │           ```typescript
│   │   │   │   │           nestjsJwtStrategyTemplate() {
│   │   │   │   │             return `import { Injectable } from '@nestjs/common';
│   │   │   │   │           import { PassportStrategy } from '@nestjs/passport';
│   │   │   │   │           import { ExtractJwt, Strategy } from 'passport-jwt';
│   │   │   │   │           import { ConfigService } from '@nestjs/config';
│   │   │   │   │           import { JwtPayload } from '../interfaces/jwt-payload.interface';
│   │   │   │   │           
│   │   │   │   │           @Injectable()
│   │   │   │   │           export class JwtStrategy extends PassportStrategy(Strategy) {
│   │   │   │   │             constructor(private configService: ConfigService) {
│   │   │   │   │           ...
│   │   │   │   │           ```
│   │   │   │   │         - 🔧 **PassportStrategy**(Strategy) *(line 9)*
│   │   │   │   │           ```typescript
│   │   │   │   │           PassportStrategy(Strategy) {
│   │   │   │   │             constructor(private configService: ConfigService) {
│   │   │   │   │               super({
│   │   │   │   │                 jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
│   │   │   │   │                 ignoreExpiration: false,
│   │   │   │   │                 secretOrKey: configService.get<string>('JWT_SECRET', 'votre_cle_secrete'),
│   │   │   │   │               });
│   │   │   │   │             }
│   │   │   │   │           
│   │   │   │   │             async validate(payload: JwtPayload) {
│   │   │   │   │           ...
│   │   │   │   │           ```
│   │   │   │   │         - 🔧 **constructor**(private configService: ConfigService) *(line 10)*
│   │   │   │   │           ```typescript
│   │   │   │   │           constructor(private configService: ConfigService) {
│   │   │   │   │               super({
│   │   │   │   │                 jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
│   │   │   │   │                 ignoreExpiration: false,
│   │   │   │   │                 secretOrKey: configService.get<string>('JWT_SECRET', 'votre_cle_secrete'),
│   │   │   │   │               });
│   │   │   │   │             }
│   │   │   │   │           
│   │   │   │   │             async validate(payload: JwtPayload) {
│   │   │   │   │               return {
│   │   │   │   │           ...
│   │   │   │   │           ```
│   │   │   │   │         - 🔧 **validate**(payload: JwtPayload) *(line 18)*
│   │   │   │   │           ```typescript
│   │   │   │   │           async validate(payload: JwtPayload) {
│   │   │   │   │               return {
│   │   │   │   │                 userId: payload.sub,
│   │   │   │   │                 email: payload.email,
│   │   │   │   │                 roles: payload.roles,
│   │   │   │   │                 permissions: payload.permissions,
│   │   │   │   │               };
│   │   │   │   │             }
│   │   │   │   │           }
│   │   │   │   │           ...
│   │   │   │   │           ```
│   │   │   │   ├── 📘 nestjs-auth-controller.mock..ts
│   │   │   │   │   *Functions found:*
│   │   │   │   │     - 🔧 **nestjsAuthControllerTemplate**() *(line 1)*
│   │   │   │   │       ```typescript
│   │   │   │   │       export function nestjsAuthControllerTemplate() {
│   │   │   │   │         return `import {
│   │   │   │   │         Controller,
│   │   │   │   │         Post,
│   │   │   │   │         Body,
│   │   │   │   │         UseGuards,
│   │   │   │   │         Request,
│   │   │   │   │         Get,
│   │   │   │   │         // BadRequestException,
│   │   │   │   │         // UnauthorizedException,
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **nestjsAuthControllerTemplate**() *(line 1)*
│   │   │   │   │       ```typescript
│   │   │   │   │       nestjsAuthControllerTemplate() {
│   │   │   │   │         return `import {
│   │   │   │   │         Controller,
│   │   │   │   │         Post,
│   │   │   │   │         Body,
│   │   │   │   │         UseGuards,
│   │   │   │   │         Request,
│   │   │   │   │         Get,
│   │   │   │   │         // BadRequestException,
│   │   │   │   │         // UnauthorizedException,
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **constructor**(private authService: AuthService) *(line 19)*
│   │   │   │   │       ```typescript
│   │   │   │   │       constructor(private authService: AuthService) {}
│   │   │   │   │       
│   │   │   │   │         @Post('login')
│   │   │   │   │         async login(@Body() loginDto: LoginDto) {
│   │   │   │   │           return this.authService.login(loginDto);
│   │   │   │   │         }
│   │   │   │   │       
│   │   │   │   │         @Post('register')
│   │   │   │   │         async register(@Body() createAccountDto: CreateAccountDto) {
│   │   │   │   │           return this.authService.register(createAccountDto);
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   ├── 📘 nestjs-auth-doc.template.ts
│   │   │   │   │   *Functions found:*
│   │   │   │   │     - 🔧 **nestjsAuthDockTemplate**() *(line 1)*
│   │   │   │   │       ```typescript
│   │   │   │   │       export function nestjsAuthDockTemplate() {
│   │   │   │   │         return `# Authentification
│   │   │   │   │       
│   │   │   │   │       ## Installation
│   │   │   │   │       
│   │   │   │   │       ## Configuration
│   │   │   │   │       
│   │   │   │   │       ## Usage
│   │   │   │   │       // Protéger une route avec authentification JWT
│   │   │   │   │       @UseGuards(JwtAuthGuard)
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **nestjsAuthDockTemplate**() *(line 1)*
│   │   │   │   │       ```typescript
│   │   │   │   │       nestjsAuthDockTemplate() {
│   │   │   │   │         return `# Authentification
│   │   │   │   │       
│   │   │   │   │       ## Installation
│   │   │   │   │       
│   │   │   │   │       ## Configuration
│   │   │   │   │       
│   │   │   │   │       ## Usage
│   │   │   │   │       // Protéger une route avec authentification JWT
│   │   │   │   │       @UseGuards(JwtAuthGuard)
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **findAll**() *(line 12)*
│   │   │   │   │       ```typescript
│   │   │   │   │       findAll() { ... }
│   │   │   │   │       
│   │   │   │   │       // Protéger une route pour un rôle spécifique
│   │   │   │   │       @UseGuards(JwtAuthGuard, RolesGuard)
│   │   │   │   │       @Roles('admin')
│   │   │   │   │       @Get('admin')
│   │   │   │   │       adminOnly() { ... }
│   │   │   │   │       
│   │   │   │   │       // Protéger une route avec des permissions spécifiques
│   │   │   │   │       @UseGuards(JwtAuthGuard, PermissionsGuard)
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **adminOnly**() *(line 18)*
│   │   │   │   │       ```typescript
│   │   │   │   │       adminOnly() { ... }
│   │   │   │   │       
│   │   │   │   │       // Protéger une route avec des permissions spécifiques
│   │   │   │   │       @UseGuards(JwtAuthGuard, PermissionsGuard)
│   │   │   │   │       @RequirePermissions('read:items')
│   │   │   │   │       @Get('items')
│   │   │   │   │       getItems() { ... }
│   │   │   │   │       `;
│   │   │   │   │       }
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **getItems**() *(line 24)*
│   │   │   │   │       ```typescript
│   │   │   │   │       getItems() { ... }
│   │   │   │   │       `;
│   │   │   │   │       }
│   │   │   │   │       ```
│   │   │   │   ├── 📘 nestjs-auth-module.template.ts
│   │   │   │   │   *Functions found:*
│   │   │   │   │     - 🔧 **nestjsAuthModuleTemplate**() *(line 1)*
│   │   │   │   │       ```typescript
│   │   │   │   │       export function nestjsAuthModuleTemplate() {
│   │   │   │   │         return `import { Module } from '@nestjs/common';
│   │   │   │   │       import { JwtModule } from '@nestjs/jwt';
│   │   │   │   │       import { PassportModule } from '@nestjs/passport';
│   │   │   │   │       import { ConfigModule, ConfigService } from '@nestjs/config';
│   │   │   │   │       import { AuthService } from './auth.service';
│   │   │   │   │       import { AuthController } from './auth.controller';
│   │   │   │   │       import { JwtStrategy } from './strategies/jwt.strategies';
│   │   │   │   │       import { AccountModule } from '../modules/account/account.module';
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **nestjsAuthModuleTemplate**() *(line 1)*
│   │   │   │   │       ```typescript
│   │   │   │   │       nestjsAuthModuleTemplate() {
│   │   │   │   │         return `import { Module } from '@nestjs/common';
│   │   │   │   │       import { JwtModule } from '@nestjs/jwt';
│   │   │   │   │       import { PassportModule } from '@nestjs/passport';
│   │   │   │   │       import { ConfigModule, ConfigService } from '@nestjs/config';
│   │   │   │   │       import { AuthService } from './auth.service';
│   │   │   │   │       import { AuthController } from './auth.controller';
│   │   │   │   │       import { JwtStrategy } from './strategies/jwt.strategies';
│   │   │   │   │       import { AccountModule } from '../modules/account/account.module';
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   └── 📘 nestjs-auth-service.template.ts
│   │   │   │       *Functions found:*
│   │   │   │         - 🔧 **nestjsAuthServiceTemplate**() *(line 1)*
│   │   │   │           ```typescript
│   │   │   │           export function nestjsAuthServiceTemplate() {
│   │   │   │             return `import { Injectable, UnauthorizedException } from '@nestjs/common';
│   │   │   │           import { JwtService } from '@nestjs/jwt';
│   │   │   │           import { AccountService } from '../modules/account/account.service';
│   │   │   │           import { CreateAccountDto } from '../modules/account/dto/create-account.dto';
│   │   │   │           import { LoginDto } from './dto/login.dto';
│   │   │   │           import { JwtPayload } from './interfaces/jwt-payload.interface';
│   │   │   │           import { Account } from '../modules/account/entity/account.entity';
│   │   │   │           import * as bcrypt from 'bcrypt';
│   │   │   │           ...
│   │   │   │           ```
│   │   │   │         - 🔧 **nestjsAuthServiceTemplate**() *(line 1)*
│   │   │   │           ```typescript
│   │   │   │           nestjsAuthServiceTemplate() {
│   │   │   │             return `import { Injectable, UnauthorizedException } from '@nestjs/common';
│   │   │   │           import { JwtService } from '@nestjs/jwt';
│   │   │   │           import { AccountService } from '../modules/account/account.service';
│   │   │   │           import { CreateAccountDto } from '../modules/account/dto/create-account.dto';
│   │   │   │           import { LoginDto } from './dto/login.dto';
│   │   │   │           import { JwtPayload } from './interfaces/jwt-payload.interface';
│   │   │   │           import { Account } from '../modules/account/entity/account.entity';
│   │   │   │           import * as bcrypt from 'bcrypt';
│   │   │   │           ...
│   │   │   │           ```
│   │   │   │         - 🔧 **constructor**(
    private accountService: AccountService,
    private jwtService: JwtService,
  ) *(line 13)*
│   │   │   │           ```typescript
│   │   │   │           constructor(
│   │   │   │               private accountService: AccountService,
│   │   │   │               private jwtService: JwtService,
│   │   │   │             ) {}
│   │   │   │           
│   │   │   │             async validateUser(
│   │   │   │               email: string,
│   │   │   │               password: string,
│   │   │   │             ): Promise<Omit<Account, 'password'> | null> {
│   │   │   │               const account = await this.accountService.findOneByEmail(email);
│   │   │   │           ...
│   │   │   │           ```
│   │   │   │         - 🔧 **login**(loginDto: LoginDto) *(line 32)*
│   │   │   │           ```typescript
│   │   │   │           async login(loginDto: LoginDto) {
│   │   │   │               const account = await this.validateUser(loginDto.email, loginDto.password);
│   │   │   │           
│   │   │   │               if (!account) {
│   │   │   │                 throw new UnauthorizedException('Identifiants invalides');
│   │   │   │               }
│   │   │   │           
│   │   │   │               const payload: JwtPayload = {
│   │   │   │                 email: account.email,
│   │   │   │                 sub: account.id,
│   │   │   │           ...
│   │   │   │           ```
│   │   │   │         - 🔧 **if**(!account) *(line 35)*
│   │   │   │           ```typescript
│   │   │   │           if (!account) {
│   │   │   │                 throw new UnauthorizedException('Identifiants invalides');
│   │   │   │               }
│   │   │   │           
│   │   │   │               const payload: JwtPayload = {
│   │   │   │                 email: account.email,
│   │   │   │                 sub: account.id,
│   │   │   │                 roles: account.roles,
│   │   │   │                 permissions: account.permissions,
│   │   │   │               };
│   │   │   │           ...
│   │   │   │           ```
│   │   │   │         - 🔧 **register**(createAccountDto: CreateAccountDto) *(line 51)*
│   │   │   │           ```typescript
│   │   │   │           async register(createAccountDto: CreateAccountDto) {
│   │   │   │               // Vérifier si l'utilisateur existe déjà
│   │   │   │               const existingAccount = await this.accountService.findOneByEmail(
│   │   │   │                 createAccountDto.email,
│   │   │   │               );
│   │   │   │               if (existingAccount) {
│   │   │   │                 throw new UnauthorizedException('Cet email est déjà utilisé');
│   │   │   │               }
│   │   │   │           
│   │   │   │               // Hash du mot de passe
│   │   │   │           ...
│   │   │   │           ```
│   │   │   │         - 🔧 **if**(existingAccount) *(line 56)*
│   │   │   │           ```typescript
│   │   │   │           if (existingAccount) {
│   │   │   │                 throw new UnauthorizedException('Cet email est déjà utilisé');
│   │   │   │               }
│   │   │   │           
│   │   │   │               // Hash du mot de passe
│   │   │   │               const hashedPassword = await bcrypt.hash(createAccountDto.password, 10);
│   │   │   │           
│   │   │   │               // Définir les rôles par défaut si non fournis
│   │   │   │               const roles = createAccountDto.roles || ['user'];
│   │   │   │           ...
│   │   │   │           ```
│   │   │   ├── 📁 **config/**
│   │   │   │   ├── 📁 **json/**
│   │   │   │   │   ├── 📋 nestjs-architecture-initial-.json
│   │   │   │   │   ├── 📋 nestjs-dependencies-list.json
│   │   │   │   │   ├── 📋 nestjs-dependencies.json
│   │   │   │   │   ├── 📋 nestjs-dev-dependencies.json
│   │   │   │   │   ├── 📄 nestjs-dev-dependencies.json~
│   │   │   │   │   ├── 📋 nestjs-dot-env.json
│   │   │   │   │   ├── 📋 nestjs-environments.json
│   │   │   │   │   ├── 📋 nestjs-install-options.json
│   │   │   │   │   ├── 📄 nestjs-install-options.json~
│   │   │   │   │   ├── 📋 nestjs-packagejson.json
│   │   │   │   │   ├── 📄 nestjs-packagejson.json~
│   │   │   │   │   ├── 📋 nestjs-ressources.json
│   │   │   │   │   ├── 📄 nestjs-ressources.json~
│   │   │   │   │   └── 📋 nestjs-tsconfigjson.json
│   │   │   │   ├── 📘 nestjs-app-module.template.ts
│   │   │   │   ├── 📘 nestjs-environments.mock.ts
│   │   │   │   ├── 📘 nestjs-environments.template.ts
│   │   │   │   │   *Functions found:*
│   │   │   │   │     - 🔧 **nestjsEnvironmentsTemplate**(environment: IEnvironment) *(line 3)*
│   │   │   │   │       ```typescript
│   │   │   │   │       export function nestjsEnvironmentsTemplate(environment: IEnvironment) {
│   │   │   │   │         return `MODE=${environment.mode}
│   │   │   │   │       DEBUG=${environment.debug}
│   │   │   │   │       APP_PORT=${environment.variables?.appPort}
│   │   │   │   │       CORS_ORIGIN=${environment.variables?.corsOrigine}                   #  http://localhost:4200  Remplace par ldomaine de ton frontend sinécessair
│   │   │   │   │       DB_TYPE=${environment.variables?.databaseConfig.type}                # Remplace par POSTGRES si besoin
│   │   │   │   │       DB_HOST=${environment.variables?.databaseConfig.host}               # localhost
│   │   │   │   │       DB_PORT=${environment.variables?.databaseConfig.port}               # 3306 Msql ou5432 pour PostgreSQL
│   │   │   │   │       DB_USERNAME=${environment.variables?.databaseConfig.user}           # Ton utilisateur MySQL/PostgreSQL
│   │   │   │   │       DB_PASSWORD=${environment.variables?.databaseConfig.password}       # Ton mot de passe
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **nestjsEnvironmentsTemplate**(environment: IEnvironment) *(line 3)*
│   │   │   │   │       ```typescript
│   │   │   │   │       nestjsEnvironmentsTemplate(environment: IEnvironment) {
│   │   │   │   │         return `MODE=${environment.mode}
│   │   │   │   │       DEBUG=${environment.debug}
│   │   │   │   │       APP_PORT=${environment.variables?.appPort}
│   │   │   │   │       CORS_ORIGIN=${environment.variables?.corsOrigine}                   #  http://localhost:4200  Remplace par ldomaine de ton frontend sinécessair
│   │   │   │   │       DB_TYPE=${environment.variables?.databaseConfig.type}                # Remplace par POSTGRES si besoin
│   │   │   │   │       DB_HOST=${environment.variables?.databaseConfig.host}               # localhost
│   │   │   │   │       DB_PORT=${environment.variables?.databaseConfig.port}               # 3306 Msql ou5432 pour PostgreSQL
│   │   │   │   │       DB_USERNAME=${environment.variables?.databaseConfig.user}           # Ton utilisateur MySQL/PostgreSQL
│   │   │   │   │       DB_PASSWORD=${environment.variables?.databaseConfig.password}       # Ton mot de passe
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   └── 📘 nestjs-main.template.ts
│   │   │   │       *Functions found:*
│   │   │   │         - 🔧 **bootstrap**() *(line 8)*
│   │   │   │           ```typescript
│   │   │   │           async function bootstrap() {
│   │   │   │               const app = await NestFactory.create(AppModule);
│   │   │   │               app.useGlobalPipes(new ValidationPipe());
│   │   │   │               
│   │   │   │               const configService = app.get(ConfigService);
│   │   │   │               const port = configService.get<number>('APP_PORT') || 3000;
│   │   │   │             
│   │   │   │               // Activation de CORS (si besoin pour un frontend Angular)
│   │   │   │               app.enableCors({
│   │   │   │                 origin: configService.get<string>('CORS_ORIGIN') || '*',
│   │   │   │           ...
│   │   │   │           ```
│   │   │   │         - 🔧 **bootstrap**() *(line 8)*
│   │   │   │           ```typescript
│   │   │   │           bootstrap() {
│   │   │   │               const app = await NestFactory.create(AppModule);
│   │   │   │               app.useGlobalPipes(new ValidationPipe());
│   │   │   │               
│   │   │   │               const configService = app.get(ConfigService);
│   │   │   │               const port = configService.get<number>('APP_PORT') || 3000;
│   │   │   │             
│   │   │   │               // Activation de CORS (si besoin pour un frontend Angular)
│   │   │   │               app.enableCors({
│   │   │   │                 origin: configService.get<string>('CORS_ORIGIN') || '*',
│   │   │   │           ...
│   │   │   │           ```
│   │   │   ├── 📁 **controller/**
│   │   │   │   ├── 📝 controller_restfull.md
│   │   │   │   ├── 📘 nestjs-controller.template.ts
│   │   │   │   │   *Functions found:*
│   │   │   │   │     - 🔧 **constructor**(private readonly ${entity.nameCamelCase}Service: ${entity.namePascalCase}Service) *(line 26)*
│   │   │   │   │       ```typescript
│   │   │   │   │       constructor(private readonly ${entity.nameCamelCase}Service: ${entity.namePascalCase}Service) {}
│   │   │   │   │       
│   │   │   │   │         @Post()
│   │   │   │   │         @HttpCode(HttpStatus.CREATED)
│   │   │   │   │         @ApiOperation({
│   │   │   │   │           summary: 'Créer un nouveau ${entity.nameCamelCase}',
│   │   │   │   │           description: 'Crée un nouveau ${entity.nameCamelCase} dans le système.',
│   │   │   │   │         })
│   │   │   │   │         @ApiResponse({
│   │   │   │   │           status: 201,
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   ├── 📘 nestjs-generic-controlle.template.ts
│   │   │   │   │   *Functions found:*
│   │   │   │   │     - 🔧 **nestjsGenericControllerTemplate**(name: string) *(line 4)*
│   │   │   │   │       ```typescript
│   │   │   │   │       export function nestjsGenericControllerTemplate(name: string) {
│   │   │   │   │         return `import { Controller } from '@nestjs/common';
│   │   │   │   │       
│   │   │   │   │       @Controller('${name}')
│   │   │   │   │       export class ${name}Controller {}
│   │   │   │   │       `;
│   │   │   │   │       }
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **nestjsGenericControllerTemplate**(name: string) *(line 4)*
│   │   │   │   │       ```typescript
│   │   │   │   │       nestjsGenericControllerTemplate(name: string) {
│   │   │   │   │         return `import { Controller } from '@nestjs/common';
│   │   │   │   │       
│   │   │   │   │       @Controller('${name}')
│   │   │   │   │       export class ${name}Controller {}
│   │   │   │   │       `;
│   │   │   │   │       }
│   │   │   │   │       ```
│   │   │   │   ├── 📘 nestjs-restfull-controller.template.ts
│   │   │   │   │   *Functions found:*
│   │   │   │   │     - 🔧 **constructor**(private readonly ${entity.nameCamelCase}Service: ${entity.namePascalCase}Service) *(line 25)*
│   │   │   │   │       ```typescript
│   │   │   │   │       constructor(private readonly ${entity.nameCamelCase}Service: ${entity.namePascalCase}Service) {}
│   │   │   │   │       
│   │   │   │   │         @Post()
│   │   │   │   │         @HttpCode(HttpStatus.CREATED)
│   │   │   │   │         @ApiOperation({ summary: "Créer un nouveau ${entity.nameCamelCase}", description: "Crée un nouveau ${entity.nameCamelCase} dans le système." })
│   │   │   │   │         @ApiResponse({
│   │   │   │   │           status: 201,
│   │   │   │   │           description: "Le ${entity.nameCamelCase} a été créé avec succès.",
│   │   │   │   │           type: Response${entity.namePascalCase}Dto, // Correction du type de retour pour Swagger
│   │   │   │   │         })
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   ├── 📘 nestjs-test.controller.spec.template.ts
│   │   │   │   ├── 📘 old-nestjs-controller.template.ts
│   │   │   │   │   *Functions found:*
│   │   │   │   │     - 🔧 **constructor**(private readonly ${entity.nameCamelCase}Service: ${entity.namePascalCase}Service) *(line 21)*
│   │   │   │   │       ```typescript
│   │   │   │   │       constructor(private readonly ${entity.nameCamelCase}Service: ${entity.namePascalCase}Service) {}
│   │   │   │   │       
│   │   │   │   │         @Post()
│   │   │   │   │         create(@Body() create${entity.namePascalCase}Dto: Create${entity.namePascalCase}Dto) {
│   │   │   │   │           return this.${entity.nameCamelCase}Service.create(create${entity.namePascalCase}Dto);
│   │   │   │   │         }
│   │   │   │   │       
│   │   │   │   │         @Get()
│   │   │   │   │         findAll() {
│   │   │   │   │           return this.${entity.nameCamelCase}Service.findAll();
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **findAll**() *(line 29)*
│   │   │   │   │       ```typescript
│   │   │   │   │       findAll() {
│   │   │   │   │           return this.${entity.nameCamelCase}Service.findAll();
│   │   │   │   │         }
│   │   │   │   │       
│   │   │   │   │         @Get(':id')
│   │   │   │   │         findOne(@Param('id') id: string) {
│   │   │   │   │           return this.${entity.nameCamelCase}Service.findOne(+id);
│   │   │   │   │         }
│   │   │   │   │       
│   │   │   │   │         @Patch(':id')
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   └── 📘 old-nestjs-restfull-controller.template.ts
│   │   │   │       *Functions found:*
│   │   │   │         - 🔧 **constructor**(private readonly ${entity.nameCamelCase}Service: ${entity.namePascalCase}Service) *(line 25)*
│   │   │   │           ```typescript
│   │   │   │           constructor(private readonly ${entity.nameCamelCase}Service: ${entity.namePascalCase}Service) {}
│   │   │   │           
│   │   │   │             @Post()
│   │   │   │             @HttpCode(HttpStatus.CREATED)
│   │   │   │             @ApiOperation({ summary: 'Créer un nouveau ${entity.nameKebabCase}', description: 'Crée un nouveau ${entity.nameKebabCase} dans le système.' })
│   │   │   │             @ApiResponse({
│   │   │   │               status: 201,
│   │   │   │               description: 'Le ${entity.nameKebabCase} a été créé avec succès.',
│   │   │   │               type: Response${entity.namePascalCase}Dto, // Correction du type de retour pour Swagger
│   │   │   │             })
│   │   │   │           ...
│   │   │   │           ```
│   │   │   ├── 📁 **database/**
│   │   │   │   ├── 📘 nestjs-data-source.template.ts
│   │   │   │   └── 📘 nestjs-database.config.template.ts
│   │   │   ├── 📁 **doc/**
│   │   │   │   └── 📝 nestjs-dependancies.md
│   │   │   ├── 📁 **dto/**
│   │   │   │   ├── 📘 nestjs-create-dto.template.ts
│   │   │   │   │   *Functions found:*
│   │   │   │   │     - 🔧 **if**(column.nullable) *(line 61)*
│   │   │   │   │       ```typescript
│   │   │   │   │       if (column.nullable) {
│   │   │   │   │           arrayImports.push('IsOptional');
│   │   │   │   │           decorators.push(`${indent}@IsOptional()`);
│   │   │   │   │         } else {
│   │   │   │   │           // Add IsNotEmpty if not nullable and not primary key
│   │   │   │   │           if (!column.primaryKey) {
│   │   │   │   │             arrayImports.push('IsNotEmpty');
│   │   │   │   │             decorators.push(`${indent}@IsNotEmpty()`);
│   │   │   │   │           }
│   │   │   │   │         }
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **if**(!column.primaryKey) *(line 66)*
│   │   │   │   │       ```typescript
│   │   │   │   │       if (!column.primaryKey) {
│   │   │   │   │             arrayImports.push('IsNotEmpty');
│   │   │   │   │             decorators.push(`${indent}@IsNotEmpty()`);
│   │   │   │   │           }
│   │   │   │   │         }
│   │   │   │   │       
│   │   │   │   │         if (['INT', 'INTEGER', 'SMALLINT', 'TINYINT', 'MEDIUMINT', 'BIGINT'].includes(type)) {
│   │   │   │   │           arrayImports.push('IsInt');
│   │   │   │   │           decorators.push(`${indent}@IsInt()`);
│   │   │   │   │           return {
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **if**(typeof precision === 'number') *(line 89)*
│   │   │   │   │       ```typescript
│   │   │   │   │       if (typeof precision === 'number') {
│   │   │   │   │             isNumberOptions = `{ allowInfinity: false, allowNaN: false, maxDecimalPlaces: ${precision} }`;
│   │   │   │   │           }
│   │   │   │   │           decorators.push(`${indent}@IsNumber(${isNumberOptions})`);
│   │   │   │   │           return {
│   │   │   │   │             importDecorators: arrayImports,
│   │   │   │   │             validators: {
│   │   │   │   │               name: column.name,
│   │   │   │   │               nullable: column.nullable ? '?' : '!',
│   │   │   │   │               typeSql: type,
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **if**(length) *(line 108)*
│   │   │   │   │       ```typescript
│   │   │   │   │       if (length) {
│   │   │   │   │             arrayImports.push('MaxLength');
│   │   │   │   │             decorators.push(`${indent}@MaxLength(${length})`);
│   │   │   │   │           }
│   │   │   │   │           return {
│   │   │   │   │             importDecorators: arrayImports,
│   │   │   │   │             validators: {
│   │   │   │   │               name: column.name,
│   │   │   │   │               nullable: column.nullable ? '?' : '!',
│   │   │   │   │               typeSql: type,
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   ├── 📘 nestjs-entity-dto.template.ts
│   │   │   │   ├── 📘 nestjs-response-dto.template.ts
│   │   │   │   │   *Functions found:*
│   │   │   │   │     - 🔧 **if**(!column.primaryKey) *(line 14)*
│   │   │   │   │       ```typescript
│   │   │   │   │       if (!column.primaryKey) { // Primary key is usually not part of Create/Update DTOs
│   │   │   │   │             properties.push(`${indent}@ApiProperty({ description: "${column.documentation || column.name}"${column.nullable ? ', required: false' : ''} })\n${indent}${column.name}${column.nullable ? '?' : '!'}: ${column.typeTypeScript};`);
│   │   │   │   │           }
│   │   │   │   │         });
│   │   │   │   │       
│   │   │   │   │         // Add properties for relations
│   │   │   │   │         entity.relationships?.forEach((relationship: IRelation) => {
│   │   │   │   │           const targetPascal = snakeToPascal(relationship.target);
│   │   │   │   │           const targetKebab = snakeToKebab(relationship.target);
│   │   │   │   │           const propertyName = snakeToCamel(relationship.target);
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **if**(relationship.relationType === 'OneToMany' || relationship.relationType === 'ManyToMany') *(line 30)*
│   │   │   │   │       ```typescript
│   │   │   │   │       if (relationship.relationType === 'OneToMany' || relationship.relationType === 'ManyToMany') {
│   │   │   │   │             propertyType += '[]';
│   │   │   │   │             apiPropertyOptions += ', isArray: true';
│   │   │   │   │           }
│   │   │   │   │       
│   │   │   │   │           properties.push(`${indent}@ApiProperty({ ${apiPropertyOptions} })\n${indent}${propertyName}: ${propertyType};`);
│   │   │   │   │         });
│   │   │   │   │       
│   │   │   │   │         const allImports = [
│   │   │   │   │           `import { ApiProperty } from '@nestjs/swagger';`,
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   ├── 📘 nestjs-update-dto.template.ts
│   │   │   │   │   *Functions found:*
│   │   │   │   │     - 🔧 **PartialType**(Create${entity.namePascalCase}Dto) *(line 8)*
│   │   │   │   │       ```typescript
│   │   │   │   │       PartialType(Create${entity.namePascalCase}Dto) {};`;
│   │   │   │   │       }
│   │   │   │   │       ```
│   │   │   │   ├── 📘 old-nestjs-create-dto.template.ts
│   │   │   │   │   *Functions found:*
│   │   │   │   │     - 🔧 **IsNumber**({ allowInfinity: false, allowNaN: false`];
    if (typeof precision === 'number') *(line 58)*
│   │   │   │   │       ```typescript
│   │   │   │   │       IsNumber({ allowInfinity: false, allowNaN: false`];
│   │   │   │   │           if (typeof precision === 'number') {
│   │   │   │   │             decorators[0] += `, maxDecimalPlaces: ${precision}`;
│   │   │   │   │           }
│   │   │   │   │           decorators[0] += ' })';
│   │   │   │   │           arrayImports.push('IsNumber');
│   │   │   │   │           return {
│   │   │   │   │             importDecorators: arrayImports,
│   │   │   │   │             validators: {
│   │   │   │   │               name: column.name,
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **IsNumber**({ allowInfinity: false, allowNaN: false`];
    if (typeof precision === 'number') *(line 76)*
│   │   │   │   │       ```typescript
│   │   │   │   │       IsNumber({ allowInfinity: false, allowNaN: false`];
│   │   │   │   │           if (typeof precision === 'number') {
│   │   │   │   │             decorators[0] += `, maxDecimalPlaces: ${precision}`;
│   │   │   │   │           }
│   │   │   │   │           decorators[0] += ' })';
│   │   │   │   │           arrayImports.push('IsNumber');
│   │   │   │   │           return {
│   │   │   │   │             importDecorators: arrayImports,
│   │   │   │   │             validators: {
│   │   │   │   │               name: column.name,
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **if**(length) *(line 108)*
│   │   │   │   │       ```typescript
│   │   │   │   │       if (length) {
│   │   │   │   │             arrayImports.push('IsString', 'MaxLength');
│   │   │   │   │           } else {
│   │   │   │   │             arrayImports.push('IsString');
│   │   │   │   │           }
│   │   │   │   │           return {
│   │   │   │   │             importDecorators: arrayImports,
│   │   │   │   │             validators: {
│   │   │   │   │               name: column.name,
│   │   │   │   │               nullable: column.nullable ? '?' : '!',
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **IsNumber**({ allowInfinity: false, allowNaN: false`];
    if (typeof precision === 'number') *(line 220)*
│   │   │   │   │       ```typescript
│   │   │   │   │       IsNumber({ allowInfinity: false, allowNaN: false`];
│   │   │   │   │           if (typeof precision === 'number') {
│   │   │   │   │             decorators[0] += `, maxDecimalPlaces: ${precision}`;
│   │   │   │   │           }
│   │   │   │   │           decorators[0] += ' })';
│   │   │   │   │           arrayImports.push('IsNumber');
│   │   │   │   │           return {
│   │   │   │   │             importDecorators: arrayImports,
│   │   │   │   │             validators: {
│   │   │   │   │               name: column.name,
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **if**(length) *(line 252)*
│   │   │   │   │       ```typescript
│   │   │   │   │       if (length) {
│   │   │   │   │             arrayImports.push('IsString', 'MaxLength');
│   │   │   │   │           } else {
│   │   │   │   │             arrayImports.push('IsString');
│   │   │   │   │           }
│   │   │   │   │           return {
│   │   │   │   │             importDecorators: arrayImports,
│   │   │   │   │             validators: {
│   │   │   │   │               name: column.name,
│   │   │   │   │               nullable: column.nullable ? '?' : '!',
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **if**(column.primaryKey) *(line 357)*
│   │   │   │   │       ```typescript
│   │   │   │   │       if (column.primaryKey) {
│   │   │   │   │       //         return [];
│   │   │   │   │       //     } else {
│   │   │   │   │       //         // if (column.foreignKey) {
│   │   │   │   │       //         //     decorators.push('//@ForeignKey()');
│   │   │   │   │       //         // }
│   │   │   │   │       //         // Déterminer le type de validation
│   │   │   │   │       //         // switch (column.typeSql.toLowerCase()) {
│   │   │   │   │       //         //     case 'int':
│   │   │   │   │       //         //     case 'integer':
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **if**(column.foreignKey) *(line 360)*
│   │   │   │   │       ```typescript
│   │   │   │   │       if (column.foreignKey) {
│   │   │   │   │       //         //     decorators.push('//@ForeignKey()');
│   │   │   │   │       //         // }
│   │   │   │   │       //         // Déterminer le type de validation
│   │   │   │   │       //         // switch (column.typeSql.toLowerCase()) {
│   │   │   │   │       //         //     case 'int':
│   │   │   │   │       //         //     case 'integer':
│   │   │   │   │       //         //     case 'smallint':
│   │   │   │   │       //         //     case 'bigint':
│   │   │   │   │       //         //         decorators.push(`${indent}@IsInt()`);
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **if**(column.length) *(line 379)*
│   │   │   │   │       ```typescript
│   │   │   │   │       if (column.length) {
│   │   │   │   │       //         //             decorators.push(`${indent}@MinLength(2)`); // ⚠️
│   │   │   │   │       //         //             decorators.push(`${indent}@MaxLength(${column.length})`);
│   │   │   │   │       //         //         }
│   │   │   │   │       //         //         break;
│   │   │   │   │       //         //     case 'text':
│   │   │   │   │       //         //     case 'longtext':
│   │   │   │   │       //         //         decorators.push(`${indent}@IsString()`);
│   │   │   │   │       //         //         break;
│   │   │   │   │       //         //     case 'boolean':
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **if**(column.nullable) *(line 405)*
│   │   │   │   │       ```typescript
│   │   │   │   │       if (column.nullable) {
│   │   │   │   │       //             decorators.push(`${indent}@IsOptional()`);
│   │   │   │   │       //         } else {
│   │   │   │   │       //             decorators.push(`${indent}@IsNotEmpty()`);
│   │   │   │   │       //         }
│   │   │   │   │       
│   │   │   │   │       //         // Ajouter la contrainte unique
│   │   │   │   │       //         // if (column.unique) {
│   │   │   │   │       //         //     decorators.push('@IsUnique()');
│   │   │   │   │       //         // }
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **if**(column.unique) *(line 412)*
│   │   │   │   │       ```typescript
│   │   │   │   │       if (column.unique) {
│   │   │   │   │       //         //     decorators.push('@IsUnique()');
│   │   │   │   │       //         // }
│   │   │   │   │       //     }
│   │   │   │   │       //     return decorators;
│   │   │   │   │       // }
│   │   │   │   │       
│   │   │   │   │       /*
│   │   │   │   │       const result = mapSqlTypeToValidators('DECIMAL', undefined, 2);
│   │   │   │   │       {
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   ├── 📘 old-nestjs-response-dto.template.ts
│   │   │   │   │   *Functions found:*
│   │   │   │   │     - 🔧 **IsNumber**({ allowInfinity: false, allowNaN: false`];
    if (typeof precision === 'number') *(line 60)*
│   │   │   │   │       ```typescript
│   │   │   │   │       IsNumber({ allowInfinity: false, allowNaN: false`];
│   │   │   │   │           if (typeof precision === 'number') {
│   │   │   │   │             decorators[0] += `, maxDecimalPlaces: ${precision}`;
│   │   │   │   │           }
│   │   │   │   │           decorators[0] += ' })';
│   │   │   │   │           arrayImports.push('IsNumber');
│   │   │   │   │           return {
│   │   │   │   │             importDecorators: arrayImports,
│   │   │   │   │             validators: {
│   │   │   │   │               name: column.name,
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **IsNumber**({ allowInfinity: false, allowNaN: false`];
    if (typeof precision === 'number') *(line 78)*
│   │   │   │   │       ```typescript
│   │   │   │   │       IsNumber({ allowInfinity: false, allowNaN: false`];
│   │   │   │   │           if (typeof precision === 'number') {
│   │   │   │   │             decorators[0] += `, maxDecimalPlaces: ${precision}`;
│   │   │   │   │           }
│   │   │   │   │           decorators[0] += ' })';
│   │   │   │   │           arrayImports.push('IsNumber');
│   │   │   │   │           return {
│   │   │   │   │             importDecorators: arrayImports,
│   │   │   │   │             validators: {
│   │   │   │   │               name: column.name,
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **if**(length) *(line 110)*
│   │   │   │   │       ```typescript
│   │   │   │   │       if (length) {
│   │   │   │   │             arrayImports.push('IsString', 'MaxLength');
│   │   │   │   │           } else {
│   │   │   │   │             arrayImports.push('IsString');
│   │   │   │   │           }
│   │   │   │   │           return {
│   │   │   │   │             importDecorators: arrayImports,
│   │   │   │   │             validators: {
│   │   │   │   │               name: column.name,
│   │   │   │   │               nullable: column.nullable ? '?' : '!',
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **IsNumber**({ allowInfinity: false, allowNaN: false`];
//         if (typeof precision === 'number') *(line 221)*
│   │   │   │   │       ```typescript
│   │   │   │   │       IsNumber({ allowInfinity: false, allowNaN: false`];
│   │   │   │   │       //         if (typeof precision === 'number') {
│   │   │   │   │       //             decorators[0] += `, maxDecimalPlaces: ${precision}`;
│   │   │   │   │       //         }
│   │   │   │   │       //         decorators[0] += ' })';
│   │   │   │   │       //         arrayImports.push('IsNumber');
│   │   │   │   │       //         return {
│   │   │   │   │       //             importDecorators: arrayImports,
│   │   │   │   │       //             validators: {
│   │   │   │   │       //                 name: column.name,
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **if**(length) *(line 251)*
│   │   │   │   │       ```typescript
│   │   │   │   │       if (length) {
│   │   │   │   │       //             arrayImports.push('IsString', 'MaxLength');
│   │   │   │   │       //         } else {
│   │   │   │   │       //             arrayImports.push('IsString');
│   │   │   │   │       //         }
│   │   │   │   │       //         return {
│   │   │   │   │       //             importDecorators: arrayImports,
│   │   │   │   │       //             validators: {
│   │   │   │   │       //                 name: column.name,
│   │   │   │   │       //                 typeSql: type,
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **if**(column.primaryKey) *(line 348)*
│   │   │   │   │       ```typescript
│   │   │   │   │       if (column.primaryKey) {
│   │   │   │   │       //         return [];
│   │   │   │   │       //     } else {
│   │   │   │   │       //         // if (column.foreignKey) {
│   │   │   │   │       //         //     decorators.push('//@ForeignKey()');
│   │   │   │   │       //         // }
│   │   │   │   │       //         // Déterminer le type de validation
│   │   │   │   │       //         // switch (column.typeSql.toLowerCase()) {
│   │   │   │   │       //         //     case 'int':
│   │   │   │   │       //         //     case 'integer':
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **if**(column.foreignKey) *(line 351)*
│   │   │   │   │       ```typescript
│   │   │   │   │       if (column.foreignKey) {
│   │   │   │   │       //         //     decorators.push('//@ForeignKey()');
│   │   │   │   │       //         // }
│   │   │   │   │       //         // Déterminer le type de validation
│   │   │   │   │       //         // switch (column.typeSql.toLowerCase()) {
│   │   │   │   │       //         //     case 'int':
│   │   │   │   │       //         //     case 'integer':
│   │   │   │   │       //         //     case 'smallint':
│   │   │   │   │       //         //     case 'bigint':
│   │   │   │   │       //         //         decorators.push(`${indent}@IsInt()`);
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **if**(column.length) *(line 370)*
│   │   │   │   │       ```typescript
│   │   │   │   │       if (column.length) {
│   │   │   │   │       //         //             decorators.push(`${indent}@MinLength(2)`); // ⚠️
│   │   │   │   │       //         //             decorators.push(`${indent}@MaxLength(${column.length})`);
│   │   │   │   │       //         //         }
│   │   │   │   │       //         //         break;
│   │   │   │   │       //         //     case 'text':
│   │   │   │   │       //         //     case 'longtext':
│   │   │   │   │       //         //         decorators.push(`${indent}@IsString()`);
│   │   │   │   │       //         //         break;
│   │   │   │   │       //         //     case 'boolean':
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **if**(column.nullable) *(line 396)*
│   │   │   │   │       ```typescript
│   │   │   │   │       if (column.nullable) {
│   │   │   │   │       //             decorators.push(`${indent}@IsOptional()`);
│   │   │   │   │       //         } else {
│   │   │   │   │       //             decorators.push(`${indent}@IsNotEmpty()`);
│   │   │   │   │       //         }
│   │   │   │   │       
│   │   │   │   │       //         // Ajouter la contrainte unique
│   │   │   │   │       //         // if (column.unique) {
│   │   │   │   │       //         //     decorators.push('@IsUnique()');
│   │   │   │   │       //         // }
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **if**(column.unique) *(line 403)*
│   │   │   │   │       ```typescript
│   │   │   │   │       if (column.unique) {
│   │   │   │   │       //         //     decorators.push('@IsUnique()');
│   │   │   │   │       //         // }
│   │   │   │   │       //     }
│   │   │   │   │       //     return decorators;
│   │   │   │   │       // }
│   │   │   │   │       
│   │   │   │   │       /*
│   │   │   │   │       const result = mapSqlTypeToValidators('DECIMAL', undefined, 2);
│   │   │   │   │       {
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   ├── 📘 old-nestjs-update-dto.template.ts
│   │   │   │   │   *Functions found:*
│   │   │   │   │     - 🔧 **PartialType**(Create${entity.namePascalCase}Dto) *(line 8)*
│   │   │   │   │       ```typescript
│   │   │   │   │       PartialType(Create${entity.namePascalCase}Dto) {}`;
│   │   │   │   │       }
│   │   │   │   │       ```
│   │   │   │   └── 📝 readme.md
│   │   │   ├── 📁 **entities/**
│   │   │   │   ├── 📝 convention.md
│   │   │   │   ├── 📝 entities.md
│   │   │   │   ├── 📘 nestjs-entity.template.ts
│   │   │   │   │   *Functions found:*
│   │   │   │   │     - 🔧 **forEach**(imp => {
    if (imp != 'Unknown Relation') *(line 55)*
│   │   │   │   │       ```typescript
│   │   │   │   │       forEach(imp => {
│   │   │   │   │           if (imp != 'Unknown Relation') {
│   │   │   │   │             typeormImports.add(imp)
│   │   │   │   │           }
│   │   │   │   │         });
│   │   │   │   │       
│   │   │   │   │         // Build import statements
│   │   │   │   │         const allImports = [
│   │   │   │   │           `import { ApiProperty } from '@nestjs/swagger';`,
│   │   │   │   │           `import {${n}${indent}${[...typeormImports].sort().join(`,${n}${indent}`)},${n}} from 'typeorm';`,
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **if**(relationship.source !== entity.tableName) *(line 108)*
│   │   │   │   │       ```typescript
│   │   │   │   │       if (relationship.source !== entity.tableName) {
│   │   │   │   │             entityImports.add(buildImportEntity(relationship.source));
│   │   │   │   │           }
│   │   │   │   │           if (relationship.target !== entity.tableName) {
│   │   │   │   │             entityImports.add(buildImportEntity(relationship.target));
│   │   │   │   │           }
│   │   │   │   │       
│   │   │   │   │           // Handle JoinColumn for owning sides of relationships
│   │   │   │   │           if (relationship.relationType === 'ManyToOne' || (relationship.relationType === 'OneToOne' && relationship.owner)) {
│   │   │   │   │             typeormImports.add('JoinColumn');
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **if**(relationship.target !== entity.tableName) *(line 111)*
│   │   │   │   │       ```typescript
│   │   │   │   │       if (relationship.target !== entity.tableName) {
│   │   │   │   │             entityImports.add(buildImportEntity(relationship.target));
│   │   │   │   │           }
│   │   │   │   │       
│   │   │   │   │           // Handle JoinColumn for owning sides of relationships
│   │   │   │   │           if (relationship.relationType === 'ManyToOne' || (relationship.relationType === 'OneToOne' && relationship.owner)) {
│   │   │   │   │             typeormImports.add('JoinColumn');
│   │   │   │   │           }
│   │   │   │   │       
│   │   │   │   │           relations.push(
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **if**(column.primaryKey) *(line 137)*
│   │   │   │   │       ```typescript
│   │   │   │   │       if (column.primaryKey) {
│   │   │   │   │           decorators.push('@PrimaryGeneratedColumn()');
│   │   │   │   │           return { decorators, typeormImports };
│   │   │   │   │         }
│   │   │   │   │       
│   │   │   │   │         let decorateurColumn = '@Column';
│   │   │   │   │         if (column.name.toLowerCase().includes('created_at')) {
│   │   │   │   │           decorateurColumn = '@CreateDateColumn';
│   │   │   │   │           typeormImports.add('CreateDateColumn');
│   │   │   │   │         } else if (column.name.toLowerCase().includes('updated_at')) {
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **if**(typeMapping[typeSqlLower]) *(line 175)*
│   │   │   │   │       ```typescript
│   │   │   │   │       if (typeMapping[typeSqlLower]) {
│   │   │   │   │           columnOptions.push(`type: ${typeMapping[typeSqlLower]}`);
│   │   │   │   │         }
│   │   │   │   │       
│   │   │   │   │         if (typeSqlLower === 'varchar' && column.length) {
│   │   │   │   │           columnOptions.push(`length: ${column.length}`);
│   │   │   │   │         }
│   │   │   │   │       
│   │   │   │   │         if (column.nullable) {
│   │   │   │   │           columnOptions.push(`nullable: true`);
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **if**(typeSqlLower === 'varchar' && column.length) *(line 179)*
│   │   │   │   │       ```typescript
│   │   │   │   │       if (typeSqlLower === 'varchar' && column.length) {
│   │   │   │   │           columnOptions.push(`length: ${column.length}`);
│   │   │   │   │         }
│   │   │   │   │       
│   │   │   │   │         if (column.nullable) {
│   │   │   │   │           columnOptions.push(`nullable: true`);
│   │   │   │   │         }
│   │   │   │   │         if (column.unique) {
│   │   │   │   │           columnOptions.push(`unique: true`);
│   │   │   │   │         }
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **if**(column.nullable) *(line 183)*
│   │   │   │   │       ```typescript
│   │   │   │   │       if (column.nullable) {
│   │   │   │   │           columnOptions.push(`nullable: true`);
│   │   │   │   │         }
│   │   │   │   │         if (column.unique) {
│   │   │   │   │           columnOptions.push(`unique: true`);
│   │   │   │   │         }
│   │   │   │   │       
│   │   │   │   │         const optionsString = columnOptions.length > 0 ? `{ ${columnOptions.join(', ')} }` : '';
│   │   │   │   │         decorators.push(`${decorateurColumn}(${optionsString})`);
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **if**(column.unique) *(line 186)*
│   │   │   │   │       ```typescript
│   │   │   │   │       if (column.unique) {
│   │   │   │   │           columnOptions.push(`unique: true`);
│   │   │   │   │         }
│   │   │   │   │       
│   │   │   │   │         const optionsString = columnOptions.length > 0 ? `{ ${columnOptions.join(', ')} }` : '';
│   │   │   │   │         decorators.push(`${decorateurColumn}(${optionsString})`);
│   │   │   │   │       
│   │   │   │   │         return { decorators, typeormImports };
│   │   │   │   │       }
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **switch**(relationType) *(line 219)*
│   │   │   │   │       ```typescript
│   │   │   │   │       switch (relationType) {
│   │   │   │   │           case 'OneToOne':
│   │   │   │   │           case 'OneToMany':
│   │   │   │   │             // For OneToOne and OneToMany, the inverse side property on the target entity
│   │   │   │   │             // is the camelCase version of the *current entity's table name*.
│   │   │   │   │             inverseSideProperty = snakeToCamel(currentEntityTableName);
│   │   │   │   │             // If the inverse side is a OneToMany, it should be plural on the target entity.
│   │   │   │   │             if (relationType === 'OneToMany') {
│   │   │   │   │               propertyName += 's';
│   │   │   │   │               propertyType += '[]';
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **if**(relationType === 'OneToMany') *(line 226)*
│   │   │   │   │       ```typescript
│   │   │   │   │       if (relationType === 'OneToMany') {
│   │   │   │   │               propertyName += 's';
│   │   │   │   │               propertyType += '[]';
│   │   │   │   │               apiPropertyOptions += ', isArray: true';
│   │   │   │   │             }
│   │   │   │   │             break;
│   │   │   │   │           case 'ManyToOne':
│   │   │   │   │           case 'ManyToMany':
│   │   │   │   │             // For ManyToOne and ManyToMany, the inverse side property on the target entity
│   │   │   │   │             // is the camelCase version of the *source entity's table name*.
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **if**(relationType === 'ManyToMany') *(line 238)*
│   │   │   │   │       ```typescript
│   │   │   │   │       if (relationType === 'ManyToMany') {
│   │   │   │   │               propertyName += 's';
│   │   │   │   │               propertyType += '[]';
│   │   │   │   │               apiPropertyOptions += ', isArray: true';
│   │   │   │   │             }
│   │   │   │   │             break;
│   │   │   │   │           default:
│   │   │   │   │             inverseSideProperty = 'unknownRelation'; // Fallback
│   │   │   │   │         }
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **switch**(relationType) *(line 248)*
│   │   │   │   │       ```typescript
│   │   │   │   │       switch (relationType) {
│   │   │   │   │           case 'OneToOne':
│   │   │   │   │             relationString = `@OneToOne(() => ${targetPascal}, (${targetCamel}) => ${targetCamel}.${inverseSideProperty})`;
│   │   │   │   │             if (isOwningSide) {
│   │   │   │   │               relationString += `\n${indent}@JoinColumn()`;
│   │   │   │   │             }
│   │   │   │   │             break;
│   │   │   │   │           case 'OneToMany':
│   │   │   │   │             relationString = `@OneToMany(() => ${targetPascal}, (${targetCamel}) => ${targetCamel}.${inverseSideProperty})`;
│   │   │   │   │             break;
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **if**(isOwningSide) *(line 251)*
│   │   │   │   │       ```typescript
│   │   │   │   │       if (isOwningSide) {
│   │   │   │   │               relationString += `\n${indent}@JoinColumn()`;
│   │   │   │   │             }
│   │   │   │   │             break;
│   │   │   │   │           case 'OneToMany':
│   │   │   │   │             relationString = `@OneToMany(() => ${targetPascal}, (${targetCamel}) => ${targetCamel}.${inverseSideProperty})`;
│   │   │   │   │             break;
│   │   │   │   │       
│   │   │   │   │           case 'ManyToOne':
│   │   │   │   │             relationString = `@ManyToOne(() => ${targetPascal}, (${targetCamel}) => ${targetCamel}.${inverseSideProperty})`;
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   ├── 📘 nestjs-generic-entity.template.ts
│   │   │   │   ├── 📝 nestjs-relations.md
│   │   │   │   ├── 📘 nestjs-repository.template.ts
│   │   │   │   │   *Functions found:*
│   │   │   │   │     - 🔧 **nestjsRepositoryTemplate**(entity: IEntityJson) *(line 3)*
│   │   │   │   │       ```typescript
│   │   │   │   │       export function nestjsRepositoryTemplate(entity: IEntityJson) {
│   │   │   │   │         return `import { DataSource, Repository } from 'typeorm';
│   │   │   │   │       import { Injectable } from '@nestjs/common';
│   │   │   │   │       import { ${entity.namePascalCase} } from '../entity/${entity.nameKebabCase}.entity';
│   │   │   │   │       
│   │   │   │   │       @Injectable()
│   │   │   │   │       export class ${entity.namePascalCase}Repository extends Repository<${entity.namePascalCase}> {
│   │   │   │   │         constructor(private dataSource: DataSource) {
│   │   │   │   │           super(${entity.namePascalCase}, dataSource.createEntityManager());
│   │   │   │   │         }
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **nestjsRepositoryTemplate**(entity: IEntityJson) *(line 3)*
│   │   │   │   │       ```typescript
│   │   │   │   │       nestjsRepositoryTemplate(entity: IEntityJson) {
│   │   │   │   │         return `import { DataSource, Repository } from 'typeorm';
│   │   │   │   │       import { Injectable } from '@nestjs/common';
│   │   │   │   │       import { ${entity.namePascalCase} } from '../entity/${entity.nameKebabCase}.entity';
│   │   │   │   │       
│   │   │   │   │       @Injectable()
│   │   │   │   │       export class ${entity.namePascalCase}Repository extends Repository<${entity.namePascalCase}> {
│   │   │   │   │         constructor(private dataSource: DataSource) {
│   │   │   │   │           super(${entity.namePascalCase}, dataSource.createEntityManager());
│   │   │   │   │         }
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **constructor**(private dataSource: DataSource) *(line 10)*
│   │   │   │   │       ```typescript
│   │   │   │   │       constructor(private dataSource: DataSource) {
│   │   │   │   │           super(${entity.namePascalCase}, dataSource.createEntityManager());
│   │   │   │   │         }
│   │   │   │   │         /*
│   │   │   │   │         async findByName(name: string): Promise<${entity.namePascalCase} | null> {
│   │   │   │   │           return this.findOne({ where: { name } });
│   │   │   │   │         }
│   │   │   │   │         
│   │   │   │   │         async updateStock(productId: number, quantity: number): Promise<void> {
│   │   │   │   │           await this.createQueryBuilder()
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   └── 📘 old-nestjs-entity.template.ts
│   │   │   │       *Functions found:*
│   │   │   │         - 🔧 **forEach**(imp => {
    if (imp != 'Unknown Relation') *(line 55)*
│   │   │   │           ```typescript
│   │   │   │           forEach(imp => {
│   │   │   │               if (imp != 'Unknown Relation') {
│   │   │   │                 typeormImports.add(imp)
│   │   │   │               }
│   │   │   │             });
│   │   │   │           
│   │   │   │             // Build import statements
│   │   │   │             const allImports = [
│   │   │   │               `import { ApiProperty } from '@nestjs/swagger';`,
│   │   │   │               `import {${n}${indent}${[...typeormImports].sort().join(`,${n}${indent}`)},${n}} from 'typeorm';`,
│   │   │   │           ...
│   │   │   │           ```
│   │   │   │         - 🔧 **if**(relationship.source !== entity.tableName) *(line 108)*
│   │   │   │           ```typescript
│   │   │   │           if (relationship.source !== entity.tableName) {
│   │   │   │                 entityImports.add(buildImportEntity(relationship.source));
│   │   │   │               }
│   │   │   │               if (relationship.target !== entity.tableName) {
│   │   │   │                 entityImports.add(buildImportEntity(relationship.target));
│   │   │   │               }
│   │   │   │           
│   │   │   │               // Handle JoinColumn for owning sides of relationships
│   │   │   │               if (relationship.relationType === 'ManyToOne' || (relationship.relationType === 'OneToOne' && relationship.owner)) {
│   │   │   │                 typeormImports.add('JoinColumn');
│   │   │   │           ...
│   │   │   │           ```
│   │   │   │         - 🔧 **if**(relationship.target !== entity.tableName) *(line 111)*
│   │   │   │           ```typescript
│   │   │   │           if (relationship.target !== entity.tableName) {
│   │   │   │                 entityImports.add(buildImportEntity(relationship.target));
│   │   │   │               }
│   │   │   │           
│   │   │   │               // Handle JoinColumn for owning sides of relationships
│   │   │   │               if (relationship.relationType === 'ManyToOne' || (relationship.relationType === 'OneToOne' && relationship.owner)) {
│   │   │   │                 typeormImports.add('JoinColumn');
│   │   │   │               }
│   │   │   │           
│   │   │   │               relations.push(
│   │   │   │           ...
│   │   │   │           ```
│   │   │   │         - 🔧 **if**(column.primaryKey) *(line 137)*
│   │   │   │           ```typescript
│   │   │   │           if (column.primaryKey) {
│   │   │   │               decorators.push('@PrimaryGeneratedColumn()');
│   │   │   │               return { decorators, typeormImports };
│   │   │   │             }
│   │   │   │           
│   │   │   │             let decorateurColumn = '@Column';
│   │   │   │             if (column.name.toLowerCase().includes('created_at')) {
│   │   │   │               decorateurColumn = '@CreateDateColumn';
│   │   │   │               typeormImports.add('CreateDateColumn');
│   │   │   │             } else if (column.name.toLowerCase().includes('updated_at')) {
│   │   │   │           ...
│   │   │   │           ```
│   │   │   │         - 🔧 **if**(typeMapping[typeSqlLower]) *(line 175)*
│   │   │   │           ```typescript
│   │   │   │           if (typeMapping[typeSqlLower]) {
│   │   │   │               columnOptions.push(`type: ${typeMapping[typeSqlLower]}`);
│   │   │   │             }
│   │   │   │           
│   │   │   │             if (typeSqlLower === 'varchar' && column.length) {
│   │   │   │               columnOptions.push(`length: ${column.length}`);
│   │   │   │             }
│   │   │   │           
│   │   │   │             if (column.nullable) {
│   │   │   │               columnOptions.push(`nullable: true`);
│   │   │   │           ...
│   │   │   │           ```
│   │   │   │         - 🔧 **if**(typeSqlLower === 'varchar' && column.length) *(line 179)*
│   │   │   │           ```typescript
│   │   │   │           if (typeSqlLower === 'varchar' && column.length) {
│   │   │   │               columnOptions.push(`length: ${column.length}`);
│   │   │   │             }
│   │   │   │           
│   │   │   │             if (column.nullable) {
│   │   │   │               columnOptions.push(`nullable: true`);
│   │   │   │             }
│   │   │   │             if (column.unique) {
│   │   │   │               columnOptions.push(`unique: true`);
│   │   │   │             }
│   │   │   │           ...
│   │   │   │           ```
│   │   │   │         - 🔧 **if**(column.nullable) *(line 183)*
│   │   │   │           ```typescript
│   │   │   │           if (column.nullable) {
│   │   │   │               columnOptions.push(`nullable: true`);
│   │   │   │             }
│   │   │   │             if (column.unique) {
│   │   │   │               columnOptions.push(`unique: true`);
│   │   │   │             }
│   │   │   │           
│   │   │   │             const optionsString = columnOptions.length > 0 ? `{ ${columnOptions.join(', ')} }` : '';
│   │   │   │             decorators.push(`${decorateurColumn}(${optionsString})`);
│   │   │   │           ...
│   │   │   │           ```
│   │   │   │         - 🔧 **if**(column.unique) *(line 186)*
│   │   │   │           ```typescript
│   │   │   │           if (column.unique) {
│   │   │   │               columnOptions.push(`unique: true`);
│   │   │   │             }
│   │   │   │           
│   │   │   │             const optionsString = columnOptions.length > 0 ? `{ ${columnOptions.join(', ')} }` : '';
│   │   │   │             decorators.push(`${decorateurColumn}(${optionsString})`);
│   │   │   │           
│   │   │   │             return { decorators, typeormImports };
│   │   │   │           }
│   │   │   │           ...
│   │   │   │           ```
│   │   │   │         - 🔧 **switch**(relationType) *(line 219)*
│   │   │   │           ```typescript
│   │   │   │           switch (relationType) {
│   │   │   │               case 'OneToOne':
│   │   │   │                 relationString = `@OneToOne(() => ${targetPascal}, (${targetCamel}) => ${targetCamel}.${inverseSideCamel})`;
│   │   │   │                 if (isOwningSide) {
│   │   │   │                   relationString += `\n${indent}@JoinColumn()`;
│   │   │   │                 }
│   │   │   │                 break;
│   │   │   │               case 'OneToMany':
│   │   │   │                 propertyName += 's';
│   │   │   │                 propertyType += '[]';
│   │   │   │           ...
│   │   │   │           ```
│   │   │   │         - 🔧 **if**(isOwningSide) *(line 222)*
│   │   │   │           ```typescript
│   │   │   │           if (isOwningSide) {
│   │   │   │                   relationString += `\n${indent}@JoinColumn()`;
│   │   │   │                 }
│   │   │   │                 break;
│   │   │   │               case 'OneToMany':
│   │   │   │                 propertyName += 's';
│   │   │   │                 propertyType += '[]';
│   │   │   │                 apiPropertyOptions += ', isArray: true';
│   │   │   │                 relationString = `@OneToMany(() => ${targetPascal}, (${targetCamel}) => ${targetCamel}.${inverseSideCamel})`;
│   │   │   │                 break;
│   │   │   │           ...
│   │   │   │           ```
│   │   │   ├── 📁 **feartures-services/**
│   │   │   ├── 📁 **fixtures/**
│   │   │   │   └── 📘 nestjs-fixture.template.ts
│   │   │   ├── 📁 **interface/**
│   │   │   │   ├── 📘 nestjs-entity-interface.template.ts
│   │   │   │   │   *Functions found:*
│   │   │   │   │     - 🔧 **getNestjsInterfaceTemplate**(entity: IEntityJson) *(line 4)*
│   │   │   │   │       ```typescript
│   │   │   │   │       export function getNestjsInterfaceTemplate(entity: IEntityJson) {
│   │   │   │   │         const properties =
│   │   │   │   │           entity.columns?.map((col: any) => `  ${col.name}: ${col.typeTypeScript};`).join('\n') || '';
│   │   │   │   │         return `export interface I${entity.namePascalCase} {\n${properties}\n}\n`;
│   │   │   │   │       }
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **getNestjsInterfaceTemplate**(entity: IEntityJson) *(line 4)*
│   │   │   │   │       ```typescript
│   │   │   │   │       getNestjsInterfaceTemplate(entity: IEntityJson) {
│   │   │   │   │         const properties =
│   │   │   │   │           entity.columns?.map((col: any) => `  ${col.name}: ${col.typeTypeScript};`).join('\n') || '';
│   │   │   │   │         return `export interface I${entity.namePascalCase} {\n${properties}\n}\n`;
│   │   │   │   │       }
│   │   │   │   │       ```
│   │   │   │   └── 📘 nestjs-interface.template.ts
│   │   │   │       *Functions found:*
│   │   │   │         - 🔧 **getNestjsInterfaceTemplate**(entity: IEntityJson) *(line 4)*
│   │   │   │           ```typescript
│   │   │   │           export function getNestjsInterfaceTemplate(entity: IEntityJson) {
│   │   │   │             const properties =
│   │   │   │               entity.columns?.map((col: any) => `  ${col.name}: ${col.typeTypeScript};`).join('\n') || '';
│   │   │   │             return `export interface I${entity.namePascalCase} {\n${properties}\n}\n`;
│   │   │   │           }
│   │   │   │           ```
│   │   │   │         - 🔧 **getNestjsInterfaceTemplate**(entity: IEntityJson) *(line 4)*
│   │   │   │           ```typescript
│   │   │   │           getNestjsInterfaceTemplate(entity: IEntityJson) {
│   │   │   │             const properties =
│   │   │   │               entity.columns?.map((col: any) => `  ${col.name}: ${col.typeTypeScript};`).join('\n') || '';
│   │   │   │             return `export interface I${entity.namePascalCase} {\n${properties}\n}\n`;
│   │   │   │           }
│   │   │   │           ```
│   │   │   ├── 📁 **mock/**
│   │   │   ├── 📁 **module/**
│   │   │   │   ├── 📘 nestjs-entity-module.template.ts
│   │   │   │   └── 📘 nestjs-generic-module.template.ts
│   │   │   ├── 📁 **seeds/**
│   │   │   │   ├── 📘 nestjs-entity-seed.template.ts
│   │   │   │   │   *Functions found:*
│   │   │   │   │     - 🔧 **seed**() *(line 18)*
│   │   │   │   │       ```typescript
│   │   │   │   │       async seed() {
│   │   │   │   │           // Vérifiez s'il y a déjà des données
│   │   │   │   │           const count = await this.${entity.nameCamelCase}Repository.count();
│   │   │   │   │           if (count > 0) {
│   │   │   │   │             console.log('${entity.namePascalCase}s table already has data, skipping seeding');
│   │   │   │   │             return;
│   │   │   │   │           }
│   │   │   │   │       
│   │   │   │   │           const ${entity.nameCamelCase}s: any[] = [${seeder}];
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **if**(count > 0) *(line 21)*
│   │   │   │   │       ```typescript
│   │   │   │   │       if (count > 0) {
│   │   │   │   │             console.log('${entity.namePascalCase}s table already has data, skipping seeding');
│   │   │   │   │             return;
│   │   │   │   │           }
│   │   │   │   │       
│   │   │   │   │           const ${entity.nameCamelCase}s: any[] = [${seeder}];
│   │   │   │   │       
│   │   │   │   │           await this.${entity.nameCamelCase}Repository.save(${entity.nameCamelCase}s);
│   │   │   │   │           console.log(\`Seeded ${entities} ${entity.nameCamelCase}s\`);
│   │   │   │   │         }
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **switch**(col.typeTypeScript) *(line 35)*
│   │   │   │   │       ```typescript
│   │   │   │   │       switch (col.typeTypeScript) {
│   │   │   │   │           case 'string':
│   │   │   │   │             return 'foo';
│   │   │   │   │           case 'number':
│   │   │   │   │             return '42';
│   │   │   │   │           case 'boolean':
│   │   │   │   │             return 'true';
│   │   │   │   │           default:
│   │   │   │   │             return '';
│   │   │   │   │         }
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   ├── 📘 nestjs-seed.module.template.ts
│   │   │   │   └── 📘 nestjs-seed.template.ts
│   │   │   │       *Functions found:*
│   │   │   │         - 🔧 **bootstrap**() *(line 25)*
│   │   │   │           ```typescript
│   │   │   │           async function bootstrap() {
│   │   │   │             const app = await NestFactory.createApplicationContext(AppModule);
│   │   │   │           
│   │   │   │             // Récupérer les seeders
│   │   │   │             ${constSeeder.join('\n ')}
│   │   │   │           
│   │   │   │             // Exécutez vos seeders
│   │   │   │             //await userSeeder.seed();
│   │   │   │             ${awaitSeeder.join('\n ')}
│   │   │   │             // Ajoutez d'autres seeders ici
│   │   │   │           ...
│   │   │   │           ```
│   │   │   │         - 🔧 **bootstrap**() *(line 25)*
│   │   │   │           ```typescript
│   │   │   │           bootstrap() {
│   │   │   │             const app = await NestFactory.createApplicationContext(AppModule);
│   │   │   │           
│   │   │   │             // Récupérer les seeders
│   │   │   │             ${constSeeder.join('\n ')}
│   │   │   │           
│   │   │   │             // Exécutez vos seeders
│   │   │   │             //await userSeeder.seed();
│   │   │   │             ${awaitSeeder.join('\n ')}
│   │   │   │             // Ajoutez d'autres seeders ici
│   │   │   │           ...
│   │   │   │           ```
│   │   │   ├── 📁 **service/**
│   │   │   │   ├── 📘 nestjs-crud-service.template.ts
│   │   │   │   │   *Functions found:*
│   │   │   │   │     - 🔧 **if**(!${entity.nameCamelCase}) *(line 31)*
│   │   │   │   │       ```typescript
│   │   │   │   │       if (!${entity.nameCamelCase}) {
│   │   │   │   │             throw new NotFoundException(\`${entity.namePascalCase} with ID \${id} not found\`);
│   │   │   │   │           }
│   │   │   │   │           return plainToInstance(Response${entity.namePascalCase}Dto, ${entity.nameCamelCase}, {
│   │   │   │   │             excludeExtraneousValues: true,
│   │   │   │   │           });
│   │   │   │   │         }
│   │   │   │   │       
│   │   │   │   │         async update(
│   │   │   │   │           id: number,
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **if**(!${entity.nameCamelCase}) *(line 45)*
│   │   │   │   │       ```typescript
│   │   │   │   │       if (!${entity.nameCamelCase}) {
│   │   │   │   │             throw new NotFoundException(\`${entity.namePascalCase} with ID \${id} not found\`);
│   │   │   │   │           }
│   │   │   │   │       
│   │   │   │   │           // Merge the update${entity.namePascalCase}Dto with the existing ${entity.nameCamelCase}
│   │   │   │   │           const updated${entity.namePascalCase} = this.${entity.nameCamelCase}Repository.merge(
│   │   │   │   │             ${entity.nameCamelCase},
│   │   │   │   │             update${entity.namePascalCase}Dto,
│   │   │   │   │           );
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **if**(result.affected === 0) *(line 63)*
│   │   │   │   │       ```typescript
│   │   │   │   │       if (result.affected === 0) {
│   │   │   │   │             throw new NotFoundException(\`${entity.namePascalCase} with ID \${id} not found\`);
│   │   │   │   │           }
│   │   │   │   │         }
│   │   │   │   │       }
│   │   │   │   │       `;
│   │   │   │   │       }
│   │   │   │   │       ```
│   │   │   │   ├── 📘 nestjs-generic-service.template.ts
│   │   │   │   │   *Functions found:*
│   │   │   │   │     - 🔧 **getNestjsServiceTemplate**(entity: IEntityJson) *(line 4)*
│   │   │   │   │       ```typescript
│   │   │   │   │       export function getNestjsServiceTemplate(entity: IEntityJson) {
│   │   │   │   │         return `import { Injectable } from '@nestjs/common';
│   │   │   │   │       
│   │   │   │   │       @Injectable()
│   │   │   │   │       export class NameService {}
│   │   │   │   │       `;
│   │   │   │   │       }
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **getNestjsServiceTemplate**(entity: IEntityJson) *(line 4)*
│   │   │   │   │       ```typescript
│   │   │   │   │       getNestjsServiceTemplate(entity: IEntityJson) {
│   │   │   │   │         return `import { Injectable } from '@nestjs/common';
│   │   │   │   │       
│   │   │   │   │       @Injectable()
│   │   │   │   │       export class NameService {}
│   │   │   │   │       `;
│   │   │   │   │       }
│   │   │   │   │       ```
│   │   │   │   ├── 📘 nestjs-service.template.ts
│   │   │   │   │   *Functions found:*
│   │   │   │   │     - 🔧 **if**(!${entity.nameCamelCase}) *(line 31)*
│   │   │   │   │       ```typescript
│   │   │   │   │       if (!${entity.nameCamelCase}) {
│   │   │   │   │             throw new NotFoundException(\`${entity.namePascalCase} with ID \${id} not found\`);
│   │   │   │   │           }
│   │   │   │   │           return plainToInstance(Response${entity.namePascalCase}Dto, ${entity.nameCamelCase}, {
│   │   │   │   │             excludeExtraneousValues: true,
│   │   │   │   │           });
│   │   │   │   │         }
│   │   │   │   │       
│   │   │   │   │         async update(
│   │   │   │   │           id: number,
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **if**(!${entity.nameCamelCase}) *(line 45)*
│   │   │   │   │       ```typescript
│   │   │   │   │       if (!${entity.nameCamelCase}) {
│   │   │   │   │             throw new NotFoundException(\`${entity.namePascalCase} with ID \${id} not found\`);
│   │   │   │   │           }
│   │   │   │   │       
│   │   │   │   │           const updated${entity.namePascalCase} = this.${entity.nameCamelCase}Repository.merge(
│   │   │   │   │             ${entity.nameCamelCase},
│   │   │   │   │             update${entity.namePascalCase}Dto,
│   │   │   │   │           );
│   │   │   │   │       
│   │   │   │   │           const saved${entity.namePascalCase} = await this.${entity.nameCamelCase}Repository.save(updated${entity.namePascalCase});
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **if**(result.affected === 0) *(line 62)*
│   │   │   │   │       ```typescript
│   │   │   │   │       if (result.affected === 0) {
│   │   │   │   │             throw new NotFoundException(\`${entity.namePascalCase} with ID \${id} not found\`);
│   │   │   │   │           }
│   │   │   │   │         }
│   │   │   │   │       }
│   │   │   │   │       `;
│   │   │   │   │       }
│   │   │   │   │       ```
│   │   │   │   ├── 📘 nestjs-test.service.spec.template.ts
│   │   │   │   ├── 📘 nestjs-user-service.ts
│   │   │   │   │   *Functions found:*
│   │   │   │   │     - 🔧 **if**(!<${entity.nameCamelCase}) *(line 29)*
│   │   │   │   │       ```typescript
│   │   │   │   │       if (!<${entity.nameCamelCase}) {
│   │   │   │   │             throw new NotFoundException(\`${entity.namePascalCase} with ID \${id} not found\`);
│   │   │   │   │           }
│   │   │   │   │       
│   │   │   │   │           return plainToInstance(Response${entity.namePascalCase}Dto, <${entity.nameCamelCase}, {
│   │   │   │   │             excludeExtraneousValues: true,
│   │   │   │   │           });
│   │   │   │   │         }
│   │   │   │   │       
│   │   │   │   │         async update(id: number, update${entity.namePascalCase}Dto: Update${entity.namePascalCase}Dto): Promise<${entity.namePascalCase}> {
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **if**(result.affected === 0) *(line 49)*
│   │   │   │   │       ```typescript
│   │   │   │   │       if (result.affected === 0) {
│   │   │   │   │             throw new NotFoundException(\`User with ID \${id} not found\`);
│   │   │   │   │           }
│   │   │   │   │         }
│   │   │   │   │       }
│   │   │   │   │       `;
│   │   │   │   │       }
│   │   │   │   │       /*
│   │   │   │   │       import { Injectable, NotFoundException } from '@nestjs/common';
│   │   │   │   │       import { CreateUserDto } from '../dto/create-user.dto';
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **if**(!user) *(line 83)*
│   │   │   │   │       ```typescript
│   │   │   │   │       if (!user) {
│   │   │   │   │             throw new NotFoundException(`User with ID ${id} not found`);
│   │   │   │   │           }
│   │   │   │   │           // Transformer l'entité User en ResponseUserDto
│   │   │   │   │           // Version corrigée avec la bonne option orthographiée
│   │   │   │   │           return plainToInstance(ResponseUserDto, user, {
│   │   │   │   │             excludeExtraneousValues: true,
│   │   │   │   │           });
│   │   │   │   │         }
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **if**(result.affected === 0) *(line 104)*
│   │   │   │   │       ```typescript
│   │   │   │   │       if (result.affected === 0) {
│   │   │   │   │             throw new NotFoundException(`User with ID ${id} not found`);
│   │   │   │   │           }
│   │   │   │   │         }
│   │   │   │   │       
│   │   │   │   │         async findByEmail(email: string): Promise<User | null> {
│   │   │   │   │           return await this.userRepository.findOne({ where: { email } });
│   │   │   │   │         }
│   │   │   │   │       
│   │   │   │   │         async count(): Promise<number> {
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   ├── 📘 old-nestjs-crud-service.template.ts
│   │   │   │   │   *Functions found:*
│   │   │   │   │     - 🔧 **if**(!${entity.nameCamelCase}) *(line 31)*
│   │   │   │   │       ```typescript
│   │   │   │   │       if (!${entity.nameCamelCase}) {
│   │   │   │   │             throw new NotFoundException(\`${entity.namePascalCase} with ID \${id} not found\`);
│   │   │   │   │           }
│   │   │   │   │           return plainToInstance(Response${entity.namePascalCase}Dto, ${entity.nameCamelCase}, {
│   │   │   │   │             excludeExtraneousValues: true,
│   │   │   │   │           });
│   │   │   │   │         }
│   │   │   │   │       
│   │   │   │   │         async update(
│   │   │   │   │           id: number,
│   │   │   │   │       ...
│   │   │   │   │       ```
│   │   │   │   │     - 🔧 **if**(result.affected === 0) *(line 56)*
│   │   │   │   │       ```typescript
│   │   │   │   │       if (result.affected === 0) {
│   │   │   │   │             throw new NotFoundException(\`${entity.namePascalCase} with ID \${id} not found\`);
│   │   │   │   │           }
│   │   │   │   │         }
│   │   │   │   │       }
│   │   │   │   │       `;
│   │   │   │   │       }
│   │   │   │   │       ```
│   │   │   │   └── 📘 old-nestjs-service.template.ts
│   │   │   │       *Functions found:*
│   │   │   │         - 🔧 **create**(create${entity.namePascalCase}Dto: Create${entity.namePascalCase}Dto) *(line 19)*
│   │   │   │           ```typescript
│   │   │   │           create(create${entity.namePascalCase}Dto: Create${entity.namePascalCase}Dto) {
│   │   │   │               return 'This action adds a new test';
│   │   │   │             }
│   │   │   │           
│   │   │   │             findAll() {
│   │   │   │               return \`This action returns all ${entity.namePascalCase}\`;
│   │   │   │             }
│   │   │   │           
│   │   │   │             findOne(id: number) {
│   │   │   │               return \`This action returns a #\${id} ${entity.namePascalCase}\`;
│   │   │   │           ...
│   │   │   │           ```
│   │   │   │         - 🔧 **findAll**() *(line 23)*
│   │   │   │           ```typescript
│   │   │   │           findAll() {
│   │   │   │               return \`This action returns all ${entity.namePascalCase}\`;
│   │   │   │             }
│   │   │   │           
│   │   │   │             findOne(id: number) {
│   │   │   │               return \`This action returns a #\${id} ${entity.namePascalCase}\`;
│   │   │   │             }
│   │   │   │           
│   │   │   │             update(id: number, update${entity.namePascalCase}Dto: Update${entity.namePascalCase}Dto) {
│   │   │   │               return \`This action updates a #\${id} ${entity.namePascalCase}\`;
│   │   │   │           ...
│   │   │   │           ```
│   │   │   │         - 🔧 **findOne**(id: number) *(line 27)*
│   │   │   │           ```typescript
│   │   │   │           findOne(id: number) {
│   │   │   │               return \`This action returns a #\${id} ${entity.namePascalCase}\`;
│   │   │   │             }
│   │   │   │           
│   │   │   │             update(id: number, update${entity.namePascalCase}Dto: Update${entity.namePascalCase}Dto) {
│   │   │   │               return \`This action updates a #\${id} ${entity.namePascalCase}\`;
│   │   │   │             }
│   │   │   │           
│   │   │   │             remove(id: number) {
│   │   │   │               return \`This action removes a #\${id} ${entity.namePascalCase}\`;
│   │   │   │           ...
│   │   │   │           ```
│   │   │   │         - 🔧 **update**(id: number, update${entity.namePascalCase}Dto: Update${entity.namePascalCase}Dto) *(line 31)*
│   │   │   │           ```typescript
│   │   │   │           update(id: number, update${entity.namePascalCase}Dto: Update${entity.namePascalCase}Dto) {
│   │   │   │               return \`This action updates a #\${id} ${entity.namePascalCase}\`;
│   │   │   │             }
│   │   │   │           
│   │   │   │             remove(id: number) {
│   │   │   │               return \`This action removes a #\${id} ${entity.namePascalCase}\`;
│   │   │   │             }
│   │   │   │           }
│   │   │   │           `;
│   │   │   │           }
│   │   │   │           ...
│   │   │   │           ```
│   │   │   │         - 🔧 **remove**(id: number) *(line 35)*
│   │   │   │           ```typescript
│   │   │   │           remove(id: number) {
│   │   │   │               return \`This action removes a #\${id} ${entity.namePascalCase}\`;
│   │   │   │             }
│   │   │   │           }
│   │   │   │           `;
│   │   │   │           }
│   │   │   │           ```
│   │   │   ├── 📁 **test/**
│   │   │   │   └── 📘 nestjs-test.template.ts
│   │   │   │       *Functions found:*
│   │   │   │         - 🔧 **getNestjsTestTemplate**(entity: IEntityJson) *(line 4)*
│   │   │   │           ```typescript
│   │   │   │           export function getNestjsTestTemplate(entity: IEntityJson) {
│   │   │   │             return `import { Test, TestingModule } from '@nestjs/testing';
│   │   │   │           import { ${entity.namePascalCase}Controller } from './${entity.nameKebabCase}.controller';
│   │   │   │           
│   │   │   │           describe('${entity.namePascalCase}Controller', () => {
│   │   │   │             let controller: ${entity.namePascalCase}Controller;
│   │   │   │           
│   │   │   │             beforeEach(async () => {
│   │   │   │               const module: TestingModule = await Test.createTestingModule({
│   │   │   │                 controllers: [${entity.namePascalCase}Controller],
│   │   │   │           ...
│   │   │   │           ```
│   │   │   │         - 🔧 **getNestjsTestTemplate**(entity: IEntityJson) *(line 4)*
│   │   │   │           ```typescript
│   │   │   │           getNestjsTestTemplate(entity: IEntityJson) {
│   │   │   │             return `import { Test, TestingModule } from '@nestjs/testing';
│   │   │   │           import { ${entity.namePascalCase}Controller } from './${entity.nameKebabCase}.controller';
│   │   │   │           
│   │   │   │           describe('${entity.namePascalCase}Controller', () => {
│   │   │   │             let controller: ${entity.namePascalCase}Controller;
│   │   │   │           
│   │   │   │             beforeEach(async () => {
│   │   │   │               const module: TestingModule = await Test.createTestingModule({
│   │   │   │                 controllers: [${entity.namePascalCase}Controller],
│   │   │   │           ...
│   │   │   │           ```
│   │   │   ├── 📁 **type-orm/**
│   │   │   │   └── 📘 nestjs-type-orm-config.template.ts
│   │   │   ├── 📁 **user/**
│   │   │   │   ├── 📘 nestjs-users-service.template.ts
│   │   │   │   └── 📘 nestjs-users.module.template.ts
│   │   │   └── 📁 **validation-contraints/**
│   │   │       ├── 📘 nestjs-contraint.template.ts
│   │   │       └── 📘 nestjs-validation.template.ts
│   │   └── 📝 best-practices.md
│   ├── 📁 **nuxt/**
│   │   ├── 📁 **config/**
│   │   │   └── 📘 nuxt-config-generator.ts
│   │   │       *Functions found:*
│   │   │         - 🔧 **generateNuxtConfig**(targetPath: string) *(line 3)*
│   │   │           ```typescript
│   │   │           export async function generateNuxtConfig(targetPath: string) {
│   │   │             const content = `// nuxt.config.js
│   │   │           export default {
│   │   │             // Global page headers: https://go.nuxtjs.dev/config-head
│   │   │             head: {
│   │   │               title: 'my-nuxt-app',
│   │   │               htmlAttrs: {
│   │   │                 lang: 'en'
│   │   │               },
│   │   │               meta: [
│   │   │           ...
│   │   │           ```
│   │   │         - 🔧 **generateNuxtConfig**(targetPath: string) *(line 3)*
│   │   │           ```typescript
│   │   │           generateNuxtConfig(targetPath: string) {
│   │   │             const content = `// nuxt.config.js
│   │   │           export default {
│   │   │             // Global page headers: https://go.nuxtjs.dev/config-head
│   │   │             head: {
│   │   │               title: 'my-nuxt-app',
│   │   │               htmlAttrs: {
│   │   │                 lang: 'en'
│   │   │               },
│   │   │               meta: [
│   │   │           ...
│   │   │           ```
│   │   ├── 📁 **interfaces/**
│   │   │   └── 📘 nuxt-model.ts
│   │   ├── 📁 **mock/**
│   │   │   └── 📋 sample-nuxt-config.json
│   │   ├── 📁 **services/**
│   │   │   ├── 📘 generate-component.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **generateComponent**(targetPath: string, name: string) *(line 5)*
│   │   │   │       ```typescript
│   │   │   │       export const generateComponent = async (targetPath: string, name: string) => {
│   │   │   │         const pascalName = pascalCase(name);
│   │   │   │         const content = getComponentTemplate(pascalName);
│   │   │   │         await writeFile(`${targetPath}/components/${pascalName}.vue`, content);
│   │   │   │       };
│   │   │   │       ```
│   │   │   ├── 📘 generate-controller.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **generateNuxtController**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       export function generateNuxtController(entity: IEntityJson) {
│   │   │   │         console.log(`Génération du contrôleur Nuxt pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **generateNuxtController**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       generateNuxtController(entity: IEntityJson) {
│   │   │   │         console.log(`Génération du contrôleur Nuxt pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   ├── 📘 generate-dto.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **generateNuxtDto**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       export function generateNuxtDto(entity: IEntityJson) {
│   │   │   │         console.log(`Génération du DTO Nuxt pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **generateNuxtDto**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       generateNuxtDto(entity: IEntityJson) {
│   │   │   │         console.log(`Génération du DTO Nuxt pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   ├── 📘 generate-entity.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **generateNuxtEntity**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       export function generateNuxtEntity(entity: IEntityJson) {
│   │   │   │         console.log(`Génération de l'entité Nuxt pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **generateNuxtEntity**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       generateNuxtEntity(entity: IEntityJson) {
│   │   │   │         console.log(`Génération de l'entité Nuxt pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   ├── 📘 generate-interface.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **generateNuxtInterface**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       export function generateNuxtInterface(entity: IEntityJson) {
│   │   │   │         console.log(`Génération de l'interface Nuxt pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **generateNuxtInterface**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       generateNuxtInterface(entity: IEntityJson) {
│   │   │   │         console.log(`Génération de l'interface Nuxt pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   ├── 📘 generate-layout.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **generateLayout**(targetPath: string, name: string) *(line 5)*
│   │   │   │       ```typescript
│   │   │   │       export const generateLayout = async (targetPath: string, name: string) => {
│   │   │   │         const kebabName = slugify(name);
│   │   │   │         const content = getLayoutTemplate(pascalCase(name));
│   │   │   │         await writeFile(`${targetPath}/layouts/${kebabName}.vue`, content);
│   │   │   │       };
│   │   │   │       ```
│   │   │   ├── 📘 generate-module.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **generateNuxtModule**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       export function generateNuxtModule(entity: IEntityJson) {
│   │   │   │         console.log(`Génération du module Nuxt pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **generateNuxtModule**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       generateNuxtModule(entity: IEntityJson) {
│   │   │   │         console.log(`Génération du module Nuxt pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   ├── 📘 generate-page.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **generatePage**(targetPath: string, name: string) *(line 5)*
│   │   │   │       ```typescript
│   │   │   │       export const generatePage = async (targetPath: string, name: string) => {
│   │   │   │         const kebabName = slugify(name);
│   │   │   │         const content = getPageComponentTemplate(pascalCase(name));
│   │   │   │         await writeFile(`${targetPath}/pages/${kebabName}.vue`, content);
│   │   │   │       };
│   │   │   │       ```
│   │   │   ├── 📘 generate-service.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **generateNuxtService**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       export function generateNuxtService(entity: IEntityJson) {
│   │   │   │         console.log(`Génération du service Nuxt pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **generateNuxtService**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       generateNuxtService(entity: IEntityJson) {
│   │   │   │         console.log(`Génération du service Nuxt pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   ├── 📘 generate-test.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **generateNuxtTest**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       export function generateNuxtTest(entity: IEntityJson) {
│   │   │   │         console.log(`Génération des tests Nuxt pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **generateNuxtTest**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       generateNuxtTest(entity: IEntityJson) {
│   │   │   │         console.log(`Génération des tests Nuxt pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   └── 📘 nuxt-generate-files-framework.service.ts
│   │   │       *Functions found:*
│   │   │         - 🔧 **nuxtGenerateFilesFramework**(
  framework: IFramework,
  frameworkProjectPath: string,
  entitiesJsonFile: object,
) *(line 3)*
│   │   │           ```typescript
│   │   │           export function nuxtGenerateFilesFramework(
│   │   │             framework: IFramework,
│   │   │             frameworkProjectPath: string,
│   │   │             entitiesJsonFile: object,
│   │   │           ) {
│   │   │             // Logique de génération de fichiers Nuxt ici
│   │   │             // createDependencies(framework, frameworkProjectPath)
│   │   │             console.log('Génération de fichiers Nuxt');
│   │   │           }
│   │   │           ```
│   │   │         - 🔧 **nuxtGenerateFilesFramework**(
  framework: IFramework,
  frameworkProjectPath: string,
  entitiesJsonFile: object,
) *(line 3)*
│   │   │           ```typescript
│   │   │           nuxtGenerateFilesFramework(
│   │   │             framework: IFramework,
│   │   │             frameworkProjectPath: string,
│   │   │             entitiesJsonFile: object,
│   │   │           ) {
│   │   │             // Logique de génération de fichiers Nuxt ici
│   │   │             // createDependencies(framework, frameworkProjectPath)
│   │   │             console.log('Génération de fichiers Nuxt');
│   │   │           }
│   │   │           ```
│   │   └── 📁 **templates/**
│   │       ├── 📘 get-component-template.template.ts
│   │       ├── 📘 get-layout-template.template.ts
│   │       ├── 📘 get-nuxt-controller-template.template.ts
│   │       │   *Functions found:*
│   │       │     - 🔧 **getNuxtControllerTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       export function getNuxtControllerTemplate(entity: IEntityJson) {
│   │       │         return `// Nuxt Controller for ${entity.namePascalCase}\n`;
│   │       │       }
│   │       │       ```
│   │       │     - 🔧 **getNuxtControllerTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       getNuxtControllerTemplate(entity: IEntityJson) {
│   │       │         return `// Nuxt Controller for ${entity.namePascalCase}\n`;
│   │       │       }
│   │       │       ```
│   │       ├── 📘 get-nuxt-dto-template.template.ts
│   │       │   *Functions found:*
│   │       │     - 🔧 **getNuxtDtoTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       export function getNuxtDtoTemplate(entity: IEntityJson) {
│   │       │         const properties =
│   │       │           entity.columns?.map((col: any) => `  ${col.name}?: ${col.typeTypeScript};`).join('\n') || '';
│   │       │         return `export class Create${entity.namePascalCase}Dto {\n${properties}\n}\n`;
│   │       │       }
│   │       │       ```
│   │       │     - 🔧 **getNuxtDtoTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       getNuxtDtoTemplate(entity: IEntityJson) {
│   │       │         const properties =
│   │       │           entity.columns?.map((col: any) => `  ${col.name}?: ${col.typeTypeScript};`).join('\n') || '';
│   │       │         return `export class Create${entity.namePascalCase}Dto {\n${properties}\n}\n`;
│   │       │       }
│   │       │       ```
│   │       ├── 📘 get-nuxt-entity-template.template.ts
│   │       │   *Functions found:*
│   │       │     - 🔧 **getNuxtEntityTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       export function getNuxtEntityTemplate(entity: IEntityJson) {
│   │       │         const properties =
│   │       │           entity.columns?.map((col: any) => `  ${col.name}: ${col.typeTypeScript};`).join('\n') || '';
│   │       │         return `export class ${entity.namePascalCase} {\n${properties}\n}\n`;
│   │       │       }
│   │       │       ```
│   │       │     - 🔧 **getNuxtEntityTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       getNuxtEntityTemplate(entity: IEntityJson) {
│   │       │         const properties =
│   │       │           entity.columns?.map((col: any) => `  ${col.name}: ${col.typeTypeScript};`).join('\n') || '';
│   │       │         return `export class ${entity.namePascalCase} {\n${properties}\n}\n`;
│   │       │       }
│   │       │       ```
│   │       ├── 📘 get-nuxt-interface-template.template.ts
│   │       │   *Functions found:*
│   │       │     - 🔧 **getNuxtInterfaceTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       export function getNuxtInterfaceTemplate(entity: IEntityJson) {
│   │       │         const properties =
│   │       │           entity.columns?.map((col: any) => `  ${col.name}: ${col.typeTypeScript};`).join('\n') || '';
│   │       │         return `export interface I${entity.namePascalCase} {\n${properties}\n}\n`;
│   │       │       }
│   │       │       ```
│   │       │     - 🔧 **getNuxtInterfaceTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       getNuxtInterfaceTemplate(entity: IEntityJson) {
│   │       │         const properties =
│   │       │           entity.columns?.map((col: any) => `  ${col.name}: ${col.typeTypeScript};`).join('\n') || '';
│   │       │         return `export interface I${entity.namePascalCase} {\n${properties}\n}\n`;
│   │       │       }
│   │       │       ```
│   │       ├── 📘 get-nuxt-module-template.template.ts
│   │       │   *Functions found:*
│   │       │     - 🔧 **getNuxtModuleTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       export function getNuxtModuleTemplate(entity: IEntityJson) {
│   │       │         return `// Nuxt Module for ${entity.namePascalCase}\n`;
│   │       │       }
│   │       │       ```
│   │       │     - 🔧 **getNuxtModuleTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       getNuxtModuleTemplate(entity: IEntityJson) {
│   │       │         return `// Nuxt Module for ${entity.namePascalCase}\n`;
│   │       │       }
│   │       │       ```
│   │       ├── 📘 get-nuxt-service-template.template.ts
│   │       │   *Functions found:*
│   │       │     - 🔧 **getNuxtServiceTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       export function getNuxtServiceTemplate(entity: IEntityJson) {
│   │       │         return '// Nuxt Service for ${entity.namePascalCase}\n';
│   │       │       }
│   │       │       ```
│   │       │     - 🔧 **getNuxtServiceTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       getNuxtServiceTemplate(entity: IEntityJson) {
│   │       │         return '// Nuxt Service for ${entity.namePascalCase}\n';
│   │       │       }
│   │       │       ```
│   │       ├── 📘 get-nuxt-test-template.template.ts
│   │       │   *Functions found:*
│   │       │     - 🔧 **getNuxtTestTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       export function getNuxtTestTemplate(entity: IEntityJson) {
│   │       │         return `// Nuxt Test for ${entity.namePascalCase}\n`;
│   │       │       }
│   │       │       ```
│   │       │     - 🔧 **getNuxtTestTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       getNuxtTestTemplate(entity: IEntityJson) {
│   │       │         return `// Nuxt Test for ${entity.namePascalCase}\n`;
│   │       │       }
│   │       │       ```
│   │       └── 📘 get-page-component-template.template.ts
│   ├── 📁 **react/**
│   │   ├── 📁 **services/**
│   │   │   ├── 📘 generate-component.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **generateReactComponent**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       export function generateReactComponent(entity: IEntityJson) {
│   │   │   │         console.log(`Génération du composant React pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **generateReactComponent**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       generateReactComponent(entity: IEntityJson) {
│   │   │   │         console.log(`Génération du composant React pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   ├── 📘 generate-controller.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **generateReactController**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       export function generateReactController(entity: IEntityJson) {
│   │   │   │         console.log(`Génération du contrôleur React pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **generateReactController**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       generateReactController(entity: IEntityJson) {
│   │   │   │         console.log(`Génération du contrôleur React pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   ├── 📘 generate-dto.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **generateReactDto**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       export function generateReactDto(entity: IEntityJson) {
│   │   │   │         console.log(`Génération du DTO React pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **generateReactDto**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       generateReactDto(entity: IEntityJson) {
│   │   │   │         console.log(`Génération du DTO React pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   ├── 📘 generate-entity.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **generateReactEntity**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       export function generateReactEntity(entity: IEntityJson) {
│   │   │   │         console.log(`Génération de l'entité React pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **generateReactEntity**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       generateReactEntity(entity: IEntityJson) {
│   │   │   │         console.log(`Génération de l'entité React pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   ├── 📘 generate-interface.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **generateReactInterface**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       export function generateReactInterface(entity: IEntityJson) {
│   │   │   │         console.log(`Génération de l'interface React pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **generateReactInterface**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       generateReactInterface(entity: IEntityJson) {
│   │   │   │         console.log(`Génération de l'interface React pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   ├── 📘 generate-service.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **generateReactService**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       export function generateReactService(entity: IEntityJson) {
│   │   │   │         console.log(`Génération du service React pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **generateReactService**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       generateReactService(entity: IEntityJson) {
│   │   │   │         console.log(`Génération du service React pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   ├── 📘 generate-test.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **generateReactTest**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       export function generateReactTest(entity: IEntityJson) {
│   │   │   │         console.log(`Génération des tests React pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **generateReactTest**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       generateReactTest(entity: IEntityJson) {
│   │   │   │         console.log(`Génération des tests React pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   └── 📘 react-generate-files-framework.service.ts
│   │   │       *Functions found:*
│   │   │         - 🔧 **reactGenerateFilesFramework**(
  framework: IFramework,
  frameworkProjectPath: string,
  entitiesJsonFile: object,
) *(line 3)*
│   │   │           ```typescript
│   │   │           export function reactGenerateFilesFramework(
│   │   │             framework: IFramework,
│   │   │             frameworkProjectPath: string,
│   │   │             entitiesJsonFile: object,
│   │   │           ) {
│   │   │             // Logique de génération de fichiers react ici
│   │   │             // createDependencies(framework, frameworkProjectPath)
│   │   │             console.log('Génération de fichiers react');
│   │   │           }
│   │   │           ```
│   │   │         - 🔧 **reactGenerateFilesFramework**(
  framework: IFramework,
  frameworkProjectPath: string,
  entitiesJsonFile: object,
) *(line 3)*
│   │   │           ```typescript
│   │   │           reactGenerateFilesFramework(
│   │   │             framework: IFramework,
│   │   │             frameworkProjectPath: string,
│   │   │             entitiesJsonFile: object,
│   │   │           ) {
│   │   │             // Logique de génération de fichiers react ici
│   │   │             // createDependencies(framework, frameworkProjectPath)
│   │   │             console.log('Génération de fichiers react');
│   │   │           }
│   │   │           ```
│   │   └── 📁 **templates/**
│   │       ├── 📘 get-react-component-template.template.ts
│   │       │   *Functions found:*
│   │       │     - 🔧 **getReactComponentTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       export function getReactComponentTemplate(entity: IEntityJson) {
│   │       │         return `import React from 'react';\n\ninterface ${entity.namePascalCase}Props {\n  // Définir les props ici\n}\n\nconst ${entity.namePascalCase}Component: React.FC<${entity.namePascalCase}Props> = (props) => {\n  return (\n    <div>\n      <h1>${entity.namePascalCase} Component</h1>\n    </div>\n  );\n};\n\nexport default ${entity.namePascalCase}Component;\n`;
│   │       │       }
│   │       │       ```
│   │       │     - 🔧 **getReactComponentTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       getReactComponentTemplate(entity: IEntityJson) {
│   │       │         return `import React from 'react';\n\ninterface ${entity.namePascalCase}Props {\n  // Définir les props ici\n}\n\nconst ${entity.namePascalCase}Component: React.FC<${entity.namePascalCase}Props> = (props) => {\n  return (\n    <div>\n      <h1>${entity.namePascalCase} Component</h1>\n    </div>\n  );\n};\n\nexport default ${entity.namePascalCase}Component;\n`;
│   │       │       }
│   │       │       ```
│   │       ├── 📘 get-react-controller-template.template.ts
│   │       │   *Functions found:*
│   │       │     - 🔧 **getReactControllerTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       export function getReactControllerTemplate(entity: IEntityJson) {
│   │       │         return `import React from 'react';\n\nconst ${entity.namePascalCase}Controller = () => {\n  // Logique du contrôleur React\n  return (\n    <div>\n      <h1>${entity.namePascalCase} Controller</h1>\n    </div>\n  );\n};\n\nexport default ${entity.namePascalCase}Controller;\n`;
│   │       │       }
│   │       │       ```
│   │       │     - 🔧 **getReactControllerTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       getReactControllerTemplate(entity: IEntityJson) {
│   │       │         return `import React from 'react';\n\nconst ${entity.namePascalCase}Controller = () => {\n  // Logique du contrôleur React\n  return (\n    <div>\n      <h1>${entity.namePascalCase} Controller</h1>\n    </div>\n  );\n};\n\nexport default ${entity.namePascalCase}Controller;\n`;
│   │       │       }
│   │       │       ```
│   │       ├── 📘 get-react-dto-template.template.ts
│   │       │   *Functions found:*
│   │       │     - 🔧 **getReactDtoTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       export function getReactDtoTemplate(entity: IEntityJson) {
│   │       │         const properties =
│   │       │           entity.columns?.map((col: any) => `  ${col.name}?: ${col.typeTypeScript};`).join('\n') || '';
│   │       │         return `export interface ICreate${entity.namePascalCase}Dto {\n${properties}\n}\n`;
│   │       │       }
│   │       │       ```
│   │       │     - 🔧 **getReactDtoTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       getReactDtoTemplate(entity: IEntityJson) {
│   │       │         const properties =
│   │       │           entity.columns?.map((col: any) => `  ${col.name}?: ${col.typeTypeScript};`).join('\n') || '';
│   │       │         return `export interface ICreate${entity.namePascalCase}Dto {\n${properties}\n}\n`;
│   │       │       }
│   │       │       ```
│   │       ├── 📘 get-react-entity-template.template.ts
│   │       │   *Functions found:*
│   │       │     - 🔧 **getReactEntityTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       export function getReactEntityTemplate(entity: IEntityJson) {
│   │       │         const properties =
│   │       │           entity.columns?.map((col: any) => `  ${col.name}: ${col.typeTypeScript};`).join('\n') || '';
│   │       │         return `export interface I${entity.namePascalCase} {\n${properties}\n}\n`;
│   │       │       }
│   │       │       ```
│   │       │     - 🔧 **getReactEntityTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       getReactEntityTemplate(entity: IEntityJson) {
│   │       │         const properties =
│   │       │           entity.columns?.map((col: any) => `  ${col.name}: ${col.typeTypeScript};`).join('\n') || '';
│   │       │         return `export interface I${entity.namePascalCase} {\n${properties}\n}\n`;
│   │       │       }
│   │       │       ```
│   │       ├── 📘 get-react-interface-template.template.ts
│   │       │   *Functions found:*
│   │       │     - 🔧 **getReactInterfaceTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       export function getReactInterfaceTemplate(entity: IEntityJson) {
│   │       │         const properties =
│   │       │           entity.columns?.map((col: any) => `  ${col.name}: ${col.typeTypeScript};`).join('\n') || '';
│   │       │         return `export interface I${entity.namePascalCase} {\n${properties}\n}\n`;
│   │       │       }
│   │       │       ```
│   │       │     - 🔧 **getReactInterfaceTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       getReactInterfaceTemplate(entity: IEntityJson) {
│   │       │         const properties =
│   │       │           entity.columns?.map((col: any) => `  ${col.name}: ${col.typeTypeScript};`).join('\n') || '';
│   │       │         return `export interface I${entity.namePascalCase} {\n${properties}\n}\n`;
│   │       │       }
│   │       │       ```
│   │       ├── 📘 get-react-service-template.template.ts
│   │       │   *Functions found:*
│   │       │     - 🔧 **getReactServiceTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       export function getReactServiceTemplate(entity: IEntityJson) {
│   │       │         return `const ${entity.namePascalCase}Service = () => {\n  // Logique du service React\n};\n\nexport default ${entity.namePascalCase}Service;\n`;
│   │       │       }
│   │       │       ```
│   │       │     - 🔧 **getReactServiceTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       getReactServiceTemplate(entity: IEntityJson) {
│   │       │         return `const ${entity.namePascalCase}Service = () => {\n  // Logique du service React\n};\n\nexport default ${entity.namePascalCase}Service;\n`;
│   │       │       }
│   │       │       ```
│   │       └── 📘 get-react-test-template.template.ts
│   │           *Functions found:*
│   │             - 🔧 **getReactTestTemplate**(entity: IEntityJson) *(line 4)*
│   │               ```typescript
│   │               export function getReactTestTemplate(entity: IEntityJson) {
│   │                 return `import { render, screen } from '@testing-library/react';
│   │               import ${entity.namePascalCase}Component from './${entity.namePascalCase}Component';
│   │               
│   │               describe('${entity.namePascalCase}Component', () => {
│   │                 it('renders ${entity.namePascalCase} component', () => {
│   │                   render(<${entity.namePascalCase}Component />);
│   │                   expect(screen.getByText('${entity.namePascalCase} Component')).toBeInTheDocument();
│   │                 });
│   │               });
│   │               ...
│   │               ```
│   │             - 🔧 **getReactTestTemplate**(entity: IEntityJson) *(line 4)*
│   │               ```typescript
│   │               getReactTestTemplate(entity: IEntityJson) {
│   │                 return `import { render, screen } from '@testing-library/react';
│   │               import ${entity.namePascalCase}Component from './${entity.namePascalCase}Component';
│   │               
│   │               describe('${entity.namePascalCase}Component', () => {
│   │                 it('renders ${entity.namePascalCase} component', () => {
│   │                   render(<${entity.namePascalCase}Component />);
│   │                   expect(screen.getByText('${entity.namePascalCase} Component')).toBeInTheDocument();
│   │                 });
│   │               });
│   │               ...
│   │               ```
│   ├── 📁 **symfony/**
│   │   ├── 📁 **config/**
│   │   │   ├── 📘 architecture.mock.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **ARCHITECTURE_SYMFONY_MOCK**() *(line 1)*
│   │   │   │       ```typescript
│   │   │   │       export function ARCHITECTURE_SYMFONY_MOCK() {
│   │   │   │         return [
│   │   │   │           {
│   │   │   │             _type: 'directory',
│   │   │   │             name: '.doc',
│   │   │   │             gitIgnore: true,
│   │   │   │             pathInProject: './',
│   │   │   │             children: [],
│   │   │   │           },
│   │   │   │           {
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **ARCHITECTURE_SYMFONY_MOCK**() *(line 1)*
│   │   │   │       ```typescript
│   │   │   │       ARCHITECTURE_SYMFONY_MOCK() {
│   │   │   │         return [
│   │   │   │           {
│   │   │   │             _type: 'directory',
│   │   │   │             name: '.doc',
│   │   │   │             gitIgnore: true,
│   │   │   │             pathInProject: './',
│   │   │   │             children: [],
│   │   │   │           },
│   │   │   │           {
│   │   │   │       ...
│   │   │   │       ```
│   │   │   ├── 📘 config-ini.mock.ts
│   │   │   ├── 📘 dependencies.mock.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **DEPENDENCIES_SYMFONY_MOCK**() *(line 1)*
│   │   │   │       ```typescript
│   │   │   │       export function DEPENDENCIES_SYMFONY_MOCK() {
│   │   │   │         return {
│   │   │   │           packageManager: 'composer',
│   │   │   │           prod: ['doctrine/orm', 'symfony/framework-bundle'],
│   │   │   │           dev: [
│   │   │   │             'symfony/maker-bundle',
│   │   │   │             'phpunit/phpunit',
│   │   │   │             'symfony/http-client',
│   │   │   │             'symfony/webpack-encore-bundle',
│   │   │   │             'symfony/profiler-pack',
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **DEPENDENCIES_SYMFONY_MOCK**() *(line 1)*
│   │   │   │       ```typescript
│   │   │   │       DEPENDENCIES_SYMFONY_MOCK() {
│   │   │   │         return {
│   │   │   │           packageManager: 'composer',
│   │   │   │           prod: ['doctrine/orm', 'symfony/framework-bundle'],
│   │   │   │           dev: [
│   │   │   │             'symfony/maker-bundle',
│   │   │   │             'phpunit/phpunit',
│   │   │   │             'symfony/http-client',
│   │   │   │             'symfony/webpack-encore-bundle',
│   │   │   │             'symfony/profiler-pack',
│   │   │   │       ...
│   │   │   │       ```
│   │   │   ├── 📘 environments.mock.ts
│   │   │   ├── 📘 initiale-architecture-project.mock.ts
│   │   │   ├── 📘 install-options.mock.ts
│   │   │   └── 📘 scripts.mock.ts
│   │   │       *Functions found:*
│   │   │         - 🔧 **SCRIPTS_SYMFONY_MOCK**() *(line 1)*
│   │   │           ```typescript
│   │   │           export function SCRIPTS_SYMFONY_MOCK() {
│   │   │             return ` 
│   │   │               "modules": "clinode nest:mdj:all gest-project .docs/mcd.mdj --force",
│   │   │               "fixtures": "clinode create:mdj:fixtures gest-project .docs/mcd.mdj src/fixtures --force",
│   │   │               "seed": "ts-node -r tsconfig-paths/register src/seeds/main.seed.ts",
│   │   │               "plan": "clinode create:plan gest-project"
│   │   │             }`;
│   │   │           }
│   │   │           ```
│   │   │         - 🔧 **SCRIPTS_SYMFONY_MOCK**() *(line 1)*
│   │   │           ```typescript
│   │   │           SCRIPTS_SYMFONY_MOCK() {
│   │   │             return ` 
│   │   │               "modules": "clinode nest:mdj:all gest-project .docs/mcd.mdj --force",
│   │   │               "fixtures": "clinode create:mdj:fixtures gest-project .docs/mcd.mdj src/fixtures --force",
│   │   │               "seed": "ts-node -r tsconfig-paths/register src/seeds/main.seed.ts",
│   │   │               "plan": "clinode create:plan gest-project"
│   │   │             }`;
│   │   │           }
│   │   │           ```
│   │   ├── 📁 **interfaces/**
│   │   │   └── 🐘 symfony-model.php
│   │   ├── 📁 **mock/**
│   │   │   └── 📋 sample-symfony-config.yaml
│   │   ├── 📁 **services/**
│   │   │   ├── 📘 dtos.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **createDto**(frameworkPath: string, entity: IEntityJson) *(line 9)*
│   │   │   │       ```typescript
│   │   │   │       export function createDto(frameworkPath: string, entity: IEntityJson) {
│   │   │   │         const pathDto = path.join(frameworkPath, 'src', 'Dto');
│   │   │   │         if (!fs.existsSync(pathDto)) {
│   │   │   │           fs.mkdirSync(pathDto);
│   │   │   │         }
│   │   │   │         const pathDtoEntity = path.join(frameworkPath, 'src', 'Dto', entity.namePascalCase);
│   │   │   │         if (!fs.existsSync(pathDtoEntity)) {
│   │   │   │           fs.mkdirSync(pathDtoEntity);
│   │   │   │         }
│   │   │   │         const n = '\n';
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **getProperty**(entityName: string, propName: string, type: string) *(line 46)*
│   │   │   │       ```typescript
│   │   │   │       export function getProperty(entityName: string, propName: string, type: string) {
│   │   │   │         const typeProperty = getPropertyType(type);
│   │   │   │         return `#[Groups(['${entityName}:read', '${entityName}:write'])]
│   │   │   │           private ?${typeProperty} $${snakeToCamel(propName)} = null;
│   │   │   │           `;
│   │   │   │       }
│   │   │   │       
│   │   │   │       export function createCreateDto(entity: IEntityJson, properties: string, accessors: string) {
│   │   │   │         return `<?php
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createCreateDto**(entity: IEntityJson, properties: string, accessors: string) *(line 53)*
│   │   │   │       ```typescript
│   │   │   │       export function createCreateDto(entity: IEntityJson, properties: string, accessors: string) {
│   │   │   │         return `<?php
│   │   │   │       
│   │   │   │       namespace App\\Dto\\${entity.namePascalCase};
│   │   │   │       use DateTimeImmutable;  
│   │   │   │       use Symfony\\Component\\Serializer\\Annotation\\Groups;
│   │   │   │       use Symfony\\Component\\Validator\\Constraints as Assert;
│   │   │   │       
│   │   │   │       final class ${entity.namePascalCase}CreateDto
│   │   │   │       {
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **__construct**() *(line 63)*
│   │   │   │       ```typescript
│   │   │   │       function __construct() {}
│   │   │   │       
│   │   │   │           ${properties}
│   │   │   │       
│   │   │   │           ${accessors}
│   │   │   │       
│   │   │   │       }`;
│   │   │   │       }
│   │   │   │       
│   │   │   │       export function createUpdateDto(entity: IEntityJson, properties: string, accessors: string) {
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createUpdateDto**(entity: IEntityJson, properties: string, accessors: string) *(line 72)*
│   │   │   │       ```typescript
│   │   │   │       export function createUpdateDto(entity: IEntityJson, properties: string, accessors: string) {
│   │   │   │         return `<?php
│   │   │   │       
│   │   │   │       namespace App\\Dto\\${entity.namePascalCase};
│   │   │   │       use DateTimeImmutable; 
│   │   │   │       use Symfony\\Component\\Serializer\\Annotation\\Groups;
│   │   │   │       use Symfony\\Component\\Validator\\Constraints as Assert;
│   │   │   │       
│   │   │   │       final class ${entity.namePascalCase}UpdateDto
│   │   │   │       {
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **__construct**() *(line 82)*
│   │   │   │       ```typescript
│   │   │   │       function __construct() {}
│   │   │   │                
│   │   │   │           ${properties}
│   │   │   │        
│   │   │   │           ${accessors}
│   │   │   │       }`;
│   │   │   │       }
│   │   │   │       
│   │   │   │       export function createResponseDto(entity: IEntityJson, properties: string, accessors: string) {
│   │   │   │         return `<?php
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createResponseDto**(entity: IEntityJson, properties: string, accessors: string) *(line 90)*
│   │   │   │       ```typescript
│   │   │   │       export function createResponseDto(entity: IEntityJson, properties: string, accessors: string) {
│   │   │   │         return `<?php
│   │   │   │       
│   │   │   │       namespace App\\Dto\\${entity.namePascalCase};
│   │   │   │       use DateTimeImmutable; 
│   │   │   │       use Symfony\\Component\\Serializer\\Annotation\\Groups;
│   │   │   │       use Symfony\\Component\\Validator\\Constraints as Assert;
│   │   │   │       
│   │   │   │       final class ${entity.namePascalCase}ResponseDto
│   │   │   │       {
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **__construct**() *(line 100)*
│   │   │   │       ```typescript
│   │   │   │       function __construct() {}
│   │   │   │                
│   │   │   │           ${properties}    
│   │   │   │       
│   │   │   │           ${accessors}
│   │   │   │       }`;
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **createDto**(frameworkPath: string, entity: IEntityJson) *(line 9)*
│   │   │   │       ```typescript
│   │   │   │       createDto(frameworkPath: string, entity: IEntityJson) {
│   │   │   │         const pathDto = path.join(frameworkPath, 'src', 'Dto');
│   │   │   │         if (!fs.existsSync(pathDto)) {
│   │   │   │           fs.mkdirSync(pathDto);
│   │   │   │         }
│   │   │   │         const pathDtoEntity = path.join(frameworkPath, 'src', 'Dto', entity.namePascalCase);
│   │   │   │         if (!fs.existsSync(pathDtoEntity)) {
│   │   │   │           fs.mkdirSync(pathDtoEntity);
│   │   │   │         }
│   │   │   │         const n = '\n';
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **if**(column.name !== 'id') *(line 23)*
│   │   │   │       ```typescript
│   │   │   │       if (column.name !== 'id') {
│   │   │   │             properties += getProperty(entity.nameCamelCase, column.name, column.typeSql) + n + n;
│   │   │   │             accessors += generateAccessors(column.name, column.typeSql);
│   │   │   │           }
│   │   │   │         });
│   │   │   │         buildAndsaveFile(
│   │   │   │           pathDtoEntity + `/${entity.namePascalCase}CreateDto.php`,
│   │   │   │           createCreateDto(entity, properties, accessors),
│   │   │   │         );
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **getProperty**(entityName: string, propName: string, type: string) *(line 46)*
│   │   │   │       ```typescript
│   │   │   │       getProperty(entityName: string, propName: string, type: string) {
│   │   │   │         const typeProperty = getPropertyType(type);
│   │   │   │         return `#[Groups(['${entityName}:read', '${entityName}:write'])]
│   │   │   │           private ?${typeProperty} $${snakeToCamel(propName)} = null;
│   │   │   │           `;
│   │   │   │       }
│   │   │   │       
│   │   │   │       export function createCreateDto(entity: IEntityJson, properties: string, accessors: string) {
│   │   │   │         return `<?php
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createCreateDto**(entity: IEntityJson, properties: string, accessors: string) *(line 53)*
│   │   │   │       ```typescript
│   │   │   │       createCreateDto(entity: IEntityJson, properties: string, accessors: string) {
│   │   │   │         return `<?php
│   │   │   │       
│   │   │   │       namespace App\\Dto\\${entity.namePascalCase};
│   │   │   │       use DateTimeImmutable;  
│   │   │   │       use Symfony\\Component\\Serializer\\Annotation\\Groups;
│   │   │   │       use Symfony\\Component\\Validator\\Constraints as Assert;
│   │   │   │       
│   │   │   │       final class ${entity.namePascalCase}CreateDto
│   │   │   │       {
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **__construct**() *(line 63)*
│   │   │   │       ```typescript
│   │   │   │       __construct() {}
│   │   │   │       
│   │   │   │           ${properties}
│   │   │   │       
│   │   │   │           ${accessors}
│   │   │   │       
│   │   │   │       }`;
│   │   │   │       }
│   │   │   │       
│   │   │   │       export function createUpdateDto(entity: IEntityJson, properties: string, accessors: string) {
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createUpdateDto**(entity: IEntityJson, properties: string, accessors: string) *(line 72)*
│   │   │   │       ```typescript
│   │   │   │       createUpdateDto(entity: IEntityJson, properties: string, accessors: string) {
│   │   │   │         return `<?php
│   │   │   │       
│   │   │   │       namespace App\\Dto\\${entity.namePascalCase};
│   │   │   │       use DateTimeImmutable; 
│   │   │   │       use Symfony\\Component\\Serializer\\Annotation\\Groups;
│   │   │   │       use Symfony\\Component\\Validator\\Constraints as Assert;
│   │   │   │       
│   │   │   │       final class ${entity.namePascalCase}UpdateDto
│   │   │   │       {
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **__construct**() *(line 82)*
│   │   │   │       ```typescript
│   │   │   │       __construct() {}
│   │   │   │                
│   │   │   │           ${properties}
│   │   │   │        
│   │   │   │           ${accessors}
│   │   │   │       }`;
│   │   │   │       }
│   │   │   │       
│   │   │   │       export function createResponseDto(entity: IEntityJson, properties: string, accessors: string) {
│   │   │   │         return `<?php
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createResponseDto**(entity: IEntityJson, properties: string, accessors: string) *(line 90)*
│   │   │   │       ```typescript
│   │   │   │       createResponseDto(entity: IEntityJson, properties: string, accessors: string) {
│   │   │   │         return `<?php
│   │   │   │       
│   │   │   │       namespace App\\Dto\\${entity.namePascalCase};
│   │   │   │       use DateTimeImmutable; 
│   │   │   │       use Symfony\\Component\\Serializer\\Annotation\\Groups;
│   │   │   │       use Symfony\\Component\\Validator\\Constraints as Assert;
│   │   │   │       
│   │   │   │       final class ${entity.namePascalCase}ResponseDto
│   │   │   │       {
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **__construct**() *(line 100)*
│   │   │   │       ```typescript
│   │   │   │       __construct() {}
│   │   │   │                
│   │   │   │           ${properties}    
│   │   │   │       
│   │   │   │           ${accessors}
│   │   │   │       }`;
│   │   │   │       }
│   │   │   │       ```
│   │   │   ├── 📘 entities.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **createEntity**(frameworkPath: string, entity: IEntityJson) *(line 18)*
│   │   │   │       ```typescript
│   │   │   │       export function createEntity(frameworkPath: string, entity: IEntityJson) {
│   │   │   │         const pathEntity = path.join(frameworkPath, 'src', 'Entity');
│   │   │   │         const pathRepository = path.join(frameworkPath, 'src', 'Repository');
│   │   │   │         const n = '\n';
│   │   │   │         // entities.map((entity: IEntityJson) => {
│   │   │   │       
│   │   │   │         let properties: string = '';
│   │   │   │         let accessors: string = '';
│   │   │   │         let content: string = '';
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **getProperty**(entityName: string, propName: string, type: string) *(line 55)*
│   │   │   │       ```typescript
│   │   │   │       export function getProperty(entityName: string, propName: string, type: string) {
│   │   │   │         const typeProperty = getPropertyType(type);
│   │   │   │         return `private ?${typeProperty} $${snakeToCamel(propName)} = null;`;
│   │   │   │       }
│   │   │   │       
│   │   │   │       export function createAttributeORM(propName: string, type: string, length: string | null) {
│   │   │   │         const exclude = [
│   │   │   │           'int',
│   │   │   │           'integer',
│   │   │   │           'float',
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createAttributeORM**(propName: string, type: string, length: string | null) *(line 60)*
│   │   │   │       ```typescript
│   │   │   │       export function createAttributeORM(propName: string, type: string, length: string | null) {
│   │   │   │         const exclude = [
│   │   │   │           'int',
│   │   │   │           'integer',
│   │   │   │           'float',
│   │   │   │           'boolean',
│   │   │   │           'tinyint',
│   │   │   │           'datetime',
│   │   │   │           'dateinterval',
│   │   │   │           'datetime_immutable',
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createCoreEntity**(entityName: string, properties: string, accessors: string) *(line 85)*
│   │   │   │       ```typescript
│   │   │   │       export function createCoreEntity(entityName: string, properties: string, accessors: string) {
│   │   │   │         return `<?php
│   │   │   │       
│   │   │   │       namespace App\\Entity;
│   │   │   │       
│   │   │   │       
│   │   │   │       use App\\Repository\\${entityName}Repository;
│   │   │   │       use ApiPlatform\\Metadata\\GetCollection;
│   │   │   │       use ApiPlatform\\Metadata\\Delete;
│   │   │   │       use ApiPlatform\\Metadata\\Get;
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createEntityRepository**(entity: IEntityJson) *(line 144)*
│   │   │   │       ```typescript
│   │   │   │       export function createEntityRepository(entity: IEntityJson) {
│   │   │   │         return `<?php
│   │   │   │       
│   │   │   │       namespace App\\Repository;
│   │   │   │       
│   │   │   │       use App\\Entity\\${entity.namePascalCase};
│   │   │   │       use Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository;
│   │   │   │       use Doctrine\\Persistence\\ManagerRegistry;
│   │   │   │       
│   │   │   │       /**
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **__construct**(ManagerRegistry $registry) *(line 158)*
│   │   │   │       ```typescript
│   │   │   │       function __construct(ManagerRegistry $registry)
│   │   │   │           {
│   │   │   │               parent::__construct($registry, ${entity.namePascalCase}::class);
│   │   │   │           }
│   │   │   │       
│   │   │   │           //    /**
│   │   │   │           //     * @return ${entity.namePascalCase}[] Returns an array of ${entity.namePascalCase} objects
│   │   │   │           //     */
│   │   │   │           //    public function findByExampleField($value): array
│   │   │   │           //    {
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createEntity**(frameworkPath: string, entity: IEntityJson) *(line 18)*
│   │   │   │       ```typescript
│   │   │   │       createEntity(frameworkPath: string, entity: IEntityJson) {
│   │   │   │         const pathEntity = path.join(frameworkPath, 'src', 'Entity');
│   │   │   │         const pathRepository = path.join(frameworkPath, 'src', 'Repository');
│   │   │   │         const n = '\n';
│   │   │   │         // entities.map((entity: IEntityJson) => {
│   │   │   │       
│   │   │   │         let properties: string = '';
│   │   │   │         let accessors: string = '';
│   │   │   │         let content: string = '';
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **if**(column.name !== 'id') *(line 29)*
│   │   │   │       ```typescript
│   │   │   │       if (column.name !== 'id') {
│   │   │   │             properties +=
│   │   │   │               createAttributeORM(column.name, column.typeSql, column.length) +
│   │   │   │               n +
│   │   │   │               getProperty(entity.nameCamelCase, column.name, column.typeSql) +
│   │   │   │               n +
│   │   │   │               n;
│   │   │   │       
│   │   │   │             accessors += generateAccessors(column.name, column.typeSql);
│   │   │   │           }
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **getProperty**(entityName: string, propName: string, type: string) *(line 55)*
│   │   │   │       ```typescript
│   │   │   │       getProperty(entityName: string, propName: string, type: string) {
│   │   │   │         const typeProperty = getPropertyType(type);
│   │   │   │         return `private ?${typeProperty} $${snakeToCamel(propName)} = null;`;
│   │   │   │       }
│   │   │   │       
│   │   │   │       export function createAttributeORM(propName: string, type: string, length: string | null) {
│   │   │   │         const exclude = [
│   │   │   │           'int',
│   │   │   │           'integer',
│   │   │   │           'float',
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createAttributeORM**(propName: string, type: string, length: string | null) *(line 60)*
│   │   │   │       ```typescript
│   │   │   │       createAttributeORM(propName: string, type: string, length: string | null) {
│   │   │   │         const exclude = [
│   │   │   │           'int',
│   │   │   │           'integer',
│   │   │   │           'float',
│   │   │   │           'boolean',
│   │   │   │           'tinyint',
│   │   │   │           'datetime',
│   │   │   │           'dateinterval',
│   │   │   │           'datetime_immutable',
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createCoreEntity**(entityName: string, properties: string, accessors: string) *(line 85)*
│   │   │   │       ```typescript
│   │   │   │       createCoreEntity(entityName: string, properties: string, accessors: string) {
│   │   │   │         return `<?php
│   │   │   │       
│   │   │   │       namespace App\\Entity;
│   │   │   │       
│   │   │   │       
│   │   │   │       use App\\Repository\\${entityName}Repository;
│   │   │   │       use ApiPlatform\\Metadata\\GetCollection;
│   │   │   │       use ApiPlatform\\Metadata\\Delete;
│   │   │   │       use ApiPlatform\\Metadata\\Get;
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createEntityRepository**(entity: IEntityJson) *(line 144)*
│   │   │   │       ```typescript
│   │   │   │       createEntityRepository(entity: IEntityJson) {
│   │   │   │         return `<?php
│   │   │   │       
│   │   │   │       namespace App\\Repository;
│   │   │   │       
│   │   │   │       use App\\Entity\\${entity.namePascalCase};
│   │   │   │       use Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository;
│   │   │   │       use Doctrine\\Persistence\\ManagerRegistry;
│   │   │   │       
│   │   │   │       /**
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **__construct**(ManagerRegistry $registry) *(line 158)*
│   │   │   │       ```typescript
│   │   │   │       __construct(ManagerRegistry $registry)
│   │   │   │           {
│   │   │   │               parent::__construct($registry, ${entity.namePascalCase}::class);
│   │   │   │           }
│   │   │   │       
│   │   │   │           //    /**
│   │   │   │           //     * @return ${entity.namePascalCase}[] Returns an array of ${entity.namePascalCase} objects
│   │   │   │           //     */
│   │   │   │           //    public function findByExampleField($value): array
│   │   │   │           //    {
│   │   │   │       ...
│   │   │   │       ```
│   │   │   ├── 📘 environments.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **createEnvironments**(
  databases: IDatabase[],
  framework: IFramework,
  frameworkProjectPath: string,
) *(line 8)*
│   │   │   │       ```typescript
│   │   │   │       export function createEnvironments(
│   │   │   │         databases: IDatabase[],
│   │   │   │         framework: IFramework,
│   │   │   │         frameworkProjectPath: string,
│   │   │   │       ) {
│   │   │   │         const db: IDatabase = databases[0];
│   │   │   │       
│   │   │   │         fs.writeFileSync(path.join(frameworkProjectPath, '.env.local'), envLocal(db));
│   │   │   │         console.log('.env.local créer');
│   │   │   │         fs.writeFileSync(path.join(frameworkProjectPath, '.env.test'), envTest(db));
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **envLocal**(db: IDatabase) *(line 31)*
│   │   │   │       ```typescript
│   │   │   │       export function envLocal(db: IDatabase) {
│   │   │   │         return `
│   │   │   │       ###> symfony/framework-bundle ###
│   │   │   │       APP_ENV=dev
│   │   │   │       App_DEBUG=1
│   │   │   │       APP_SECRET=APP_SECRET
│   │   │   │       ###< symfony/framework-bundle ###
│   │   │   │       
│   │   │   │       ###> doctrine/doctrine-bundle ###
│   │   │   │       # Format described at https://www.doctrine-project.org/projects/doctrine-dbal/en/latest/reference/configuration.html#connecting-using-a-url
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **envTest**(db: IDatabase) *(line 64)*
│   │   │   │       ```typescript
│   │   │   │       export function envTest(db: IDatabase) {
│   │   │   │         return `
│   │   │   │       ###> symfony/framework-bundle ###
│   │   │   │       APP_ENV=test
│   │   │   │       App_DEBUG=1
│   │   │   │       APP_SECRET=APP_SECRET
│   │   │   │       ###< symfony/framework-bundle ###
│   │   │   │       
│   │   │   │       ###> doctrine/doctrine-bundle ###
│   │   │   │       # Format described at https://www.doctrine-project.org/projects/doctrine-dbal/en/latest/reference/configuration.html#connecting-using-a-url
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createEnvironments**(
  databases: IDatabase[],
  framework: IFramework,
  frameworkProjectPath: string,
) *(line 8)*
│   │   │   │       ```typescript
│   │   │   │       createEnvironments(
│   │   │   │         databases: IDatabase[],
│   │   │   │         framework: IFramework,
│   │   │   │         frameworkProjectPath: string,
│   │   │   │       ) {
│   │   │   │         const db: IDatabase = databases[0];
│   │   │   │       
│   │   │   │         fs.writeFileSync(path.join(frameworkProjectPath, '.env.local'), envLocal(db));
│   │   │   │         console.log('.env.local créer');
│   │   │   │         fs.writeFileSync(path.join(frameworkProjectPath, '.env.test'), envTest(db));
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **envLocal**(db: IDatabase) *(line 31)*
│   │   │   │       ```typescript
│   │   │   │       envLocal(db: IDatabase) {
│   │   │   │         return `
│   │   │   │       ###> symfony/framework-bundle ###
│   │   │   │       APP_ENV=dev
│   │   │   │       App_DEBUG=1
│   │   │   │       APP_SECRET=APP_SECRET
│   │   │   │       ###< symfony/framework-bundle ###
│   │   │   │       
│   │   │   │       ###> doctrine/doctrine-bundle ###
│   │   │   │       # Format described at https://www.doctrine-project.org/projects/doctrine-dbal/en/latest/reference/configuration.html#connecting-using-a-url
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **envTest**(db: IDatabase) *(line 64)*
│   │   │   │       ```typescript
│   │   │   │       envTest(db: IDatabase) {
│   │   │   │         return `
│   │   │   │       ###> symfony/framework-bundle ###
│   │   │   │       APP_ENV=test
│   │   │   │       App_DEBUG=1
│   │   │   │       APP_SECRET=APP_SECRET
│   │   │   │       ###< symfony/framework-bundle ###
│   │   │   │       
│   │   │   │       ###> doctrine/doctrine-bundle ###
│   │   │   │       # Format described at https://www.doctrine-project.org/projects/doctrine-dbal/en/latest/reference/configuration.html#connecting-using-a-url
│   │   │   │       ...
│   │   │   │       ```
│   │   │   ├── 📘 fixtures.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **generateFixtureSymfony**(frameworkProjectPath: string, entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       export function generateFixtureSymfony(frameworkProjectPath: string, entity: IEntityJson) {
│   │   │   │         // TODO
│   │   │   │         // Créer les fixtures dev et test
│   │   │   │       }
│   │   │   │       export function loadFixturesSymfony(frameworkProjectPath: string, entity: IEntityJson) {
│   │   │   │         // TODO
│   │   │   │         // Charger les fixtures dev et test
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **loadFixturesSymfony**(frameworkProjectPath: string, entity: IEntityJson) *(line 7)*
│   │   │   │       ```typescript
│   │   │   │       export function loadFixturesSymfony(frameworkProjectPath: string, entity: IEntityJson) {
│   │   │   │         // TODO
│   │   │   │         // Charger les fixtures dev et test
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **generateFixtureSymfony**(frameworkProjectPath: string, entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       generateFixtureSymfony(frameworkProjectPath: string, entity: IEntityJson) {
│   │   │   │         // TODO
│   │   │   │         // Créer les fixtures dev et test
│   │   │   │       }
│   │   │   │       export function loadFixturesSymfony(frameworkProjectPath: string, entity: IEntityJson) {
│   │   │   │         // TODO
│   │   │   │         // Charger les fixtures dev et test
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **loadFixturesSymfony**(frameworkProjectPath: string, entity: IEntityJson) *(line 7)*
│   │   │   │       ```typescript
│   │   │   │       loadFixturesSymfony(frameworkProjectPath: string, entity: IEntityJson) {
│   │   │   │         // TODO
│   │   │   │         // Charger les fixtures dev et test
│   │   │   │       }
│   │   │   │       ```
│   │   │   ├── 📘 generate-accessors.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **generateAccessors**(propName: string, type: string) *(line 4)*
│   │   │   │       ```typescript
│   │   │   │       export function generateAccessors(propName: string, type: string) {
│   │   │   │         const propertyType = getPropertyType(type);
│   │   │   │         return `
│   │   │   │           public function get${snakeToPascal(propName)}(): ?${propertyType}
│   │   │   │           {
│   │   │   │               return $this->${snakeToCamel(propName)};
│   │   │   │           }
│   │   │   │       
│   │   │   │           public function set${snakeToPascal(propName)}(${propertyType} $${snakeToCamel(propName)}): static
│   │   │   │           {
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **generateAccessors**(propName: string, type: string) *(line 4)*
│   │   │   │       ```typescript
│   │   │   │       generateAccessors(propName: string, type: string) {
│   │   │   │         const propertyType = getPropertyType(type);
│   │   │   │         return `
│   │   │   │           public function get${snakeToPascal(propName)}(): ?${propertyType}
│   │   │   │           {
│   │   │   │               return $this->${snakeToCamel(propName)};
│   │   │   │           }
│   │   │   │       
│   │   │   │           public function set${snakeToPascal(propName)}(${propertyType} $${snakeToCamel(propName)}): static
│   │   │   │           {
│   │   │   │       ...
│   │   │   │       ```
│   │   │   ├── 📘 generate-architecture.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **architectureApp**() *(line 2)*
│   │   │   │       ```typescript
│   │   │   │       export function architectureApp() {
│   │   │   │         return [
│   │   │   │           {
│   │   │   │             _type: 'directory',
│   │   │   │             name: '.doc',
│   │   │   │             gitIgnore: true,
│   │   │   │             pathInProject: './',
│   │   │   │             children: [],
│   │   │   │           },
│   │   │   │           {
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **architectureApp**() *(line 2)*
│   │   │   │       ```typescript
│   │   │   │       architectureApp() {
│   │   │   │         return [
│   │   │   │           {
│   │   │   │             _type: 'directory',
│   │   │   │             name: '.doc',
│   │   │   │             gitIgnore: true,
│   │   │   │             pathInProject: './',
│   │   │   │             children: [],
│   │   │   │           },
│   │   │   │           {
│   │   │   │       ...
│   │   │   │       ```
│   │   │   ├── 📘 generate-databases.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **createDatabases**(framework: IFramework, frameworkProjectPath: string) *(line 4)*
│   │   │   │       ```typescript
│   │   │   │       export function createDatabases(framework: IFramework, frameworkProjectPath: string) {
│   │   │   │         // TODO
│   │   │   │         let command = `symfony console doctrine:database:create --if-not-exists --no-interaction`;
│   │   │   │         // créer les databases
│   │   │   │         executeCommand(
│   │   │   │           command,
│   │   │   │           { cwd: `${frameworkProjectPath}`, stdio: 'inherit' },
│   │   │   │           `🚀 Création de la base de données`,
│   │   │   │           `✅ Base de données créée avec succès !`,
│   │   │   │           `❌ Erreur lors création de la base de données !`,
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createMigrate**(frameworkProjectPath: string, mode?: string) *(line 27)*
│   │   │   │       ```typescript
│   │   │   │       export function createMigrate(frameworkProjectPath: string, mode?: string) {
│   │   │   │         if (mode === '') {
│   │   │   │           createMigration(frameworkProjectPath);
│   │   │   │         }
│   │   │   │         // TODO
│   │   │   │         let command = `symfony console ${mode} doctrine:migrations:migrate --no-interaction --allow-no-migration`;
│   │   │   │         // créer les databases
│   │   │   │         executeCommand(
│   │   │   │           command,
│   │   │   │           { cwd: `${frameworkProjectPath}`, stdio: 'inherit' },
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createMigration**(frameworkProjectPath: string, mode?: string) *(line 42)*
│   │   │   │       ```typescript
│   │   │   │       export function createMigration(frameworkProjectPath: string, mode?: string) {
│   │   │   │         // TODO
│   │   │   │         let command = `symfony console doctrine:migrations:diff --no-interaction`;
│   │   │   │         // créer les databases
│   │   │   │         executeCommand(
│   │   │   │           command,
│   │   │   │           { cwd: `${frameworkProjectPath}`, stdio: 'inherit' },
│   │   │   │           `🚀 Création de la Migration`,
│   │   │   │           `✅ Migration créée avec succès !`,
│   │   │   │           `❌ Erreur lors création de la Migration !`,
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createDatabases**(framework: IFramework, frameworkProjectPath: string) *(line 4)*
│   │   │   │       ```typescript
│   │   │   │       createDatabases(framework: IFramework, frameworkProjectPath: string) {
│   │   │   │         // TODO
│   │   │   │         let command = `symfony console doctrine:database:create --if-not-exists --no-interaction`;
│   │   │   │         // créer les databases
│   │   │   │         executeCommand(
│   │   │   │           command,
│   │   │   │           { cwd: `${frameworkProjectPath}`, stdio: 'inherit' },
│   │   │   │           `🚀 Création de la base de données`,
│   │   │   │           `✅ Base de données créée avec succès !`,
│   │   │   │           `❌ Erreur lors création de la base de données !`,
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createMigrate**(frameworkProjectPath: string, mode?: string) *(line 27)*
│   │   │   │       ```typescript
│   │   │   │       createMigrate(frameworkProjectPath: string, mode?: string) {
│   │   │   │         if (mode === '') {
│   │   │   │           createMigration(frameworkProjectPath);
│   │   │   │         }
│   │   │   │         // TODO
│   │   │   │         let command = `symfony console ${mode} doctrine:migrations:migrate --no-interaction --allow-no-migration`;
│   │   │   │         // créer les databases
│   │   │   │         executeCommand(
│   │   │   │           command,
│   │   │   │           { cwd: `${frameworkProjectPath}`, stdio: 'inherit' },
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **if**(mode === '') *(line 28)*
│   │   │   │       ```typescript
│   │   │   │       if (mode === '') {
│   │   │   │           createMigration(frameworkProjectPath);
│   │   │   │         }
│   │   │   │         // TODO
│   │   │   │         let command = `symfony console ${mode} doctrine:migrations:migrate --no-interaction --allow-no-migration`;
│   │   │   │         // créer les databases
│   │   │   │         executeCommand(
│   │   │   │           command,
│   │   │   │           { cwd: `${frameworkProjectPath}`, stdio: 'inherit' },
│   │   │   │           `🚀 Création de la base de données`,
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createMigration**(frameworkProjectPath: string, mode?: string) *(line 42)*
│   │   │   │       ```typescript
│   │   │   │       createMigration(frameworkProjectPath: string, mode?: string) {
│   │   │   │         // TODO
│   │   │   │         let command = `symfony console doctrine:migrations:diff --no-interaction`;
│   │   │   │         // créer les databases
│   │   │   │         executeCommand(
│   │   │   │           command,
│   │   │   │           { cwd: `${frameworkProjectPath}`, stdio: 'inherit' },
│   │   │   │           `🚀 Création de la Migration`,
│   │   │   │           `✅ Migration créée avec succès !`,
│   │   │   │           `❌ Erreur lors création de la Migration !`,
│   │   │   │       ...
│   │   │   │       ```
│   │   │   ├── 📘 generate-state-processor.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **generateStateProcessor**(frameworkPath: string, entity: IEntityJson) *(line 6)*
│   │   │   │       ```typescript
│   │   │   │       export function generateStateProcessor(frameworkPath: string, entity: IEntityJson) {
│   │   │   │         const pathStateEntity = path.join(frameworkPath, 'src', 'State', entity.namePascalCase);
│   │   │   │       
│   │   │   │         buildAndsaveFile(
│   │   │   │           pathStateEntity + `/${entity.namePascalCase}Processor.php`,
│   │   │   │           stateProcessorMock(entity),
│   │   │   │         );
│   │   │   │         // gitCommit(frameworkPath,`add state provider ${entity.namePascalCase}`);
│   │   │   │         // })
│   │   │   │       }
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **generateStateProcessor**(frameworkPath: string, entity: IEntityJson) *(line 6)*
│   │   │   │       ```typescript
│   │   │   │       generateStateProcessor(frameworkPath: string, entity: IEntityJson) {
│   │   │   │         const pathStateEntity = path.join(frameworkPath, 'src', 'State', entity.namePascalCase);
│   │   │   │       
│   │   │   │         buildAndsaveFile(
│   │   │   │           pathStateEntity + `/${entity.namePascalCase}Processor.php`,
│   │   │   │           stateProcessorMock(entity),
│   │   │   │         );
│   │   │   │         // gitCommit(frameworkPath,`add state provider ${entity.namePascalCase}`);
│   │   │   │         // })
│   │   │   │       }
│   │   │   │       ...
│   │   │   │       ```
│   │   │   ├── 📘 state-provider.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **createStatePriovider**(frameworkPath: string, entity: IEntityJson) *(line 6)*
│   │   │   │       ```typescript
│   │   │   │       export function createStatePriovider(frameworkPath: string, entity: IEntityJson) {
│   │   │   │         const pathStateEntity = path.join(frameworkPath, 'src', 'State', entity.namePascalCase);
│   │   │   │       
│   │   │   │         buildAndsaveFile(
│   │   │   │           pathStateEntity + `/${entity.namePascalCase}Provider.php`,
│   │   │   │           stateProviderMock(entity),
│   │   │   │         );
│   │   │   │         // gitCommit(frameworkPath,`add state provider ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **getProperty**(entityName: string, propName: string, type: string) *(line 62)*
│   │   │   │       ```typescript
│   │   │   │       export function getProperty(entityName: string, propName: string, type: string) {
│   │   │   │       //     const typeProperty = getPropertyType(type);
│   │   │   │       //     return `#[Groups(['${entityName}:read', '${entityName}:write'])]
│   │   │   │       //     private ?${typeProperty} $${snakeToCamel(propName)} = null;
│   │   │   │       //     `;
│   │   │   │       // }
│   │   │   │       // export function createCreateDto(entity: IEntityJson, properties: string, accessors: string) {
│   │   │   │       //     return `<?php
│   │   │   │       
│   │   │   │       // namespace App\\Dto\\${entity.namePascalCase};
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createCreateDto**(entity: IEntityJson, properties: string, accessors: string) *(line 68)*
│   │   │   │       ```typescript
│   │   │   │       export function createCreateDto(entity: IEntityJson, properties: string, accessors: string) {
│   │   │   │       //     return `<?php
│   │   │   │       
│   │   │   │       // namespace App\\Dto\\${entity.namePascalCase};
│   │   │   │       // use DateTimeImmutable;
│   │   │   │       // use Symfony\\Component\\Serializer\\Annotation\\Groups;
│   │   │   │       // use Symfony\\Component\\Validator\\Constraints as Assert;
│   │   │   │       
│   │   │   │       // final class ${entity.namePascalCase}CreateDto
│   │   │   │       // {
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **__construct**(

//         ${properties}

//     ) *(line 78)*
│   │   │   │       ```typescript
│   │   │   │       function __construct(
│   │   │   │       
│   │   │   │       //         ${properties}
│   │   │   │       
│   │   │   │       //     ) {}
│   │   │   │       
│   │   │   │       //     ${accessors}
│   │   │   │       
│   │   │   │       // }`;
│   │   │   │       // }
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createStatePriovider**(frameworkPath: string, entity: IEntityJson) *(line 6)*
│   │   │   │       ```typescript
│   │   │   │       createStatePriovider(frameworkPath: string, entity: IEntityJson) {
│   │   │   │         const pathStateEntity = path.join(frameworkPath, 'src', 'State', entity.namePascalCase);
│   │   │   │       
│   │   │   │         buildAndsaveFile(
│   │   │   │           pathStateEntity + `/${entity.namePascalCase}Provider.php`,
│   │   │   │           stateProviderMock(entity),
│   │   │   │         );
│   │   │   │         // gitCommit(frameworkPath,`add state provider ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **getProperty**(entityName: string, propName: string, type: string) *(line 62)*
│   │   │   │       ```typescript
│   │   │   │       getProperty(entityName: string, propName: string, type: string) {
│   │   │   │       //     const typeProperty = getPropertyType(type);
│   │   │   │       //     return `#[Groups(['${entityName}:read', '${entityName}:write'])]
│   │   │   │       //     private ?${typeProperty} $${snakeToCamel(propName)} = null;
│   │   │   │       //     `;
│   │   │   │       // }
│   │   │   │       // export function createCreateDto(entity: IEntityJson, properties: string, accessors: string) {
│   │   │   │       //     return `<?php
│   │   │   │       
│   │   │   │       // namespace App\\Dto\\${entity.namePascalCase};
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createCreateDto**(entity: IEntityJson, properties: string, accessors: string) *(line 68)*
│   │   │   │       ```typescript
│   │   │   │       createCreateDto(entity: IEntityJson, properties: string, accessors: string) {
│   │   │   │       //     return `<?php
│   │   │   │       
│   │   │   │       // namespace App\\Dto\\${entity.namePascalCase};
│   │   │   │       // use DateTimeImmutable;
│   │   │   │       // use Symfony\\Component\\Serializer\\Annotation\\Groups;
│   │   │   │       // use Symfony\\Component\\Validator\\Constraints as Assert;
│   │   │   │       
│   │   │   │       // final class ${entity.namePascalCase}CreateDto
│   │   │   │       // {
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **__construct**(

//         ${properties}

//     ) *(line 78)*
│   │   │   │       ```typescript
│   │   │   │       __construct(
│   │   │   │       
│   │   │   │       //         ${properties}
│   │   │   │       
│   │   │   │       //     ) {}
│   │   │   │       
│   │   │   │       //     ${accessors}
│   │   │   │       
│   │   │   │       // }`;
│   │   │   │       // }
│   │   │   │       ...
│   │   │   │       ```
│   │   │   ├── 📘 symfony-generate-files-framework.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **symfonyGenerateFilesFramework**(
  framework: IFramework,
  frameworkProjectPath: string,
  entitiesJsonFile: object,
) *(line 5)*
│   │   │   │       ```typescript
│   │   │   │       export function symfonyGenerateFilesFramework(
│   │   │   │         framework: IFramework,
│   │   │   │         frameworkProjectPath: string,
│   │   │   │         entitiesJsonFile: object,
│   │   │   │       ) {
│   │   │   │         // Logique de génération de fichiers symfony ici
│   │   │   │         /*
│   │   │   │           installComposerDependencies(
│   │   │   │               framework,
│   │   │   │               frameworkProjectPath,
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **symfonyGenerateFilesFramework**(
  framework: IFramework,
  frameworkProjectPath: string,
  entitiesJsonFile: object,
) *(line 5)*
│   │   │   │       ```typescript
│   │   │   │       symfonyGenerateFilesFramework(
│   │   │   │         framework: IFramework,
│   │   │   │         frameworkProjectPath: string,
│   │   │   │         entitiesJsonFile: object,
│   │   │   │       ) {
│   │   │   │         // Logique de génération de fichiers symfony ici
│   │   │   │         /*
│   │   │   │           installComposerDependencies(
│   │   │   │               framework,
│   │   │   │               frameworkProjectPath,
│   │   │   │       ...
│   │   │   │       ```
│   │   │   ├── 📘 test.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **createTests**(framework: IFramework, frameworkProjectPath: string) *(line 4)*
│   │   │   │       ```typescript
│   │   │   │       export function createTests(framework: IFramework, frameworkProjectPath: string) {
│   │   │   │         // TODO
│   │   │   │         // Créer les tests pour chaque route de l'api
│   │   │   │       }
│   │   │   │       
│   │   │   │       export function loadTests(framework: IFramework, frameworkProjectPath: string) {
│   │   │   │         // TODO
│   │   │   │         // Charger les tests pour chaque route de l'api
│   │   │   │       }
│   │   │   │       export function launchTests(frameworkProjectPath: string) {
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **loadTests**(framework: IFramework, frameworkProjectPath: string) *(line 9)*
│   │   │   │       ```typescript
│   │   │   │       export function loadTests(framework: IFramework, frameworkProjectPath: string) {
│   │   │   │         // TODO
│   │   │   │         // Charger les tests pour chaque route de l'api
│   │   │   │       }
│   │   │   │       export function launchTests(frameworkProjectPath: string) {
│   │   │   │         // TODO
│   │   │   │         // Charger les tests pour chaque route de l'api php bin/phpunit
│   │   │   │         let command = `php bin/phpunit --configuration phpunit.xml`;
│   │   │   │         // créer les databases
│   │   │   │         executeCommand(
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **launchTests**(frameworkProjectPath: string) *(line 13)*
│   │   │   │       ```typescript
│   │   │   │       export function launchTests(frameworkProjectPath: string) {
│   │   │   │         // TODO
│   │   │   │         // Charger les tests pour chaque route de l'api php bin/phpunit
│   │   │   │         let command = `php bin/phpunit --configuration phpunit.xml`;
│   │   │   │         // créer les databases
│   │   │   │         executeCommand(
│   │   │   │           command,
│   │   │   │           { cwd: `${frameworkProjectPath}`, stdio: 'inherit' },
│   │   │   │           `🚀 Lancement des test`,
│   │   │   │           `✅ Tests lancé avec succès !`,
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **createTests**(framework: IFramework, frameworkProjectPath: string) *(line 4)*
│   │   │   │       ```typescript
│   │   │   │       createTests(framework: IFramework, frameworkProjectPath: string) {
│   │   │   │         // TODO
│   │   │   │         // Créer les tests pour chaque route de l'api
│   │   │   │       }
│   │   │   │       
│   │   │   │       export function loadTests(framework: IFramework, frameworkProjectPath: string) {
│   │   │   │         // TODO
│   │   │   │         // Charger les tests pour chaque route de l'api
│   │   │   │       }
│   │   │   │       export function launchTests(frameworkProjectPath: string) {
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **loadTests**(framework: IFramework, frameworkProjectPath: string) *(line 9)*
│   │   │   │       ```typescript
│   │   │   │       loadTests(framework: IFramework, frameworkProjectPath: string) {
│   │   │   │         // TODO
│   │   │   │         // Charger les tests pour chaque route de l'api
│   │   │   │       }
│   │   │   │       export function launchTests(frameworkProjectPath: string) {
│   │   │   │         // TODO
│   │   │   │         // Charger les tests pour chaque route de l'api php bin/phpunit
│   │   │   │         let command = `php bin/phpunit --configuration phpunit.xml`;
│   │   │   │         // créer les databases
│   │   │   │         executeCommand(
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **launchTests**(frameworkProjectPath: string) *(line 13)*
│   │   │   │       ```typescript
│   │   │   │       launchTests(frameworkProjectPath: string) {
│   │   │   │         // TODO
│   │   │   │         // Charger les tests pour chaque route de l'api php bin/phpunit
│   │   │   │         let command = `php bin/phpunit --configuration phpunit.xml`;
│   │   │   │         // créer les databases
│   │   │   │         executeCommand(
│   │   │   │           command,
│   │   │   │           { cwd: `${frameworkProjectPath}`, stdio: 'inherit' },
│   │   │   │           `🚀 Lancement des test`,
│   │   │   │           `✅ Tests lancé avec succès !`,
│   │   │   │       ...
│   │   │   │       ```
│   │   │   └── 📘 validation.service.ts
│   │   └── 📁 **templates/**
│   │       ├── 📘 bundle-template.template.ts
│   │       ├── 📘 entity-template.template.ts
│   │       ├── 📘 symfony-controller.template.ts
│   │       ├── 📘 symfony-dto.template.ts
│   │       │   *Functions found:*
│   │       │     - 🔧 **getSymfonyDtoTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       export function getSymfonyDtoTemplate(entity: IEntityJson) {
│   │       │         const properties = entity.columns?.map((col: any) => `    public ${col.name};`).join('\n') || '';
│   │       │         return `<?php\n\nnamespace App\n\nclass Create${entity.namePascalCase}Dto\n{\n${properties}\n}\n`;
│   │       │       }
│   │       │       ```
│   │       │     - 🔧 **getSymfonyDtoTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       getSymfonyDtoTemplate(entity: IEntityJson) {
│   │       │         const properties = entity.columns?.map((col: any) => `    public ${col.name};`).join('\n') || '';
│   │       │         return `<?php\n\nnamespace App\n\nclass Create${entity.namePascalCase}Dto\n{\n${properties}\n}\n`;
│   │       │       }
│   │       │       ```
│   │       ├── 📘 symfony-entity.template.ts
│   │       │   *Functions found:*
│   │       │     - 🔧 **getSymfonyEntityTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       export function getSymfonyEntityTemplate(entity: IEntityJson) {
│   │       │         const properties =
│   │       │           entity.columns
│   │       │             ?.map(
│   │       │               (col: any) => `    /**
│   │       │            * @ORM
│   │       │            */
│   │       │           private ${col.name};`,
│   │       │             )
│   │       │             .join('\n') || '';
│   │       │       ...
│   │       │       ```
│   │       │     - 🔧 **getSymfonyEntityTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       getSymfonyEntityTemplate(entity: IEntityJson) {
│   │       │         const properties =
│   │       │           entity.columns
│   │       │             ?.map(
│   │       │               (col: any) => `    /**
│   │       │            * @ORM
│   │       │            */
│   │       │           private ${col.name};`,
│   │       │             )
│   │       │             .join('\n') || '';
│   │       │       ...
│   │       │       ```
│   │       ├── 📘 symfony-repository.template.ts
│   │       │   *Functions found:*
│   │       │     - 🔧 **getSymfonyInterfaceTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       export function getSymfonyInterfaceTemplate(entity: IEntityJson) {
│   │       │         const properties =
│   │       │           entity.columns
│   │       │             ?.map(
│   │       │               (col: any) =>
│   │       │                 `    public function get${col.name}();\n    public function set${col.name}(\${col.name});`,
│   │       │             )
│   │       │             .join('\n') || '';
│   │       │         return `<?php\n\nnamespace App\Interfaces;\n\ninterface ${entity.namePascalCase}Interface\n{\n${properties}\n}\n`;
│   │       │       }
│   │       │       ...
│   │       │       ```
│   │       │     - 🔧 **getSymfonyInterfaceTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       getSymfonyInterfaceTemplate(entity: IEntityJson) {
│   │       │         const properties =
│   │       │           entity.columns
│   │       │             ?.map(
│   │       │               (col: any) =>
│   │       │                 `    public function get${col.name}();\n    public function set${col.name}(\${col.name});`,
│   │       │             )
│   │       │             .join('\n') || '';
│   │       │         return `<?php\n\nnamespace App\Interfaces;\n\ninterface ${entity.namePascalCase}Interface\n{\n${properties}\n}\n`;
│   │       │       }
│   │       │       ...
│   │       │       ```
│   │       ├── 📘 symfony-service.template.ts
│   │       │   *Functions found:*
│   │       │     - 🔧 **getSymfonyServiceTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       export function getSymfonyServiceTemplate(entity: IEntityJson) {
│   │       │         return `<?php\n\nnamespace App\Service;\n\nclass ${entity.namePascalCase}Service\n{\n    // Logique du service Symfony\n}\n`;
│   │       │       }
│   │       │       ```
│   │       │     - 🔧 **getSymfonyServiceTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       getSymfonyServiceTemplate(entity: IEntityJson) {
│   │       │         return `<?php\n\nnamespace App\Service;\n\nclass ${entity.namePascalCase}Service\n{\n    // Logique du service Symfony\n}\n`;
│   │       │       }
│   │       │       ```
│   │       └── 📘 symfony-test.template.ts
│   │           *Functions found:*
│   │             - 🔧 **getSymfonyTestTemplate**(entity: IEntityJson) *(line 4)*
│   │               ```typescript
│   │               export function getSymfonyTestTemplate(entity: IEntityJson) {
│   │                 return `<?php\n\nnamespace App\Tests;\n\nuse Symfony\Bundle\FrameworkBundle\Test\WebTestCase;\n\nclass ${entity.namePascalCase}ControllerTest extends WebTestCase\n{\n    public function testSomething(): void\n    {\n        $client = static::createClient();\n        $crawler = $client->request('GET', '/${entity.nameKebabCase}');\n\n        $this->assertResponseIsSuccessful();\n        $this->assertSelectorTextContains('h1', 'Hello ${entity.namePascalCase}');\n    }\n}\n`;
│   │               }
│   │               ```
│   │             - 🔧 **getSymfonyTestTemplate**(entity: IEntityJson) *(line 4)*
│   │               ```typescript
│   │               getSymfonyTestTemplate(entity: IEntityJson) {
│   │                 return `<?php\n\nnamespace App\Tests;\n\nuse Symfony\Bundle\FrameworkBundle\Test\WebTestCase;\n\nclass ${entity.namePascalCase}ControllerTest extends WebTestCase\n{\n    public function testSomething(): void\n    {\n        $client = static::createClient();\n        $crawler = $client->request('GET', '/${entity.nameKebabCase}');\n\n        $this->assertResponseIsSuccessful();\n        $this->assertSelectorTextContains('h1', 'Hello ${entity.namePascalCase}');\n    }\n}\n`;
│   │               }
│   │               ```
│   ├── 📁 **tools/**
│   │   └── 🐍 rename_files.py
│   ├── 📁 **vue/**
│   │   ├── 📁 **services/**
│   │   │   ├── 📘 vue-generate-component.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **generateVueComponent**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       export function generateVueComponent(entity: IEntityJson) {
│   │   │   │         console.log(`Génération du composant Vue.js pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **generateVueComponent**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       generateVueComponent(entity: IEntityJson) {
│   │   │   │         console.log(`Génération du composant Vue.js pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   ├── 📘 vue-generate-dto.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **generateVueDto**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       export function generateVueDto(entity: IEntityJson) {
│   │   │   │         console.log(`Génération du DTO Vue.js pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **generateVueDto**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       generateVueDto(entity: IEntityJson) {
│   │   │   │         console.log(`Génération du DTO Vue.js pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   ├── 📘 vue-generate-entity.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **generateVueEntity**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       export function generateVueEntity(entity: IEntityJson) {
│   │   │   │         console.log(`Génération de l'entité Vue.js pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **generateVueEntity**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       generateVueEntity(entity: IEntityJson) {
│   │   │   │         console.log(`Génération de l'entité Vue.js pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   ├── 📘 vue-generate-files-framework.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **vueGenerateFilesFramework**(
  framework: IFramework,
  frameworkProjectPath: string,
  entitiesJsonFile: object,
) *(line 5)*
│   │   │   │       ```typescript
│   │   │   │       export function vueGenerateFilesFramework(
│   │   │   │         framework: IFramework,
│   │   │   │         frameworkProjectPath: string,
│   │   │   │         entitiesJsonFile: object,
│   │   │   │       ) {
│   │   │   │         // Logique de génération de fichiers vue ici
│   │   │   │         // createDependencies(framework, frameworkProjectPath)
│   │   │   │         console.log('Génération de fichiers vue');
│   │   │   │       }
│   │   │   │       /**
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **updateFiles**(frameworkProjectPath: string) *(line 18)*
│   │   │   │       ```typescript
│   │   │   │       export function updateFiles(frameworkProjectPath: string) {
│   │   │   │         updateTsConfig(frameworkProjectPath);
│   │   │   │         updatePackageJson(frameworkProjectPath);
│   │   │   │       }
│   │   │   │       export function createDependencies(framework: IFramework, frameworkProjectPath: string) {
│   │   │   │         installTSDependencies(framework, frameworkProjectPath);
│   │   │   │         updateFiles(frameworkProjectPath);
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **createDependencies**(framework: IFramework, frameworkProjectPath: string) *(line 22)*
│   │   │   │       ```typescript
│   │   │   │       export function createDependencies(framework: IFramework, frameworkProjectPath: string) {
│   │   │   │         installTSDependencies(framework, frameworkProjectPath);
│   │   │   │         updateFiles(frameworkProjectPath);
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **vueGenerateFilesFramework**(
  framework: IFramework,
  frameworkProjectPath: string,
  entitiesJsonFile: object,
) *(line 5)*
│   │   │   │       ```typescript
│   │   │   │       vueGenerateFilesFramework(
│   │   │   │         framework: IFramework,
│   │   │   │         frameworkProjectPath: string,
│   │   │   │         entitiesJsonFile: object,
│   │   │   │       ) {
│   │   │   │         // Logique de génération de fichiers vue ici
│   │   │   │         // createDependencies(framework, frameworkProjectPath)
│   │   │   │         console.log('Génération de fichiers vue');
│   │   │   │       }
│   │   │   │       /**
│   │   │   │       ...
│   │   │   │       ```
│   │   │   │     - 🔧 **updateFiles**(frameworkProjectPath: string) *(line 18)*
│   │   │   │       ```typescript
│   │   │   │       updateFiles(frameworkProjectPath: string) {
│   │   │   │         updateTsConfig(frameworkProjectPath);
│   │   │   │         updatePackageJson(frameworkProjectPath);
│   │   │   │       }
│   │   │   │       export function createDependencies(framework: IFramework, frameworkProjectPath: string) {
│   │   │   │         installTSDependencies(framework, frameworkProjectPath);
│   │   │   │         updateFiles(frameworkProjectPath);
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **createDependencies**(framework: IFramework, frameworkProjectPath: string) *(line 22)*
│   │   │   │       ```typescript
│   │   │   │       createDependencies(framework: IFramework, frameworkProjectPath: string) {
│   │   │   │         installTSDependencies(framework, frameworkProjectPath);
│   │   │   │         updateFiles(frameworkProjectPath);
│   │   │   │       }
│   │   │   │       ```
│   │   │   ├── 📘 vue-generate-interface.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **generateVueInterface**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       export function generateVueInterface(entity: IEntityJson) {
│   │   │   │         console.log(`Génération de l'interface Vue.js pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **generateVueInterface**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       generateVueInterface(entity: IEntityJson) {
│   │   │   │         console.log(`Génération de l'interface Vue.js pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   ├── 📘 vue-generate-service.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **generateVueService**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       export function generateVueService(entity: IEntityJson) {
│   │   │   │         console.log(`Génération du service Vue.js pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **generateVueService**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       generateVueService(entity: IEntityJson) {
│   │   │   │         console.log(`Génération du service Vue.js pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   ├── 📘 vue-generate-store.service.ts
│   │   │   │   *Functions found:*
│   │   │   │     - 🔧 **generateVueStore**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       export function generateVueStore(entity: IEntityJson) {
│   │   │   │         console.log(`Génération du store Vue.js pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   │     - 🔧 **generateVueStore**(entity: IEntityJson) *(line 3)*
│   │   │   │       ```typescript
│   │   │   │       generateVueStore(entity: IEntityJson) {
│   │   │   │         console.log(`Génération du store Vue.js pour: ${entity.namePascalCase}`);
│   │   │   │       }
│   │   │   │       ```
│   │   │   └── 📘 vue-generate-test.service.ts
│   │   │       *Functions found:*
│   │   │         - 🔧 **generateVueTest**(entity: IEntityJson) *(line 3)*
│   │   │           ```typescript
│   │   │           export function generateVueTest(entity: IEntityJson) {
│   │   │             console.log(`Génération des tests Vue.js pour: ${entity.namePascalCase}`);
│   │   │           }
│   │   │           ```
│   │   │         - 🔧 **generateVueTest**(entity: IEntityJson) *(line 3)*
│   │   │           ```typescript
│   │   │           generateVueTest(entity: IEntityJson) {
│   │   │             console.log(`Génération des tests Vue.js pour: ${entity.namePascalCase}`);
│   │   │           }
│   │   │           ```
│   │   └── 📁 **templates/**
│   │       ├── 📘 vue-component-template.template.ts
│   │       │   *Functions found:*
│   │       │     - 🔧 **getVueComponentTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       export function getVueComponentTemplate(entity: IEntityJson) {
│   │       │         return `<template>\n  <div>\n    <h1>${entity.namePascalCase} Component</h1>\n  </div>\n</template>\n\n<script lang="ts">\nimport { defineComponent } from 'vue';\n\nexport default defineComponent({\n  name: '${entity.namePascalCase}Component',\n});\n</script>\n\n<style scoped>\n/* Styles ici */\n</style>\n`;
│   │       │       }
│   │       │       ```
│   │       │     - 🔧 **getVueComponentTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       getVueComponentTemplate(entity: IEntityJson) {
│   │       │         return `<template>\n  <div>\n    <h1>${entity.namePascalCase} Component</h1>\n  </div>\n</template>\n\n<script lang="ts">\nimport { defineComponent } from 'vue';\n\nexport default defineComponent({\n  name: '${entity.namePascalCase}Component',\n});\n</script>\n\n<style scoped>\n/* Styles ici */\n</style>\n`;
│   │       │       }
│   │       │       ```
│   │       ├── 📘 vue-dto-template.template.ts
│   │       │   *Functions found:*
│   │       │     - 🔧 **getVueDtoTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       export function getVueDtoTemplate(entity: IEntityJson) {
│   │       │         const properties =
│   │       │           entity.columns?.map((col: any) => `  ${col.name}?: ${col.typeTypeScript};`).join('\n') || '';
│   │       │         return `export interface ICreate${entity.namePascalCase}Dto {\n${properties}\n}\n`;
│   │       │       }
│   │       │       ```
│   │       │     - 🔧 **getVueDtoTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       getVueDtoTemplate(entity: IEntityJson) {
│   │       │         const properties =
│   │       │           entity.columns?.map((col: any) => `  ${col.name}?: ${col.typeTypeScript};`).join('\n') || '';
│   │       │         return `export interface ICreate${entity.namePascalCase}Dto {\n${properties}\n}\n`;
│   │       │       }
│   │       │       ```
│   │       ├── 📘 vue-entity-template.template.ts
│   │       │   *Functions found:*
│   │       │     - 🔧 **getVueEntityTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       export function getVueEntityTemplate(entity: IEntityJson) {
│   │       │         const properties =
│   │       │           entity.columns?.map((col: any) => `  ${col.name}: ${col.typeTypeScript};`).join('\n') || '';
│   │       │         return `export interface I${entity.namePascalCase} {\n${properties}\n}\n`;
│   │       │       }
│   │       │       ```
│   │       │     - 🔧 **getVueEntityTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       getVueEntityTemplate(entity: IEntityJson) {
│   │       │         const properties =
│   │       │           entity.columns?.map((col: any) => `  ${col.name}: ${col.typeTypeScript};`).join('\n') || '';
│   │       │         return `export interface I${entity.namePascalCase} {\n${properties}\n}\n`;
│   │       │       }
│   │       │       ```
│   │       ├── 📘 vue-interface-template.template.ts
│   │       │   *Functions found:*
│   │       │     - 🔧 **getVueInterfaceTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       export function getVueInterfaceTemplate(entity: IEntityJson) {
│   │       │         const properties =
│   │       │           entity.columns?.map((col: any) => `  ${col.name}: ${col.typeTypeScript};`).join('\n') || '';
│   │       │         return `export interface I${entity.namePascalCase} {\n${properties}\n}\n`;
│   │       │       }
│   │       │       ```
│   │       │     - 🔧 **getVueInterfaceTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       getVueInterfaceTemplate(entity: IEntityJson) {
│   │       │         const properties =
│   │       │           entity.columns?.map((col: any) => `  ${col.name}: ${col.typeTypeScript};`).join('\n') || '';
│   │       │         return `export interface I${entity.namePascalCase} {\n${properties}\n}\n`;
│   │       │       }
│   │       │       ```
│   │       ├── 📘 vue-service-template.template.ts
│   │       │   *Functions found:*
│   │       │     - 🔧 **getVueServiceTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       export function getVueServiceTemplate(entity: IEntityJson) {
│   │       │         return `// Service Vue.js pour ${entity.namePascalCase}\n`;
│   │       │       }
│   │       │       ```
│   │       │     - 🔧 **getVueServiceTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       getVueServiceTemplate(entity: IEntityJson) {
│   │       │         return `// Service Vue.js pour ${entity.namePascalCase}\n`;
│   │       │       }
│   │       │       ```
│   │       ├── 📘 vue-store-template.template.ts
│   │       │   *Functions found:*
│   │       │     - 🔧 **getVueStoreTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       export function getVueStoreTemplate(entity: IEntityJson) {
│   │       │         return `import { defineStore } from 'pinia';\n\nexport const use${entity.namePascalCase}Store = defineStore('${entity.nameKebabCase}', {\n  state: () => ({\n    // État du store\n  }),\n  actions: {\n    // Actions du store\n  },\n  getters: {\n    // Getters du store\n  },\n});\n`;
│   │       │       }
│   │       │       ```
│   │       │     - 🔧 **getVueStoreTemplate**(entity: IEntityJson) *(line 4)*
│   │       │       ```typescript
│   │       │       getVueStoreTemplate(entity: IEntityJson) {
│   │       │         return `import { defineStore } from 'pinia';\n\nexport const use${entity.namePascalCase}Store = defineStore('${entity.nameKebabCase}', {\n  state: () => ({\n    // État du store\n  }),\n  actions: {\n    // Actions du store\n  },\n  getters: {\n    // Getters du store\n  },\n});\n`;
│   │       │       }
│   │       │       ```
│   │       └── 📘 vue-test-template.template.ts
│   │           *Functions found:*
│   │             - 🔧 **getVueTestTemplate**(entity: IEntityJson) *(line 4)*
│   │               ```typescript
│   │               export function getVueTestTemplate(entity: IEntityJson) {
│   │                 return `import { mount } from '@vue/test-utils';\nimport ${entity.namePascalCase}Component from './${entity.namePascalCase}Component.vue';\n\ndescribe('${entity.namePascalCase}Component', () => {\n  it('renders properly', () => {\n    const wrapper = mount(${entity.namePascalCase}Component);\n    expect(wrapper.text()).toContain('${entity.namePascalCase} Component');\n  });\n});\n`;
│   │               }
│   │               ```
│   │             - 🔧 **getVueTestTemplate**(entity: IEntityJson) *(line 4)*
│   │               ```typescript
│   │               getVueTestTemplate(entity: IEntityJson) {
│   │                 return `import { mount } from '@vue/test-utils';\nimport ${entity.namePascalCase}Component from './${entity.namePascalCase}Component.vue';\n\ndescribe('${entity.namePascalCase}Component', () => {\n  it('renders properly', () => {\n    const wrapper = mount(${entity.namePascalCase}Component);\n    expect(wrapper.text()).toContain('${entity.namePascalCase} Component');\n  });\n});\n`;
│   │               }
│   │               ```
│   ├── 📝 arborescence.md
│   ├── 📝 architecture.md
│   └── 📝 readme.md
├── 📁 **parsersMdj/**
│   ├── 📁 **interfaces/**
│   │   ├── 📘 entity-json.model.ts
│   │   ├── 📘 mdj.model.ts
│   │   ├── 📘 schema.model.ts
│   │   └── 📘 star-uml.model.ts
│   ├── 📁 **ressource/**
│   │   ├── 📋 shopify.json
│   │   └── 📄 shopify.mdj
│   ├── 📁 **services/**
│   │   ├── 📘 get-colums.service.ts
│   │   │   *Functions found:*
│   │   │     - 🔧 **getColumns**(entity: IERDEntity) *(line 5)*
│   │   │       ```typescript
│   │   │       export function getColumns(entity: IERDEntity) {
│   │   │         if (!Array.isArray(entity.columns)) {
│   │   │           console.log(`⏩ ${entity.name} n'a pas de colonnes. Ignoré.`);
│   │   │           return [];
│   │   │         }
│   │   │         let columns: IERDColumn[] = entity.columns;
│   │   │         let columnsJson: Array<IColumnJson> = [];
│   │   │       
│   │   │         entity.columns.map((column: IERDColumn) => {
│   │   │           // let test = mockTest(column);
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **getColumns**(entity: IERDEntity) *(line 5)*
│   │   │       ```typescript
│   │   │       getColumns(entity: IERDEntity) {
│   │   │         if (!Array.isArray(entity.columns)) {
│   │   │           console.log(`⏩ ${entity.name} n'a pas de colonnes. Ignoré.`);
│   │   │           return [];
│   │   │         }
│   │   │         let columns: IERDColumn[] = entity.columns;
│   │   │         let columnsJson: Array<IColumnJson> = [];
│   │   │       
│   │   │         entity.columns.map((column: IERDColumn) => {
│   │   │           // let test = mockTest(column);
│   │   │       ...
│   │   │       ```
│   │   ├── 📘 get-entities.service.ts
│   │   │   *Functions found:*
│   │   │     - 🔧 **generateJsonEntity**(entity: IERDEntity) *(line 143)*
│   │   │       ```typescript
│   │   │       export function generateJsonEntity(entity: IERDEntity) {
│   │   │         let entityJson: IEntityJson = {
│   │   │           tableName: entity.name.toLowerCase(), // code_base
│   │   │           id: entity._id,
│   │   │           parent: entity._parent.$ref,
│   │   │           nameKebabCase: snakeToKebab(entity.name.toLowerCase()), // code-base
│   │   │           namePascalCase: snakeToPascal(entity.name.toLowerCase()).replace('&', '_'), // CodeBase
│   │   │           nameCamelCase: snakeToCamel(entity.name.toLowerCase()), // codeBase
│   │   │           // "columns": getColumns(entity) || [],
│   │   │           // "relationships": getRelationships(entity) || [],
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **generateFileEntities**(entities: IEntityJson[]) *(line 158)*
│   │   │       ```typescript
│   │   │       export function generateFileEntities(entities: IEntityJson[]) {
│   │   │           return saveFileSync('./entities.json', JSON.stringify(entities, null, 4));
│   │   │       
│   │   │       }
│   │   │       export function generateFileDictionaryEntities(entities: Map<string, IEntityJson>) {
│   │   │           return saveFileSync('./dictionary-entities.json', JSON.stringify(Object.fromEntries(entities)));
│   │   │       
│   │   │       }
│   │   │       export function generateFileDictionaryEntitiesJson(entities: Map<string, IEntityJson>) {
│   │   │           return saveFileSync('./dictionary-entities-json.json', JSON.stringify(Object.fromEntries(entities)));
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **generateFileDictionaryEntities**(entities: Map<string, IEntityJson>) *(line 162)*
│   │   │       ```typescript
│   │   │       export function generateFileDictionaryEntities(entities: Map<string, IEntityJson>) {
│   │   │           return saveFileSync('./dictionary-entities.json', JSON.stringify(Object.fromEntries(entities)));
│   │   │       
│   │   │       }
│   │   │       export function generateFileDictionaryEntitiesJson(entities: Map<string, IEntityJson>) {
│   │   │           return saveFileSync('./dictionary-entities-json.json', JSON.stringify(Object.fromEntries(entities)));
│   │   │       
│   │   │       }
│   │   │       export function generateFileDictionaryColumns(columns: Map<string, IColumnJson>) {
│   │   │           return saveFileSync('./dictionary-columns-json.json', JSON.stringify(Object.fromEntries(columns)));
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **generateFileDictionaryEntitiesJson**(entities: Map<string, IEntityJson>) *(line 166)*
│   │   │       ```typescript
│   │   │       export function generateFileDictionaryEntitiesJson(entities: Map<string, IEntityJson>) {
│   │   │           return saveFileSync('./dictionary-entities-json.json', JSON.stringify(Object.fromEntries(entities)));
│   │   │       
│   │   │       }
│   │   │       export function generateFileDictionaryColumns(columns: Map<string, IColumnJson>) {
│   │   │           return saveFileSync('./dictionary-columns-json.json', JSON.stringify(Object.fromEntries(columns)));
│   │   │       
│   │   │       }
│   │   │       export function generateFileDictionaryRelationships(Relationships: Map<string, IRelationshipJson>) {
│   │   │           return saveFileSync('./dictionary-Relationships-json.json', JSON.stringify(Object.fromEntries(Relationships)));
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **generateFileDictionaryColumns**(columns: Map<string, IColumnJson>) *(line 170)*
│   │   │       ```typescript
│   │   │       export function generateFileDictionaryColumns(columns: Map<string, IColumnJson>) {
│   │   │           return saveFileSync('./dictionary-columns-json.json', JSON.stringify(Object.fromEntries(columns)));
│   │   │       
│   │   │       }
│   │   │       export function generateFileDictionaryRelationships(Relationships: Map<string, IRelationshipJson>) {
│   │   │           return saveFileSync('./dictionary-Relationships-json.json', JSON.stringify(Object.fromEntries(Relationships)));
│   │   │       
│   │   │       }
│   │   │       export function generateFileDictionaryEntitiesRelationships(Relationships: Map<string, Object>) {
│   │   │           return saveFileSync('./dictionary-entities-Relationships-json.json', JSON.stringify(Object.fromEntries(Relationships)));
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **generateFileDictionaryRelationships**(Relationships: Map<string, IRelationshipJson>) *(line 174)*
│   │   │       ```typescript
│   │   │       export function generateFileDictionaryRelationships(Relationships: Map<string, IRelationshipJson>) {
│   │   │           return saveFileSync('./dictionary-Relationships-json.json', JSON.stringify(Object.fromEntries(Relationships)));
│   │   │       
│   │   │       }
│   │   │       export function generateFileDictionaryEntitiesRelationships(Relationships: Map<string, Object>) {
│   │   │           return saveFileSync('./dictionary-entities-Relationships-json.json', JSON.stringify(Object.fromEntries(Relationships)));
│   │   │       }
│   │   │       */
│   │   │       ```
│   │   │     - 🔧 **generateFileDictionaryEntitiesRelationships**(Relationships: Map<string, Object>) *(line 178)*
│   │   │       ```typescript
│   │   │       export function generateFileDictionaryEntitiesRelationships(Relationships: Map<string, Object>) {
│   │   │           return saveFileSync('./dictionary-entities-Relationships-json.json', JSON.stringify(Object.fromEntries(Relationships)));
│   │   │       }
│   │   │       */
│   │   │       ```
│   │   │     - 🔧 **for**(const model of project.ownedElements) *(line 19)*
│   │   │       ```typescript
│   │   │       for (const model of project.ownedElements) {
│   │   │             if (model._type === 'ERDDataModel') {
│   │   │               erdModel = model as IERDModel;
│   │   │               break;
│   │   │             }
│   │   │           }
│   │   │       
│   │   │           if (!erdModel) {
│   │   │             console.error(`❌ Aucun ERDDataModel trouvé dans le fichier MDJ.`);
│   │   │             process.exit(1);
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **if**(model._type === 'ERDDataModel') *(line 20)*
│   │   │       ```typescript
│   │   │       if (model._type === 'ERDDataModel') {
│   │   │               erdModel = model as IERDModel;
│   │   │               break;
│   │   │             }
│   │   │           }
│   │   │       
│   │   │           if (!erdModel) {
│   │   │             console.error(`❌ Aucun ERDDataModel trouvé dans le fichier MDJ.`);
│   │   │             process.exit(1);
│   │   │           }
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **if**(!erdModel) *(line 26)*
│   │   │       ```typescript
│   │   │       if (!erdModel) {
│   │   │             console.error(`❌ Aucun ERDDataModel trouvé dans le fichier MDJ.`);
│   │   │             process.exit(1);
│   │   │           }
│   │   │       
│   │   │           const entities: IERDEntity[] = erdModel.ownedElements;
│   │   │           if (!Array.isArray(entities) || entities.length === 0) {
│   │   │             console.error(`⏩ Pas d'entités trouvées dans ${erdModel.name}`);
│   │   │             process.exit(1);
│   │   │           }
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **catch**(error) *(line 41)*
│   │   │       ```typescript
│   │   │       catch (error) {
│   │   │           console.error(`❌ Erreur lors de la récupération des entités :`, error);
│   │   │           process.exit(1);
│   │   │         }
│   │   │       }
│   │   │       
│   │   │       export function createdDictionaries(entities: Array<IERDEntity>): IGetEntityJson {
│   │   │         let dictionaryEntities: Array<IEntityJson> = [];
│   │   │         let dictionaryEntitiesPivot: Array<IEntityJson> = [];
│   │   │         let dictionaryEntitiesJson = new Map<string, IEntityJson>();
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **if**(relationship) *(line 83)*
│   │   │       ```typescript
│   │   │       if (relationship) {
│   │   │                 let entSource = dictionaryEntitiesRelationships.get(relationship.source.inEntity);
│   │   │                 let entTarget = dictionaryEntitiesRelationships.get(relationship.target.inEntity);
│   │   │                 const relSource: IRelation = {
│   │   │                   relationType: relationship.source.relationType,
│   │   │                   source: relationship.source.inEntity,
│   │   │                   target: relationship.source.inverseSide,
│   │   │                   owner: false
│   │   │       
│   │   │                 };
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **generateJsonEntity**(entity: IERDEntity) *(line 143)*
│   │   │       ```typescript
│   │   │       generateJsonEntity(entity: IERDEntity) {
│   │   │         let entityJson: IEntityJson = {
│   │   │           tableName: entity.name.toLowerCase(), // code_base
│   │   │           id: entity._id,
│   │   │           parent: entity._parent.$ref,
│   │   │           nameKebabCase: snakeToKebab(entity.name.toLowerCase()), // code-base
│   │   │           namePascalCase: snakeToPascal(entity.name.toLowerCase()).replace('&', '_'), // CodeBase
│   │   │           nameCamelCase: snakeToCamel(entity.name.toLowerCase()), // codeBase
│   │   │           // "columns": getColumns(entity) || [],
│   │   │           // "relationships": getRelationships(entity) || [],
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **generateFileEntities**(entities: IEntityJson[]) *(line 158)*
│   │   │       ```typescript
│   │   │       generateFileEntities(entities: IEntityJson[]) {
│   │   │           return saveFileSync('./entities.json', JSON.stringify(entities, null, 4));
│   │   │       
│   │   │       }
│   │   │       export function generateFileDictionaryEntities(entities: Map<string, IEntityJson>) {
│   │   │           return saveFileSync('./dictionary-entities.json', JSON.stringify(Object.fromEntries(entities)));
│   │   │       
│   │   │       }
│   │   │       export function generateFileDictionaryEntitiesJson(entities: Map<string, IEntityJson>) {
│   │   │           return saveFileSync('./dictionary-entities-json.json', JSON.stringify(Object.fromEntries(entities)));
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **generateFileDictionaryEntities**(entities: Map<string, IEntityJson>) *(line 162)*
│   │   │       ```typescript
│   │   │       generateFileDictionaryEntities(entities: Map<string, IEntityJson>) {
│   │   │           return saveFileSync('./dictionary-entities.json', JSON.stringify(Object.fromEntries(entities)));
│   │   │       
│   │   │       }
│   │   │       export function generateFileDictionaryEntitiesJson(entities: Map<string, IEntityJson>) {
│   │   │           return saveFileSync('./dictionary-entities-json.json', JSON.stringify(Object.fromEntries(entities)));
│   │   │       
│   │   │       }
│   │   │       export function generateFileDictionaryColumns(columns: Map<string, IColumnJson>) {
│   │   │           return saveFileSync('./dictionary-columns-json.json', JSON.stringify(Object.fromEntries(columns)));
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **generateFileDictionaryEntitiesJson**(entities: Map<string, IEntityJson>) *(line 166)*
│   │   │       ```typescript
│   │   │       generateFileDictionaryEntitiesJson(entities: Map<string, IEntityJson>) {
│   │   │           return saveFileSync('./dictionary-entities-json.json', JSON.stringify(Object.fromEntries(entities)));
│   │   │       
│   │   │       }
│   │   │       export function generateFileDictionaryColumns(columns: Map<string, IColumnJson>) {
│   │   │           return saveFileSync('./dictionary-columns-json.json', JSON.stringify(Object.fromEntries(columns)));
│   │   │       
│   │   │       }
│   │   │       export function generateFileDictionaryRelationships(Relationships: Map<string, IRelationshipJson>) {
│   │   │           return saveFileSync('./dictionary-Relationships-json.json', JSON.stringify(Object.fromEntries(Relationships)));
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **generateFileDictionaryColumns**(columns: Map<string, IColumnJson>) *(line 170)*
│   │   │       ```typescript
│   │   │       generateFileDictionaryColumns(columns: Map<string, IColumnJson>) {
│   │   │           return saveFileSync('./dictionary-columns-json.json', JSON.stringify(Object.fromEntries(columns)));
│   │   │       
│   │   │       }
│   │   │       export function generateFileDictionaryRelationships(Relationships: Map<string, IRelationshipJson>) {
│   │   │           return saveFileSync('./dictionary-Relationships-json.json', JSON.stringify(Object.fromEntries(Relationships)));
│   │   │       
│   │   │       }
│   │   │       export function generateFileDictionaryEntitiesRelationships(Relationships: Map<string, Object>) {
│   │   │           return saveFileSync('./dictionary-entities-Relationships-json.json', JSON.stringify(Object.fromEntries(Relationships)));
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **generateFileDictionaryRelationships**(Relationships: Map<string, IRelationshipJson>) *(line 174)*
│   │   │       ```typescript
│   │   │       generateFileDictionaryRelationships(Relationships: Map<string, IRelationshipJson>) {
│   │   │           return saveFileSync('./dictionary-Relationships-json.json', JSON.stringify(Object.fromEntries(Relationships)));
│   │   │       
│   │   │       }
│   │   │       export function generateFileDictionaryEntitiesRelationships(Relationships: Map<string, Object>) {
│   │   │           return saveFileSync('./dictionary-entities-Relationships-json.json', JSON.stringify(Object.fromEntries(Relationships)));
│   │   │       }
│   │   │       */
│   │   │       ```
│   │   │     - 🔧 **generateFileDictionaryEntitiesRelationships**(Relationships: Map<string, Object>) *(line 178)*
│   │   │       ```typescript
│   │   │       generateFileDictionaryEntitiesRelationships(Relationships: Map<string, Object>) {
│   │   │           return saveFileSync('./dictionary-entities-Relationships-json.json', JSON.stringify(Object.fromEntries(Relationships)));
│   │   │       }
│   │   │       */
│   │   │       ```
│   │   ├── 📘 get-relationships.service.ts
│   │   │   *Functions found:*
│   │   │     - 🔧 **if**(type === 'OneToMany') *(line 14)*
│   │   │       ```typescript
│   │   │       if (type === 'OneToMany') {
│   │   │       //         tab = '[]';
│   │   │       //         s = 's';
│   │   │       //         isArray = true;
│   │   │       //     }
│   │   │       //     if (type === 'ManyToOne') {
│   │   │       //         tab = '';
│   │   │       //         ps = 's';
│   │   │       //     }
│   │   │       //     return [
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **if**(type === 'ManyToOne') *(line 19)*
│   │   │       ```typescript
│   │   │       if (type === 'ManyToOne') {
│   │   │       //         tab = '';
│   │   │       //         ps = 's';
│   │   │       //     }
│   │   │       //     return [
│   │   │       //         `@${type}(() => ${snakeToPascal(toEntity)}, (${snakeToCamel(toEntity)}) => ${snakeToCamel(toEntity)}.${snakeToCamel(inEntity)}${ps})`,
│   │   │       //         `@ApiProperty({ type: () => ${snakeToPascal(toEntity)}, ${isArray ? 'isArray: true' : ''}})`,
│   │   │       //         `${snakeToCamel(toEntity)}${s}: ${snakeToPascal(toEntity)}${tab};`,
│   │   │       //     ];
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **if**(source_cardinality === undefined) *(line 44)*
│   │   │       ```typescript
│   │   │       if (source_cardinality === undefined) {
│   │   │           source_cardinality = '1..1';
│   │   │         }
│   │   │         if (target_cardinality === undefined) {
│   │   │           target_cardinality = '1..1';
│   │   │         }
│   │   │         const key = `${source_cardinality}-${target_cardinality}`;
│   │   │         return mapping[key] || 'Unknown Relation';
│   │   │       }
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **if**(target_cardinality === undefined) *(line 47)*
│   │   │       ```typescript
│   │   │       if (target_cardinality === undefined) {
│   │   │           target_cardinality = '1..1';
│   │   │         }
│   │   │         const key = `${source_cardinality}-${target_cardinality}`;
│   │   │         return mapping[key] || 'Unknown Relation';
│   │   │       }
│   │   │       
│   │   │       export function getInEntity(dictionaryEntitiesJson: Map<string, IEntityJson>, end: Iend): string {
│   │   │         if (end.reference) {
│   │   │           return dictionaryEntitiesJson.get(end.reference.$ref || '')?.tableName || '';
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **if**(end.reference) *(line 55)*
│   │   │       ```typescript
│   │   │       if (end.reference) {
│   │   │           return dictionaryEntitiesJson.get(end.reference.$ref || '')?.tableName || '';
│   │   │         }
│   │   │         return '';
│   │   │       }
│   │   │       
│   │   │       // export function getinverseSide(): string {
│   │   │       //     return 'inverseSide';
│   │   │       // }
│   │   │       ...
│   │   │       ```
│   │   ├── 📘 mdj-to-json.service.ts
│   │   │   *Functions found:*
│   │   │     - 🔧 **catch**(error: unknown) *(line 14)*
│   │   │       ```typescript
│   │   │       catch (error: unknown) {
│   │   │             console.error(`Error reading or parsing MDJ file: ${(error as Error).message}`);
│   │   │             throw error;
│   │   │           }
│   │   │         }
│   │   │       
│   │   │         transformToSchema(starUmlProject: any): Schema {
│   │   │           const schema: Schema = {
│   │   │             entities: [],
│   │   │             relationships: [],
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **for**(const erdEntity of erdEntities) *(line 28)*
│   │   │       ```typescript
│   │   │       for (const erdEntity of erdEntities) {
│   │   │             const entity: Entity = {
│   │   │               name: erdEntity.name,
│   │   │               properties: [],
│   │   │             };
│   │   │       
│   │   │             // Extract columns as properties
│   │   │             if (erdEntity.columns) {
│   │   │               for (const column of erdEntity.columns) {
│   │   │                 const property: Property = {
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **if**(erdEntity.columns) *(line 35)*
│   │   │       ```typescript
│   │   │       if (erdEntity.columns) {
│   │   │               for (const column of erdEntity.columns) {
│   │   │                 const property: Property = {
│   │   │                   name: column.name,
│   │   │                   type: this.mapErdTypeToSchemaType(column.type),
│   │   │                   isPrimaryKey: column.primaryKey || false,
│   │   │                   isForeignKey: column.foreignKey || false,
│   │   │                 };
│   │   │                 entity.properties.push(property);
│   │   │               }
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **for**(const column of erdEntity.columns) *(line 36)*
│   │   │       ```typescript
│   │   │       for (const column of erdEntity.columns) {
│   │   │                 const property: Property = {
│   │   │                   name: column.name,
│   │   │                   type: this.mapErdTypeToSchemaType(column.type),
│   │   │                   isPrimaryKey: column.primaryKey || false,
│   │   │                   isForeignKey: column.foreignKey || false,
│   │   │                 };
│   │   │                 entity.properties.push(property);
│   │   │               }
│   │   │             }
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **if**(erdEntity.ownedElements) *(line 49)*
│   │   │       ```typescript
│   │   │       if (erdEntity.ownedElements) {
│   │   │               const erdRelationships = this.findAllElements(erdEntity.ownedElements, 'ERDRelationship');
│   │   │               for (const rel of erdRelationships) {
│   │   │                 const sourceEntity = this.getElementNameById(rel.end1.reference.$ref);
│   │   │                 const targetEntity = this.getElementNameById(rel.end2.reference.$ref);
│   │   │       
│   │   │                 if (sourceEntity && targetEntity) {
│   │   │                   const relationship: IRelationship = {
│   │   │                     name: rel.name || '',
│   │   │                     sourceEntity: sourceEntity,
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **for**(const rel of erdRelationships) *(line 51)*
│   │   │       ```typescript
│   │   │       for (const rel of erdRelationships) {
│   │   │                 const sourceEntity = this.getElementNameById(rel.end1.reference.$ref);
│   │   │                 const targetEntity = this.getElementNameById(rel.end2.reference.$ref);
│   │   │       
│   │   │                 if (sourceEntity && targetEntity) {
│   │   │                   const relationship: IRelationship = {
│   │   │                     name: rel.name || '',
│   │   │                     sourceEntity: sourceEntity,
│   │   │                     targetEntity: targetEntity,
│   │   │                     sourceCardinality: rel.end1.cardinality || '',
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **if**(sourceEntity && targetEntity) *(line 55)*
│   │   │       ```typescript
│   │   │       if (sourceEntity && targetEntity) {
│   │   │                   const relationship: IRelationship = {
│   │   │                     name: rel.name || '',
│   │   │                     sourceEntity: sourceEntity,
│   │   │                     targetEntity: targetEntity,
│   │   │                     sourceCardinality: rel.end1.cardinality || '',
│   │   │                     targetCardinality: rel.end2.cardinality || '',
│   │   │                   };
│   │   │                   schema.relationships.push(relationship);
│   │   │                 }
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **collectAllElements**(element: any) *(line 72)*
│   │   │       ```typescript
│   │   │       collectAllElements(element: any) {
│   │   │           if (element && typeof element === 'object') {
│   │   │             if (element._id) {
│   │   │               this.allElements.push(element);
│   │   │             }
│   │   │             for (const key in element) {
│   │   │               if (Object.prototype.hasOwnProperty.call(element, key)) {
│   │   │                 this.collectAllElements(element[key]);
│   │   │               }
│   │   │             }
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **if**(element && typeof element === 'object') *(line 73)*
│   │   │       ```typescript
│   │   │       if (element && typeof element === 'object') {
│   │   │             if (element._id) {
│   │   │               this.allElements.push(element);
│   │   │             }
│   │   │             for (const key in element) {
│   │   │               if (Object.prototype.hasOwnProperty.call(element, key)) {
│   │   │                 this.collectAllElements(element[key]);
│   │   │               }
│   │   │             }
│   │   │           }
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **if**(element._id) *(line 74)*
│   │   │       ```typescript
│   │   │       if (element._id) {
│   │   │               this.allElements.push(element);
│   │   │             }
│   │   │             for (const key in element) {
│   │   │               if (Object.prototype.hasOwnProperty.call(element, key)) {
│   │   │                 this.collectAllElements(element[key]);
│   │   │               }
│   │   │             }
│   │   │           }
│   │   │         }
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **for**(const key in element) *(line 77)*
│   │   │       ```typescript
│   │   │       for (const key in element) {
│   │   │               if (Object.prototype.hasOwnProperty.call(element, key)) {
│   │   │                 this.collectAllElements(element[key]);
│   │   │               }
│   │   │             }
│   │   │           }
│   │   │         }
│   │   │       
│   │   │         private getElementNameById(id: string): string | undefined {
│   │   │           const element = this.allElements.find((el) => el._id === id);
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **for**(const element of elements) *(line 92)*
│   │   │       ```typescript
│   │   │       for (const element of elements) {
│   │   │             if (element._type === type) {
│   │   │               foundElements.push(element);
│   │   │             }
│   │   │             if (element.ownedElements) {
│   │   │               foundElements = foundElements.concat(this.findAllElements(element.ownedElements, type));
│   │   │             }
│   │   │           }
│   │   │           return foundElements;
│   │   │         }
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **if**(element._type === type) *(line 93)*
│   │   │       ```typescript
│   │   │       if (element._type === type) {
│   │   │               foundElements.push(element);
│   │   │             }
│   │   │             if (element.ownedElements) {
│   │   │               foundElements = foundElements.concat(this.findAllElements(element.ownedElements, type));
│   │   │             }
│   │   │           }
│   │   │           return foundElements;
│   │   │         }
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **if**(element.ownedElements) *(line 96)*
│   │   │       ```typescript
│   │   │       if (element.ownedElements) {
│   │   │               foundElements = foundElements.concat(this.findAllElements(element.ownedElements, type));
│   │   │             }
│   │   │           }
│   │   │           return foundElements;
│   │   │         }
│   │   │       
│   │   │         private mapErdTypeToSchemaType(erdType: string): string {
│   │   │           return sqlToTypeScript(erdType);
│   │   │         }
│   │   │       ...
│   │   │       ```
│   │   ├── 📘 nestjs-code-generation.service.ts
│   │   │   *Functions found:*
│   │   │     - 🔧 **if**(!entities) *(line 16)*
│   │   │       ```typescript
│   │   │       if (!entities) {
│   │   │           console.error('No entities provided.');
│   │   │           return;
│   │   │         }
│   │   │       
│   │   │         console.log(`🚀 Starting NestJS module generation...`);
│   │   │       
│   │   │         for (const entity of entities) {
│   │   │           if (entity.typeEntity === 'pivot') {
│   │   │               console.log(`⏩ Skipping pivot entity: ${entity.namePascalCase}`);
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **for**(const entity of entities) *(line 23)*
│   │   │       ```typescript
│   │   │       for (const entity of entities) {
│   │   │           if (entity.typeEntity === 'pivot') {
│   │   │               console.log(`⏩ Skipping pivot entity: ${entity.namePascalCase}`);
│   │   │               continue;
│   │   │           }
│   │   │           
│   │   │           const modulePath = join(OUTPUT_BASE_PATH, entity.nameKebabCase);
│   │   │       
│   │   │           // Create directories
│   │   │           const dtoPath = join(modulePath, 'dto');
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **if**(entity.typeEntity === 'pivot') *(line 24)*
│   │   │       ```typescript
│   │   │       if (entity.typeEntity === 'pivot') {
│   │   │               console.log(`⏩ Skipping pivot entity: ${entity.namePascalCase}`);
│   │   │               continue;
│   │   │           }
│   │   │           
│   │   │           const modulePath = join(OUTPUT_BASE_PATH, entity.nameKebabCase);
│   │   │       
│   │   │           // Create directories
│   │   │           const dtoPath = join(modulePath, 'dto');
│   │   │           const entitiesPath = join(modulePath, 'entities');
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **catch**(error) *(line 56)*
│   │   │       ```typescript
│   │   │       catch (error) {
│   │   │             console.error(`❌ Error generating files for entity ${entity.namePascalCase}:`, error);
│   │   │           }
│   │   │         }
│   │   │       
│   │   │         console.log('🎉 NestJS module generation complete!');
│   │   │       }
│   │   │       
│   │   │       /**
│   │   │        * Loads entities from a JSON file and starts the generation process.
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **if**(!entities) *(line 75)*
│   │   │       ```typescript
│   │   │       if (!entities) {
│   │   │                 console.error(`❌ No 'entities' array found in ${jsonFilePath}`);
│   │   │                 return;
│   │   │             }
│   │   │         
│   │   │             generateNestJsModules(entities);
│   │   │           } catch (error) {
│   │   │             console.error(`❌ Failed to load or parse ${jsonFilePath}:`, error);
│   │   │             process.exit(1);
│   │   │           }
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **catch**(error) *(line 81)*
│   │   │       ```typescript
│   │   │       catch (error) {
│   │   │             console.error(`❌ Failed to load or parse ${jsonFilePath}:`, error);
│   │   │             process.exit(1);
│   │   │           }
│   │   │         }
│   │   │       
│   │   │       // To run this script directly for testing, you can uncomment the following lines
│   │   │       // and execute with `ts-node`:
│   │   │       /*
│   │   │       import { join } from 'path';
│   │   │       ...
│   │   │       ```
│   │   ├── 📘 nestjs-generate-dto.service.ts
│   │   │   *Functions found:*
│   │   │     - 🔧 **if**(column.nullable) *(line 19)*
│   │   │       ```typescript
│   │   │       if (column.nullable) {
│   │   │               decorators.push('@IsOptional()');
│   │   │             }
│   │   │             return `  ${decorators.join('\n  ')}\n  ${column.name}: ${column.typeTypeScript};\n`;
│   │   │           })
│   │   │           .join('\n');
│   │   │       
│   │   │         return `
│   │   │       import { ApiProperty } from '@nestjs/swagger';
│   │   │       import { IsString, IsInt, IsDate, IsBoolean, IsOptional, IsNumber } from 'class-validator';
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **PartialType**(Create${namePascalCase}Dto) *(line 47)*
│   │   │       ```typescript
│   │   │       PartialType(Create${namePascalCase}Dto) {}
│   │   │       `;
│   │   │       }
│   │   │       
│   │   │       /**
│   │   │        * Generates the content for both Create and Update DTO files.
│   │   │        * @param entity - The entity definition.
│   │   │        * @returns An object containing the content for both DTO files.
│   │   │        */
│   │   │       export function generateDtoFileContent(entity: IEntityJson): { createDto: string; updateDto: string } {
│   │   │       ...
│   │   │       ```
│   │   ├── 📘 nestjs-generate-entity.service.ts
│   │   │   *Functions found:*
│   │   │     - 🔧 **if**(entity.relationships) *(line 13)*
│   │   │       ```typescript
│   │   │       if (entity.relationships) {
│   │   │               for (const rel of entity.relationships) {
│   │   │                   const targetEntity = allEntities.find(e => e.tableName === rel.target);
│   │   │                   if (targetEntity && targetEntity.namePascalCase !== entity.namePascalCase) {
│   │   │                       imports.add(`import { ${targetEntity.namePascalCase} } from './${targetEntity.nameKebabCase}.entity';`);
│   │   │                   }
│   │   │               }
│   │   │           }
│   │   │           
│   │   │           return Array.from(imports).join('\n');
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **for**(const rel of entity.relationships) *(line 14)*
│   │   │       ```typescript
│   │   │       for (const rel of entity.relationships) {
│   │   │                   const targetEntity = allEntities.find(e => e.tableName === rel.target);
│   │   │                   if (targetEntity && targetEntity.namePascalCase !== entity.namePascalCase) {
│   │   │                       imports.add(`import { ${targetEntity.namePascalCase} } from './${targetEntity.nameKebabCase}.entity';`);
│   │   │                   }
│   │   │               }
│   │   │           }
│   │   │           
│   │   │           return Array.from(imports).join('\n');
│   │   │       }
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **if**(targetEntity && targetEntity.namePascalCase !== entity.namePascalCase) *(line 16)*
│   │   │       ```typescript
│   │   │       if (targetEntity && targetEntity.namePascalCase !== entity.namePascalCase) {
│   │   │                       imports.add(`import { ${targetEntity.namePascalCase} } from './${targetEntity.nameKebabCase}.entity';`);
│   │   │                   }
│   │   │               }
│   │   │           }
│   │   │           
│   │   │           return Array.from(imports).join('\n');
│   │   │       }
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **if**(column.primaryKey) *(line 27)*
│   │   │       ```typescript
│   │   │       if (column.primaryKey) {
│   │   │           return '@PrimaryGeneratedColumn()';
│   │   │         }
│   │   │       
│   │   │         const options: string[] = [];
│   │   │         if (column.typeSql) options.push(`type: '${column.typeSql}'`);
│   │   │         if (column.length) options.push(`length: ${column.length}`);
│   │   │         if (column.nullable) options.push('nullable: true');
│   │   │         if (column.unique) options.push('unique: true');
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **switch**(relation.relationType) *(line 44)*
│   │   │       ```typescript
│   │   │       switch (relation.relationType) {
│   │   │               case 'ManyToOne':
│   │   │                   return `@ManyToOne(() => ${targetEntityName}, (${relation.target}) => ${relation.target}.${inverseSide}s)`;
│   │   │               case 'OneToMany':
│   │   │                   return `@OneToMany(() => ${targetEntityName}, (${relation.target}) => ${relation.target}.${inverseSide})`;
│   │   │               default:
│   │   │                   return '';
│   │   │           }
│   │   │       }
│   │   │       ...
│   │   │       ```
│   │   ├── 📘 nestjs-generate-interface.service.ts
│   │   │   *Functions found:*
│   │   │     - 🔧 **if**(entity.relationships) *(line 8)*
│   │   │       ```typescript
│   │   │       if (entity.relationships) {
│   │   │               for (const rel of entity.relationships) {
│   │   │                   const targetEntity = allEntities.find(e => e.tableName === rel.target);
│   │   │                   if (targetEntity && targetEntity.namePascalCase !== entity.namePascalCase) {
│   │   │                       imports.add(`import { I${targetEntity.namePascalCase} } from './${targetEntity.nameKebabCase}.interface';`);
│   │   │                   }
│   │   │               }
│   │   │           }
│   │   │           
│   │   │           return Array.from(imports).join('\n');
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **for**(const rel of entity.relationships) *(line 9)*
│   │   │       ```typescript
│   │   │       for (const rel of entity.relationships) {
│   │   │                   const targetEntity = allEntities.find(e => e.tableName === rel.target);
│   │   │                   if (targetEntity && targetEntity.namePascalCase !== entity.namePascalCase) {
│   │   │                       imports.add(`import { I${targetEntity.namePascalCase} } from './${targetEntity.nameKebabCase}.interface';`);
│   │   │                   }
│   │   │               }
│   │   │           }
│   │   │           
│   │   │           return Array.from(imports).join('\n');
│   │   │       }
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **if**(targetEntity && targetEntity.namePascalCase !== entity.namePascalCase) *(line 11)*
│   │   │       ```typescript
│   │   │       if (targetEntity && targetEntity.namePascalCase !== entity.namePascalCase) {
│   │   │                       imports.add(`import { I${targetEntity.namePascalCase} } from './${targetEntity.nameKebabCase}.interface';`);
│   │   │                   }
│   │   │               }
│   │   │           }
│   │   │           
│   │   │           return Array.from(imports).join('\n');
│   │   │       }
│   │   │       
│   │   │       export function generateInterfaceFileContent(entity: IEntityJson, allEntities: IEntityJson[]): string {
│   │   │       ...
│   │   │       ```
│   │   ├── 📘 symfony-code-generation.service.ts
│   │   │   *Functions found:*
│   │   │     - 🔧 **if**(!entities) *(line 10)*
│   │   │       ```typescript
│   │   │       if (!entities) {
│   │   │           console.error('No entities provided.');
│   │   │           return;
│   │   │         }
│   │   │       
│   │   │         console.log(`🚀 Starting Symfony module generation...`);
│   │   │       
│   │   │         for (const entity of entities) {
│   │   │           if (entity.typeEntity === 'pivot') {
│   │   │               console.log(`⏩ Skipping pivot entity: ${entity.namePascalCase}`);
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **for**(const entity of entities) *(line 17)*
│   │   │       ```typescript
│   │   │       for (const entity of entities) {
│   │   │           if (entity.typeEntity === 'pivot') {
│   │   │               console.log(`⏩ Skipping pivot entity: ${entity.namePascalCase}`);
│   │   │               continue;
│   │   │           }
│   │   │           
│   │   │           const modulePath = join(OUTPUT_BASE_PATH, entity.namePascalCase);
│   │   │           const dtoPath = join(modulePath, 'Dto', 'Request');
│   │   │           const entityPath = join(modulePath, 'Entity');
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **if**(entity.typeEntity === 'pivot') *(line 18)*
│   │   │       ```typescript
│   │   │       if (entity.typeEntity === 'pivot') {
│   │   │               console.log(`⏩ Skipping pivot entity: ${entity.namePascalCase}`);
│   │   │               continue;
│   │   │           }
│   │   │           
│   │   │           const modulePath = join(OUTPUT_BASE_PATH, entity.namePascalCase);
│   │   │           const dtoPath = join(modulePath, 'Dto', 'Request');
│   │   │           const entityPath = join(modulePath, 'Entity');
│   │   │       
│   │   │           mkdirSync(dtoPath, { recursive: true });
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **catch**(error) *(line 40)*
│   │   │       ```typescript
│   │   │       catch (error) {
│   │   │             console.error(`❌ Error generating files for entity ${entity.namePascalCase}:`, error);
│   │   │           }
│   │   │         }
│   │   │       
│   │   │         console.log('🎉 Symfony module generation complete!');
│   │   │       }
│   │   │       
│   │   │       export function generateSymfonyModulesFromFile(jsonFilePath: string): void {
│   │   │           try {
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **if**(!entities) *(line 54)*
│   │   │       ```typescript
│   │   │       if (!entities) {
│   │   │                 console.error(`❌ No 'entities' array found in ${jsonFilePath}`);
│   │   │                 return;
│   │   │             }
│   │   │         
│   │   │             generateSymfonyModules(entities);
│   │   │           } catch (error) {
│   │   │             console.error(`❌ Failed to load or parse ${jsonFilePath}:`, error);
│   │   │             process.exit(1);
│   │   │           }
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **catch**(error) *(line 60)*
│   │   │       ```typescript
│   │   │       catch (error) {
│   │   │             console.error(`❌ Failed to load or parse ${jsonFilePath}:`, error);
│   │   │             process.exit(1);
│   │   │           }
│   │   │         }
│   │   │       ```
│   │   ├── 📘 symfony-generate-dto.service.ts
│   │   │   *Functions found:*
│   │   │     - 🔧 **if**(!column.nullable) *(line 6)*
│   │   │       ```typescript
│   │   │       if (!column.nullable) {
│   │   │               assertions.push('new Assert\\NotBlank()');
│   │   │           }
│   │   │       
│   │   │           switch (getPhpType(column.typeTypeScript)) {
│   │   │               case 'string':
│   │   │                   assertions.push('new Assert\\Type("string")');
│   │   │                   if (column.length) {
│   │   │                       assertions.push(`new Assert\\Length(max: ${column.length})`);
│   │   │                   }
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **if**(column.length) *(line 13)*
│   │   │       ```typescript
│   │   │       if (column.length) {
│   │   │                       assertions.push(`new Assert\\Length(max: ${column.length})`);
│   │   │                   }
│   │   │                   break;
│   │   │               case 'int':
│   │   │                   assertions.push('new Assert\\Type("integer")');
│   │   │                   break;
│   │   │               case 'float':
│   │   │                   assertions.push('new Assert\\Type("float")');
│   │   │                   break;
│   │   │       ...
│   │   │       ```
│   │   ├── 📘 symfony-generate-entity.service.ts
│   │   │   *Functions found:*
│   │   │     - 🔧 **__construct**() *(line 105)*
│   │   │       ```typescript
│   │   │       function __construct()
│   │   │           {
│   │   │       ${constructorRelations}
│   │   │           }
│   │   │       ` : '';
│   │   │       
│   │   │         return `<?php
│   │   │       
│   │   │       namespace App\\Entity;
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **if**(column.primaryKey) *(line 19)*
│   │   │       ```typescript
│   │   │       if (column.primaryKey) {
│   │   │           return `    #[ORM\\Id]
│   │   │           #[ORM\\GeneratedValue]
│   │   │           #[ORM\\Column]`;
│   │   │         }
│   │   │       
│   │   │         const options: string[] = [];
│   │   │         const doctrineType = getDoctrineColumnType(column.typeSql);
│   │   │       
│   │   │         if (doctrineType !== 'string') {
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **if**(doctrineType !== 'string') *(line 28)*
│   │   │       ```typescript
│   │   │       if (doctrineType !== 'string') {
│   │   │           options.push(`type: '${doctrineType}'`);
│   │   │         }
│   │   │       
│   │   │         if (doctrineType === 'string' && column.length) {
│   │   │           options.push(`length: ${column.length}`);
│   │   │         }
│   │   │       
│   │   │         if (column.nullable) {
│   │   │           options.push('nullable: true');
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **if**(doctrineType === 'string' && column.length) *(line 32)*
│   │   │       ```typescript
│   │   │       if (doctrineType === 'string' && column.length) {
│   │   │           options.push(`length: ${column.length}`);
│   │   │         }
│   │   │       
│   │   │         if (column.nullable) {
│   │   │           options.push('nullable: true');
│   │   │         }
│   │   │         if (column.unique) {
│   │   │           options.push('unique: true');
│   │   │         }
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **if**(column.nullable) *(line 36)*
│   │   │       ```typescript
│   │   │       if (column.nullable) {
│   │   │           options.push('nullable: true');
│   │   │         }
│   │   │         if (column.unique) {
│   │   │           options.push('unique: true');
│   │   │         }
│   │   │       
│   │   │         return `    #[ORM\\Column(${options.join(', ')})]`;
│   │   │       }
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **if**(column.unique) *(line 39)*
│   │   │       ```typescript
│   │   │       if (column.unique) {
│   │   │           options.push('unique: true');
│   │   │         }
│   │   │       
│   │   │         return `    #[ORM\\Column(${options.join(', ')})]`;
│   │   │       }
│   │   │       
│   │   │       function getRelationAttributes(relation: IRelation, currentEntity: IEntityJson, allEntities: IEntityJson[]): string {
│   │   │         const targetEntity = allEntities.find(e => e.tableName === relation.target);
│   │   │         if (!targetEntity) return '';
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **switch**(relation.relationType) *(line 54)*
│   │   │       ```typescript
│   │   │       switch (relation.relationType) {
│   │   │           case 'ManyToOne':
│   │   │             return `    #[ORM\ManyToOne(targetEntity: ${targetEntityName}::class, inversedBy: '${currentEntity.tableName}s')]`;
│   │   │           case 'OneToMany':
│   │   │             return `    #[ORM\\OneToMany(mappedBy: '${owningSide}', targetEntity: ${targetEntityName}::class, cascade: ['persist', 'remove'])]`;
│   │   │           case 'OneToOne':
│   │   │             return `    #[ORM\\OneToOne(inversedBy: '${inverseSide}', cascade: ['persist', 'remove'])]`;
│   │   │           case 'ManyToMany':
│   │   │             const owning = relation.owner ? 'inversedBy' : 'mappedBy';
│   │   │             const joinTable = relation.owner ? `#[ORM\\JoinTable(name: '${currentEntity.tableName}_${targetEntity.tableName}')]` : '';
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **__construct**() *(line 105)*
│   │   │       ```typescript
│   │   │       __construct()
│   │   │           {
│   │   │       ${constructorRelations}
│   │   │           }
│   │   │       ` : '';
│   │   │       
│   │   │         return `<?php
│   │   │       
│   │   │       namespace App\\Entity;
│   │   │       ...
│   │   │       ```
│   │   └── 📘 symfony-mapping.ts
│   │       *Functions found:*
│   │         - 🔧 **for**(const key in typeMapping) *(line 30)*
│   │           ```typescript
│   │           for (const key in typeMapping) {
│   │                   if (lowerCaseSqlType.includes(key)) {
│   │                       return typeMapping[key];
│   │                   }
│   │               }
│   │               return 'string';
│   │           }
│   │           ```
│   └── 📝 README.md
├── 📁 **project/**
│   ├── 📁 **config/**
│   ├── 📁 **interfaces/**
│   │   └── 📘 project.models.ts
│   ├── 📁 **mocks/**
│   ├── 📁 **services/**
│   │   ├── 📘 cli-local-directory.service.ts
│   │   │   *Functions found:*
│   │   │     - 🔧 **createCliLocalConfigFile**(projectPath: string) *(line 107)*
│   │   │       ```typescript
│   │   │       export function createCliLocalConfigFile(projectPath: string) {
│   │   │         if (!fs.existsSync(path.join(projectPath, `cli-local-config.json`))) {
│   │   │           updateCliLocalFile(`cli-local-config.json`, projectPath, FILE_CLI_LOCAL);
│   │   │         }
│   │   │       }
│   │   │       export function getCliLocalConfigFile(projectPath: string): ICliLocalPathFile {
│   │   │         let json: any;
│   │   │         let configFile = path.join(projectPath, `cli-local-config.json`);
│   │   │         if (!fs.existsSync(configFile)) {
│   │   │           createCliLocalConfigFile(projectPath);
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **if**(mdjFile != '') *(line 59)*
│   │   │       ```typescript
│   │   │       if (mdjFile != '') {
│   │   │           dictionaries = getEntities(mdjFile);
│   │   │           if (typeof dictionaries === 'string') {
│   │   │             return error;
│   │   │           }
│   │   │         }
│   │   │       
│   │   │         console.log('🗄️ Création des fichier dans .cli-local ');
│   │   │         files = { ...files, ...dictionaries };
│   │   │         Object.entries(files).map(([key, value]) => {
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **if**(typeof dictionaries === 'string') *(line 61)*
│   │   │       ```typescript
│   │   │       if (typeof dictionaries === 'string') {
│   │   │             return error;
│   │   │           }
│   │   │         }
│   │   │       
│   │   │         console.log('🗄️ Création des fichier dans .cli-local ');
│   │   │         files = { ...files, ...dictionaries };
│   │   │         Object.entries(files).map(([key, value]) => {
│   │   │           try {
│   │   │             let filePath = path.join(cliNodePath, `${key}.json`);
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **catch**(e) *(line 73)*
│   │   │       ```typescript
│   │   │       catch (e) {
│   │   │             console.log(e);
│   │   │           }
│   │   │         });
│   │   │       
│   │   │         // creation du fichier mcd.mdj
│   │   │         if (configFile.starUml) {
│   │   │           console.log('🗄️ Copy du fichier mcd.mdj ');
│   │   │           const result = fs.readFileSync(configFile.starUml, 'utf8');
│   │   │           fs.writeFileSync(path.join(cliNodePath, 'mcd.mdj'), result, 'utf8');
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **if**(configFile.starUml) *(line 79)*
│   │   │       ```typescript
│   │   │       if (configFile.starUml) {
│   │   │           console.log('🗄️ Copy du fichier mcd.mdj ');
│   │   │           const result = fs.readFileSync(configFile.starUml, 'utf8');
│   │   │           fs.writeFileSync(path.join(cliNodePath, 'mcd.mdj'), result, 'utf8');
│   │   │         }
│   │   │       
│   │   │         const ingnore = '###cli-local\n/.cli-local\n/cli-local-config.json\n';
│   │   │         updateGitIgnore(frameworkPath, ingnore);
│   │   │       
│   │   │         console.log`✅ .cli-local directory créée avec succès !`;
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **catch**(e) *(line 100)*
│   │   │       ```typescript
│   │   │       catch (e) {
│   │   │           return `le fichier ${file} introuvable `;
│   │   │           process.exit(1);
│   │   │         }
│   │   │       
│   │   │         return json;
│   │   │       }
│   │   │       export function createCliLocalConfigFile(projectPath: string) {
│   │   │         if (!fs.existsSync(path.join(projectPath, `cli-local-config.json`))) {
│   │   │           updateCliLocalFile(`cli-local-config.json`, projectPath, FILE_CLI_LOCAL);
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **createCliLocalConfigFile**(projectPath: string) *(line 107)*
│   │   │       ```typescript
│   │   │       createCliLocalConfigFile(projectPath: string) {
│   │   │         if (!fs.existsSync(path.join(projectPath, `cli-local-config.json`))) {
│   │   │           updateCliLocalFile(`cli-local-config.json`, projectPath, FILE_CLI_LOCAL);
│   │   │         }
│   │   │       }
│   │   │       export function getCliLocalConfigFile(projectPath: string): ICliLocalPathFile {
│   │   │         let json: any;
│   │   │         let configFile = path.join(projectPath, `cli-local-config.json`);
│   │   │         if (!fs.existsSync(configFile)) {
│   │   │           createCliLocalConfigFile(projectPath);
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **catch**(e) *(line 120)*
│   │   │       ```typescript
│   │   │       catch (e) {
│   │   │           console.log(`Erreur lors de la lecture du fichier cli-local-config.json`);
│   │   │           process.exit(1);
│   │   │         }
│   │   │       
│   │   │         return json;
│   │   │       }
│   │   │       
│   │   │       export function getTreeArchitectureCliLocalFile(projectPath: string): any {
│   │   │         const cliNodePath = path.join(projectPath, `.cli-local`);
│   │   │       ...
│   │   │       ```
│   │   ├── 📘 create-project.service.ts
│   │   ├── 📘 generate-framework.ts
│   │   │   *Functions found:*
│   │   │     - 🔧 **generateFramework**(
  frameWork: IFramework,
  frameWorkPath: string,
  projetName: string,
) *(line 6)*
│   │   │       ```typescript
│   │   │       export function generateFramework(
│   │   │         frameWork: IFramework,
│   │   │         frameWorkPath: string,
│   │   │         projetName: string,
│   │   │       ) {
│   │   │         if (frameWork && frameWork.name) {
│   │   │           if (!fs.existsSync(`${frameWorkPath}`)) {
│   │   │             let command = getCommandFramework(frameWork, projetName);
│   │   │             try {
│   │   │               console.log(`🚀 ${command}`);
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **generateFramework**(
  frameWork: IFramework,
  frameWorkPath: string,
  projetName: string,
) *(line 6)*
│   │   │       ```typescript
│   │   │       generateFramework(
│   │   │         frameWork: IFramework,
│   │   │         frameWorkPath: string,
│   │   │         projetName: string,
│   │   │       ) {
│   │   │         if (frameWork && frameWork.name) {
│   │   │           if (!fs.existsSync(`${frameWorkPath}`)) {
│   │   │             let command = getCommandFramework(frameWork, projetName);
│   │   │             try {
│   │   │               console.log(`🚀 ${command}`);
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **if**(frameWork && frameWork.name) *(line 11)*
│   │   │       ```typescript
│   │   │       if (frameWork && frameWork.name) {
│   │   │           if (!fs.existsSync(`${frameWorkPath}`)) {
│   │   │             let command = getCommandFramework(frameWork, projetName);
│   │   │             try {
│   │   │               console.log(`🚀 ${command}`);
│   │   │               executeCommand(
│   │   │                 command,
│   │   │                 { stdio: 'inherit' },
│   │   │                 `🚀 Création du ${frameWork.type}`,
│   │   │                 `✅ ${frameWork.type} créé avec succès !`,
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **catch**(error) *(line 38)*
│   │   │       ```typescript
│   │   │       catch (error) {
│   │   │               console.error(`❌ Erreur lors de la création du ${frameWork.type} !`);
│   │   │               process.exit(1);
│   │   │             }
│   │   │           } else {
│   │   │             console.log(`✅ le ${frameWork.type} existe déjas !`);
│   │   │           }
│   │   │         }
│   │   │       }
│   │   │       ```
│   │   ├── 📘 generate-git-branch.service.ts
│   │   │   *Functions found:*
│   │   │     - 🔧 **if**(frameWork?.gitBranch) *(line 5)*
│   │   │       ```typescript
│   │   │       if (frameWork?.gitBranch) {
│   │   │           let command = '';
│   │   │           frameWork.gitBranch.forEach((branchName, index) => {
│   │   │             if (index === 0) {
│   │   │               command += `git branch ${branchName}`;
│   │   │             } else {
│   │   │               command += ` && git branch ${branchName}`;
│   │   │             }
│   │   │           });
│   │   │           command += ` && git checkout ${frameWork.gitBranchCheckout}`;
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **if**(index === 0) *(line 8)*
│   │   │       ```typescript
│   │   │       if (index === 0) {
│   │   │               command += `git branch ${branchName}`;
│   │   │             } else {
│   │   │               command += ` && git branch ${branchName}`;
│   │   │             }
│   │   │           });
│   │   │           command += ` && git checkout ${frameWork.gitBranchCheckout}`;
│   │   │           console.log(`🚀 ${command}`);
│   │   │           executeCommand(
│   │   │             command,
│   │   │       ...
│   │   │       ```
│   │   ├── 📘 get-files-entities-json.service.ts
│   │   │   *Functions found:*
│   │   │     - 🔧 **if**(configFile.starUml) *(line 15)*
│   │   │       ```typescript
│   │   │       if (configFile.starUml) {
│   │   │         //     console.log(configFile.starUml);
│   │   │         //     console.log(cliNodePath);
│   │   │         //     // fs.copyFileSync(configFile.starUml, cliNodePath);
│   │   │         // }
│   │   │       
│   │   │         // if (typeof dictionaries === "string") {
│   │   │         //     return dictionaries;
│   │   │         // }
│   │   │         // Object.entries(dictionaries).map(([key, value]) => {
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **if**(typeof dictionaries === "string") *(line 21)*
│   │   │       ```typescript
│   │   │       if (typeof dictionaries === "string") {
│   │   │         //     return dictionaries;
│   │   │         // }
│   │   │         // Object.entries(dictionaries).map(([key, value]) => {
│   │   │         //     fs.writeFileSync(
│   │   │         //         path.join(cliNodePath, `${key}.json`),
│   │   │         //         JSON.stringify(value, null, 2)
│   │   │         //     );
│   │   │         // });
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **if**(frameWork.architecture.folders.length > 0) *(line 31)*
│   │   │       ```typescript
│   │   │       if (frameWork.architecture.folders.length > 0) {
│   │   │         //   try {
│   │   │         //     let [frameWorkFolders, frameWorkFiles] = createStructure(frameWorkPath, frameWork.architecture);
│   │   │         //     console.log(frameWorkFolders);
│   │   │         //     console.log(frameWorkFiles);
│   │   │         //     executeCommand(
│   │   │         //       `git add . && git commit -m "creation structure"`,
│   │   │         //       { cwd: `${frameWorkPath}`, stdio: "inherit" },
│   │   │         //       `🚀 Création du commit Initiale`,
│   │   │         //       `✅ Commit créé avec succès !`,
│   │   │       ...
│   │   │       ```
│   │   │     - 🔧 **catch**(error) *(line 43)*
│   │   │       ```typescript
│   │   │       catch (error) {
│   │   │         //     return `❌ Erreur lors de la création de l'architecture !`;
│   │   │         //   }
│   │   │         // } else {
│   │   │         //   return `✅ Aucune architecture à créer !`;
│   │   │         // }
│   │   │         // return `✅ CliNodeDirectory créée avec succès !`;
│   │   │       }
│   │   │       ```
│   │   ├── 📘 update-git-ignore.service.ts
│   │   ├── 📘 update-package-json.service.ts
│   │   ├── 📘 update-tscongfig.service.ts
│   │   └── 📘 verify-file-config.ts
│   │       *Functions found:*
│   │         - 🔧 **catch**(error) *(line 5)*
│   │           ```typescript
│   │           catch (error) {
│   │             //     return `❌ Erreur de lecture ou de parsing du fichier ${config.projectName}-config.json ! !`;
│   │             //     process.exit(1);
│   │             // }
│   │             // Vérification des propriétés essentielles du fichier de configuration
│   │             if (!config.projectName) {
│   │               return '❌ Le fichier de configuration doit contenir un nom de projet.';
│   │               // process.exit(1);
│   │             }
│   │             if (!config.starUml || config.starUml.length === 0) {
│   │           ...
│   │           ```
│   │         - 🔧 **if**(!config.projectName) *(line 10)*
│   │           ```typescript
│   │           if (!config.projectName) {
│   │               return '❌ Le fichier de configuration doit contenir un nom de projet.';
│   │               // process.exit(1);
│   │             }
│   │             if (!config.starUml || config.starUml.length === 0) {
│   │               return "❌ Le fichier starUml n'est pas renseigné dans le fichier de configuration.";
│   │               // process.exit(1);
│   │             }
│   │             if (!config.path || config.path.length === 0) {
│   │               return "❌ Le chemin du projet n' existe pas.";
│   │           ...
│   │           ```
│   │         - 🔧 **if**(!config.starUml || config.starUml.length === 0) *(line 14)*
│   │           ```typescript
│   │           if (!config.starUml || config.starUml.length === 0) {
│   │               return "❌ Le fichier starUml n'est pas renseigné dans le fichier de configuration.";
│   │               // process.exit(1);
│   │             }
│   │             if (!config.path || config.path.length === 0) {
│   │               return "❌ Le chemin du projet n' existe pas.";
│   │               // process.exit(1);
│   │             }
│   │             if (!config.frameWorks) {
│   │               return '❌ Le fichier de configuration doit contenir moins 1 frameworks.';
│   │           ...
│   │           ```
│   │         - 🔧 **if**(!config.path || config.path.length === 0) *(line 18)*
│   │           ```typescript
│   │           if (!config.path || config.path.length === 0) {
│   │               return "❌ Le chemin du projet n' existe pas.";
│   │               // process.exit(1);
│   │             }
│   │             if (!config.frameWorks) {
│   │               return '❌ Le fichier de configuration doit contenir moins 1 frameworks.';
│   │               // process.exit(1);
│   │             }
│   │             // if (!config.databases) {
│   │             //     return "❌ Le fichier de configuration doit contenir les bases de données.";
│   │           ...
│   │           ```
│   │         - 🔧 **if**(!config.frameWorks) *(line 22)*
│   │           ```typescript
│   │           if (!config.frameWorks) {
│   │               return '❌ Le fichier de configuration doit contenir moins 1 frameworks.';
│   │               // process.exit(1);
│   │             }
│   │             // if (!config.databases) {
│   │             //     return "❌ Le fichier de configuration doit contenir les bases de données.";
│   │             //     // process.exit(1);
│   │             // }
│   │             // if (!config.environments) {
│   │             //     return "❌ Le fichier de configuration doit contenir moin 1 environnements.";
│   │           ...
│   │           ```
│   │         - 🔧 **if**(!config.databases) *(line 26)*
│   │           ```typescript
│   │           if (!config.databases) {
│   │             //     return "❌ Le fichier de configuration doit contenir les bases de données.";
│   │             //     // process.exit(1);
│   │             // }
│   │             // if (!config.environments) {
│   │             //     return "❌ Le fichier de configuration doit contenir moin 1 environnements.";
│   │             //     // process.exit(1);
│   │             // }
│   │             console.log('🗄️ Vérification du fichier config.json... OK !!!!!!!');
│   │             return true;
│   │           ...
│   │           ```
│   │         - 🔧 **if**(!config.environments) *(line 30)*
│   │           ```typescript
│   │           if (!config.environments) {
│   │             //     return "❌ Le fichier de configuration doit contenir moin 1 environnements.";
│   │             //     // process.exit(1);
│   │             // }
│   │             console.log('🗄️ Vérification du fichier config.json... OK !!!!!!!');
│   │             return true;
│   │           }
│   │           ```
│   └── 📁 **templates/**
├── 📁 **tools/**
│   └── 📁 **tree/**
│       └── 📁 **services/**
│           └── 📘 generate-tree-json.service.ts
│               *Functions found:*
│                 - 🔧 **for**(const item of items) *(line 53)*
│                   ```typescript
│                   for (const item of items) {
│                         if (ignoredFolders.includes(item.name)) continue;
│                   
│                         const fullPath = path.join(dir, item.name);
│                   
│                         if (item.isDirectory()) {
│                           const child = generateTreeJson(fullPath, maxDepth, currentDepth + 1, ignoredFolders);
│                           if (child) children.push(child);
│                         } else {
│                           children.push({
│                   ...
│                   ```
│                 - 🔧 **catch**(error: unknown) *(line 82)*
│                   ```typescript
│                   catch (error: unknown) {
│                       if (error instanceof Error) {
│                         console.error(`❌ Erreur lors de la lecture du dossier : ${error.message}`);
│                       } else {
│                         console.error('❌ Une erreur inconnue est survenue.');
│                       }
│                       return null;
│                     }
│                   }
│                   ```
│                 - 🔧 **if**(error instanceof Error) *(line 83)*
│                   ```typescript
│                   if (error instanceof Error) {
│                         console.error(`❌ Erreur lors de la lecture du dossier : ${error.message}`);
│                       } else {
│                         console.error('❌ Une erreur inconnue est survenue.');
│                       }
│                       return null;
│                     }
│                   }
│                   ```
└── 📋 debug_functions.log
