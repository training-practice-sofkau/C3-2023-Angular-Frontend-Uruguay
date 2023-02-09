import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SingOutComponent } from '../../login2/sing-out/sing-out.component';

@Component({
  selector: 'app-toolbar',

  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
 constructor(public SingOutComponent: SingOutComponent, private router: Router){}


  singOut(){
    localStorage.clear();
    this.router.navigate(['login']);

  }

}
