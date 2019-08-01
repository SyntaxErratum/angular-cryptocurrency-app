import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// import { catchError } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Currency } from './models/currency.model';
import { MOCKDATA } from './data/mock-data';

@Injectable({ providedIn: 'root' })

export class CurrencyDataService {
    private wciKey = 'gvVUl06RLovFfg3E5ZNkhJbaq8BQRT';
    private  wciUrl = 'https://www.worldcoinindex.com/apiservice/';
    private marketsApi = `v2getmarkets?key=${this.wciKey}&fiat=usd`;
    private topList: Currency[] = [];

    constructor(public http: HttpClient) {}

    getMockData(): Observable<Currency[]> {
        return of(MOCKDATA);
    }

    getMarketData(): Observable<Currency[]> {
        const fullUrl = `${this.wciUrl}${this.marketsApi}`;
        return this.http.get<Currency[]>(fullUrl);
    }

    mapData(data): Currency[] {
        data.Markets.flat().map(
            item => {
                const tempItem: Currency = new Currency(item);
                this.topList.push(tempItem);
            }
        );
        this.topList.sort(
            (a, b) => (a.volume < b.volume) ? 1 : -1
        );
        return this.topList;
    }

    getCustomListData(list) {
        let fullUrl = `${this.wciUrl}ticker?key=${this.wciKey}&fiat=usd&label=`;
        list.forEach(
        (item) => {
            fullUrl = fullUrl + `${item}-`;
        }
        );
        fullUrl = fullUrl.slice(0, -1);
    }
}