import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Currency } from './models/currency.model';
import { MOCKDATA } from './data/mock-data';

@Injectable({
    providedIn: 'root'
})

export class CurrencyDataService {

    getMockData(): Observable<Currency[]> {
        return of(MOCKDATA);
    }

    // getMochData() {
    //     return this.mockData;
    // }
}
