import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from "@auth0/angular-jwt";


//Modules
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './components/shared/shared.module';
import { MaterialModule } from './components/shared/material/material.module';
import { LoginModule } from './components/login/login.module';


//Components
import { AppComponent } from './app.component';
import { DesktopComponent } from './components/desktop/desktop.component';
import { SigninModule } from './components/sign-in/sign-in.module';
import { SignupModule } from './components/sign-up/sign-up.module';
import { DesktopModule } from './components/desktop/desktop.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    SharedModule,
    AppRoutingModule,
    LoginModule,
    JwtModule,
    SigninModule,
    SignupModule,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
