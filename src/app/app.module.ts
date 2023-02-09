import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { Login2Module } from './login2/login.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { DepositModule } from './deposit/deposit.module';
import { CustomerModule } from './customer/customer.module';
import { AccountModule } from './account/account.module';
import { TransferModule } from './transfer/transfer.module';
import { AuthService } from './login2/services/auth.service';
import { AccountService } from './account/services/account.service';
import { DepositService } from './deposit/services/deposit.service';
import { TransferService } from './transfer/services/transfer.service';
import { CustomerService } from './customer/services/customer.service';
import {HttpClientModule} from  '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    Login2Module,
    AccountModule,
    DepositModule,
    TransferModule,
    CustomerModule,


  ],
  providers: [AuthService, AccountService, DepositService, TransferService, CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
