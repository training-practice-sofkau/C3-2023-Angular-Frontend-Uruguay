import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './404/page-not-found.component';

const routes: Routes = [
  { path: '', title: 'Home', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', title: '404', component: PageNotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
