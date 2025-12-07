import path from "node:path";
import fs from "fs-extra";
import ejs from "ejs";
import { ScaffoldOptions } from "@commands/global/scaffold.command";

import { ARCHITECTURE_NUXT_EJS_MOCK } from "@features/frameworks/nuxt/config/nuxt-architecture.mock";
import { logDebug, logInfo } from "@utils/logger";
import { IDirectory } from "@features/frameworks/models/framework-commun.model";

/**
 * @const {string} DEFAULT_TEMPLATES_ROOT
 * @description Chemin absolu vers le dossier racine des templates EJS pour Nuxt.
 */
const DEFAULT_TEMPLATES_ROOT = path.resolve(
  __dirname,
  "../../frameworks/nuxt/templates-ejs",
);

/**
 * @function buildPathFileTarget
 * @description Construit le chemin de destination absolu pour un fichier ou un dossier.
 */
function buildPathFileTarget(
  rootDirProject: string,
  base: string,
  name: string,
) {
  const cleanBase = base.replace(/^\.\/+/, "");
  return path.resolve(rootDirProject, cleanBase, name);
}

/**
 * @async
 * @function ensureDir
 * @description S'assure qu'un dossier existe, le crée si nécessaire.
 */
async function ensureDir(p: string, opts: ScaffoldOptions) {
  if (opts.verbose) logInfo(`[dir] ${p}`);
  if (!opts.dryRun) await fs.mkdirp(p);
}

/**
 * @async
 * @function renderAndWriteFile
 * @description Rend un template EJS et écrit le résultat dans un fichier de destination.
 */
async function renderAndWriteFile(
  pathFileTarget: string,
  templateFile: string,
  varsTemplate: Record<string, any>,
  opts: ScaffoldOptions,
) {
  const exists = await fs.pathExists(pathFileTarget);
  if (exists && !opts.overwrite) {
    if (opts.verbose) logInfo(`[skip] exists: ${pathFileTarget}`);
    return;
  }
  const templateAbs = path.isAbsolute(templateFile)
    ? templateFile
    : path.resolve(opts.templatesRoot || DEFAULT_TEMPLATES_ROOT, templateFile);

  const tpl = await fs.readFile(templateAbs, "utf-8");
  const out = ejs.render(tpl, varsTemplate, { filename: templateAbs }); // filename utile pour includes
  if (opts.verbose)
    logInfo(`${exists ? "[overwrite]" : "[file]"} ${pathFileTarget}`);
  if (!opts.dryRun) await fs.outputFile(pathFileTarget, out);
}

/**
 * @async
 * @function processItem
 * @description Traite un élément (fichier ou dossier) de la structure du projet.
 */
async function processItem(
  item: IDirectory,
  rootDirProject: string,
  opts: ScaffoldOptions,
) {
  const pathFileTarget = buildPathFileTarget(
    rootDirProject,
    item.pathInProject,
    item.name,
  );

  if (item._type === "directory") {
    await ensureDir(pathFileTarget, opts);
    for (const child of item.children || []) {
      await processItem(child, rootDirProject, opts);
    }
    return;
  }
  // file
  let varsTemplate = { key1: "value1", key2: "value2" };
  logDebug(`itemVars: ${JSON.stringify(varsTemplate)}`);
  const templatePath = item.content || ""; // ici on attend un chemin vers .ejs
  await renderAndWriteFile(
    pathFileTarget,
    templatePath,
    item.varsTemplate || {},
    opts,
  );
}

/**
 * @async
 * @function runScaffold
 * @description Exécute le processus de scaffolding pour un projet.
 */
export async function runScaffold(opts: ScaffoldOptions) {
  logInfo("--- scaffold start ---");
  logInfo(`rootDirProject: ${opts.rootDirProject}`);
  logInfo(`templatesRoot: ${opts.templatesRoot} ?? ${DEFAULT_TEMPLATES_ROOT}`);
  logInfo(`overwrite: ${opts.overwrite} | dryRun: ${opts.dryRun}`);
  logInfo(`variables:", ${opts.variables}`);

  // const architecture = await fs.readJson(architectureFilePath);
  const architecture: IDirectory[] = ARCHITECTURE_NUXT_EJS_MOCK;

  if (opts.rootDirProject) {
    const rootDirProject = opts.rootDirProject;
    for (const item of architecture) {
      await processItem(item, rootDirProject, opts);
    }
  }

  logInfo("--- scaffold done ---");
}
