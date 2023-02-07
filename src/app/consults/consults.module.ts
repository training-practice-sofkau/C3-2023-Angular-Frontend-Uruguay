import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { BalanceComponent } from './balance/balance.component';



@NgModule({
  declarations: [
    AccountComponent,
    BalanceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ConsultsModule { }
