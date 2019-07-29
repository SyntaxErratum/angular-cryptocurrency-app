import { Currency } from '../models/currency.model';

export const MOCKDATA: Currency[] = [
    {
        label: 'BTC',
        name: 'Bitcoin',
        price: 10000000,
        volume: 999999999999,
        timestamp: Date.now()
    },
    {
        label: 'ETH',
        name: 'Ethereum',
        price: 10000,
        volume: 99999999999,
        timestamp: Date.now()
    },
    {
        label: 'LTC',
        name: 'Litecoin',
        price: 2000,
        volume: 9999999999,
        timestamp: Date.now()
    }
]
