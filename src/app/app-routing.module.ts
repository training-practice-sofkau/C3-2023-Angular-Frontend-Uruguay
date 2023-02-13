import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Guards


//Components
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DesktopComponent } from './components/desktop/desktop.component';
import { PermissionsGuard } from './guards/permissions.guard';


const routes: Routes = [

  { path: '', component: LoginComponent, pathMatch: 'full' },

  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'desktop', component: DesktopComponent, canActivate: [PermissionsGuard], },
  //{ path: `desktop`, loadChildren: () => import('./components/desktop/desktop.module').then(x => x.DesktopModule) },


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
