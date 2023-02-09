import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/login/sign-in/sign-in.component';
import { EjercicioComponent } from './components/prog-functional/ejercicio/ejercicio.component';


const routes: Routes = [
  { path: ``,  redirectTo: '', pathMatch: `full` },
  { path: 'login', component: SignInComponent, pathMatch: `full`  },
  { path: 'prog-functional', component: EjercicioComponent, pathMatch: `full` },
  { path: "**", redirectTo: "" , pathMatch: `full`},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
