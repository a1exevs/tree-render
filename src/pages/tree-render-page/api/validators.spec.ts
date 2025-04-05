import { validateOpenCloseBrackets } from './validators';

describe('Validators', () => {
  describe('validateOpenCloseBrackets', () => {
    it('should work with empty string', () => {
      expect(validateOpenCloseBrackets('', { '(': ')' })).toBe(true);
    });
    it('should return false if number of opened brackets is greater than closed brackets', () => {
      expect(validateOpenCloseBrackets('(()', { '(': ')' })).toBe(false);
    });
    it('should return false if number of opened brackets is less than closed brackets', () => {
      expect(validateOpenCloseBrackets('(())))', { '(': ')' })).toBe(false);
    });
    it('should return true (case with correct data)', () => {
      expect(validateOpenCloseBrackets('()()(()(()(())))', { '(': ')' })).toBe(true);
    });
    it('should return true (case with different bracket types', () => {
      expect(validateOpenCloseBrackets('[{([][]{})}]', { '(': ')', '[': ']', '{': '}' })).toBe(true);
    });
    it('should return false (case with different bracket types', () => {
      expect(validateOpenCloseBrackets('[{([][}{])}]', { '(': ')', '[': ']', '{': '}' })).toBe(false);
    });
  });
});
