export function isNumber(char: string): boolean {
  if (char.length !== 1) {
    return false;
  }
  return /^[0-9]$/.test(char);
}
