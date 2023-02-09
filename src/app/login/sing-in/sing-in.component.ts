import { Component } from '@angular/core';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SinginComponent {
  show: boolean = true;

  switchPassword(){
    this.show = !this.show;
  }
}
