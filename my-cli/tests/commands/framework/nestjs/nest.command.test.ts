import { registerNestCommand } from '@src/commands/framework/nestjs/nest.command';
import { Command } from 'commander';

describe('Nest Command', () => {
  let program: Command;

  beforeEach(() => {
    program = new Command();
    registerNestCommand(program);
  });

  it('should register the nest command', () => {
    const command = program.commands.find(cmd => cmd.name() === 'nest');
    expect(command).toBeDefined();
  });

  // Add more tests for nest command functionality
});
