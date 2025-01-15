import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Header from './components/Header/Header';
import theme from './styles/theme';
import CurrencyCalculator from './components/CurrencyCalculator/CurrencyCalculator';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Header />
    <CurrencyCalculator />
  </ThemeProvider>
);

export default App;