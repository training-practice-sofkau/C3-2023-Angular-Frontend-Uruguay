import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { Administrator } from './administrator';
import { CustomerComponent } from './customer/customer.component';
import { DocumentTypeComponent } from './document-type/document-type.component';
import { InfoDepositComponent } from './info-deposit/info-deposit.component';
import { InfoTransferComponent } from './info-transfer/info-transfer.component';
import { TypeAccountComponent } from './type-account/type-account.component';


const routes: Routes = [
    {
      path: '',
      children: [
        {path: 'account', component: AccountComponent},//, canActivate: [GuardGuard]},
        {path: 'customer', component: CustomerComponent},// canActivate: [GuardGuard]},
        {path: 'document-type', component: DocumentTypeComponent},//, canActivate: [GuardGuard]},
        {path: 'info-deposit', component: InfoDepositComponent},//, canActivate: [GuardGuard]},
        {path: 'info-transfer', component: InfoTransferComponent},// canActivate: [GuardGuard]},
        {path: 'type-account', component: TypeAccountComponent},//, canActivate: [GuardGuard]},
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class AdministratorRouteModule {

    
  } 