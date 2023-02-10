import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesktopComponent } from './desktop.component';
import { ProfileComponent } from './profile/profile.component';



const routes: Routes = [
  {
    path: '',  component: DesktopComponent, title:"Desktop", pathMatch: 'full',
    children: [
     { path: 'desktop', title:"Desktop",  component: DesktopComponent, pathMatch: 'full'},
     { path: 'profile', title:"Customer details", component: ProfileComponent, pathMatch: 'full' },
    //  { path: 'administration', title:"Administration", component: AdministrationComponent, pathMatch: 'full' },
    //  { path: 'management', title:"Management", component: ManagementComponent, pathMatch: 'full' },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesktopRoutingModule { }
