export const OPEN_CLOSE_BRACKETS_MAP: Record<string, string> = {
  '(': ')',
};
export const OPEN_BRACKETS = Object.keys(OPEN_CLOSE_BRACKETS_MAP);
export const CLOSE_BRACKETS = Object.values(OPEN_CLOSE_BRACKETS_MAP);
export const OPEN_CLOSE_BRACKETS = [...OPEN_BRACKETS, ...CLOSE_BRACKETS];
export const TEXT_AREA_ROWS_COUNT = 4;
