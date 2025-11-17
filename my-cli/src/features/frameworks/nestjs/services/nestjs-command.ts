// import { Command } from 'commander';
// import inquirer from 'inquirer';
// import { info, success, error } from '@utils/logger';
// // import { nestConfigGenerator } from '@features/nestjs/config/nestConfigGenerator';
// // import { generateModule } from '@features/nestjs/services/generateModule.service';
// // import { generateController } from '@features/nestjs/services/generateController.service';
// // import { generateService } from '@features/nestjs/services/generateService.service';
// // import { generateEntity } from '@features/nestjs/services/generateEntity.service';
// import { pascalCase } from '@utils/stringUtils';
// import { executeCommand } from '@utils/execute-command';
// import { IEntityJson } from '@parsersMdj/interfaces/entity-json.model';
// import { createAccountModuleNestjs } from './account-service-nestjs.service';
// import { createAuthNestjs } from './auth-nestjs.service';
// import { appModuleNestjs, createConfigProjectNestjs, createEnvironmentsNestjs, databaseConfigNestjs, mainFileNestjs } from './config-project-nestjs.service';
// import { createControllerNestjs, createDtoNestjs, createEntityNestjs, createModuleNestjs, createSeederNestjs, createServiceNestjs } from './module-nestjs.service';
// import { ICliLocalPathFile } from 'types/common';
// import { getCliLocalConfigFile, getCliLocalFile } from '@services/cli-conf/services/cli-local-directory.service';
// import { IFramework } from '@features/frameworks/_global/interface/framework-commun.model';

// export function registerNestCommand(program: Command) {
//   program
//     .command('nest <type> <name>')
//     .description(
//       'Gère la génération de modules, contrôleurs, services, entités, etc., spécifiques à NestJS.',
//     )
//     .option('-p, --path <path>', 'Spécifie le répertoire de destination.')
//     .action(async () => {
//       info(`Génération d'un ${type} NestJS nommé ${name}...`);

//       const processPath = process.cwd();
//         const frameworkPath: string = processPath;
//         const allpathFileCliLocal: ICliLocalPathFile =
//             getCliLocalConfigFile(processPath);
//         const entitiesJsonFile: IEntityJson[] = getCliLocalFile(
//             allpathFileCliLocal.entities,
//         );
//         const thisProjectConfig: IFramework = getCliLocalFile(
//             allpathFileCliLocal.thisProjectConfig,
//         );
//         //  logInfo('entitiesJsonFile', entitiesJsonFile);
//         // logInfo('thisProjectConfig', thisProjectConfig);

//         const actions = [
//             'ALL',
//             'Seeder',
//             'Entity',
//             'Account/Anthentication',
//             'Anthentication',
//             'Account',
//             'Bdd',
//             'Environments',
//             'Config',
//             'Dto',
//             'Controller',
//             'Service',
//         ];

