import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesktopComponent } from './desktop.component';
import { OperationComponent } from './operation/operation.component';
import { AdministrationComponent } from './administration/administration.component';


const routes: Routes = [

  { path: ``, redirectTo: `desktop`, pathMatch: `full` },
  { path: `desktop`, component: DesktopComponent , pathMatch: `full` },
  { path: `operation`, component: OperationComponent , pathMatch: `full` },
  { path: `administration`, component: AdministrationComponent , pathMatch: `full` },
  //{ path: "management", component: CrearUsuarioComponent }, */

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesktopRoutingModule { }
