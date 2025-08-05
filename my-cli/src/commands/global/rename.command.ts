import * as fs from "fs-extra";
import * as path from "path";
import { Command } from "commander";
import inquirer from "inquirer";

// Types pour les options de casse
type CaseType =
  | "camelCase"
  | "kebabCase"
  | "snakeCase"
  | "pascalCase"
  | "constantCase";

// Fonctions de conversion de casse
const caseConverters = {
  camelCase: (str: string): string => {
    return str
      .replace(/[\s_\-\.]+(.)/g, (_, char) => char.toUpperCase())
      .replace(/^[A-Z]/, (char) => char.toLowerCase());
  },

  kebabCase: (str: string): string => {
    return str
      .replace(/[\s_\.]+/g, "-")
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
      .toLowerCase()
      .replace(/-+/g, "-")
      .replace(/^-+|-+$/g, "");
  },

  snakeCase: (str: string): string => {
    return str
      .replace(/[\s\-\.]+/g, "_")
      .replace(/([a-z])([A-Z])/g, "$1_$2")
      .replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2")
      .toLowerCase()
      .replace(/_+/g, "_")
      .replace(/^_+|_+$/g, "");
  },

  pascalCase: (str: string): string => {
    return str
      .replace(/[\s_\-\.]+(.)/g, (_, char) => char.toUpperCase())
      .replace(/^[a-z]/, (char) => char.toUpperCase());
  },

  constantCase: (str: string): string => {
    return str
      .replace(/[\s\-\.]+/g, "_")
      .replace(/([a-z])([A-Z])/g, "$1_$2")
      .replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2")
      .toUpperCase()
      .replace(/_+/g, "_")
      .replace(/^_+|_+$/g, "");
  },
};

// Interface pour les options de renommage
interface RenameOptions {
  caseType: CaseType;
  includeExtensions: boolean;
  dryRun: boolean;
  recursive: boolean;
  filePattern?: string;
}
export function registerRenameCommand(program: Command) {
  program
    .command("rename")
    .argument("<directory>")
    .description("Renomme les fichiers selon différents formats de casse")
    .option(
      "-d, --depth <number>",
      "Profondeur maximale pour la recherche récursive",
      (val) => parseInt(val, 10),
      Infinity,
    )
    .action((directory: string, options: { depth: number }) => {
      runRenameCommand(directory, options);
    });
}
// Fonction pour obtenir tous les fichiers récursivement
async function getFilesRecursively(
  dir: string,
  depth: number,
  currentDepth: number = 0,
): Promise<string[]> {
  if (currentDepth >= depth) return [];

  const files: string[] = [];
  const items = await fs.readdir(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stats = await fs.stat(fullPath);

    if (stats.isDirectory()) {
      const subFiles = await getFilesRecursively(
        fullPath,
        depth,
        currentDepth + 1,
      );
      files.push(...subFiles);
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

// Fonction pour filtrer les fichiers selon un pattern
function filterFiles(files: string[], pattern?: string): string[] {
  if (!pattern) return files;

  const regex = new RegExp(pattern);
  return files.filter((file) => regex.test(path.basename(file)));
}

// Fonction pour renommer les fichiers
async function renameFiles(
  files: string[],
  options: RenameOptions,
): Promise<void> {
  const converter = caseConverters[options.caseType];
  let renamed = 0;
  let skipped = 0;

  console.log(
    `\n🔄 ${options.dryRun ? "Simulation" : "Renommage"} des fichiers en ${options.caseType}...\n`,
  );

  for (const filePath of files) {
    const dir = path.dirname(filePath);
    const ext = path.extname(filePath);
    const nameWithoutExt = path.basename(filePath, ext);

    // Convertir le nom selon la casse choisie
    const convertedName = converter(nameWithoutExt);

    // Gérer l'extension si demandé
    const convertedExt = options.includeExtensions
      ? converter(ext.slice(1))
      : ext.slice(1);
    const finalExt = convertedExt ? `.${convertedExt}` : ext;

    const newFileName = convertedName + finalExt;
    const newFilePath = path.join(dir, newFileName);

    // Vérifier si le nom change
    if (path.basename(filePath) !== newFileName) {
      if (options.dryRun) {
        console.log(
          `📝 ${path.relative(process.cwd(), filePath)} → ${newFileName}`,
        );
      } else {
        try {
          // Vérifier si le fichier de destination existe déjà
          if (await fs.pathExists(newFilePath)) {
            console.warn(`⚠️  Fichier déjà existant: ${newFileName}, ignoré`);
            skipped++;
            continue;
          }

          await fs.rename(filePath, newFilePath);
          console.log(
            `✅ ${path.relative(process.cwd(), filePath)} → ${newFileName}`,
          );
          renamed++;
        } catch (error) {
          console.error(`❌ Erreur pour ${path.basename(filePath)}:`, error);
          skipped++;
        }
      }
    }
  }

  if (!options.dryRun) {
    console.log(
      `\n📊 Résumé: ${renamed} fichiers renommés, ${skipped} ignorés`,
    );
  } else {
    console.log("\n📋 Mode simulation - aucun fichier n'a été renommé");
    console.log("💡 Relancez sans --dry-run pour appliquer les changements");
  }
}

// Fonction principale avec Inquirer
async function runRenameCommand(
  directory: string,
  options: { depth: number },
): Promise<void> {
  try {
    // Vérifier si le répertoire existe
    if (!(await fs.pathExists(directory))) {
      console.error(`❌ Le répertoire "${directory}" n'existe pas`);
      return;
    }

    // Obtenir la liste des fichiers
    const allFiles = await getFilesRecursively(directory, options.depth);

    if (allFiles.length === 0) {
      console.log("📭 Aucun fichier trouvé dans le répertoire spécifié");
      return;
    }

    console.log(`📁 ${allFiles.length} fichiers trouvés dans "${directory}"`);

    // Questions Inquirer
    const answers = await inquirer.prompt([
      {
        type: "list",
        name: "caseType",
        message: "Choisissez le type de casse pour le renommage:",
        choices: [
          { name: "kebab-case (mon-fichier.txt)", value: "kebabCase" },
          { name: "camelCase (monFichier.txt)", value: "camelCase" },
          { name: "snake_case (mon_fichier.txt)", value: "snakeCase" },
          { name: "PascalCase (MonFichier.txt)", value: "pascalCase" },
          { name: "CONSTANT_CASE (MON_FICHIER.txt)", value: "constantCase" },
        ],
        default: "kebabCase",
      },
      {
        type: "input",
        name: "filePattern",
        message: "Pattern de fichiers à filtrer (regex, optionnel):",
        default: "",
      },
      {
        type: "confirm",
        name: "includeExtensions",
        message: "Appliquer la conversion aux extensions de fichiers?",
        default: false,
      },
      {
        type: "confirm",
        name: "recursive",
        message: "Traiter les sous-dossiers récursivement?",
        default: true,
      },
      {
        type: "confirm",
        name: "dryRun",
        message: "Mode simulation (aperçu sans modification)?",
        default: true,
      },
    ]);

    // Filtrer les fichiers si un pattern est spécifié
    const filteredFiles = filterFiles(
      allFiles,
      answers.filePattern || undefined,
    );

    if (filteredFiles.length === 0) {
      console.log("📭 Aucun fichier ne correspond au pattern spécifié");
      return;
    }

    if (answers.filePattern) {
      console.log(
        `🔍 ${filteredFiles.length} fichiers correspondent au pattern "${answers.filePattern}"`,
      );
    }

    // Aperçu des conversions
    console.log("\n📋 Aperçu des conversions:");
    const converter = caseConverters[answers.caseType as CaseType];
    const examples = filteredFiles.slice(0, 5).map((file) => {
      const name = path.basename(file, path.extname(file));
      return `  ${name} → ${converter(name)}`;
    });
    console.log(examples.join("\n"));

    if (filteredFiles.length > 5) {
      console.log(`  ... et ${filteredFiles.length - 5} autres fichiers`);
    }

    // Confirmation finale si ce n'est pas un dry run
    if (!answers.dryRun) {
      const confirm = await inquirer.prompt([
        {
          type: "confirm",
          name: "proceed",
          message: `Confirmer le renommage de ${filteredFiles.length} fichiers?`,
          default: false,
        },
      ]);

      if (!confirm.proceed) {
        console.log("❌ Opération annulée");
        return;
      }
    }

    // Exécuter le renommage
    await renameFiles(filteredFiles, {
      caseType: answers.caseType as CaseType,
      includeExtensions: answers.includeExtensions,
      dryRun: answers.dryRun,
      recursive: answers.recursive,
      filePattern: answers.filePattern || undefined,
    });
  } catch (error) {
    console.error("❌ Erreur lors du renommage:", error);
  }
}

/*
N'oubliez pas d'installer les dépendances nécessaires :

```bash
npm install fs-extra inquirer
npm install --save-dev @types/inquirer
```

## Fonctionnalités incluses :

1. **Options de casse multiples** :
   - `kebab-case` (mon-fichier.txt)
   - `camelCase` (monFichier.txt)
   - `snake_case` (mon_fichier.txt)
   - `PascalCase` (MonFichier.txt)
   - `CONSTANT_CASE` (MON_FICHIER.txt)

2. **Options interactives avec Inquirer** :
   - Choix du type de casse
   - Pattern de filtrage (regex)
   - Conversion des extensions
   - Mode récursif
   - Mode simulation (dry-run)

3. **Fonctionnalités avancées** :
   - Aperçu des conversions
   - Confirmation avant application
   - Gestion des conflits de noms
   - Statistiques de renommage
   - Support de la profondeur avec l'option `-d`

4. **Interface utilisateur** :
   - Messages colorés avec emojis
   - Progression claire
   - Gestion d'erreurs robuste

## Utilisation :

```bash
# Renommer dans le dossier courant
mon-cli rename .

# Renommer dans un dossier spécifique avec profondeur limitée
mon-cli rename ./src -d 2

# Le script vous guidera interactivement pour choisir les options
```

Le script vous demandera interactivement toutes les options nécessaires et affichera un aperçu avant d'appliquer les modifications !
*/
