import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopCurrenciesComponent } from './top-currencies/top-currencies.component';
import { CustomListsComponent } from './custom-lists/custom-lists.component';

const routes: Routes = [
  {path: '', redirectTo: '/top-currencies', pathMatch: 'full'},
  {path: 'top-currencies', component: TopCurrenciesComponent},
  {path: 'custom-lists', component: CustomListsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
