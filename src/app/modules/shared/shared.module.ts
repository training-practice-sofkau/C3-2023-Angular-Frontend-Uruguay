import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '../material/material.module';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { LoginModule } from '../login/login-module.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from '../login/home/home.component';


@NgModule({
  declarations: [
    ToolbarComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    LoginModule
  ],
  exports:[
    ToolbarComponent,
    PageNotFoundComponent,
    HomeComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
