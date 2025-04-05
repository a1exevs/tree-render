import React from 'react';
import { TreeRenderPage } from 'src/pages';
import classes from 'src/app/ui/app/app.module.scss';

const App: React.FC = () => {
  return (
    <div className={classes.App}>
      <TreeRenderPage />
    </div>
  );
};

export default App;
