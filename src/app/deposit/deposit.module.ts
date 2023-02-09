import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDepositFormComponent, DepositHistoryComponent, DepositInfoComponent } from './';
import { MainDepositComponent } from './main-deposit/main-deposit.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CreateDepositFormComponent,
    DepositHistoryComponent,
    DepositInfoComponent,
    MainDepositComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [CreateDepositFormComponent,
    DepositHistoryComponent,
    DepositInfoComponent]
})
export class DepositModule { }
