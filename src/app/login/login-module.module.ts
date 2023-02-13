import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../material/material.module";
import { SingOutComponent } from "./sing-out/sing-out.component";
import { SinginComponent } from "./singin/singin.component";
import { SingupComponent } from "./singup/singup.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SinginComponent,
    SingupComponent,
    SingOutComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports:[
    SinginComponent,
    SingupComponent,
    SingOutComponent,
  ],
})
export class LoginModule { }
