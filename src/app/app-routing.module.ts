import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { EjercicioComponent } from './prog-functional/ejercicio/ejercicio.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { TransferComponent } from './transaction/transfer/transfer.component';
import { SearchComponent } from './components/search/search.component';
import { DepositComponent } from './transaction/deposit/deposit.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'app-home',
    pathMatch: 'full',
},

{ path: 'home', component: HomeComponent },
{ path: 'ejercicio', component: EjercicioComponent },
{ path: 'transfer', component: TransferComponent },
{ path: 'search', component: SearchComponent },
{ path: 'deposit', component: DepositComponent },

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
