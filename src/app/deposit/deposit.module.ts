import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDepositFormComponent, DepositHistoryComponent } from './';
import { MainDepositComponent } from './main-deposit/main-deposit.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DepositInfoComponent } from './deposit-info/deposit-info.component';


@NgModule({
  declarations: [
    CreateDepositFormComponent,
    DepositHistoryComponent,
    MainDepositComponent,
    DepositInfoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [CreateDepositFormComponent,
    DepositHistoryComponent,
  DepositInfoComponent]
})
export class DepositModule { }
