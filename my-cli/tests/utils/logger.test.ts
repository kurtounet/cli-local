import * as logger from '@src/utils/logger';

describe('Logger', () => {
  it('should log info messages', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    logger.info('Test info');
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Test info'));
    consoleSpy.mockRestore();
  });

  // Add more tests for other logger functions
});
