import { IEntityJson } from '@interfaces/entityJson.interface';
import {
    getCliLocalConfigFile,
    getCliLocalFile,
} from '@services/project/cli-local-directory.service';

import { Command } from 'commander';
import inquirer from 'inquirer';

import { ICliLocalPathFile } from '@interfaces/cli-local.interface';
import {
    createControllerNestjs,
    createDtoNestjs,
    createEntityNestjs,    
    createModuleNestjs,
    createSeederNestjs,
    createServiceNestjs,
} from '@frameworks/nestjs/services/module-nestjs.service';

import { createTestsNestjs } from '@frameworks/nestjs/services/tests-nestjs.service';
import {
    appModuleNestjs,
    createConfigProjectNestjs,
    createEnvironmentsNestjs,
    databaseConfigNestjs,
    mainFileNestjs,
} from '@frameworks/nestjs/services/config-project-nestjs.service';
import { create } from 'domain';
import { installTSDependencies } from '@frameworks/_global/service/install-dependencies.service';
import { executeCommand } from '@services/executeCommand';
import path from 'path';
import { IFramework } from '@ frameworks/_global/interface/framework-commun.model';
import { createAuthNestjs } from '@frameworks/nestjs/services/auth-nestjs.service';
import { createAccountModuleNestjs } from '@frameworks/nestjs/services/account-service-nestjs.service';

const command = new Command('nest');
export default command;

interface Icreate {
    option: Array<string>;
}

