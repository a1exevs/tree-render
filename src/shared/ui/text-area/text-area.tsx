import classes from 'src/shared/ui/text-area/text-area.module.scss';
import React from 'react';

type Props = {
  value: string;
  rows: number;
  placeholder: string;
  onChange: (_: string) => void;
};

export const TextArea: React.FC<Props> = ({ rows, placeholder, value, onChange }) => {
  return (
    <textarea
      className={classes.TextArea}
      rows={rows}
      placeholder={placeholder}
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
};

export default TextArea;
