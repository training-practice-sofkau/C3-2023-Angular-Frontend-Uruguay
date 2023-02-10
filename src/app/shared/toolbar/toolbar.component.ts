import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService} from '../../userLogin-Register';

@Component({
  selector: 'app-toolbar',

  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
 constructor(private router: Router, private AuthService: AuthService,){}



  singOut(){
    localStorage.clear();
    this.AuthService.logOut()
    this.router.navigate(['login']);

  }

}


