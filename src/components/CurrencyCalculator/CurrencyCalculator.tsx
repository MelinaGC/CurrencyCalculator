import React, { useState } from 'react';
import { Paper, Button, Typography, Box } from '@mui/material';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { Currency } from '../../types/Currency';
import useFetchExchangeRate from '../../hooks/useFetchExchangeRate';
import useFetchCurrencies from '../../hooks/useFetchCurrencies';
import AmountInput from './AmountInput';
import CurrencySelect from './CurrencySelect';
import ConversionResult from './ConversionResult';
import InfoBox from './InfoBox';

const CurrencyCalculator: React.FC = () => {
  const [amount, setAmount] = useState<number>(1.0);
  const [fromCurrency, setFromCurrency] = useState<Currency>({ name: 'US Dollar', code: 'USD' });
  const [toCurrency, setToCurrency] = useState<Currency>({ name: 'Euro', code: 'EUR' });

  const { currencies, error: currenciesError } = useFetchCurrencies();
  const { exchangeRate, lastUpdated, error: rateError } = useFetchExchangeRate(fromCurrency.code, toCurrency.code);

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#1A8DFF",
        minHeight: "15rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: 'relative'
      }}
    >
      {/* Title Section */}
      <Typography
        variant="h4"
        color="white"
        sx={{ textAlign: "center", marginBottom: "80px" }}
      >
        {`${amount} ${fromCurrency.code} to ${toCurrency.code} - Convert ${fromCurrency.name} to ${toCurrency.name}
`}
      </Typography>
      {/* Card Section */}
      <Paper
        elevation={3}
        sx={{
          width: { sm: '90%', xs: '70%' },
          height: { sm: '350px', xs: '650px' },
          padding: "20px",
          backgroundColor: "white",
          borderRadius: "8px",
          position: 'absolute',
          top: '60%'
        }}
      >
        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} alignItems="center" alignContent="space-evenly" gap={2} marginBottom="20px">
          <AmountInput value={amount} onChange={setAmount} />
          <CurrencySelect
            label="From"
            currencies={currencies}
            selectedCurrency={fromCurrency}
            onChange={setFromCurrency}
          />
          <Button onClick={handleSwapCurrencies} variant="outlined" color="secondary" sx={{ borderRadius: '50%', minWidth: '45px', minHeight: '45px', marginTop: '20px' }}>
            <CurrencyExchangeIcon color='secondary' fontSize='small' />
          </Button>
          <CurrencySelect
            label="To"
            currencies={currencies}
            selectedCurrency={toCurrency}
            onChange={setToCurrency}
          />
        </Box>
        {currenciesError && <Typography variant="body1" color="error">
          {currenciesError}
        </Typography>}
        <Box textAlign="center" display='flex' flexDirection={{ xs: 'column', md: 'row' }}>
          <ConversionResult
            amount={amount}
            fromCurrency={fromCurrency}
            toCurrency={toCurrency}
            exchangeRate={exchangeRate}
            error={rateError}
          />
          <InfoBox lastUpdated={lastUpdated} fromCurrency={fromCurrency} toCurrency={toCurrency} />
        </Box>
      </Paper>
    </Box>
  );
};

export default CurrencyCalculator;