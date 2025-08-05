#!/usr/bin/env node
import "module-alias/register";
import { Command } from "commander";
import { registerAllCommands } from "./commands";

const program = new Command();

program
  .name("my-cli")
  .description("CLI for project scaffolding and code generation")
  .version("1.0.0");

registerAllCommands(program);

program.parse(process.argv);
