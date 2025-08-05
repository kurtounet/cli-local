import { registerSfCommand } from '@src/commands/framework/symfony/sf.command';
import { Command } from 'commander';

describe('Symfony Command', () => {
  let program: Command;

  beforeEach(() => {
    program = new Command();
    registerSfCommand(program);
  });

  it('should register the sf command', () => {
    const command = program.commands.find(cmd => cmd.name() === 'sf');
    expect(command).toBeDefined();
  });

  // Add more tests for sf command functionality
});
