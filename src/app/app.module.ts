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
import { DepositService } from './AccountMovement/deposit/services/deposit.service';
import { TransferService } from './AccountMovement/transfer/services/transfer.service';
import { MaterialModule } from './tools/material/material.module';
import { SharedModule } from '../app/shared'
import { AuthService } from './userLogin-Register/login2/services/auth.service';
import {  AccountService,  CustomerService } from './UserProfile';
import { AccountComponent } from './UserProfile/account/account.component';

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


    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),


  ],
  providers: [AuthService, AccountService, DepositService, TransferService, CustomerService, AccountComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
