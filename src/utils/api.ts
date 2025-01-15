import axios from "axios";

const BASE_URL = "https://api.vatcomply.com";

export const fetchExchangeRate = async (base: string) => {
  const response = await axios.get(`${BASE_URL}/rates?base=${base}`);
  return response.data.rates;
};

export const fetchCurrencies = async () => {
  const response = await axios.get(`${BASE_URL}/currencies`);
  if (!response.data) {
    return []
  }
  return response.data;
};