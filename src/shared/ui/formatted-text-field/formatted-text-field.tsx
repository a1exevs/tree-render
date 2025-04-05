import classes from 'src/shared/ui/formatted-text-field/formatted-text-field.module.scss';
import React from 'react';

type Props = {
  rows: string[];
};

const FormattedTextField: React.FC<Props> = ({ rows }) => {
  return <pre className={classes.FormattedTextField}>{rows.join('\n')}</pre>;
};

export default FormattedTextField;
