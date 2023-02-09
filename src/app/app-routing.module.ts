import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { SingupComponent } from './login/singup/singup.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { FindAllComponent } from './components/find-all/find-all.component';
import { AccountListComponent } from './account/account-list/account-list.component';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
   //Rutas de segurity 
   {path:``,component: SingupComponent ,pathMatch: 'full'},
   {path:`signUp`,component: SingupComponent,pathMatch: 'full'},
   {path:`signOut`,component: SingupComponent,pathMatch: 'full'},
 
 
   //Rutas de Customer
   {path:`customerList`,component: FindAllComponent,pathMatch: 'full'},
   {path:`customer/documentType/create`,component:FindAllComponent,pathMatch: 'full' },
   //Rutas de Account
 
 
   {path:`account`,component: FindAllComponent,pathMatch: 'full'},
   {path:`account/create`,component: CreateAccountComponent,pathMatch: 'full',canActivate:[AdminGuard]},
   {path:`account/find-all`,component: AccountListComponent,pathMatch: 'full'},
   {path:`account/account-type/create`,component: FindAllComponent,pathMatch: 'full'},
   {path:`account/customer/:customerId`,component: FindAllComponent,pathMatch: 'full'},
   {path:`account/customer/:accountId`, component: FindAllComponent,pathMatch: 'full'},
   {path:`account/account-type/find-all`,component: FindAllComponent,pathMatch: 'full'},
 
 
   {path:`account/update/:accountId`,component: FindAllComponent,pathMatch: 'full'},
   {path:`account/softDelete/:accountId`,component: FindAllComponent,pathMatch: 'full'},
   {path:`account/hardDelete/:accountId`,component: FindAllComponent,pathMatch: 'full'},
   {path:`account/changeAccountType/:accountId`,component: FindAllComponent,pathMatch: 'full'},
   {path:`account/getAccountType/:id`,component: FindAllComponent,pathMatch: 'full'},
   {path:`account/getAccount/:id`,component: FindAllComponent,pathMatch: 'full'},
   {path:`account/modificarState/:id/:state`,component: FindAllComponent,pathMatch: 'full'},
   {path:`account/verifyAmount/:id/:amount`,component: FindAllComponent,pathMatch: 'full'},
   {path:`account/remove-all-balance/:accountId`,component: FindAllComponent,pathMatch: 'full'},
   {path:`account/delete-balance/:id/:amoun`,
     component: FindAllComponent,pathMatch: 'full'},
   {path:`account/addBalance/:id`,component: FindAllComponent,pathMatch: 'full'},
   {path:`account/state/:id`,component: FindAllComponent,pathMatch: 'full'},
   {path:`account/Balance/:id`,component: FindAllComponent,pathMatch: 'full'},
   //Rutas de Transfer
   {path:`transfer`,component: FindAllComponent,pathMatch: 'full'},
   //Rutas de Deposit
   {path:`deposit`,component: FindAllComponent,pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
