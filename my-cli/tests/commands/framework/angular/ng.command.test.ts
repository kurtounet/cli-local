import { registerNgCommand } from '@src/commands/framework/angular/ng.command';
import { Command } from 'commander';

describe('Angular Command', () => {
  let program: Command;

  beforeEach(() => {
    program = new Command();
    registerNgCommand(program);
  });

  it('should register the ng command', () => {
    const command = program.commands.find(cmd => cmd.name() === 'ng');
    expect(command).toBeDefined();
  });

  // Add more tests for ng command functionality
});
