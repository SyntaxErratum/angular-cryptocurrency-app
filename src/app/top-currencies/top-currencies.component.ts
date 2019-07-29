import { Component, OnInit } from '@angular/core';
import { Currency } from '../models/currency.model';
import { CurrencyDataService } from '../currency-data.service';

@Component({
    selector: 'app-top-currencies',
    templateUrl: './top-currencies.component.html',
    styleUrls: ['./top-currencies.component.scss']
})

export class TopCurrenciesComponent implements OnInit {
    service = new CurrencyDataService();
    topList: Currency[];

    ngOnInit(): void {
        this.topList = this.service.getMochData();
    }
}
