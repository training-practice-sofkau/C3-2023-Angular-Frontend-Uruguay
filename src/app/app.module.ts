import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './components/shared/shared.module';
import { LoginModule } from './components/login/login.module';
import { MaterialModule } from './components/shared/material/material.module';
import { EjercicioComponent } from './components/prog-functional/ejercicio/ejercicio.component';
import { MainComponent } from './components/main/main.component';



@NgModule({
  declarations: [
    AppComponent,
    EjercicioComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    LoginModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
