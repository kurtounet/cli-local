import * as prompts from '@src/utils/prompts';
import inquirer from 'inquirer';

jest.mock('inquirer');

describe('Prompts', () => {
  it('should ask a question', async () => {
    (inquirer.prompt as jest.Mock).mockResolvedValue({ answer: 'test' });
    const result = await prompts.askQuestion({ type: 'input', name: 'answer', message: 'Test question' });
    expect(result).toEqual({ answer: 'test' });
  });

  // Add more tests for other prompt functions
});
