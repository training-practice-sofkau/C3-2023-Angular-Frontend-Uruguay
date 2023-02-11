import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Guards
import { PermissionsGuard } from './guards/permissions.guard';

//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [

  { path: ``, redirectTo: '', pathMatch: 'full' },

  { path: '', title: "Virtual Banking - Welcome", component: AppComponent },

  {
    path: 'desktop', loadChildren: () => import('./components/desktop/desktop.module')
      .then(x => x.DesktopModule),//canActivate: [PermissionsGuard],
  },

  //{ path: '**', redirectTo:"/", pathMatch:'prefix'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
