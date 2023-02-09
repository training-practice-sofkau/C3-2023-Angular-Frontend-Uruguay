import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountComponent } from './consults/account/account.component';
import { EjercicioComponent } from './prog-functional/ejercicio/ejercicio.component';
import { HomeComponent } from './shared/home/home.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';

const routes: Routes = [

  { path: '', redirectTo: 'app-home', pathMatch: 'full' },

  { path: 'app-home', component: HomeComponent },
  //nuevas rutas
  { path: 'app-account', component: AccountComponent },
  { path: 'app-ejercicio', component: EjercicioComponent },

  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
