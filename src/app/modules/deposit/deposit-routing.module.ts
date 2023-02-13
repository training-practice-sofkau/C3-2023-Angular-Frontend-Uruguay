import { NgModule } from '@angular/core';
import { DepositHomeComponent } from './deposit-home/deposit-home.component';
import { RouterModule, Routes } from '@angular/router';
import { GuardsGuard } from 'src/app/guards.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'deposit-home', component: DepositHomeComponent, canActivate: [GuardsGuard] },
      { path: '**', redirectTo: 'deposit-home' }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepositRoutingModule { }
