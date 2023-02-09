import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/login/sign-in/sign-in.component';
import { SignUpComponent } from './components/login/sign-up/sign-up.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DesktopComponent } from './components/desktop/desktop.component';
import { PermissionsGuard } from './guards/permissions.guard';


const routes: Routes = [
  { path: ``, redirectTo: 'login', pathMatch: "full" },
  { path: 'login', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'desktop', component: DesktopComponent},
  { path: "**", redirectTo: "not-found" },
]
//loadChildren: () => import('./components/desktop/desktop.module').then(x => x.DesktopModule)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
