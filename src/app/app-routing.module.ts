import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/login/sign-in/sign-in.component';
import { EjercicioComponent } from './components/prog-functional/ejercicio/ejercicio.component';
import { SignUpComponent } from './components/login/sign-up/sign-up.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  { path: ``, title: "Main",  redirectTo: '', pathMatch: `full` },
  { path: 'login', title: "Sign In", component: SignInComponent, pathMatch: `full`  },
  { path: 'signup', title: "Register", component: SignUpComponent, pathMatch: `full`  },
  { path: 'desktop', title:"Desktop", loadChildren: () => import('./components/desktop/desktop.module').then(x => x.DesktopModule) },
  { path: 'functional', title: "Functional Programming", component: EjercicioComponent },
  { path: 'not-found', title: "Not Found", component: NotFoundComponent  },
  { path: "**", redirectTo: "not-found" , pathMatch: 'full'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
