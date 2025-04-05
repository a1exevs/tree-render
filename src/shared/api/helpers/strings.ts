export function createEmptyString(length: number): string {
  if (length < 0) {
    return '';
  }
  return ' '.repeat(length);
}
