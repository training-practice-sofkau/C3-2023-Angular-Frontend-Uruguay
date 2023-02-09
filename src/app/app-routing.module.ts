import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinginComponent } from './login/singin/singin.component';
import { SingupComponent } from './login/singup/singup.component';

const routes: Routes = [
  { path: 'singup', component: SingupComponent },
  {path: "singin", component: SinginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
