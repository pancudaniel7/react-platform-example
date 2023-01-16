import { TextField } from '@mui/material';
import React from 'react';

interface NumberInputProps {
  width: number;
  errorMessage: string;
  regex: RegExp;
  currency: string;
}

const TextFieldStyles = {
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: 'secondary.contrastText',
    },
  },
  '& .MuiFormLabel-root': {
    color: 'primary.contrastText',
  },
  '& .MuiInputBase-input': {
    color: 'primary.contrastText',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'primary.contrastText',
  },
};

export default function NumberInput(props: NumberInputProps) {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);

  const handleChange = (event: { target: { value: string } }) => {
    setValue(event.target.value);
    setError(false);

    if (!props.regex.test(event.target.value)) {
      setError(true);
    }
  };

  return (
    <TextField
      label={props.currency}
      className='number-input'
      error={error}
      helperText={error ? props.errorMessage : ''}
      value={value}
      onChange={handleChange}
      sx={TextFieldStyles}
      style={{ width: props.width }}
    />
  );
}
