import { isNumber } from 'src/shared';
import {
  CLOSE_BRACKETS,
  OPEN_BRACKETS,
  OPEN_CLOSE_BRACKETS,
  OPEN_CLOSE_BRACKETS_MAP,
} from 'src/pages/tree-render-page/model';
import { validateByPredicate, validateOpenCloseBrackets } from 'src/pages/tree-render-page/api/validators';
import { TreeNode } from 'src/pages/tree-render-page/model';

export function parseStrToTree(input: string): TreeNode | null {
  input = input.replace(/[\n\t]/g, '');
  if (!input.length) {
    throw new Error('Поле ввода пусто.');
  }

  if (!OPEN_BRACKETS.includes(input[0]) || !CLOSE_BRACKETS.includes(input[input.length - 1])) {
    throw new Error('Данные должны обрамляться фигурными скобочками');
  }

  const validBrackets = validateOpenCloseBrackets(input, OPEN_CLOSE_BRACKETS_MAP);
  if (!validBrackets) {
    throw new Error(
      'Что-то пошло не так. Возможно, есть несоответствие в количестве открывающихся и закрывающихся скобочек.',
    );
  }
  const openedClosedBracketSet = new Set([...OPEN_CLOSE_BRACKETS]);
  const isValidContent = validateByPredicate(input, (char: string) => {
    return isNumber(char) || openedClosedBracketSet.has(char) || char === ' ';
  });
  if (!isValidContent) {
    throw new Error(
      `Что-то пошло не так. Допустимые символы - [0-9], ' ', ${OPEN_CLOSE_BRACKETS.map(bracket => `'${bracket}'`).join(',')}.`,
    );
  }

  let currentNode: TreeNode | null = null;
  const stack: TreeNode[] = [];
  input = input.slice(1, -1);
  let ptr = 0;
  while (ptr < input.length) {
    let char = input[ptr];
    if (char === ' ') {
      ptr++;
      continue;
    }
    if (char === '(') {
      if (!currentNode) {
        currentNode = { value: '', children: [] };
      }
      const node = { value: '', children: [] };
      stack.push(currentNode);
      currentNode.children.push(node);
      currentNode = node;
      ptr++;
      continue;
    }
    if (char === ')') {
      currentNode = stack.pop() as TreeNode;
      ptr++;
      continue;
    }
    let numberStr = '';
    while (typeof input[ptr] === 'string' && isNumber(input[ptr])) {
      numberStr += input[ptr];
      ptr++;
    }
    if (!currentNode) {
      currentNode = { value: numberStr, children: [] };
      continue;
    }
    if (!currentNode.value) {
      currentNode.value = numberStr;
      continue;
    }
    const parent = stack[stack.length - 1];
    if (!parent) {
      throw new Error(`Отсутствует корневой элемент дерева.`);
    }
    currentNode = { value: numberStr, children: [] };
    parent.children.push(currentNode);
  }
  return currentNode;
}
