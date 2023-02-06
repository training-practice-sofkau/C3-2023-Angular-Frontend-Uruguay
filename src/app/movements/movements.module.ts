import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovementsComponent } from './movements.component';
import { DepositComponent } from './deposit/deposit.component';



@NgModule({
  declarations: [
    MovementsComponent,
    DepositComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MovementsModule { }
