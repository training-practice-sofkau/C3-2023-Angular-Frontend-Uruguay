import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GuardGuard } from "src/app/modules/shared/guards/guard.guard";
import { DepositComponent } from "./deposit/deposit.component";
import { TransferComponent } from "./transfer/transfer.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'deposit', component: DepositComponent, canActivate: [GuardGuard]},
      {path: 'transfer', component: TransferComponent, canActivate: [GuardGuard]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRouteModule {}
