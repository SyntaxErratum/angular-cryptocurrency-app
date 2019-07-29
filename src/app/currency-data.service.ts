import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Currency } from './models/currency.model';
import { MOCKDATA } from './data/mock-data';

@Injectable({
    providedIn: 'root'
})

export class CurrencyDataService {
    mockData = MOCKDATA;
    // getMockData(): Observable<Currency[]> {
        
    //     return this.mockData;
    //     console.log(this.mockData);
    // }

    getMochData() {
        return this.mockData;
    }
}
