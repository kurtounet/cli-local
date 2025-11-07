import * as fs from "fs-extra";
import * as path from "path";
import { Command } from "commander";
import { logInfo } from "@utils/logger";

const DEFAULT_IGNORED_FOLDERS = [
  "node_modules",
  ".git",
  "dist",
  "build",
  "vendor",
  ".vscode",
  ".idea",
  "venv",
  "env",
  "__pycache__",
];

// Définition des icônes pour les extensions de fichiers ET pour les dossiers
const ICONS: { [key: string]: string } = {
  // Icône spécifique pour les dossiers
  directory: "📁",
  // Icônes pour les fichiers par extension
  ".py": "🐍",
  ".js": "📜",
  ".ts": "📘",
  ".java": "☕",
  ".cpp": "⚙️",
  ".c": "🔧",
  ".php": "🐘",
  ".rb": "💎",
  ".go": "🐹",
  ".md": "📝",
  ".txt": "📄",
  ".json": "📋",
  ".xml": "📋",
  ".html": "🌐",
  ".css": "🎨",
};

/**
 * Retourne une icône basée sur l'extension ou le type (pour les dossiers).
 * @param type 'directory' ou l'extension du fichier (ex: '.js').
 * @returns L'icône correspondante ou une icône générique si non trouvée.
 */
function getIcon(type: "directory" | string): string {
  return ICONS[type] || "📄"; // Icône par défaut pour les fichiers si non trouvée
}

/**
 * Enregistre la commande 'tree:md' dans l'application Commander.
 * @param program L'instance de Commander.
 */
export function registerTreeMarkdownFnCommand(program: Command) {
  program
    .command("tree:md:fn")
    .argument("<directory>", "Le chemin du dossier à analyser.")
    .description(
      "Génère l'arborescence d'un dossier au format Markdown avec des icônes pour les fichiers et les dossiers.",
    )
    .option(
      "-d, --depth <number>",
      "Profondeur maximale de l'arborescence (0 pour le dossier courant uniquement)",
      (val) => parseInt(val, 10),
      Infinity,
    )
    .option(
      "-o, --output <filename>",
      "Nom du fichier Markdown de sortie",
      "arborescence.md",
    )
    .option(
      "-e, --file-extensions <extensions>",
      "Extensions de fichiers à analyser pour les fonctions (ex: .ts,.js,.py,.php,.java,.cpp,.c,.rb,.go)",
      (val) => val.split(",").map((ext) => ext.trim()),
    )
    .action(
      async (
        directory: string,
        options: { depth: number; output: string; fileExtensions?: string[] },
      ) => {
        const resolvedDirectory = path.resolve(directory);
        const depth = options.depth ?? Infinity;
        const outputFile = options.output;
        const fileExtensions = options.fileExtensions || [];

        logInfo(
          `Génération de l'arborescence Markdown pour le dossier: ${resolvedDirectory}`,
        );
        logInfo(
          `Profondeur maximale: ${depth === Infinity ? "illimitée" : depth}`,
        );
        logInfo(`Fichier de sortie: ${outputFile}`);
        if (fileExtensions.length > 0) {
          logInfo(
            `Extensions de fichiers à analyser pour les fonctions: ${fileExtensions.join(", ")}`,
          );
        }

        try {
          const debugLogPath =
            "I:/cli/cli-local/my-cli/temp/debug_functions.log";
          const markdown = await generateTreeMarkdown(
            resolvedDirectory,
            depth,
            0,
            "",
            DEFAULT_IGNORED_FOLDERS,
            fileExtensions,
            debugLogPath,
          );
          await fs.writeFile(outputFile, markdown, "utf-8");
          logInfo(
            `\n✅ Arborescence Markdown générée et sauvegardée dans '${outputFile}'.`,
          );
        } catch (error: any) {
          console.error(
            `\n❌ Une erreur est survenue lors de la génération de l'arborescence : ${error.message}`,
          );
          process.exit(1);
        }
      },
    );
}

/**
 * Génère l'arborescence d'un dossier au format Markdown.
 * @param dir Le chemin absolu du dossier.
 * @param maxDepth La profondeur maximale à explorer (Infinity pour illimité).
 * @param currentDepth La profondeur actuelle.
 * @param prefix Le préfixe d'indentation pour l'affichage.
 * @param ignoredFolders Les noms de dossiers à ignorer.
 * @returns Une promesse résolue avec la chaîne Markdown de l'arborescence.
 */
async function generateTreeMarkdown(
  dir: string,
  maxDepth: number,
  currentDepth: number = 0,
  prefix: string = "",
  ignoredFolders: string[] = DEFAULT_IGNORED_FOLDERS,
  fileExtensions: string[] = [],
  debugLogPath: string,
): Promise<string> {
  if (currentDepth > maxDepth) {
    return "";
  }

  let markdown = "";
  let entries: fs.Dirent[];

  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
    entries = entries.filter((entry) => !ignoredFolders.includes(entry.name));

    entries.sort((a, b) => {
      if (a.isDirectory() && !b.isDirectory()) return -1;
      if (!a.isDirectory() && b.isDirectory()) return 1;
      return a.name.localeCompare(b.name);
    });
  } catch (e: any) {
    if (e.code === "EACCES") {
      return `${prefix}├── [Accès refusé: ${path.basename(dir)}]\n`;
    }
    console.warn(
      `Avertissement: Impossible de lire le répertoire ${dir}: ${e.message}`,
    );
    return "";
  }

  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    const entryPath = path.join(dir, entry.name);
    const isLast = i === entries.length - 1;
    const connector = isLast ? "└── " : "├── ";
    const childPrefix = isLast ? "    " : "│   ";

    if (entry.isDirectory()) {
      const icon = getIcon("directory"); // Obtient l'icône du dossier
      markdown += `${prefix}${connector}${icon} ${entry.name}/\n`; // Intègre l'icône du dossier
      markdown += await generateTreeMarkdown(
        entryPath,
        maxDepth,
        currentDepth + 1,
        prefix + childPrefix,
        ignoredFolders,
        fileExtensions,
        debugLogPath,
      );
    } else if (entry.isFile()) {
      if (entry.name.startsWith(".")) {
        continue;
      }
      const extension = path.extname(entry.name).toLowerCase();
      const icon = getIcon(extension); // Obtient l'icône du fichier
      markdown += `${prefix}${connector}${icon} ${entry.name}\n`;

      await fs.appendFile(
        debugLogPath,
        `  Fichier: ${entry.name}, Extension: ${extension}, Extensions à analyser: ${fileExtensions.join(", ")}\n`,
      );
      await fs.appendFile(
        debugLogPath,
        `  fileExtensions.includes(extension): ${fileExtensions.includes(extension)}\n`,
      );

      if (fileExtensions.includes(extension)) {
        const functions = await extractFunctionsFromFile(
          entryPath,
          debugLogPath,
        );
        if (functions.length > 0) {
          markdown += `${prefix}${childPrefix}  *Fonctions trouvées:*\n`;
          functions.forEach((func) => {
            markdown += `${prefix}${childPrefix}    - 🔧 ${func.name}(${func.parameters}) (ligne ${func.lineNumber})\n`;
          });
        } else {
          markdown += `${prefix}${childPrefix}  *Aucune fonction trouvée*\n`;
        }
      }
    }
  }

  return markdown;
}

interface FunctionInfo {
  name: string;
  parameters: string;
  content: string;
  lineNumber: number;
}

