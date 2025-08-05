import * as fs from 'fs-extra';
import * as path from 'path';
import * as ejs from 'ejs';
import { Command } from 'commander';
// import * as ejsHelpers from '../../helpers/ejs-helpers';
import * as ejsHelpers from '@helpers/ejs-helpers';

import { getEntities } from '@services/mdj/entities';

import { IEntityJson } from 'interfaces/entityJson.interface';
import { execSync } from 'child_process';
import { generateFolders } from '@services/generate-folder';
// import { getValidationContraints } from "@services/mdj/validationContraints";

// 📂 Définition des chemins

const TEMPLATES_DIR = path.resolve(__dirname, '../../templates/nestjs');

// 🔥 Liste des fichiers à générer (seuls ces fichiers seront pris en compte)
const SELECTED_TEMPLATES = [
    'controller.ts.ejs',
    'controller.spec.ts.ejs',
    'service.ts.ejs',
    'service.spec.ts.ejs',
    'module.ts.ejs',
    'entity.ts.ejs',
    'entity-dto.ts.ejs',
    'update-dto.ts.ejs',
    'create-dto.ts.ejs',
    'interface.ts.ejs',
    'app.module.ts.ejs',
    'database.config.ts.ejs',
    'main.ts.ejs',
    'mock.ts.ejs',
];

export function nestJsMdjCommand(program: Command) {
    program
        .command('nest:fix:create <file> <output>')
        .description(
            'Génère uniquement les fichiers sélectionnés pour chaque entité',
        )
        .option('-f, --force', 'Écraser les fichiers existants', false)
        // .option("-a,--all", "Écraser les fichiers existants", false)
        .action((file, output, options) => {
            /******************************************************************************/
            const outputDir = path.resolve(output);

            const mdjFile = fs.readFileSync(file, 'utf-8');
            if (!mdjFile) {
                console.error(`❌ 1 Fichier MDJ "${mdjFile}" non trouvé.`);
                process.exit(1);
            }
            // 🔥 Récupérer les entités du fichier MDJ
            const entities = getEntities(mdjFile);

            if (!Array.isArray(entities)) {
                console.error(`❌ entities is not an array.`);
                process.exit(1);
            }
            /******************************************************************************/

            try {
                let imports: string[] = [];
                // 🔥 Générer SEULEMENT les fichiers sélectionnés pour CHAQUE entité 🔥
                entities.map((entity: IEntityJson) => {
                    imports.push(`${entity.namePascalCase}Module,\n`);
                });

                console.log(`🔥  Go !!!!!!!!!     🔥`);
                entities.map((entity: IEntityJson) => {
                    const basePath = path.join(outputDir, entity.nameKebabCase);
                    generateFolders(['dto', 'entities'], basePath);
                    generateFiles(basePath, imports, entity, options.force);
                });

                // format les fichier avec prettier
                // executeCommand('npm run format');
                // Chemin du dossier où exécuter la commande
                const projectPath = path.join(
                    process.cwd().replace('/src/modules', ''),
                );

                try {
                    // Exécuter "npm run format" dans le bon dossier
                    execSync('npm run format', {
                        cwd: projectPath,
                        stdio: 'inherit',
                    });
                    console.log('✅ Formatage terminé avec succès !');
                    process.exit(1);
                } catch (error) {
                    console.error(
                        "❌ Erreur lors de l'exécution de npm run format :",
                        error,
                    );
                }
                console.log(`branch dev :✅ Génération terminée ! ✅`);
                // });
            } catch (error) {
                console.error(`❌ Erreur lors de la génération :`, error);
            }
        });
}

/**
 * Génère uniquement les fichiers sélectionnés pour une entité.
 */
function getEJSTemplates(dir: string): string[] {
    return fs
        .readdirSync(dir, { withFileTypes: true }) // Lire les fichiers avec leurs types
        .flatMap((dirent) => {
            const filePath = path.join(dir, dirent.name);
            return dirent.isDirectory() ? getEJSTemplates(filePath) : filePath;
        })
        .filter(
            (file) =>
                file.endsWith('.ejs') &&
                SELECTED_TEMPLATES.includes(path.basename(file)),
        );
}

function generateFiles(
    basePath: string,
    imports: string[],
    entity: IEntityJson,
    force: boolean,
) {
    // const templateFiles = fs
    //   .readdirSync(TEMPLATES_DIR)
    //   .filter((file) => file.endsWith(".ejs") && SELECTED_TEMPLATES.includes(file)); // 🔥 Filtrer uniquement les templates sélectionnés
    const templateFiles: string[] = getEJSTemplates(TEMPLATES_DIR);
    templateFiles.forEach((templateFile) => {
        const templatePath = path.join(templateFile);
        console.log(templatePath);
        // Déterminer le bon nom et emplacement du fichier généré
        let outputFileName = templateFile
            .replace('.ejs', '')
            .replace('entity', entity.nameCamelCase) // Remplacement dynamique
            .replace('classEntityName', entity['namePascalCase']);

        let subDir = '';

        if (templateFile.includes('controller')) {
            if (templateFile.includes('controller.spec')) {
                outputFileName = `${entity.nameKebabCase}.controller.spec.ts`;
            } else {
                outputFileName = `${entity.nameKebabCase}.controller.ts`;
            }
        } else if (templateFile.includes('service')) {
            if (templateFile.includes('service.spec')) {
                outputFileName = `${entity.nameKebabCase}.service.spec.ts`;
            } else {
                outputFileName = `${entity.nameKebabCase}.service.ts`;
            }
        } else if (templateFile.includes('interface')) {
            outputFileName = `${entity.nameKebabCase}.interface.ts`;
        } else if (templateFile.includes('dto')) {
            subDir = 'dto';
            outputFileName = outputFileName.replace('dto-', '');
            if (templateFile.includes('create')) {
                outputFileName = `create-${entity.nameKebabCase}.dto.ts`;
            } else if (templateFile.includes('update')) {
                outputFileName = `update-${entity.nameKebabCase}.dto.ts`;
            } else if (templateFile.includes('entity')) {
                outputFileName = `${entity.nameKebabCase}.dto.ts`;
            }
        } else if (templateFile.includes('database')) {
            if (templateFile.includes('database.config.ts')) {
                outputFileName = `../../database.config.ts`;
            }
        } else if (templateFile.includes('config')) {
            if (templateFile.includes('app.module.ts')) {
                outputFileName = `../../app.module.ts`;
            } else if (templateFile.includes('main.ts')) {
                outputFileName = `../../main.ts`;
            }
        } else if (templateFile.includes('module')) {
            outputFileName = `${entity.nameKebabCase}.module.ts`;
        } else if (templateFile.includes('entity')) {
            subDir = 'entities';
            outputFileName = `${entity.nameKebabCase}.entity.ts`;
        } else if (templateFile.includes('mock')) {
            outputFileName = `${entity.nameKebabCase}.mock.ts`;
        }

        const outputPath = path.join(basePath, subDir, outputFileName);

        // Vérifier si le fichier existe déjà
        if (fs.existsSync(outputPath) && !force) {
            console.log(
                `⚠️ Fichier existant, ignoré : ${outputPath} (Utilisez --force pour écraser)`,
            );
        } else {
            ejs.renderFile(
                templatePath,
                { ejsHelpers, imports, entity },
                (err, result) => {
                    if (err) {
                        console.error(
                            `❌ Erreur lors de la génération du fichier ${outputFileName} :`,
                            err,
                        );
                        return;
                    }
                    fs.writeFileSync(outputPath, result);
                    console.log(`✅ Fichier généré : ${outputPath}`);
                },
            );
        }
    });
}
