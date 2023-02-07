import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDepositFormComponent, DepositHistoryComponent, DepositFinderComponent, DepositInfoComponent } from './';



@NgModule({
  declarations: [
    CreateDepositFormComponent,
    DepositHistoryComponent,
    DepositFinderComponent,
    DepositInfoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DepositModule { }
