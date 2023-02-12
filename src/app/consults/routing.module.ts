import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardsGuard } from '../guards.guard';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'account', component: AccountComponent, canActivate: [GuardsGuard] },
      { path: '**', redirectTo: 'account' }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
