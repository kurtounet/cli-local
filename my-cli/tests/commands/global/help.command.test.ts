import { registerHelpCommand } from '@src/commands/global/help.command';
import { Command } from 'commander';

describe('Help Command', () => {
  let program: Command;

  beforeEach(() => {
    program = new Command();
    registerHelpCommand(program);
  });

  it('should register the help command', () => {
    const command = program.commands.find(cmd => cmd.name() === 'help');
    expect(command).toBeDefined();
  });

  // Add more tests for help command functionality
});
