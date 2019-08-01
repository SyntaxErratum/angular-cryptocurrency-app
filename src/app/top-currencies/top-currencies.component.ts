import { Component, OnInit } from '@angular/core';
import { Currency } from '../models/currency.model';

import { CurrencyDataService } from '../currency-data.service';

@Component({
    selector: 'app-top-currencies',
    templateUrl: './top-currencies.component.html',
    styleUrls: ['./top-currencies.component.scss']
})

export class TopCurrenciesComponent implements OnInit {
    topList: Currency[] = [];

    constructor(private service: CurrencyDataService) {}

    ngOnInit(): void {
        this.service.getMarketData().subscribe(data => this.topList = this.service.mapData(data));
    }
}
