import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './account/create-account-type/create-account.component';
import { SinginComponent } from './login/singin/singin.component';

import { CreateDepositComponent } from './deposit/create-deposit/create-deposit/create-deposit.component';
import { HelpComponent } from './help/help.component';
import { LoginGuard } from './login/guard.guard';
import { SingOutComponent } from './login/sing-out/sing-out.component';
import { singupComponent } from './login/singup/singup.component';


const routes: Routes = [
  { path: 'singup', component: singupComponent, },
  {path: "singin", component: SinginComponent},
  {path: "createaccount", component: CreateAccountComponent, canActivate: [LoginGuard]},
  {path: "createdeposit", component:CreateDepositComponent, canActivate: [LoginGuard]},
  {path: "help", component: HelpComponent},
  {path: "salir", component: SingOutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
