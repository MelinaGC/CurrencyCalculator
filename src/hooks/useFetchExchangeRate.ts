import { useEffect, useState } from 'react';
import { fetchExchangeRate } from '../utils/api';

const useFetchExchangeRate = (fromCurrency: string, toCurrency: string) => {
    const [exchangeRate, setExchangeRate] = useState<number | null>(null);
    const [lastUpdated, setLastUpdated] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setExchangeRate(null);
            try {
                const rates = await fetchExchangeRate(fromCurrency);
                setExchangeRate(rates[toCurrency]);

                const updatedTime = new Date().toUTCString();
                setLastUpdated(updatedTime);
            } catch (err) {
                setError('Failed to fetch exchange rates.');
            }
        };

        fetchData();
    }, [fromCurrency, toCurrency]);

    return { exchangeRate, lastUpdated, error };
};

export default useFetchExchangeRate;