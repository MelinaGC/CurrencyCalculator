import React from 'react';
import { Typography, Box, Link } from '@mui/material';
import formatDate from '../../utils/dates';
import { Currency } from '../../types/Currency';

interface InfoBoxProps {
    lastUpdated: string | null;
    fromCurrency: Currency;
    toCurrency: Currency;
}

const InfoBox: React.FC<InfoBoxProps> = ({ lastUpdated, fromCurrency, toCurrency }) => {
    return (
        <Box marginTop='100px'>
            <Box sx={{ backgroundColor: '#E8F3FF', borderRadius: '8px', padding: '10px', display: { sm: 'block', xs: 'none' } }}>
                <Typography variant="body2">
                    We use the mid-market rate for our Converter. This is for informational purposes only.
                </Typography>
            </Box>
            <Typography variant="caption">
                <Link
                    href={`https://www.xe.com/currency/${fromCurrency.code.toLowerCase()}-${fromCurrency.name
                        .toLowerCase()
                        .replace(/\s+/g, '-')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {fromCurrency.name}
                </Link>{' '}
                to{' '}
                <Link
                    href={`https://www.xe.com/currency/${toCurrency.code.toLowerCase()}-${toCurrency.name
                        .toLowerCase()
                        .replace(/\s+/g, '-')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {toCurrency.name}
                </Link>{' '}
                — Last updated {formatDate(lastUpdated || '')}
            </Typography>
        </Box>
    );
};

export default InfoBox;