import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CustomerAccountModule } from './customer-account/customer-account.module';
import { TransactionsModule } from './transactions/transactions.module';
import { HomeComponent } from './shared/home/home.component';
import { EjercicioComponent } from './prog-functional/ejercicio/ejercicio/ejercicio.component';
import { ServiceLogIn } from './global-service/service-login.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    EjercicioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MaterialModule,
    SharedModule,
    LoginModule,
    CustomerAccountModule,
    TransactionsModule
  ],
  providers: [ServiceLogIn],
  bootstrap: [AppComponent]
})
export class AppModule { }