//         const cmd = await inquirer.prompt([
//             {
//                 type: 'checkbox',
//                 name: 'options',
//                 message: 'Choisir ce que vous voulez generer',
//                 choices: [...actions],
//                 // validate: (input: string) => input.trim() !== '' ? true : 'Le chemin du projet est requis.',
//             },
//         ]);
//         cmd.options.map((option: string) => {
//             if (option === 'Account/Anthentication') {
//                 createAccountModuleNestjs(frameworkPath);
//                 createAuthNestjs(frameworkPath);
//             }
//             if (option === 'Anthentication') {
//                 createAuthNestjs(frameworkPath);
//             }
//             if (option === 'Account') {
//                 createAccountModuleNestjs(frameworkPath);
//             }
//             if (option === 'Anthentication') {
//                 createAuthNestjs(frameworkPath);
//             }
//             if (option === 'Bdd') {
//                 databaseConfigNestjs(frameworkPath, thisProjectConfig);
//             }
//             if (option === 'Environments') {
//                 createEnvironmentsNestjs(frameworkPath, thisProjectConfig);
//             }
//             if (option === 'Config') {
//                 createConfigProjectNestjs(frameworkPath);
//             }
//             if (option === 'Dependencies') {
//             }
//             if (option === 'Entity') {
//                 if (Array.isArray(entitiesJsonFile)) {
//                     entitiesJsonFile.map((entity: IEntityJson) => {
//                         createEntityNestjs(frameworkPath, entity);
//                     });
//                 }
//             }
//             if (option === 'Dto') {
//                 if (Array.isArray(entitiesJsonFile)) {
//                     entitiesJsonFile.map((entity: IEntityJson) => {
//                         createDtoNestjs(frameworkPath, entity);
//                     });
//                 }
//             }
//             if (option === 'Controller') {
//                 if (Array.isArray(entitiesJsonFile)) {
//                     entitiesJsonFile.map((entity: IEntityJson) => {
//                         createControllerNestjs(frameworkPath, entity);
//                     });
//                 }
//             }
//             if (option === 'Service') {
//                 if (Array.isArray(entitiesJsonFile)) {
//                     entitiesJsonFile.map((entity: IEntityJson) => {
//                         createServiceNestjs(frameworkPath, entity);
//                     });
//                 }
//             }
//             if (option === 'Seeder') {
//                 if (Array.isArray(entitiesJsonFile)) {
//                     createSeederNestjs(frameworkPath, entitiesJsonFile);
//                 }
//             }
//             if (option === 'ALL') {
//                 createEnvironmentsNestjs(frameworkPath, thisProjectConfig);
//                 let entitiesModule: Array<{
//                     entityNamePascalCase: string;
//                     entityNameKebabCase: string;
//                 }> = [];
//                 if (Array.isArray(entitiesJsonFile)) {
//                     entitiesJsonFile.map((entity: IEntityJson) => {
//                         let entityModule = {
//                             entityNamePascalCase: `${entity.namePascalCase}`,
//                             entityNameKebabCase: `${entity.nameKebabCase}`,
//                         };
//                         entitiesModule.push(entityModule);
//                         createModuleNestjs(frameworkPath, entity);
//                     });
//                 }
//                 createSeederNestjs(frameworkPath, entitiesJsonFile);
//                 appModuleNestjs(frameworkPath, entitiesModule);
//                 mainFileNestjs(frameworkPath);
//                 databaseConfigNestjs(frameworkPath, thisProjectConfig);
//                 // createFixturesNestjs(frameworkPath);
//                 // loadFixturesNestjs(frameworkPath);

//             }
//         });
//         executeCommand(
//             'npm run format',
//             { cwd: `${frameworkPath}`, stdio: 'inherit' },
//             `🚀 Lancement du Formatage`,
//             `✅ Formatage lancé avec succès !`,
//             `${EMOJI.error} Erreur lors du Formatage !`,
//         );

//       // const targetPath = options.path || process.cwd();
//       // const pascalName = pascalCase(name);

//       // try {
//       //   switch (type) {
//       //     case 'module':
//       //       await generateModule(targetPath, pascalName);
//       //       break;
//       //     case 'controller':
//       //       await generateController(targetPath, pascalName);
//       //       break;
//       //     case 'service':
//       //       await generateService(targetPath, pascalName);
//       //       break;
//       //     case 'entity':
//       //       await generateEntity(targetPath, pascalName);
//       //       break;
//       //     case 'config':
//       //       await nestConfigGenerator.generateConfig(targetPath, pascalName);
//       //       break;
//       //     default:
//       //       error(`Type de génération NestJS inconnu: ${type}`);
//       //       return;
//       //   }
//       //   success(`${type} NestJS ${name} généré avec succès dans ${targetPath} !`);
//       // } catch (err: unknown) {
//       //   console.error(`Error generating NestJS module: ${(err as Error).message}`);
//       // }
//     });
// }
