import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AccountModule } from './account/account.module';
import { CustomerModule } from './customer/customer.module';
import { DepositModule } from './deposit/deposit.module';
import { TransferModule } from './transfer/transfer.module';
import { SharedModule } from './shared/shared.module';
import { AccountService } from './account/services/account.service';
import { CustomerService } from './customer/services/customer.service';
import { TransferService } from './transfer/services/transfer.service';
import { DepositService } from './deposit/services/deposit.service';
import { SharedService } from './shared/services/shared.service';
import { AuthService } from './login/services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LoginModule,
    AccountModule,
    CustomerModule,
    DepositModule,
    TransferModule,
    SharedModule


  ],
  providers: [AccountService, CustomerService, TransferService, DepositService, SharedService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
