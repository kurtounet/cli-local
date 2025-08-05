import * as fileUtils from '@src/utils/fileUtils';

describe('File Utils', () => {
  it('should write a file', async () => {
    const writeFileSpy = jest.spyOn(fileUtils, 'writeFile');
    await fileUtils.writeFile('./temp/test.txt', 'test content');
    expect(writeFileSpy).toHaveBeenCalledWith('./temp/test.txt', 'test content');
  });

  // Add more tests for other file utility functions
});
