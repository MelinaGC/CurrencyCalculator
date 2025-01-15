import React from 'react';
import { TextField, InputAdornment, InputLabel, Box } from '@mui/material';

interface AmountInputProps {
  value: number;
  onChange: (value: number) => void;
}

const AmountInput: React.FC<AmountInputProps> = ({ value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseFloat(e.target.value);
    if (inputValue >= 0) onChange(inputValue);
  };

  return (
    <Box flex={1}>
      <InputLabel htmlFor="amount-input" sx={{ fontWeight: '600' }}>
        Amount
      </InputLabel>
      <TextField
        id="amount-input"
        variant="outlined"
        type="number"
        value={value}
        onChange={handleChange}
        fullWidth
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />
    </Box>
  );
};

export default AmountInput;