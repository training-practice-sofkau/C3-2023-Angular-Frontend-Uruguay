import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PermissionsGuard } from './guards/permissions.guard';
import { AppComponent } from './app.component';
import { SignUpComponent } from './components/login/sign-up/sign-up.component';
import { SignInComponent } from './components/login/sign-in/sign-in.component';

const routes: Routes = [

  { path: ``, redirectTo:'signin',  pathMatch:'full'},
  { path: 'signin', title:"Virtual Banking - Login", component: SignInComponent},
  { path: 'signup', title:"Virtual Banking - Register", component: SignUpComponent},
  { path: 'not-found', title:"Virtual Banking - Not Found...", component: NotFoundComponent},

  //{ path: 'login', loadChildren: () => import('./components/login/login.module')
  //        .then(x => x.LoginModule) },

  { path: 'desktop', loadChildren: () => import('./components/desktop/desktop.module')
          .then(x => x.DesktopModule), canActivate: [PermissionsGuard] },

  //{ path: '**', redirectTo:"not-found"}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
