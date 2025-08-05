import { symfonyServiceGenerator } from '@src/features/symfony/services/symfonyServiceGenerator';
import * as fileUtils from '@src/utils/fileUtils';

describe('Symfony Service Generator', () => {
  it('should generate an entity', async () => {
    const writeFileSpy = jest.spyOn(fileUtils, 'writeFile');
    await symfonyServiceGenerator.generateEntity('./temp', 'TestEntity');
    expect(writeFileSpy).toHaveBeenCalled();
    expect(writeFileSpy.mock.calls[0][0]).toContain('TestEntity.php');
  });

  // Add more tests for other generation functions
});
