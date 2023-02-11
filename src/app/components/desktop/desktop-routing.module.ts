import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesktopComponent } from './desktop.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { DepositComponent } from './deposit/deposit.component';
import { TransferComponent } from './transfer/transfer.component';
import { MovementsComponent } from './movements/movements.component';

const routes: Routes = [
  {
    path: '',  component: DesktopComponent, title:"Desktop",
    children: [
     { path: '', title:"Desktop", component: MainComponent},
     { path: 'desktop/profile', title:"Customer details", component: ProfileComponent},
     { path: 'desktop/deposit', title:"New Deposit", component: DepositComponent },
     { path: 'desktop/transfer', title:"New Tranfer", component: TransferComponent },
     { path: 'desktop/movements', title:"Account Movements", component: MovementsComponent },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesktopRoutingModule { }
