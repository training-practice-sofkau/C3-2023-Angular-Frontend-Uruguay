import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {

  userDropdown: boolean = false;

  clickEvent(){
      this.userDropdown = !this.userDropdown;
  }

}
