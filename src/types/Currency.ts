export interface Currency {
  name: string;
  code: string;
}

interface CurrencyDetails {
  name: string;
  symbol: string;
}

export type CurrencyData = Record<string, CurrencyDetails>;