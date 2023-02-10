import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PermissionsGuard } from './guards/permissions.guard';

const routes: Routes = [
  { path: ``,  },

  { path: 'login', loadChildren: () => import('./components/login/login.module')
          .then(x => x.LoginModule), canActivate: [PermissionsGuard] },

  { path: 'desktop', loadChildren: () => import('./components/desktop/desktop.module')
          .then(x => x.DesktopModule), canActivate: [PermissionsGuard] },

  { path: 'not-found', title:"Virtual Banking - Not Found...", component: NotFoundComponent},


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
