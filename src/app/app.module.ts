import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopCurrenciesComponent } from './top-currencies/top-currencies.component';
import { CustomListsComponent } from './custom-lists/custom-lists.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopCurrenciesComponent,
    CustomListsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  private wciKey = 'gvVUl06RLovFfg3E5ZNkhJbaq8BQRT';
  private  wciUrl = 'https://www.worldcoinindex.com/apiservice/';
  private marketsApi = `v2getmarkets?key=${this.wciKey}&fiat=usd`;
  getMarketData() {
    const fullUrl = `${this.wciUrl}${this.marketsApi}`;
    return fullUrl;
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
