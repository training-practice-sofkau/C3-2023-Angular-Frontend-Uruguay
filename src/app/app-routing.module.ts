import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/login/sign-in/sign-in.component';
import { EjercicioComponent } from './components/prog-functional/ejercicio/ejercicio.component';
import { SignUpComponent } from './components/login/sign-up/sign-up.component';


const routes: Routes = [
  { path: ``, title: "Main",  redirectTo: '', pathMatch: `full` },
  { path: 'login', title: "Sign In", component: SignInComponent, pathMatch: `full`  },
  { path: 'signup', title: "Register", component: SignUpComponent, pathMatch: `full`  },
  { path: 'prog-functional', title: "Functional Programming", component: EjercicioComponent, pathMatch: `full` },
  { path: "**", redirectTo: "" , pathMatch: `full`},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
