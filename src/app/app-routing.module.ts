import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/login/sign-in/sign-in.component';
import { SignUpComponent } from './components/login/sign-up/sign-up.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PermissionsGuard } from './guards/permissions.guard';

const routes: Routes = [
  { path: ``, title:"Virtual Banking - Home", redirectTo: '/', pathMatch: "full" },
  { path: 'login', title:"Virtual Banking - Sign In", component: SignInComponent},
  { path: 'signup', title:"Virtual Banking - Register", component: SignUpComponent },
  { path: 'not-found', title:"Virtual Banking - Not Found...", component: NotFoundComponent },
  { path: 'desktop', title:"Virtual Banking - Desktop", loadChildren: () =>
                    import('./components/desktop/desktop.module').then(x =>
                    x.DesktopModule), canActivate: [PermissionsGuard] },
  { path: "**", redirectTo: "not-found" },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
