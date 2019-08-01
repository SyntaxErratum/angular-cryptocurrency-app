import { Component, OnInit } from '@angular/core';
import { Currency } from '../models/currency.model';

import { CurrencyDataService } from '../currency-data.service';

@Component({
    selector: 'app-top-currencies',
    templateUrl: './top-currencies.component.html',
    styleUrls: ['./top-currencies.component.scss']
})

export class TopCurrenciesComponent implements OnInit {
    // service = new CurrencyDataService();
    topList: Currency[] = [];

    constructor(private service: CurrencyDataService) {}

    ngOnInit(): void {
        this.service.getMarketData().subscribe(data => this.mapData(data));
        // this.service.getMarketData().subscribe(data => this.topList = data.Markets[0]);
        // this.service.getMockData().subscribe(data => console.log(data));
        // console.log(this.service);
        // this.tempList = this.http
        // .get('https://www.worldcoinindex.com/apiservice/v2getmarkets?key=gvVUl06RLovFfg3E5ZNkhJbaq8BQRT&fiat=usd');
        // this.http.get('https://www.worldcoinindex.com/apiservice/v2getmarkets?key=gvVUl06RLovFfg3E5ZNkhJbaq8BQRT&fiat=usd')
        // .subscribe(data => console.log(data));
    }

    mapData(data): void {
        data.Markets.flat().map(
            item => {
                const tempItem: Currency = new Currency(item);
                this.topList.push(tempItem);
            }
        );
        this.topList.sort(
            (a, b) => (a.volume < b.volume) ? 1 : -1
        );
    }
}