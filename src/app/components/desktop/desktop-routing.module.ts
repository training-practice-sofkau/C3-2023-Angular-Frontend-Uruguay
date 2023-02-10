import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesktopComponent } from './desktop.component';
import { OperationComponent } from './operation/operation.component';
import { AdministrationComponent } from './administration/administration.component';
import { ManagementModule } from './management/management.module';

const routes: Routes = [
  {
    path: '', component: DesktopComponent, pathMatch: "full",
    children: [
      { path: 'desktop/operation', component: OperationComponent },
      { path: 'desktop/administration', component: AdministrationComponent },
      //{ path: 'desktop/management', component: ManagementModule },

    ]},
  ]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesktopRoutingModule { }
