import * as fs from "fs-extra";
import * as path from "path";
import { Command } from "commander";
import { saveFileAsync } from "@utils/file-utils";
import { logError, logInfo } from "@utils/logger";
import { EMOJI } from "@constants/messages";

const DEFAULT_IGNORED_FOLDERS = [
  "node_modules",
  ".git",
  "dist",
  "build",
  "vendor",
];
export function registerTreeMdCommand(program: Command) {
  program
    .command("tree:markdown")
    .argument("<directory>")
    .description("Affiche l'arborescence d'un dossier en Markdown")
    .option(
      "-d, --depth <number>",
      "Profondeur maximale",
      (val) => parseInt(val, 10),
      Infinity,
    )
    .action((directory: string, options: { depth: number }) => {
      const depth = options.depth ?? Infinity;
      const markdown = generateTreeMarkdown(directory, depth);
      saveFileAsync("arborescence.md", markdown);
      logInfo("✅ ###### Arborescence Markdown ######");
    });
}
/**
 * Generates a Markdown representation of a directory tree.
 * @param dir The directory to generate the tree from.
 * @param maxDepth The maximum depth to traverse.
 * @param currentDepth The current depth of traversal (for recursion).
 * @param prefix The prefix for each line in the Markdown output.
 * @param ignoredFolders A list of folder names to ignore.
 * @returns The Markdown string representing the directory tree.
 */
function generateTreeMarkdown(
  dir: string,
  maxDepth: number,
  currentDepth: number = 0,
  prefix: string = "",
  ignoredFolders: string[] = DEFAULT_IGNORED_FOLDERS,
): string {
  if (currentDepth > maxDepth) return "";

  let markdown = "";

  try {
    const items = fs.readdirSync(dir, { withFileTypes: true });

    items.map((item) => {
      if (ignoredFolders.includes(item.name)) return; // Ignore les dossiers spécifiés

      const fullPath = path.join(dir, item.name);
      const isDirectory = item.isDirectory();

      const bullet = isDirectory
        ? `## 📂 - **${item.name}/**`
        : `📄 - ${item.name}`;

      markdown += `${prefix}${bullet}\n`;

      if (isDirectory) {
        markdown += generateTreeMarkdown(
          fullPath,
          maxDepth,
          currentDepth + 1,
          prefix + "  ",
          ignoredFolders,
        );
      }
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      logError(
        `${EMOJI.error} Erreur lors de la lecture du dossier : ${error.message}`,
      );
    } else {
      console.error(" ${EMOJI.error} Une erreur inconnue est survenue.");
    }
  }

  return markdown;
}
