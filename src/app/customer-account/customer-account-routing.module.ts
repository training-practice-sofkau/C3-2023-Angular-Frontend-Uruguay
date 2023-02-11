import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HomeComponent } from '../shared/home/home.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { MyAccountsComponent } from './my-accounts/my-accounts.component';

const routes : Routes = [

  {path: '',
  children: [
    {path: 'app-user-profile', component: UserProfileComponent},
    {path: 'app-update-user', component: UpdateUserComponent },
    {path: 'app-new-account', component: NewAccountComponent },
    {path: 'app-my-accounts', component: MyAccountsComponent},
    {path: '**', component: HomeComponent}

  ]
}

]

@NgModule({
  declarations: [],
  imports: [CommonModule,
            RouterModule.forChild(routes)]
})
export class CustomerAccountRoutingModule { }
