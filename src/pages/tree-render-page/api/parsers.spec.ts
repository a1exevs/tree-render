import { parseStrToTree } from './parsers';

describe('Parsers', () => {
  describe('parseStrToTree', () => {
    it('should throw error by empty string', () => {
      try {
        parseStrToTree('');
      } catch (error: unknown) {
        if (error instanceof Error) {
          expect(error.message).toEqual('Поле ввода пусто.');
        } else throw error;
      }
    });
    it('should parse data with root only', () => {
      const result = parseStrToTree('(1)');
      expect(result).toEqual({ children: [], value: '1' });
    });
    it('should parse data with nested child nodes', () => {
      const result = parseStrToTree('(1(2 3 (4) 5))');
      expect(result).toEqual({
        children: [
          { children: [], value: '2' },
          { children: [{ children: [], value: '4' }], value: '3' },
          { children: [], value: '5' },
        ],
        value: '1',
      });
    });
  });
});
