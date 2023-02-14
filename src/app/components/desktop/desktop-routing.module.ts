import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesktopComponent } from './desktop.component';
import { ProfileComponent } from './profile/profile.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [


  { path: '', component: DesktopComponent, pathMatch: 'full' },


  /* children: [
  //{ path: 'desktop',  pathMatch: 'full', },
  { path: 'desktop', component: DetailsComponent },
  { path: 'desktop/profile', component: ProfileComponent },
  ]}, */






]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesktopRoutingModule { }
