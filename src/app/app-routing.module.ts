import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjercicioComponent } from './prog-functional/ejercicio/ejercicio.component';
import { SearchComponent } from './dashboard/components/search/search.component';
import { GuardGuard } from './modules/shared/guards/guard.guard';
import { HomeComponent } from './modules/shared/home/home.component';
import { PageNotFoundComponent } from './modules/shared/page-not-found/page-not-found.component';
import { DepositComponent } from './dashboard/transaction/deposit/deposit.component';
import { TransferComponent } from './dashboard/transaction/transfer/transfer.component';


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
