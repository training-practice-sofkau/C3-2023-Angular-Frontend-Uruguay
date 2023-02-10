import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesktopComponent } from './desktop.component';
import { OperationComponent } from './operation/operation.component';
import { AdministrationComponent } from './administration/administration.component';


const routes: Routes = [
  {
    path: 'desktop', title:"Virtual Banking - Desktop", component: DesktopComponent, pathMatch: `full`,
    children: [
      { path: 'desktop/operation', title:"Virtual Banking - Operations", component: OperationComponent },
      { path: 'desktop/administration', title:"Virtual Banking - Administration", component: AdministrationComponent },
      //{ path: 'desktop/management', component: ManagementModule },

    ]},
  ]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesktopRoutingModule { }
