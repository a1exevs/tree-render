import React, { useState } from 'react';
import classes from 'src/pages/tree-render-page/ui/tree-render-page.module.scss';
import { parseStrToTree, convertTree } from 'src/pages/tree-render-page/api';
import { Button, ErrorMessage, FormattedTextField, TextArea } from 'src/shared';
import { TEXT_AREA_ROWS_COUNT } from 'src/pages/tree-render-page/model';

const TreeRenderPage: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [lines, setLines] = useState<string[]>([]);
  const [error, setError] = useState<string>('');

  const handleRender = (): void => {
    try {
      setError('');
      setLines([]);

      const tree = parseStrToTree(inputValue);
      if (tree === null) {
        return;
      }
      const lines = convertTree(tree);
      setLines(lines);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };

  return (
    <div className={classes.TreeRenderPage}>
      <h1 className={classes.TreeRenderPage__Title}>TreeRender</h1>
      <TextArea
        value={inputValue}
        onChange={setInputValue}
        placeholder={'Введите дерево, например: (1 (2 (4 5 6 (7) 108 (9)) 3))'}
        rows={TEXT_AREA_ROWS_COUNT}
      />
      <Button text={'Отрисовать'} onClick={handleRender} />
      <ErrorMessage error={error} />
      <FormattedTextField rows={lines} />
    </div>
  );
};

export default TreeRenderPage;
