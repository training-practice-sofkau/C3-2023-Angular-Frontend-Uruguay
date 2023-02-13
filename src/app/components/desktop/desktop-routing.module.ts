import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DesktopComponent } from './desktop.component';
import { ProfileComponent } from './profile/profile.component';
import { MainComponent } from './main/main.component';


const desktopRoutes: Routes = [

  {
    path: '', component:DesktopComponent, redirectTo: "desktop", pathMatch: 'full',
    children: [
      { path: 'desktop', component: MainComponent, pathMatch: 'full' },
      { path: 'desktop/profile', component: ProfileComponent, pathMatch: 'full' },
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(desktopRoutes)],
  exports: [RouterModule]
})
export class DesktopRoutingModule { }
