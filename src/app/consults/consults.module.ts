import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { BalanceComponent } from './balance/balance.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { RoutingModule } from './routing.module';
import { ResultComponent } from './result/result.component';



@NgModule({
  declarations: [
    AccountComponent,
    BalanceComponent,
    ResultComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    RoutingModule
  ],
})
export class ConsultsModule { }
