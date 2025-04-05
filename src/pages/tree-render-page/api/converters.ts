import { TreeNode } from 'src/pages/tree-render-page/model';
import { createEmptyString } from 'src/shared/api/helpers/strings';

export function convertTree(node: TreeNode, prefix = '', isLast = true): string[] {
  const lines: string[] = [];
  const hasChildren = node.children.length !== 0;
  const connector = hasChildren ? '---+' : '';
  const nodeValueLength = node.value.length;
  const value = prefix + node.value + connector;
  lines.push(value);
  const additional = nodeValueLength === 1 ? '' : createEmptyString(nodeValueLength - 1);
  const newPrefix = prefix + (isLast ? '    ' : '|   ') + additional;
  node.children.forEach((child, index) => {
    const isLastChild = index === node.children.length - 1;
    lines.push(...convertTree(child, newPrefix, isLastChild));
  });
  return lines;
}
