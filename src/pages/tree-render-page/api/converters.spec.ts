import { parseStrToTree } from './parsers';
import { convertTree } from './converters';

describe('Converters', () => {
  describe('convertTree', () => {
    it('should work with root only', () => {
      const result = convertTree({ children: [], value: '1' });
      expect(result).toEqual(['1']);
    });
    it('should work with nested child nodes', () => {
      const result = convertTree({
        value: '1',
        children: [
          { children: [], value: '20' },
          {
            children: [
              { children: [], value: '400' },
              { children: [], value: '500' },
              { children: [], value: '600' },
            ],
            value: '30',
          },
        ],
      });
      expect(result).toEqual(['1---+', '    20', '    30---+', '         400', '         500', '         600']);
    });
  });
});
