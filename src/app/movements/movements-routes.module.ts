import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NewDepositComponent } from "./new-deposit/new-deposit.component";
import { NewTransaccionComponent } from "./new-transaccion/new-transaccion.component";
import { ViewTransferComponent } from "./view-transfer/view-transfer.component";

const routes: Routes = [
    {
      path: '',
      children: [
        {path: 'newDeposit', component: NewDepositComponent},//, canActivate: [GuardGuard]},
        {path: 'newTrans', component: NewTransaccionComponent},// canActivate: [GuardGuard]},
        {path: 'viewTrans', component: ViewTransferComponent},//, canActivate: [GuardGuard]},
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class MovementsRouteModule {}