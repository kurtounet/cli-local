import { registerNuxtCommand } from '@src/commands/framework/nuxt/nuxt.command';
import { Command } from 'commander';

describe('Nuxt Command', () => {
  let program: Command;

  beforeEach(() => {
    program = new Command();
    registerNuxtCommand(program);
  });

  it('should register the nuxt command', () => {
    const command = program.commands.find(cmd => cmd.name() === 'nuxt');
    expect(command).toBeDefined();
  });

  // Add more tests for nuxt command functionality
});
