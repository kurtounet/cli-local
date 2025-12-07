import path from "path";
import fs from "fs";

import { EMOJI } from "@constants/messages";
import { logError } from "@utils/logger";
import { verifyInGitIgnoreFile } from "@features/frameworks/commun/services/git.service";

const DEFAULT_IGNORED_FOLDERS = [
  ".angular",
  ".qodo",
  ".vscode",
  "dist",
  "node_modules",
  ".git",
  "build",
  "var",
  "vendor",
];
type TreeNode = {
  _type: "file" | "directory";
  name: string;
  gitIgnore: boolean;
  pathInProject: string;
  createdAt: Date;
  updatedAt: Date;
  children?: TreeNode[];
};

export function generateTreeJson(
  dir: string,
  maxDepth: number,
  currentDepth: number = 0,
  ignoredFolders: string[] = DEFAULT_IGNORED_FOLDERS,
): TreeNode | null {
  if (currentDepth > maxDepth) return null;

  try {
    const stats = fs.statSync(dir);
    const name = path.basename(dir);

    if (!stats.isDirectory()) {
      return {
        _type: "file",
        name,
        gitIgnore: verifyInGitIgnoreFile(process.cwd() + "/.gitignore", dir),
        pathInProject: dir,
        createdAt: stats.birthtime,
        updatedAt: stats.mtime,
      };
    }

    const children: TreeNode[] = [];

    const items = fs.readdirSync(dir, { withFileTypes: true });

    for (const item of items) {
      if (ignoredFolders.includes(item.name)) continue;

      const fullPath = path.join(dir, item.name);

      if (item.isDirectory()) {
        const child = generateTreeJson(
          fullPath,
          maxDepth,
          currentDepth + 1,
          ignoredFolders,
        );
        if (child) children.push(child);
      } else {
        children.push({
          _type: "file",
          name: item.name,
          gitIgnore: verifyInGitIgnoreFile(process.cwd() + "/.gitignore", dir),
          pathInProject: dir,
          createdAt: stats.birthtime,
          updatedAt: stats.mtime,
        });
      }
    }

    return {
      _type: "directory",
      name,
      gitIgnore: verifyInGitIgnoreFile(process.cwd() + "/.gitignore", dir),
      pathInProject: dir,
      createdAt: stats.birthtime,
      updatedAt: stats.mtime,
      children,
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      logError(
        `${EMOJI.error} Erreur lors de la lecture du dossier : ${error.message}`,
      );
    } else {
      logError("${EMOJI.error} Une erreur inconnue est survenue.");
    }
    return null;
  }
}
