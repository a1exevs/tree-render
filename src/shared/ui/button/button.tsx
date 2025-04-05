import classes from 'src/shared/ui/button/button.module.scss';
import React from 'react';

type Props = {
  text: string;
  onClick?: () => void;
};

export const Button: React.FC<Props> = ({ text, onClick }) => {
  return (
    <button className={classes.Button} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
