import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { EjercicioComponent } from './prog-functional/ejercicio/ejercicio.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { TransferComponent } from './transaction/transfer/transfer.component';
import { SearchComponent } from './components/search/search.component';
import { DepositComponent } from './transaction/deposit/deposit.component';
import { GuardGuard } from './shared/guards/guard.guard';

const routes: Routes = [

{
    path: '',
    redirectTo: 'app-home',
    pathMatch: 'full',
},

{ path: 'home', component: HomeComponent },
{ path: 'ejercicio', component: EjercicioComponent, canActivate: [GuardGuard] },
{ path: 'transfer', component: TransferComponent, canActivate: [GuardGuard] },
{ path: 'search', component: SearchComponent, canActivate: [GuardGuard] },
{ path: 'deposit', component: DepositComponent, canActivate: [GuardGuard] },

{
  path: '**',
  component: PageNotFoundComponent,
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
