import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NewDepositComponent } from './movements/new-deposit/new-deposit.component';
import { NewTransaccionComponent } from './movements/new-transaccion/new-transaccion.component';
import { ViewTransferComponent } from './movements/view-transfer/view-transfer.component';
import { AuthService } from './login/services/auth.service';
import { AccountService } from './administrator/services/account.service';
import { CustomerService } from './administrator/services/customer.service';
import { DepositService } from './administrator/services/deposit.service';

@NgModule({
  declarations: [
    AppComponent,
    NewDepositComponent,
    NewTransaccionComponent,
    ViewTransferComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MaterialModule,
    SharedModule,
    LoginModule,

  ],
  providers: [AuthService, AccountService, CustomerService, DepositService],
  bootstrap: [AppComponent]
})
export class AppModule { }
