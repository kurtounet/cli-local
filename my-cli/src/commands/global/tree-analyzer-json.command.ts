import * as fs from "fs-extra"; // Utilisation de fs-extra comme demandé
import * as path from "path";
import { Command } from "commander";
import { logError, logInfo } from "@utils/logger";
import { EMOJI } from "@constants/messages";

// Assurez-vous que cette classe TreeAnalyzerJson est dans un fichier séparé
// par exemple, 'src/treeAnalyzer.ts' et que vous l'exportez.
// Pour cet exemple, je l'inclus directement pour la démonstration.

// --- Début de la classe TreeAnalyzerJson (incluse pour la démonstration) ---
/**
 * Interface pour représenter une fonction ou une classe extraite d'un fichier.
 */
interface CodeEntity {
  type: "function" | "class" | "error";
  name: string;
  args: string[];
  line: number;
  docstring?: string;
}

/**
 * Interface pour représenter un fichier dans la structure du projet.
 */
interface FileEntry {
  type: "file";
  name: string;
  level: number;
  path: string; // Chemin relatif
  functions: CodeEntity[];
  extension: string;
  size: number; // Taille en octets
  function_count: number;
}

/**
 * Interface pour représenter un répertoire dans la structure du projet.
 */
interface DirectoryEntry {
  type: "directory";
  name: string;
  level: number;
  path: string; // Chemin relatif
  children: ProjectStructureEntry[];
}

/**
 * Type union pour une entrée dans la structure du projet (fichier ou répertoire).
 */
type ProjectStructureEntry = FileEntry | DirectoryEntry;

/**
 * Interface pour la sortie JSON finale de l'analyse.
 */
interface ProjectAnalysisOutput {
  project_name: string;
  root_path: string;
  generated_at: string;
  supported_extensions: string[];
  total_files: number;
  total_functions: number;
  structure: ProjectStructureEntry[];
}

/**
 * Classe pour analyser la structure d'un projet et extraire les fonctions/classes.
 */
class TreeAnalyzerJson {
  private rootPath: string;
  private outputFile: string;
  private supportedExtensions: Set<string>;
  private ignoreDirs: Set<string>;

  constructor(rootPath: string, outputFile: string = "project_structure.json") {
    this.rootPath = path.resolve(rootPath);
    this.outputFile = outputFile;
    this.supportedExtensions = new Set([
      ".py",
      ".js",
      ".ts",
      ".java",
      ".cpp",
      ".c",
      ".php",
      ".rb",
      ".go",
    ]);
    // Ajout des dossiers ignorés par défaut de la CLI
    this.ignoreDirs = new Set([
      ".git",
      "__pycache__",
      "node_modules",
      ".vscode",
      ".idea",
      "venv",
      "env",
      "dist",
      "build",
      "vendor",
    ]);
  }

