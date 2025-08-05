import { nuxtServiceGenerator } from '@src/features/nuxt/services/nuxtServiceGenerator';
import * as fileUtils from '@src/utils/fileUtils';

describe('Nuxt Service Generator', () => {
  it('should generate a page', async () => {
    const writeFileSpy = jest.spyOn(fileUtils, 'writeFile');
    await nuxtServiceGenerator.generatePage('./temp', 'TestPage');
    expect(writeFileSpy).toHaveBeenCalled();
    expect(writeFileSpy.mock.calls[0][0]).toContain('test-page.vue');
  });

  // Add more tests for other generation functions
});
