import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MyAccountComponent } from "./my-account/my-account.component";
import { NewAccountComponent } from "./new-account/new-account.component";
import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
    {
      path: '',
      children: [
        {path: 'myAccount', component: MyAccountComponent},//, canActivate: [GuardGuard]},
        {path: 'newAccount', component: NewAccountComponent},// canActivate: [GuardGuard]},
        {path: 'profile', component: ProfileComponent},//, canActivate: [GuardGuard]},
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AccountRouteModule {}