async function extractFunctionsFromFile(
  filePath: string,
  debugLogPath: string,
): Promise<FunctionInfo[]> {
  const functions: FunctionInfo[] = [];

  try {
    const fileContent = await fs.readFile(filePath, "utf-8");
    await fs.appendFile(
      "I:/cli/cli-local/my-cli/temp/debug_functions.log",
      `\n--- Début du débogage pour ${filePath} ---\n`,
    );
    await fs.appendFile(
      "I:/cli/cli-local/my-cli/temp/debug_functions.log",
      `Contenu du fichier:\n${fileContent.substring(0, 500)}...\n`,
    ); // Log les 500 premiers caractères

    let functionRegex: RegExp | undefined;
    const extension = path.extname(filePath).toLowerCase();

    switch (extension) {
      case ".ts":
      case ".js":
        functionRegex =
          /(?:(?:export|public|private|protected|static|async)\s+)?(?:function\*?\s+)?([a-zA-Z_$][0-9a-zA-Z_$]*)(?<!:)\s*\(([^)]*)\)\s*(?:=>)?\s*\{([\s\S]*?)\}/g;
        break;
      case ".py":
        functionRegex = /def\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(([^)]*)\):/g;
        break;
      case ".php":
        functionRegex = /function\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(([^)]*)\)/g;
        break;
      case ".java":
        functionRegex =
          /(?:public|protected|private|static|final|abstract|\s)*\s*[\w\<\>\[\]]+\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(([^)]*)\)/g;
        break;
      case ".cpp":
      case ".h":
      case ".c":
        functionRegex =
          /(?:(?:inline|virtual|explicit|static|friend|const|constexpr|extern)\s+)*[\w\<\>\[\]]+\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(([^)]*)\)/g;
        break;
      case ".rb":
        functionRegex = /def\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*(?:\(([^)]*)\))?/g;
        break;
      case ".go":
        functionRegex =
          /func(?:\s+\([a-zA-Z_][a-zA-Z0-9_]*\s+[\w\.]+\))?\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(([^)]*)\)/g;
        break;
      default:
        await fs.appendFile(
          debugLogPath,
          `Extension non prise en charge: ${extension}\n`,
        );
        return functions;
    }

    await fs.appendFile(
      debugLogPath,
      `Regex utilisée pour ${extension}: ${functionRegex.source}\n`,
    );

    if (!functionRegex) {
      await fs.appendFile(
        debugLogPath,
        `Aucune regex définie pour ${extension}\n`,
      );
      return functions;
    }
    let match;
    let matchCount = 0;

    while ((match = functionRegex.exec(fileContent)) !== null) {
      matchCount++;
      const [fullMatch, name, parameters, content = ""] = match;
      const lineNumber =
        (fileContent.substring(0, match.index).match(/\n/g) || []).length + 1;

      await fs.appendFile(
        debugLogPath,
        `  Correspondance trouvée (${matchCount}):\n`,
      );
      await fs.appendFile(debugLogPath, `    Nom: ${name}\n`);
      await fs.appendFile(debugLogPath, `    Paramètres: ${parameters}\n`);
      await fs.appendFile(debugLogPath, `    Ligne: ${lineNumber}\n`);
      await fs.appendFile(
        debugLogPath,
        `    Contenu (extrait): ${content.substring(0, 100)}...\n`,
      );

      const contentLines = content.trim().split("\n").slice(0, 5).join("\n");

      functions.push({
        name,
        parameters,
        content:
          contentLines + (content.trim().split("\n").length > 5 ? "\n..." : ""),
        lineNumber,
      });
    }
    if (matchCount === 0) {
      await fs.appendFile(
        debugLogPath,
        `Aucune correspondance trouvée pour ${filePath}\n`,
      );
    }
  } catch (error: any) {
    await fs.appendFile(
      debugLogPath,
      `Erreur lors de l'extraction des fonctions du fichier ${filePath}: ${error.message}\n`,
    );
    console.error(
      `Erreur lors de l'extraction des fonctions du fichier ${filePath}: ${error.message}`,
    );
  }
  await fs.appendFile(
    debugLogPath,
    `--- Fin du débogage pour ${filePath} ---\n\n`,
  );
  return functions;
}
