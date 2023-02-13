import { NgModule } from '@angular/core';
import {HttpClientModule} from  '@angular/common/http'
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';


import { MaterialModule } from './material/material.module';
import { AccountModule } from './account/account.module';
import { CustomerModule } from './customer/customer.module';
import { DepositModule } from './deposit/deposit.module';
import { TransferModule } from './transfer/transfer.module';
import { AuthService } from './login/services/auth.service';
import { AccountService } from './account/service/account.service';
import { DepositService } from './deposit/service/deposit.service';
import { TransferService } from './transfer/service/transfer.service';
import { CustomerService } from './customer/service/customer.service';
import { MyNavComponent } from './my-nav/my-nav.component';


import { DashboardComponent } from './dashboard/dashboard.component';

import { MyTableComponent } from './my-table/my-table.component';

import { HelpComponent } from './help/help.component';
import { BrowserModule } from '@angular/platform-browser';
import { LoginModule } from './login/login-module.module';


@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    DashboardComponent,
    MyTableComponent,
    HelpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    MaterialModule,
    SharedModule,
    LoginModule,
    AccountModule,
    CustomerModule,
    DepositModule,
    TransferModule,
  ],
  providers: [AuthService,AccountService,DepositService,TransferService,CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
