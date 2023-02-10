import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SingOutComponent } from '../../login2/sing-out/sing-out.component';
import { AuthService } from '../../login2/services/auth.service';

@Component({
  selector: 'app-toolbar',

  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
 constructor(public SingOutComponent: SingOutComponent, private router: Router, private AuthService: AuthService){}



  singOut(){
    localStorage.clear();
    this.AuthService.logOut()
    this.router.navigate(['login']);

  }

}


