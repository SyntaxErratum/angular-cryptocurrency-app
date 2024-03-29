import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

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
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
