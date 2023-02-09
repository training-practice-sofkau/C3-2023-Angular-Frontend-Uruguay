import { Component } from '@angular/core';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingupComponent {
  show: boolean = true;

  switchPassword(){
    this.show = !this.show;
  }
}
