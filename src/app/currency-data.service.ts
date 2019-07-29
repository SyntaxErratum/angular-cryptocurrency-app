import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Currency } from './models/currency.model';

@Injectable({
    providedIn: 'root'
})

export class CurrencyDataService {

    getMochData() {
        const mockData: Currency[] =
        [
            new Currency(
                'BTC',
                'Bitcoin',
                '10000000',
                '999999999999',
                Date.now
            ),
            new Currency(
                'ETH',
                'Ethereum',
                '10000',
                '99999999999',
                Date.now
            ),
            new Currency(
                'LTC',
                'Litecoin',
                '2000',
                '9999999999',
                Date.now
            )
        ];
        return mockData;
    }
}
