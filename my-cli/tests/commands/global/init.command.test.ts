import { registerInitCommand } from '@src/commands/global/init.command';
import { Command } from 'commander';

describe('Init Command', () => {
  let program: Command;

  beforeEach(() => {
    program = new Command();
    registerInitCommand(program);
  });

  it('should register the init command', () => {
    const command = program.commands.find(cmd => cmd.name() === 'init');
    expect(command).toBeDefined();
  });

  // Add more tests for init command functionality
});
