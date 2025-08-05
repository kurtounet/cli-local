import { Command } from "commander";

import { registerTreeMdCommand } from "./global/tree.command";
import { registerTreeJsonCommand } from "./global/tree-analyzer-json.command";
import { registerTreeMarkdownCommand } from "./global/tree-analyzer-md.command";
import { registerTreeMarkdownFnCommand } from "./global/tree-analyzer-md-fn.command";
import { registerTreeMarkdownFnAllCommand } from "./global/tree-analyzer-md-fn-all.command";
import { registerMdjCommand } from "./global/mdj.command";
import { registerNuxtCommand } from "./framework/nuxt/nuxt.command";
import { registerSfCommand } from "./framework/symfony/sf.command";
import { registerNgCommand } from "./framework/angular/ng.command";
import { registerNestSingleCommand } from "./framework/nestjs/nest-single.command";
import { registerNestAllCommand } from "./framework/nestjs/nest-all.command";
import { registerNestCommand } from "./framework/nestjs/nest.command";
import { registerHelpCommand } from "./global/help.command";
import { registerCreateProjectCommand } from "./global/create-project.command";
import { registerInitCommand } from "./global/init.command";
import { registerRenameCommand } from "./global/rename.command";
import { registerSfSingleCommand } from "./framework/symfony/sf-single.command";
import { registerSfAllCommand } from "./framework/symfony/sf-all.command";
import { registerAddPerfixSuffixFileCommand } from "./global/prefix-file.commande";
import { codeCommand } from "./global/code.command";
import { registerNitroCommand } from "./framework/nitro/nitro.command";
import { registerNitroAllCommand } from "./framework/nitro/nitro-all.command";
import { registerNitroSingleCommand } from "./framework/nitro/nitro-single.command";

/**
 * Registers all commands with the Commander program.
 * @param program The Commander program instance.
 */
export function registerAllCommands(program: Command) {
  // Global
  registerInitCommand(program);
  registerCreateProjectCommand(program);
  registerHelpCommand(program);
  codeCommand(program);
  /* Tools */
  // Tree
  registerTreeMdCommand(program);
  registerTreeJsonCommand(program);
  registerTreeMarkdownCommand(program);
  registerTreeMarkdownFnCommand(program);
  registerTreeMarkdownFnAllCommand(program);
  // Rename file
  registerRenameCommand(program);
  registerAddPerfixSuffixFileCommand(program);

  // Nitro
  registerNitroCommand(program);
  registerNitroAllCommand(program);
  registerNitroSingleCommand(program);
  // Nest
  registerNestCommand(program);
  registerNestAllCommand(program);
  registerNestSingleCommand(program);
  registerNgCommand(program);
  // Symfony
  registerSfCommand(program);
  registerSfSingleCommand(program);
  registerSfAllCommand(program);
  // Nuxt
  registerNuxtCommand(program);
  registerMdjCommand(program);
}
