import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/login/sign-in/sign-in.component';
import { EjercicioComponent } from './components/prog-functional/ejercicio/ejercicio.component';
import { SignUpComponent } from './components/login/sign-up/sign-up.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [

  { path: ``, redirectTo: 'login', pathMatch: "full" },
  { path: 'login', title: "Sign In", component: SignInComponent },
  { path: 'signup', title: "Register", component: SignUpComponent },
  { path: 'functional', title: "Functional Programming", component: EjercicioComponent },
  { path: 'not-found', title: "Not Found", component: NotFoundComponent },
  { path: 'desktop', loadChildren: () => import('./components/desktop/desktop.module').then(x => x.DesktopModule) },
  { path: "**", redirectTo: "not-found" },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
