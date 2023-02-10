import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PermissionsGuard } from './guards/permissions.guard';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [

  { path: ``, redirectTo: '', pathMatch: 'full' },

  { path: '', title: "Virtual Banking - Welcome", component: AppComponent },

 /*  {
    path: 'login', loadChildren: () => import('./components/login/login.module')
      .then(x => x.LoginModule)
  }, */

  {
    path: 'desktop', loadChildren: () => import('./components/desktop/desktop.module')
      .then(x => x.DesktopModule), canActivate: [PermissionsGuard]
  },


  { path: 'notfound', title: "Virtual Banking - Not Found...", component: NotFoundComponent },
 // { path: '**', redirectTo:"notfound", pathMatch:'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
