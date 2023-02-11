import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesktopComponent } from './desktop.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { DepositComponent } from './deposit/deposit.component';
import { TransferComponent } from './transfer/transfer.component';
import { MovementsComponent } from './movements/movements.component';

export const desktopRoutes: Routes = [
  {
    path: '', redirectTo:'desktop', pathMatch:"full" ,
    children: [
      { path: '/desktop', title: "Desktop", component: DesktopComponent, pathMatch:"full"},
      { path: '/desktop/profile', title: "Customer details", component: ProfileComponent, pathMatch:'prefix' },
      { path: 'desktop/deposit', title: "New Deposit", component: DepositComponent, pathMatch:"full" },
      { path: 'desktop/transfer', title: "New Tranfer", component: TransferComponent, pathMatch:"full" },
      { path: 'desktop/movements', title: "Account Movements", component: MovementsComponent, pathMatch:"full" },
    ]
  }
]

 @NgModule({
  imports: [RouterModule.forChild(desktopRoutes)],
  exports: [RouterModule]
})
export class DesktopRoutingModule { }
