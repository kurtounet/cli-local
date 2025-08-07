import { angularServiceGenerator } from '@angular/services/angularServiceGenerator';
import * as fileUtils from '@src/utils/fileUtils';

describe('Angular Service Generator', () => {
  it('should generate a component', async () => {
    const writeFileSpy = jest.spyOn(fileUtils, 'writeFile');
    await angularServiceGenerator.generateComponent('./temp', 'TestComponent');
    expect(writeFileSpy).toHaveBeenCalled();
    expect(writeFileSpy.mock.calls[0][0]).toContain('test-component.component.ts');
  });

  // Add more tests for other generation functions
});
