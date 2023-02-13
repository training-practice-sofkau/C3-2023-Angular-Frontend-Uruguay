import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login.module';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AccountModule } from './dashboard/account/account.module';
import { PageNotFoundModule } from './404/page-not-found.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    //ExerciseComponent,
  ],
  imports: [
    LoginModule,
    DashboardModule,
    AccountModule,
    PageNotFoundModule,
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
  exports: [
    AppComponent,
    HomeComponent
  ]
})
export class AppModule { }
