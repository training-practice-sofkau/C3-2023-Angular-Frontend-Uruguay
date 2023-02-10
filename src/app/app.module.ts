import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from  '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { DepositModule } from './AccountMovement/deposit/deposit.module';
import { DepositService } from './AccountMovement/deposit/services/deposit.service';
import { TransferService } from './AccountMovement/transfer/services/transfer.service';
import { TransferModule } from './AccountMovement/transfer/transfer.module';
import { MaterialModule } from './tools/material/material.module';
import { SharedModule } from './tools/shared/shared.module';
import { Login2Module } from './userLogin-Register/login2/login.module';
import { AuthService } from './userLogin-Register/login2/services/auth.service';
import { AccountModule, CustomerModule, AccountService, CustomerService } from './UserProfile';

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
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),


  ],
  providers: [AuthService, AccountService, DepositService, TransferService, CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
