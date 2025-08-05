import * as fs from "fs-extra";
import * as path from "path";
import { Command } from "commander";

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
export function registerTreeMarkdownCommand(program: Command) {
  program
    .command("tree:md")
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
    .action(
      async (directory: string, options: { depth: number; output: string }) => {
        const resolvedDirectory = path.resolve(directory);
        const depth = options.depth ?? Infinity;
        const outputFile = options.output;

        console.log(
          `Génération de l'arborescence Markdown pour le dossier: ${resolvedDirectory}`,
        );
        console.log(
          `Profondeur maximale: ${depth === Infinity ? "illimitée" : depth}`,
        );
        console.log(`Fichier de sortie: ${outputFile}`);

        try {
          const markdown = await generateTreeMarkdown(resolvedDirectory, depth);
          await fs.writeFile(outputFile, markdown, "utf-8");
          console.log(
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
      );
    } else if (entry.isFile()) {
      if (entry.name.startsWith(".")) {
        continue;
      }
      const extension = path.extname(entry.name).toLowerCase();
      const icon = getIcon(extension); // Obtient l'icône du fichier
      markdown += `${prefix}${connector}${icon} ${entry.name}\n`;
    }
  }

  return markdown;
}
