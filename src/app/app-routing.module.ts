import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './login/sign-in/sign-in.component';

const routes: Routes = [
  //{ path: "", redirectTo: "login", pathMatch: "full"},
  //{ path: "login", component: SignInComponent},
  //{ path: "**", redirectTo: "login", pathMatch: "full"},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