  private async extractJavaScriptFunctions(
    filePath: string,
  ): Promise<CodeEntity[]> {
    const functions: CodeEntity[] = [];
    try {
      const content = await fs.readFile(filePath, "utf-8");
      const patterns = [
        /function\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(/g,
        /(?:const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*function\s*\(/g,
        /(?:const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*\((?:[^)]*?)\)\s*=>/g,
        /([a-zA-Z_$][a-zA-Z0-9_$]*)\s*:\s*function\s*\(/g,
        /([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\((?:[^)]*?)\)\s*{/g,
        /class\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/g,
      ];
      for (const pattern of patterns) {
        let match: RegExpExecArray | null;
        while ((match = pattern.exec(content)) !== null) {
          const funcName = match[1];
          const lineNum =
            (content.substring(0, match.index).match(/\n/g) || []).length + 1;
          const funcType: "function" | "class" = pattern.source.includes(
            "class",
          )
            ? "class"
            : "function";
          functions.push({
            type: funcType,
            name: funcName,
            args: [],
            line: lineNum,
          });
        }
      }
    } catch (e: any) {
      functions.push({
        type: "error",
        name: `Erreur lors de l'analyse JS/TS: ${e.message}`,
        args: [],
        line: 0,
      });
    }
    return functions;
  }

  private async extractFunctionsGeneric(
    filePath: string,
    extension: string,
  ): Promise<CodeEntity[]> {
    const functions: CodeEntity[] = [];
    try {
      const content = await fs.readFile(filePath, "utf-8");
      const patterns: { [key: string]: RegExp[] } = {
        ".py": [
          /^\s*(?:async\s+)?def\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(.*?\):/gm,
          /^\s*class\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*:/gm,
        ],
        ".java": [
          /(?:public|private|protected)?\s*(?:static)?\s*\w+\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g,
          /class\s+([a-zA-Z_][a-zA-Z0-9_]*)/g,
        ],
        ".cpp": [
          /(?:(?:inline|virtual|static|const)\s+)*\w+\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(.*/g,
          /class\s+([a-zA-Z_][a-zA-Z0-9_]*)/g,
          /struct\s+([a-zA-Z_][a-zA-Z0-9_]*)/g,
        ],
        ".c": [/\w+\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g],
        ".php": [
          /function\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g,
          /class\s+([a-zA-Z_][a-zA-Z0-9_]*)/g,
          /trait\s+([a-zA-Z_][a-zA-Z0-9_]*)/g,
          /interface\s+([a-zA-Z_][a-zA-Z0-9_]*)/g,
        ],
        ".rb": [
          /def\s+([a-zA-Z_][a-zA-Z0-9_]*)/g,
          /class\s+([a-zA-Z_][a-zA-Z0-9_]*)/g,
        ],
        ".go": [
          /func\s+(?:\(.*?\)\s*)?([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g,
          /type\s+([a-zA-Z_][a-zA-Z0-9_]*)\s+struct/g,
        ],
      };
      const langPatterns = patterns[extension];
      if (langPatterns) {
        for (const pattern of langPatterns) {
          let match: RegExpExecArray | null;
          while ((match = pattern.exec(content)) !== null) {
            const funcName = match[1];
            const lineNum =
              (content.substring(0, match.index).match(/\n/g) || []).length + 1;
            const funcType: "function" | "class" =
              pattern.source.includes("class") ||
              pattern.source.includes("struct") ||
              pattern.source.includes("trait") ||
              pattern.source.includes("interface")
                ? "class"
                : "function";
            functions.push({
              type: funcType,
              name: funcName,
              args: [],
              line: lineNum,
            });
          }
        }
      }
    } catch (e: any) {
      functions.push({
        type: "error",
        name: `Erreur lors de l'analyse générique (${extension}): ${e.message}`,
        args: [],
        line: 0,
      });
    }
    return functions;
  }

  private async analyzeFile(filePath: string): Promise<CodeEntity[]> {
    const ext = path.extname(filePath).toLowerCase();
    if (ext === ".js" || ext === ".ts") {
      return this.extractJavaScriptFunctions(filePath);
    } else if (this.supportedExtensions.has(ext)) {
      return this.extractFunctionsGeneric(filePath, ext);
    } else {
      return [];
    }
  }

  private shouldIgnore(itemPath: string): boolean {
    const baseName = path.basename(itemPath);
    const parts = itemPath.split(path.sep);
    return (
      this.ignoreDirs.has(baseName) ||
      parts.some((part) => this.ignoreDirs.has(part))
    );
  }

  private async generateTreeStructure(
    currentPath: string = this.rootPath,
    level: number = 0,
  ): Promise<ProjectStructureEntry[]> {
    const items: ProjectStructureEntry[] = [];
    try {
      const dirEntries = await fs.readdir(currentPath, { withFileTypes: true });
      dirEntries.sort((a, b) => {
        if (a.isDirectory() && !b.isDirectory()) return -1;
        if (!a.isDirectory() && b.isDirectory()) return 1;
        return a.name.localeCompare(b.name);
      });

      for (const entry of dirEntries) {
        const fullPath = path.join(currentPath, entry.name);
        const relativePath = path.relative(this.rootPath, fullPath);

        if (this.shouldIgnore(fullPath)) {
          continue;
        }
        if (entry.isSymbolicLink()) {
          continue;
        }

        if (entry.isDirectory()) {
          items.push({
            type: "directory",
            name: entry.name,
            level: level,
            path: relativePath,
            children: await this.generateTreeStructure(fullPath, level + 1),
          } as DirectoryEntry);
        } else if (entry.isFile()) {
          const ext = path.extname(entry.name).toLowerCase();
          let functions: CodeEntity[] = [];
          if (this.supportedExtensions.has(ext)) {
            functions = await this.analyzeFile(fullPath);
          }

          let fileSize = 0;
          try {
            const stats = await fs.stat(fullPath);
            fileSize = stats.size;
          } catch (statError: any) {
            console.warn(
              `Avertissement: Impossible d'obtenir la taille de ${fullPath}: ${statError.message}`,
            );
          }

          items.push({
            type: "file",
            name: entry.name,
            level: level,
            path: relativePath,
            functions: functions,
            extension: ext,
            size: fileSize,
            function_count: functions.length,
          } as FileEntry);
        }
      }
    } catch (e: any) {
      if (e.code === "EACCES") {
        console.warn(
          `Avertissement: Accès refusé pour ${currentPath}. Ce répertoire sera ignoré.`,
        );
      } else {
        console.error(
          `Erreur inattendue lors de la traversée de ${currentPath}: ${e.message}`,
        );
      }
    }
    return items;
  }

  private countFiles(structure: ProjectStructureEntry[]): number {
    let count = 0;
    for (const item of structure) {
      if (item.type === "file") {
        count++;
      } else if (item.type === "directory") {
        count += this.countFiles((item as DirectoryEntry).children || []);
      }
    }
    return count;
  }

  private countFunctions(structure: ProjectStructureEntry[]): number {
    let count = 0;
    for (const item of structure) {
      if (item.type === "file") {
        count += (item as FileEntry).functions
          ? (item as FileEntry).functions.length
          : 0;
      } else if (item.type === "directory") {
        count += this.countFunctions((item as DirectoryEntry).children || []);
      }
    }
    return count;
  }

  public async run(): Promise<void> {
    logInfo(`Analyse du répertoire: ${this.rootPath}`);
    logInfo(`Fichier de sortie: ${this.outputFile}`);

    try {
      const stats = await fs.stat(this.rootPath);
      if (!stats.isDirectory()) {
        console.error(
          `Erreur: Le chemin '${this.rootPath}' n'est pas un répertoire.`,
        );
        return;
      }
    } catch (e: any) {
      console.error(
        `Erreur: Le répertoire '${this.rootPath}' n'existe pas ou est inaccessible: ${e.message}`,
      );
      return;
    }

    const structure = await this.generateTreeStructure();
    const outputData: ProjectAnalysisOutput = {
      project_name: path.basename(this.rootPath),
      root_path: this.rootPath,
      generated_at: new Date().toISOString(),
      supported_extensions: Array.from(this.supportedExtensions),
      total_files: this.countFiles(structure),
      total_functions: this.countFunctions(structure),
      structure: structure,
    };

    try {
      await fs.writeFile(
        this.outputFile,
        JSON.stringify(outputData, null, 2),
        "utf-8",
      );
      logInfo(
        `\n✅ Analyse terminée ! Consultez le fichier '${this.outputFile}'`,
      );

      const totalFiles = this.countFiles(structure);
      const totalFunctions = this.countFunctions(structure);
      logInfo(
        `📊 Résumé: ${totalFiles} fichiers analysés, ${totalFunctions} fonctions et classes trouvées.`,
      );
    } catch (e: any) {
      console.error(
        `Erreur lors de l'écriture du fichier JSON ${this.outputFile}: ${e.message}`,
      );
    }
  }
}
// --- Fin de la classe TreeAnalyzerJson ---

/**
 * Enregistre la commande 'tree:json' dans l'application Commander.
 * @param program L'instance de Commander.
 */
export function registerTreeJsonCommand(program: Command) {
  program
    .command("tree:json")
    .argument("<directory>", "Le chemin du dossier à analyser.")
    .option(
      "-o, --output <filename>",
      "Nom du fichier JSON de sortie",
      "project_structure.json",
    )
    .description(
      "Analyse l'arborescence d'un dossier et génère un fichier JSON détaillé avec les fonctions/classes.",
    )
    .action(async (directory: string, options: { output: string }) => {
      logInfo(`Lancement de l'analyse JSON pour le dossier: ${directory}`);
      logInfo(`Fichier de sortie: ${options.output}`);

      try {
        const analyzer = new TreeAnalyzerJson(directory, options.output);
        await analyzer.run();
      } catch (error: any) {
        logError(
          `${EMOJI.error} Une erreur est survenue lors de l'analyse : ${error.message}`,
        );
        process.exit(1); // Sortir avec un code d'erreur
      }
    });
}

// Exemple d'utilisation de la CLI (vous auriez ceci dans votre fichier principal index.ts ou app.ts)
/*
import { program } from 'commander';
registerTreeJsonCommand(program);
program.parse(process.argv);
*/
