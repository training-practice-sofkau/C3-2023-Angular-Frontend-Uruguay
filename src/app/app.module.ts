import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MaterialModule,
    SharedModule,
    LoginModule,
    AccountModule,
    CustomerModule,
    DepositModule,
    TransferModule

  ],
  providers: [AuthService,AccountService,DepositService,TransferService,CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
