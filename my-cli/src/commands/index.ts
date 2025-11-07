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
import { registercodeCommand } from "./global/code.command";
import { registerNitroCommand } from "./framework/nitro/nitro.command";
import { registerNitroAllCommand } from "./framework/nitro/nitro-all.command";
import { registerNitroSingleCommand } from "./framework/nitro/nitro-single.command";
import { testCommand } from "./global/test.command";
import { registerCreateFrameworkCommand } from "./global/create-framework.command";
import { registerCreateCommandCommand } from "./global/create-command.command";
import { registerZodCommand } from "./global/zod.command";
import { registerApiCommand } from "./global/api.command";
import { registerScaffoldCommand } from "./global/scaffold.command";
import { registerNuxtAllCommand } from "./framework/nuxt/nuxt-all.command";
import { registerNuxtSingleCommand } from "./framework/nuxt/nuxt-single.command";
import { registerMdjNewCommand } from "./framework/mdj/mdj-create.command";
import { registerMdjUpdateCommand } from "./framework/mdj/mdj-update.command";
import { registerCreateCliLocalCommand } from "./global/create-cli-local.command";
import { registerGeminiCommand } from "./framework/gemini/gemini.command";

/**
 * Registers all commands with the Commander program.
 * @param program The Commander program instance.
 */
export function registerAllCommands(program: Command) {
  registerScaffoldCommand(program);
  // command for tested
  testCommand(program);
  // Global
  registerCreateCliLocalCommand(program); 
  registerCreateCommandCommand(program);
  registerCreateFrameworkCommand(program);
  registerInitCommand(program);
  registerCreateProjectCommand(program);
  registerHelpCommand(program);
  registercodeCommand(program);
  /* Tools */
  registerZodCommand(program);
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
  // Angular
  registerNgCommand(program);
  // registerNgSingleCommand(program);
  // registerNgAllCommand(program);
  // Symfony
  registerSfCommand(program);
  registerSfSingleCommand(program);
  registerSfAllCommand(program);
  // Nuxt
  registerNuxtCommand(program);
  registerNuxtSingleCommand(program);
  registerNuxtAllCommand(program);
  // MDJ
  registerMdjCommand(program);
  registerMdjNewCommand(program);
  registerMdjUpdateCommand(program);

  // API
  registerApiCommand(program);

  registerGeminiCommand(program);
}
