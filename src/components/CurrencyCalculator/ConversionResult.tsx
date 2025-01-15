import React from 'react';
import { Typography, CircularProgress, Box } from '@mui/material';
import { Currency } from '../../types/Currency';

interface ConversionResultProps {
  amount: number;
  fromCurrency: Currency;
  toCurrency: Currency;
  exchangeRate: number | null;
  error: string | null;
}

const ConversionResult: React.FC<ConversionResultProps> = ({ amount, fromCurrency, toCurrency, exchangeRate, error }) => {
  return (
    <Box sx={{ marginTop: "20px", textAlign: "center", width: '100%' }} >
      {exchangeRate ? (
        <>
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
            {`${amount.toFixed(2)} ${fromCurrency.name} = ${(amount * exchangeRate).toFixed(6)} ${toCurrency.name}`}
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ marginTop: '5px' }}>
            {`1.00 ${toCurrency.code} = ${(1 / exchangeRate).toFixed(6)} ${fromCurrency.code}`}
          </Typography>
        </>
      ) : (
        <Typography variant="body1" color="error">
          {error || <CircularProgress />}
        </Typography>
      )}
    </Box>
  );
};

export default ConversionResult;