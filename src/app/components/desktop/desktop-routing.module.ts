import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesktopComponent } from './desktop.component';
import { OperationComponent } from './operation/operation.component';
import { AdministrationComponent } from './administration/administration.component';
import { ManagementComponent } from './management/management.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'desktop', title:"Desktop",  component: DesktopComponent },
      { path: 'operation', title:"Operation", component: OperationComponent },
      { path: 'administration', title:"Administration", component: AdministrationComponent },
      { path: 'management', title:"Management", component: ManagementComponent },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesktopRoutingModule { }
