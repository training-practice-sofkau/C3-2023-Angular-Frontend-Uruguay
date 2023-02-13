import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GuardGuard } from "src/app/modules/shared/guards/guard.guard";
import { DeleteComponent } from "./delete/delete.component";
import { SearchComponent } from "./search/search.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'delete', component: DeleteComponent, canActivate: [GuardGuard]},
      {path: 'search', component: SearchComponent, canActivate: [GuardGuard]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRouteModule {}
