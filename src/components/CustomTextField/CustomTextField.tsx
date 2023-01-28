import { TextField } from '@mui/material';
import React, { ChangeEvent } from 'react';

import { textFieldStyles } from '../../styles/InputStyles';

interface CustomTextFieldProps {
  width: number;
  regex: RegExp;
  label: string;
  errorMessage: string;
  onChange: (value: string) => void;
}

export default function CustomTextField(
  props: CustomTextFieldProps
) {
  const [value, setValue] = React.useState<string>();
  const [error, setError] = React.useState(false);

  function handleChange(
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void {
    if (!props.regex.test(event.target.value)) {
      setError(true);
    } else {
      setError(false);
    }
    setValue(event.target.value);
  }
  return (
    <div className='custom-text-field'>
      <TextField
        label={props.label}
        error={error}
        helperText={error ? props.errorMessage : ''}
        value={value}
        onChange={handleChange}
        sx={textFieldStyles}
        style={{ maxWidth: props.width }}
      />
    </div>
  );
}
