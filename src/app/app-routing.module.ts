import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { SingupComponent } from './login/singup/singup.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { FindAllComponent } from './components/find-all/find-all.component';

const routes: Routes = [
   //Rutas de segurity 
   {path:`signUp`,component: SingupComponent},
   {path:``,component: SingupComponent},
   {path:`signOut`,component: SingupComponent},
 
 
   //Rutas de Customer
   {path:`customer`,component: FindAllComponent},
   {path:`customer/create`,component: FindAllComponent},
   {path:`customer/documentType/create`,component:FindAllComponent },
   //Rutas de Account
 
 
   {path:`account`,component: FindAllComponent},
   {path:`account/create`,component: CreateAccountComponent},
   {path:`account/find-all`,component: FindAllComponent},
   {path:`account/account-type/create`,component: FindAllComponent},
   {path:`account/customer/:customerId`,component: FindAllComponent},
   {path:`account/customer/:accountId`, component: FindAllComponent},
   {path:`account/account-type/find-all`,component: FindAllComponent},
 
 
   {path:`account/update/:accountId`,component: FindAllComponent},
   {path:`account/softDelete/:accountId`,component: FindAllComponent},
   {path:`account/hardDelete/:accountId`,component: FindAllComponent},
   {path:`account/changeAccountType/:accountId`,component: FindAllComponent},
   {path:`account/getAccountType/:id`,component: FindAllComponent},
   {path:`account/getAccount/:id`,component: FindAllComponent},
   {path:`account/modificarState/:id/:state`,component: FindAllComponent},
   {path:`account/verifyAmount/:id/:amount`,component: FindAllComponent},
   {path:`account/remove-all-balance/:accountId`,
     component: FindAllComponent},
   {path:`account/delete-balance/:id/:amoun`,
     component: FindAllComponent},
   {path:`account/addBalance/:id`,component: FindAllComponent},
   {path:`account/state/:id`,component: FindAllComponent},
   {path:`account/Balance/:id`,component: FindAllComponent},
   //Rutas de Transfer
   {path:`transfer`,component: FindAllComponent},
   //Rutas de Deposit
   {path:`deposit`,component: FindAllComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
