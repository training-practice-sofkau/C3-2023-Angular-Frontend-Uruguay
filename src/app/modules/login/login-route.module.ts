import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GuardGuard } from "../shared/guards/guard.guard";
import { HomeComponent } from "./home/home.component";
import { SinginComponent } from './singin/singin.component';
import { SingupComponent } from './singup/singup.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'signin', component: SinginComponent, canActivate: [GuardGuard]},
      {path: 'signup', component: SingupComponent, canActivate: [GuardGuard]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRouteModule {}