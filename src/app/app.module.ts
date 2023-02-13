import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CustomerAccountModule } from './customer-account/customer-account.module'; //se puede retirar?
import { TransactionsModule } from './transactions/transactions.module'; //se puede retirar?
import { HomeComponent } from './shared/home/home.component';
import { EjercicioComponent } from './prog-functional/ejercicio/ejercicio/ejercicio.component';
import { HttpClientModule } from '@angular/common/http';
import { GlobalService } from './global-service/service-global.service';


@NgModule({
  declarations: [
    AppComponent,
    EjercicioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // MI RUTEO GENERAL POR AHORA  NOTA:TODOS LOS MODULOS VAN EN LOS IMPORTS
    BrowserAnimationsModule,
    HttpClientModule,

    MaterialModule,
    SharedModule,
    LoginModule,
    CustomerAccountModule,
    TransactionsModule
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