command
    .argument('[arg]', 'Argument de la commande')
    .description('Description de la commande "sf"')
    .option('-o, --option', 'Option de la commande')
    .action(async () => {
        const processPath = process.cwd();
        const frameworkPath: string = processPath;
        const allpathFileCliLocal: ICliLocalPathFile =
            getCliLocalConfigFile(processPath);
        const entitiesJsonFile: IEntityJson[] = getCliLocalFile(
            allpathFileCliLocal.entities,
        );
        const thisProjectConfig: IFramework = getCliLocalFile(
            allpathFileCliLocal.thisProjectConfig,
        );
        //  console.log('entitiesJsonFile', entitiesJsonFile);
        // console.log('thisProjectConfig', thisProjectConfig);

        const options = [
            'ALL',
            'Seeder',
            'Entity',
            'Account/Anthentication',
            'Anthentication',
            'Account',
            'Bdd',
            'Environments',
            'Config',
            'Dto',
            'Controller',
            'Service',
        ];

        const cmd = await inquirer.prompt([
            {
                type: 'checkbox',
                name: 'options',
                message: 'Choisir ce que vous voulez generer',
                choices: [...options],
                // validate: (input: string) => input.trim() !== '' ? true : 'Le chemin du projet est requis.',
            },
        ]);
        cmd.options.map((option: string) => {
            if (option === 'Account/Anthentication') {
                createAccountModuleNestjs(frameworkPath);
                createAuthNestjs(frameworkPath);
            }
            if (option === 'Anthentication') {
                createAuthNestjs(frameworkPath);
            }
            if (option === 'Account') {
                createAccountModuleNestjs(frameworkPath);
            }
            if (option === 'Anthentication') {
                createAuthNestjs(frameworkPath);
            }
            if (option === 'Bdd') {
                databaseConfigNestjs(frameworkPath, thisProjectConfig);
            }
            if (option === 'Environments') {
                createEnvironmentsNestjs(frameworkPath, thisProjectConfig);
            }
            if (option === 'Config') {
                createConfigProjectNestjs(frameworkPath);
            }
            if (option === 'Dependencies') {
            }
            if (option === 'Entity') {
                if (Array.isArray(entitiesJsonFile)) {
                    entitiesJsonFile.map((entity: IEntityJson) => {
                        createEntityNestjs(frameworkPath, entity);
                    });
                }
            }
            if (option === 'Dto') {
                if (Array.isArray(entitiesJsonFile)) {
                    entitiesJsonFile.map((entity: IEntityJson) => {
                        createDtoNestjs(frameworkPath, entity);
                    });
                }
            }
            if (option === 'Controller') {
                if (Array.isArray(entitiesJsonFile)) {
                    entitiesJsonFile.map((entity: IEntityJson) => {
                        createControllerNestjs(frameworkPath, entity);
                    });
                }
            }
            if (option === 'Service') {
                if (Array.isArray(entitiesJsonFile)) {
                    entitiesJsonFile.map((entity: IEntityJson) => {
                        createServiceNestjs(frameworkPath, entity);
                    });
                }
            }
            if (option === 'Seeder') {
                if (Array.isArray(entitiesJsonFile)) {
                    createSeederNestjs(frameworkPath, entitiesJsonFile);
                }
            }
            if (option === 'ALL') {
                createEnvironmentsNestjs(frameworkPath, thisProjectConfig);
                let entitiesModule: Array<{
                    entityNamePascalCase: string;
                    entityNameKebabCase: string;
                }> = [];
                if (Array.isArray(entitiesJsonFile)) {
                    entitiesJsonFile.map((entity: IEntityJson) => {
                        let entityModule = {
                            entityNamePascalCase: `${entity.namePascalCase}`,
                            entityNameKebabCase: `${entity.nameKebabCase}`,
                        };
                        entitiesModule.push(entityModule);
                        createModuleNestjs(frameworkPath, entity);
                    });
                }
                createSeederNestjs(frameworkPath, entitiesJsonFile);
                appModuleNestjs(frameworkPath, entitiesModule);
                mainFileNestjs(frameworkPath);
                databaseConfigNestjs(frameworkPath, thisProjectConfig);
                // createFixturesNestjs(frameworkPath);
                // loadFixturesNestjs(frameworkPath);

            }
        });
        executeCommand(
            'npm run format',
            { cwd: `${frameworkPath}`, stdio: 'inherit' },
            `🚀 Lancement du Formatage`,
            `✅ Formatage lancé avec succès !`,
            `❌ Erreur lors du Formatage !`,
        );
        // {
        //   type: 'input',
        //   name: 'name',
        //   message: 'Nom du projet :',
        //   validate: (input: string) => input.trim() !== '' ? true : 'Le nom du projet est requis.',
        // },
        // {
        //   type: 'input',
        //   name: 'path',
        //   message: 'chemin du projet :',
        //   validate: (input: string) => input.trim() !== '' ? true : 'Le chemin du projet est requis.',
        // },
        // {
        //   type: 'input',
        //   name: 'starUml',
        //   message: 'chemin du fichier starUml :',
        //   // validate: (input: string) => input.trim() !== '' ? true : 'Le chemin du projet est requis.',
        // },
        // {
        //   type: 'checkbox',
        //   name: 'backends',
        //   message: 'Choisir le front-end',
        //   choices: [...backend],
        //   // validate: (input: string) => input.trim() !== '' ? true : 'Le chemin du projet est requis.',
        // },
        // {
        //   type: 'checkbox',
        //   name: 'databases',
        //   message: 'Choisir la base de données',
        //   choices: [...database],
        //   // validate: (input: string) => input.trim() !== '' ? true : 'Le chemin du projet est requis.',
        // },

        // const configFilePath = path.join(process.cwd(), `${project.name}-config.json`);
        // const frameWorksList: Array<string> = [
        //   ...project.frontends,
        //   ...project.backends,
        // ];
        // const config: IProjectConfig = {
        //   projectName: project.name,
        //   path: project.path,
        //   starUml: project.starUml,
        //   version: "1.0.0",
        //   frameWorks: getConfigFrameworks(frameWorksList),
        //   databases: getConfigDatabases(project.databases),
        //   //   // validationContraints: fs.readFileSync(validationContraintsFilePath, 'utf8'),
        //   //   // validationRules: fs.readFileSync(validationRulesFilePath, 'utf8'),
        //   //   // environments: getConfig("environments"),
        //   };
        //   // Créer le fichier JSON de configuration
        //   fs.writeFileSync(configFilePath, JSON.stringify(config, null, 2), "utf-8");

        //   console.log(`✅ Fichier de configuration créé : ${configFilePath}`);
        //   console.log(`🚀 Le fichier de configuration a été généré avec succès !`);
    });
