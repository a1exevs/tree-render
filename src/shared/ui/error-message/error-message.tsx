import React from 'react';
import classes from 'src/shared/ui/error-message/error-message.module.scss';

type Props = {
  error: string;
};

const ErrorMessage: React.FC<Props> = ({ error }) => {
  return <>{error && <div className={classes.ErrorMessage}>{error}</div>}</>;
};

export default ErrorMessage;
