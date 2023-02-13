import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardsGuard } from 'src/app/guards.guard';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'login', component: LoginComponent, canActivate: [GuardsGuard] },
      { path: '**', redirectTo: 'login' }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
