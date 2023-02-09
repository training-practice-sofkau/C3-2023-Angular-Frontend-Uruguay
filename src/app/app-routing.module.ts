import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { EjercicioComponent } from './prog-functional/ejercicio/ejercicio.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'app-home',
    pathMatch: 'full',
},

{
  path: 'app-home',
  component: HomeComponent,
},
{
  path: 'app-ejercicio',
  component: EjercicioComponent
},

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
