import { useEffect, useState } from 'react';
import { fetchCurrencies } from '../utils/api';
import { Currency, CurrencyData } from '../types/Currency';

const useFetchCurrencies = () => {
    const [currencies, setCurrencies] = useState<Currency[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data: CurrencyData = await fetchCurrencies();
                console.log('HERE', data)
                const currencyList = Object.entries(data).map(([code, { name }]: [string, { name: string }]) => ({
                    code,
                    name,
                }));
                setCurrencies(currencyList);
            } catch (err) {
                setError('Failed to fetch currencies.');
            }
        };

        fetchData();
    }, []);

    return { currencies, error };
};

export default useFetchCurrencies;