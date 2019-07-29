import { Component, OnInit } from '@angular/core';
import { Currency } from '../models/currency.model';

@Component({
    selector: 'app-top-currencies',
    templateUrl: './top-currencies.component.html',
    styleUrls: ['./top-currencies.component.scss']
})

export class TopCurrenciesComponent {
    topList: Currency[];

    ngOnInit(): void {
        this.topList = this.getCurrencies();
    }

    getCurrencies() {
        const mockData =
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
