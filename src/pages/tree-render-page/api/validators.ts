export function validateOpenCloseBrackets(s: string, openCloseBracketsMap: Record<string, string>): boolean {
  const openedBracketSet = new Set(Object.keys(openCloseBracketsMap));
  const closedBracketSet = new Set(Object.values(openCloseBracketsMap));
  const openedBrackets: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (openedBracketSet.has(s[i])) {
      openedBrackets.push(s[i]);
    }
    if (closedBracketSet.has(s[i])) {
      if (s[i] !== openCloseBracketsMap[openedBrackets.pop() ?? '']) {
        return false;
      }
    }
  }
  return !openedBrackets.length;
}

export function validateByPredicate(str: string, isValid: (_: string) => boolean): boolean {
  return str.split('').every(isValid);
}
