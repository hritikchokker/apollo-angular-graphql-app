import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ExchangeRatesComponent } from './exchange-rates.component';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: ExchangeRatesComponent
  }
];

@NgModule({
  declarations: [
    ExchangeRatesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatListModule,
    MatProgressSpinnerModule
  ]
})
export class ExchangeRatesModule { }
