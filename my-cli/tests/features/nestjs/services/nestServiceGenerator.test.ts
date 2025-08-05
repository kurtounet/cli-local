import { nestServiceGenerator } from '@src/features/nestjs/services/nestServiceGenerator';
import * as fileUtils from '@src/utils/fileUtils';

describe('Nest Service Generator', () => {
  it('should generate a module', async () => {
    const writeFileSpy = jest.spyOn(fileUtils, 'writeFile');
    await nestServiceGenerator.generateModule('./temp', 'TestModule');
    expect(writeFileSpy).toHaveBeenCalled();
    expect(writeFileSpy.mock.calls[0][0]).toContain('TestModule.module.ts');
  });

  // Add more tests for other generation functions
});
