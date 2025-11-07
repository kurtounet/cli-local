import path from "node:path";
import { Command } from "commander";
import inquirer from "inquirer";
import { runScaffold } from "@features/project/services/generate-scaffold.service";

/**
 * @typedef {object} ScaffoldOptions
 * @description Options pour le scaffolding du projet.
 */
export type ScaffoldOptions = {
  rootDirProject?: string; // ou ecrire le projet
  overwrite?: boolean; // ecraser les fichiers existants
  verbose?: boolean; // logs
  dryRun?: boolean; // simulation
  variables?: Record<string, any>; // variables ejs
  templatesRoot?: string; // base des templates sur disque
};

/**
 * @function registerScaffoldCommand
 * @description Enregistre la commande `scaffold` dans l'application CLI.
 * @param {Command} program - L'instance de l'objet Command de Commander.js.
 */
export function registerScaffoldCommand(program: Command) {
  program
    .command("scaffold")
    .description("Generate a project from a JSON architecture file.")
    .option("--templates <dir>", "Templates root directory")
    .option("--architecture <architecture>", "Architecture file path")
    .action(async (architecture: string, cmdOpts: { templates?: string }) => {
      // 1. Get architecture path
      if (!architecture) {
        console.error("Architecture file path is required.");
        process.exit(1);
      }
      // const architectureFilePath = path.resolve(process.cwd(), architecture);

      // 2. Prompt user for details
      const answers = await inquirer.prompt([
        {
          type: "input",
          name: "projectName",
          message: "Project name:",
          default: "my-project",
        },
        {
          type: "input",
          name: "appName",
          message: "App name (public):",
          default: "My App",
        },
        {
          type: "confirm",
          name: "overwrite",
          message: "Overwrite existing files?",
          default: false,
        },
        {
          type: "confirm",
          name: "dryRun",
          message: "Dry run (no write)?",
          default: false,
        },
      ]);

      // 3. Build the complete options object
      const opts: ScaffoldOptions = {
        rootDirProject: path.resolve(process.cwd(), answers.projectName),
        overwrite: answers.overwrite,
        verbose: true, // This can be a command option later
        dryRun: answers.dryRun,
        variables: {
          projectName: answers.projectName,
          appName: answers.appName,
        },
        templatesRoot: cmdOpts.templates
          ? path.resolve(process.cwd(), cmdOpts.templates)
          : undefined,
      };

      // 4. Call the service
      await runScaffold(opts);
    });
}
