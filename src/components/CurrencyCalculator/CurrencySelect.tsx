import React from 'react';
import { Select, MenuItem, InputLabel, Box } from '@mui/material';
import { Currency } from '../../types/Currency';

interface CurrencySelectProps {
  label: string;
  currencies: Currency[];
  selectedCurrency: Currency;
  onChange: (currency: Currency) => void;
}

const CurrencySelect: React.FC<CurrencySelectProps> = ({ label, currencies, selectedCurrency, onChange }) => {
  return (
    <Box width={{ xs: '100%', sm: '30%' }}>
      <InputLabel htmlFor={label} sx={{ fontWeight: '600' }}>
        {label}
      </InputLabel>
      <Select
        id={label}
        value={selectedCurrency.code}
        onChange={(e) =>
          onChange(currencies.find((currency) => currency.code === e.target.value)!)
        }
        fullWidth
      >
        {currencies.map((currency) => (
          <MenuItem key={currency.code} value={currency.code}>
            {currency.name}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default CurrencySelect;